import { Button } from '@components/button';
import Link from 'next/link';

export default function Contact() {
  const href = `https://wa.me/+554196705657`;
  return (
    <section className="container !py-4 flex justify-center items-center gap-4 text-lg font-medium bg-secondary text-black">
      <h3 className="whitespace-nowrap">Precisa falar com a gente?</h3>
      <Button className="bg-neutral-200 rounded-full p-6 font-bold text-lg text-primary hover:text-white">
        <Link href={href}>Contato</Link>
      </Button>
    </section>
  );
}
