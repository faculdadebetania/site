import Image from 'next/image';
import Link from 'next/link';

interface AboutItem {
  image: string;
  link: string;
  title: string;
}
const aboutItems = [
  {
    image: '/imagens/blog.png',
    link: 'http://blog.faculdadebetania.com.br',
    title: 'Blog',
  },
  {
    image: '/imagens/podcast.png',
    link: 'https://open.spotify.com/show/6Scrnqx88hiGZOLxhcnSTc',
    title: 'Podcast',
  },
  {
    image: '/imagens/magazine.png',
    link: 'https://teologiaesociedade.faculdadebetania.com.br/',
    title: 'Revista Acadêmica',
  },
];

export default function About() {
  return (
    <section className="container flex flex-col gap-16 bg-neutral-200">
      <h1 className="uppercase text-5xl lg:text-7xl font-bold text-primary">
        NOSSAS PUBLICAÇÕES
      </h1>
      <ul className="list-none grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-16">
        {aboutItems.map((item) => (
          <AboutItem key={item.title} item={item} />
        ))}
      </ul>
    </section>
  );
}

interface AboutItemProps {
  item: AboutItem;
}
function AboutItem({ item }: AboutItemProps) {
  return (
    <li>
      <Link
        href={item.link}
        className="flex items-center gap-4 rounded-lg p-8 bg-primary hover:bg-secondary transition"
      >
        <div className="relative">
          <Image
            src={item.image}
            alt={item.title}
            className="rounded-lg object-cover"
            width={64}
            height={64}
            style={{
              filter:
                'invert(99%) sepia(1%) saturate(321%) hue-rotate(202deg) brightness(116%) contrast(100%)',
            }}
          />
        </div>
        <h3 className="text-white text-2xl font-bold">{item.title}</h3>
      </Link>
    </li>
  );
}
