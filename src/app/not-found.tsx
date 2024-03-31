'use client';
import { Button } from '@components/ui/button';
import Icon from '@components/ui/icon';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 py-16 lg:px-16">
      <h1 className="font-bold uppercase text-5xl lg:text-7xl">
        Página não encontrada
      </h1>
      <Button
        className="bg-neutral-200 text-primary p-8 text-xl"
        onClick={router.back}
      >
        Retornar&nbsp;
        <Icon name="Undo2" />
      </Button>
    </div>
  );
}
