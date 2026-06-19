import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 🔒 validação básica defensiva (além do Zod no frontend)
    if (!data?.name || !data?.email || !data?.message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Dados inválidos.',
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'emailssl-vip.kinghost.net',
      port: 587,
      secure: false, // STARTTLS (mais compatível que 465 na KingHost)
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // evita erro de certificado da KingHost
      },
    });

    // 🧪 opcional: testa conexão antes de enviar
    await transporter.verify();

    const mailOptions = {
      from: `"Faculdade Teológica Betânia" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      cc: data.email,
      bcc: [
        'seminariobetania1@gmail.com',
        'lidianebetania@gmail.com',
        'rogeriofatebe@gmail.com',
      ],
      subject: `[CONTATO] ${data.name} - ${data.email}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Novo contato recebido</h2>
          <p><b>Nome:</b> ${data.name}</p>
          <p><b>E-mail:</b> ${data.email}</p>
          <p><b>Telefone:</b> ${data.phone || '-'}</p>
          <p><b>Mensagem:</b></p>
          <p>${data.message}</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('📧 Email enviado:', info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Mensagem enviada com sucesso.',
    });
  } catch (error: any) {
    console.error('❌ Erro ao enviar email:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Erro ao enviar mensagem. Tente novamente mais tarde.',
      },
      { status: 500 }
    );
  }
}