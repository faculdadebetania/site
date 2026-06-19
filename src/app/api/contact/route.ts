import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const raw = await request.text();

    console.log('📦 RAW BODY:', raw);

    const data = raw ? JSON.parse(raw) : {};

    console.log('📦 PARSED DATA:', data);

    if (!data || Object.keys(data).length === 0) {
      return NextResponse.json({
        success: false,
        message: 'Body vazio recebido',
      });
    }

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({
        success: false,
        message: 'Campos obrigatórios faltando',
      });
    }

    const transporter = nodemailer.createTransport({
      host: 'emailssl-vip.kinghost.net',
      port: 587,
      secure: false,
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"Contato Site" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      cc: data.email,
      subject: `[CONTATO] ${data.name}`,
      html: `
        <p><b>Nome:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Telefone:</b> ${data.phone}</p>
        <p><b>Mensagem:</b> ${data.message}</p>
      `,
    });

    console.log('📨 EMAIL ENVIADO:', info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Mensagem enviada com sucesso',
    });
  } catch (err) {
    console.error('❌ API ERROR:', err);

    return NextResponse.json(
      {
        success: false,
        message: 'Erro interno ao enviar email',
      },
      { status: 500 }
    );
  }
}