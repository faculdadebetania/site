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
  name: z.string().min(2, 'Nome obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(14, 'Telefone inválido'),
  message: z.string().min(1, 'Mensagem obrigatória'),
});

export type ContactFormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>();
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

  const { control, handleSubmit, watch, setValue, formState } = form;

  const phoneValue = watch('phone');

  useEffect(() => {
    const normalized = normalizePhone(phoneValue || '');
    if (normalized !== phoneValue) {
      setValue('phone', normalized);
    }
  }, [phoneValue, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    try {
      setLoading(true);

      console.log('🔥 FRONTEND - DATA ORIGINAL:', data);

      const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY!;
      const recaptchaToken = await window.grecaptcha.execute(recaptchaSiteKey, {
        action: 'submit',
      });

      const isValidToken = await VerifyToken(recaptchaToken);

      if (!isValidToken) {
        setMessage('Erro no reCAPTCHA.');
        setSuccess(false);
        return;
      }

      console.log('📤 ENVIANDO PARA API:', data);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log('📥 RESPOSTA API:', result);

      setMessage(result.message);
      setSuccess(result.success);
    } catch (err) {
      console.error('❌ FRONT ERROR:', err);
      setMessage('Erro inesperado.');
      setSuccess(false);
    } finally {
      setLoading(false);
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

        <Button type="submit" disabled={isLoading || success}>
          {isLoading ? 'Enviando...' : 'Enviar'}
          {isLoading && <Icon name="LoaderCircle" className="animate-spin ml-2" />}
        </Button>

        <p className={success ? 'text-green-600' : 'text-red-600'}>
          {message}
        </p>
      </form>
    </Form>
  );
}