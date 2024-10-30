import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request, { params }: { params: Promise<{ tag: string }> }) {
  try {
    let { REVALIDATE_TOKEN } = process.env;
    const requestHeaders = new Headers(request.headers);
    const token = requestHeaders.get('Revalidate-Token');
    if (!token) return NextResponse.json({ message: 'Missing Revalidate-Token Header' }, { status: 403 });
    if (REVALIDATE_TOKEN !== token) return NextResponse.json({ message: 'Invalid Token' }, { status: 401 });
    const { tag } = await params;
    revalidateTag(tag);
    return NextResponse.json({ message: 'Success' });
  } catch (error) {
    const message = (error as Error).message ?? error;
    console.error(message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
