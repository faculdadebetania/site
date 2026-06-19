import { NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

export async function POST(request: Request) {
    const data = await request.json();

    const transporter = createTransport({
        host: 'emailssl-vip.kinghost.net',
        port: 465,
        secure: true,
        auth: {
            user: process.env.CONTACT_EMAIL,
            pass: process.env.CONTACT_EMAIL_PASSWORD,
        },
    });

    await transporter.sendMail({
        from: `"Faculdade Teológica Betânia" <${process.env.CONTACT_EMAIL}>`,
        subject: `[CONTATO] ${data.name} - ${data.email}`,
        to: process.env.CONTACT_EMAIL,
        cc: data.email,
        bcc: 'seminariobetania1@gmail.com, lidianebetania@gmail.com, rogeriofatebe@gmail.com',
        html: `
            <div>
                <p><b>Nome:</b> ${data.name}</p>
                <p><b>E-mail:</b> ${data.email}</p>
                <p><b>Telefone:</b> ${data.phone}</p>
                <p><b>Mensagem:</b> ${data.message}</p>
            </div>
        `,
    });

    return NextResponse.json({
        success: true,
        message: 'Mensagem enviada com sucesso.'
    });
}