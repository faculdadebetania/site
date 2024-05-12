import Link from 'next/link';
import { Button } from './ui/button';
import Icon from './ui/icon';

export default function A11y() {
  return (
    <Button
      asChild
      className="p-0 rounded-lg h-[40px] w-[40px] fixed top-[calc(50%+48px)] bg-[#3287f0] right-[10px] -translate-y-1/2 hover:bg-[#3287f0]/50"
    >
      <Link href="/acessibilidade">
        <Icon name="Accessibility" size={24} strokeWidth={3} />
      </Link>
    </Button>
  );
}
