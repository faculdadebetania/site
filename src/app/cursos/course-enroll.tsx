import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';

export function CourseEnroll() {
  return (
    <section
      className="container grid grid-cols-1 lg:grid-cols-2"
      id="inscricao"
    >
      <div>
        <h1 className="text-6xl lg:text-7xl font-extrabold">
          MAIS INFORMAÇÕES
        </h1>
        <h3 className="text-2xl lg:text-3xl font-bold">
          Ficou com alguma dúvida? Queremos te ajudar!
        </h3>
      </div>
      <form className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Nome Completo*"
          required
          className="max-w-full bg-primary text-neutral-200"
        />
        <Input
          type="text"
          placeholder="E-mail*"
          required
          className="max-w-full bg-primary text-neutral-200"
        />
        <Input
          type="text"
          placeholder="Celular*"
          required
          className="max-w-full bg-primary text-neutral-200"
        />
        <Input
          type="text"
          placeholder="Telefone"
          className="max-w-full bg-primary text-neutral-200"
        />
        <Button className="w-max bg-neutral-200 text-primary font-bold">
          Enviar mensagem
        </Button>
      </form>
    </section>
  );
}
