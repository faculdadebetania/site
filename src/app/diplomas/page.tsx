import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@components/ui/breadcrumb';
import { Button } from '@components/ui/button';
import Icon from '@components/ui/icon';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table';
import { degrees } from '@mock/degrees';

export default function Page() {
  return (
    <main className="container space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Início</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Diplomas</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <section className="flex justify-between gap-4">
        <h1 className="uppercase text-5xl font-bold">Diplomas emitidos</h1>
        <div className="flex gap-4">
          <Button variant="secondary" className="gap-1" asChild>
            <a
              href="https://diplomas.educacional.usecerbrum.net/"
              target="_blank"
            >
              Validação de diplomas
              <Icon name="ExternalLink" size={14} strokeWidth={2} />
            </a>
          </Button>
          <Button
            variant="outline"
            className="hover:bg-white hover:text-primary"
            asChild
          >
            <a href="/documentos/diplomas-emitidos.pdf" target="_blank">
              Exportar como PDF
            </a>
          </Button>
        </div>
      </section>
      <Table>
        <TableCaption>Lista de diplomas emitidos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>CPF</TableHead>
            <TableHead>Curso</TableHead>
            <TableHead>Expedidora</TableHead>
            <TableHead>Registradora</TableHead>
            <TableHead>Data de ingresso</TableHead>
            <TableHead>Data de conclusão</TableHead>
            <TableHead>Data de expedição</TableHead>
            <TableHead>Data de registro</TableHead>
            <TableHead>Número de expedição</TableHead>
            <TableHead>Número de registro</TableHead>
            <TableHead>Data DOU</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {degrees.map((degree) => (
            <TableRow key={degree.registerId}>
              <TableCell>{degree.name}</TableCell>
              <TableCell>{degree.cpf}</TableCell>
              <TableCell>{degree.course}</TableCell>
              <TableCell>{degree.consignor}</TableCell>
              <TableCell>{degree.register}</TableCell>
              <TableCell>{degree.courseInitialDate}</TableCell>
              <TableCell>{degree.courseEndDate}</TableCell>
              <TableCell>{degree.expeditionDate}</TableCell>
              <TableCell>{degree.registerDate}</TableCell>
              <TableCell>{degree.expeditionId}</TableCell>
              <TableCell>{degree.registerId}</TableCell>
              <TableCell>{degree.douDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
