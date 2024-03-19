'use client';
import { Button } from '@components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/dropdown-menu';
import Icon from '@components/icon';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@components/navigation-menu';
import Link from 'next/link';
import { Fragment, useState } from 'react';

export function NavDesktop() {
  const [opened, setOpened] = useState(false);

  return (
    <Fragment>
      <NavigationMenu>
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                INÍCIO
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#cursos" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                CURSOS
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/vestibular" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                VESTIBULAR
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/republica-estudantil" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                REPÚBLICA ESTUDANTIL
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <DropdownMenu onOpenChange={setOpened} open={opened}>
              <DropdownMenuTrigger
                onMouseOver={() => setOpened(true)}
                className={`${navigationMenuTriggerStyle()} flex`}
              >
                SOBRE NÓS
                <Icon name="chevron-down" size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="border-[1px] border-zinc-200 rounded-xl"
                onMouseLeave={() => setOpened(false)}
              >
                {/* <DropdownMenuItem className="p-0">
                  <Link href="/a-faculdade" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} !w-full h-full !justify-start`}
                    >
                      A Faculdade
                    </NavigationMenuLink>
                  </Link>
                </DropdownMenuItem> */}
                <DropdownMenuItem className="p-0">
                  <Link href="/corpo-docente" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} !w-full h-full !justify-start`}
                    >
                      Corpo Docente
                    </NavigationMenuLink>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link href="/documentos" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} !w-full h-full !justify-start`}
                    >
                      Documentos
                    </NavigationMenuLink>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button
        className="bg-white text-slate-800 rounded-full p-6 hover:bg-slate-800 hover:text-white font-bold"
        asChild
      >
        <Link href="http://educacional.usecerbrum.net/">Portal Acadêmico</Link>
      </Button>
    </Fragment>
  );
}
