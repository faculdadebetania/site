'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form';
import Icon from '@components/ui/icon';
import { Input } from '@components/ui/input';
import { Textarea } from '@components/ui/textarea';

import normalizePhone from '@masks/phone.mask';
import { VerifyToken } from '@utils/recaptcha';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(1),
});

type ContactFormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const { control, handleSubmit, watch, setValue, reset } = form;

  const phoneValue = watch('phone');

  useEffect(() => {
    const formatted = normalizePhone(phoneValue || '');
    if (formatted !== phoneValue) {
      setValue('phone', formatted);
    }
  }, [phoneValue, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    try {
      if (isLoading) return;

      setIsLoading(true);
      setStatusMessage(null);

      console.log('📤 ENVIANDO:', data);

      const recaptchaToken = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_KEY!,
        { action: 'submit' }
      );

      const isValid = await VerifyToken(recaptchaToken);

      if (!isValid) {
        setStatusMessage('Falha no reCAPTCHA.');
        setSuccess(false);
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log('📥 RESPONSE:', result);

      setStatusMessage(result.message);
      setSuccess(result.success);

      if (result.success) {
        reset();
      }
    } catch (err) {
      console.error(err);
      setStatusMessage('Erro inesperado.');
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem*</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 🔥 BOTÃO + MENSAGEM LADO A LADO */}
        <div className="flex items-center gap-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-white text-black hover:bg-gray-100 flex items-center justify-center gap-2 min-w-[140px] border"
          >
            {isLoading ? (
              <>
                <Icon name="LoaderCircle" className="animate-spin" />
                Enviando...
              </>
            ) : (
              'Enviar'
            )}
          </Button>

          {statusMessage && (
            <p
              className={`text-sm ${
                success ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {statusMessage}
            </p>
          )}
        </div>

      </form>
    </Form>
  );
}