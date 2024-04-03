'use server';
interface SiteVerifyResponse {
  success: boolean;

  /**
   * the score for this request (0.0 - 1.0)
   */
  score: number;

  /**
   * the action name for this request (important to verify)
   */
  action: string;

  /**
   * timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
   */
  challenge_ts: Date;

  /**
   * the hostname of the site where the reCAPTCHA was solved
   */
  hostname: string;

  /**
   * missing-input-secret: The secret parameter is missing.
   *
   * invalid-input-secret: The secret parameter is invalid or malformed.
   *
   * missing-input-response: The response parameter is missing.
   *
   * invalid-input-response: The response parameter is invalid or malformed.
   *
   * bad-request: The request is invalid or malformed.
   *
   * timeout-or-duplicate: The response is no longer valid: either is too old or has been used previously.
   */
  'error-codes'?: Array<string>;
}

interface SiteVerifyBody {
  /**
   * The shared key between your site and reCAPTCHA.
   */
  secret: string;

  /**
   * The user response token provided by the reCAPTCHA client-side integration on your site.
   */
  response: string;

  /**
   * The user's IP address.
   */
  remoteip?: string;
}

export async function VerifyToken(token: string): Promise<boolean> {
  const url: URL = new URL('https://www.google.com/recaptcha/api/siteverify');

  const method: RequestInit['method'] = 'POST';

  const headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
  });

  const requestBody: SiteVerifyBody = {
    response: token,
    secret: process.env.RECAPTCHA_SECRET_KEY,
  };

  const body = new URLSearchParams(Object.entries(requestBody)).toString();

  const response = await fetch(url, {
    method,
    body,
    headers,
  });

  const data = (await response.json()) as SiteVerifyResponse;

  return data.success && data.score >= 0.5;
}
