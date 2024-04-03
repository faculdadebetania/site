'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/form';
import { Button } from '@components/ui/button';
import Icon from '@components/ui/icon';
import { Input } from '@components/ui/input';
import { Textarea } from '@components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import normalizePhone from '@masks/phone.mask';
import { VerifyToken } from '@utils/recaptcha';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import sendEmail from './mailer';

const schema = z.object({
  name: z.string({ required_error: 'Campo obrigatório' }).trim(),
  email: z.string({ required_error: 'Campo obrigatório' }).trim().email({
    message: 'E-mail inválido',
  }),
  phone: z
    .string()
    .trim()
    .min(1, { message: 'Campo obrigatório' })
    .min(15, { message: 'ex.: (41) 99670-5657' })
    .max(15, { message: 'ex.: (41) 99670-5657' }),
  message: z.string({ required_error: 'Campo obrigatório' }),
});

export type OmbdusmanFormData = z.infer<typeof schema>;

export default function OmbudsmanForm() {
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>();
  const [success, setSuccess] = useState(false);

  const form = useForm<OmbdusmanFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      message: '',
      name: '',
      phone: '',
    },
  });

  const { control, handleSubmit, watch, setValue, formState } = form;

  const onSubmit: SubmitHandler<OmbdusmanFormData> = async function (data) {
    setLoading(true);

    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

    const recaptchaToken = await grecaptcha.execute(recaptchaSiteKey, {
      action: 'submit',
    });

    const isValidToken = await VerifyToken(recaptchaToken);

    if (!isValidToken) {
      setMessage('Error inesperado. Tente novamente mais tarde');
      setSuccess(false);
      setLoading(false);
      return;
    }

    const response = await sendEmail(data);

    setMessage(() => response.message);
    setSuccess(() => response.success);
    setLoading(false);
  };

  const phoneValue = watch('phone');

  useEffect(() => {
    setValue('phone', normalizePhone(phoneValue));
  }, [phoneValue, setValue]);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={control}
          disabled={formState.isSubmitting || success}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome*</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          disabled={formState.isSubmitting || success}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail*</FormLabel>
              <FormControl>
                <Input type="email" placeholder="E-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          disabled={formState.isSubmitting || success}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone*</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Telefone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          disabled={formState.isSubmitting || success}
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
        <section className="flex items-center gap-4">
          <Button
            type="submit"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/25 hover:text-white p-6 font-bold disabled:opacity-50 flex items-center gap-2"
            disabled={formState.isSubmitting || success}
          >
            {isLoading ? 'Aguarde' : 'Enviar'}
            {isLoading && (
              <Icon name="LoaderCircle" size={16} className="animate-spin" />
            )}
          </Button>
          <p data-error={!success} className="data-[error=true]:text-red-600">
            {message}
          </p>
        </section>
      </form>
    </Form>
  );
}
