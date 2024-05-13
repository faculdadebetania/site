import Icon, { IconProps } from '@components/ui/icon';
import Image from 'next/image';
import Link from 'next/link';

interface BaseItem {
  link: string;
  title: string;
}

interface ItemWithIcon extends BaseItem {
  icon: IconProps['name'];
  image?: never;
}

interface ItemWithImage extends BaseItem {
  image: string;
  icon?: never;
}

type Item = ItemWithIcon | ItemWithImage;

const items: Array<Item> = [
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
  {
    icon: 'BookCopy',
    link: 'https://editorabetania.com.br/',
    title: 'Editora',
  },
];

export default function About() {
  return (
    <section className="container flex flex-col gap-16 bg-neutral-200">
      <h1 className="uppercase text-5xl lg:text-7xl font-bold text-primary">
        NOSSAS PUBLICAÇÕES
      </h1>
      <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16">
        {items.map((item) => (
          <AboutItem key={item.title} item={item} />
        ))}
      </ul>
    </section>
  );
}

interface AboutItemProps {
  item: Item;
}
function AboutItem({ item }: AboutItemProps) {
  return (
    <li>
      <Link
        href={item.link}
        className="flex items-center gap-4 rounded-lg p-8 bg-primary hover:bg-secondary transition"
      >
        {item.icon && <Icon name={item.icon} size={64} className="mr-2" />}
        {item.image && (
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
        )}
        <h3 className="text-white text-2xl font-bold">{item.title}</h3>
      </Link>
    </li>
  );
}
