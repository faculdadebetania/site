'use server';

import { createTransport } from 'nodemailer';
import { OmbdusmanFormData } from './form';

interface OmbudsmanActionResponse {
  success: boolean;
  message: string;
}

const transporter = createTransport({
  host: 'smtp.faculdadebetania.com.br',
  port: 465,
  secure: true,
  auth: {
    user: process.env.OMBUDSMAN_EMAIL,
    pass: process.env.OMBUDSMAN_EMAIL_PASSWORD,
  },
});

export default async function sendEmail(
  data: OmbdusmanFormData
): Promise<OmbudsmanActionResponse> {
  const body = `
  <div>
    <p><b>Nome</b>:&nbsp;${data.name}</p>
    <p><b>E-mail</b>:&nbsp;${data.email}<p>
    <p><b>Telefone</b>:&nbsp;${data.phone}<p>
    <p><b>Mensagem</b>:&nbsp;${data.message}<p>
  </div>
  `;

  const message = await transporter.sendMail({
    from: `"Faculdade Teológica Betânia" <${process.env.OMBUDSMAN_EMAIL}>`,
    subject: `[OUVIDORIA] ${data.name} - ${data.email}`,
    to: process.env.OMBUDSMAN_EMAIL,
    cc: data.email,
    bcc: 'seminariobetania1@gmail.com, lidianebetania@gmail.com, rogeriofatebe@gmail.com',
    html: body,
  });

  if (message.rejected.length > 0)
    return {
      success: false,
      message: 'Erro inesperado. Tente novamente mais tarde.',
    };

  return { success: true, message: 'Mensagem enviada com sucesso.' };
}
