import { Button } from '@components/ui/button';
import Link from 'next/link';

export default function Contact() {
  const href = `https://wa.me/+554196705657`;
  return (
    <section className="container !py-4 flex justify-center items-center gap-4 text-lg font-medium bg-secondary text-black">
      <p className="font-bold text-base break-normal">
        Precisa falar com a gente?
      </p>
      <Button className="bg-neutral-200 rounded-full p-6 font-bold md:text-lg text-primary hover:text-white">
        <Link href={href}>Contato</Link>
      </Button>
    </section>
  );
}
