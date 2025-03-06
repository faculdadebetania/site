import { Button } from '@components/ui/button';
import Link from 'next/link';

export default function Contact() {
  const href = `/contato`;
  return (
    <section className="container !py-4 flex justify-center items-center gap-4 text-lg font-medium bg-secondary text-black">
      <p className="font-bold text-lg break-normal">Precisa falar com a gente?</p>
      <Button className="bg-neutral-200 text-lg p-5 font-bold text-primary hover:text-white">
        <Link href={href}>Contato</Link>
      </Button>
    </section>
  );
}
