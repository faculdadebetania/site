'use client';
import { Button } from '@components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import Icon from '@components/ui/icon';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@components/ui/navigation-menu';
import { cn } from '@utils/cn';
import Link from 'next/link';
import { Fragment, useState } from 'react';

export function NavDesktop() {
  const [open, setOpen] = useState(false);

  function handleMouseEnter() {
    setOpen(true);
  }

  function handleMouseLeave() {
    setOpen(false);
  }

  return (
    <Fragment>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'hover:bg-inherit h-auto'
                )}
              >
                INÍCIO
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#cursos" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'hover:bg-inherit h-auto'
                )}
              >
                CURSOS
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/vestibular" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'hover:bg-inherit h-auto'
                )}
              >
                VESTIBULAR
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/republica-estudantil" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'hover:bg-inherit h-auto'
                )}
              >
                REPÚBLICA ESTUDANTIL
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger
                onMouseEnter={handleMouseEnter}
                className={cn(
                  navigationMenuTriggerStyle(),
                  'flex gap-1 hover:bg-inherit h-auto focus:bg-inherit data-[active]:bg-inherit data-[state=open]:bg-inherit'
                )}
              >
                INSTITUCIONAL
                <Icon name="ChevronDown" size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="bg-primary/75 border-white/10"
                onMouseLeave={handleMouseLeave}
              >
                <DropdownMenuItem className="hover:bg-white/15 focus:bg-white/15">
                  <Link
                    href="/corpo-docente"
                    className="flex items-center gap-2 w-full"
                  >
                    <Icon name="UsersRound" strokeWidth={1} /> Corpo Docente
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-white/15 focus:bg-white/15">
                  <Link
                    href="/documentos"
                    className="flex items-center justify gap-2 w-full"
                  >
                    <Icon name="Files" strokeWidth={1} /> Documentos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-white/15 focus:bg-white/15">
                  <Link
                    href="/ouvidoria"
                    className="flex items-center gap-2 w-full"
                  >
                    <Icon name="MessagesSquare" strokeWidth={1} /> Ouvidoria
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-white/15 focus:bg-white/15">
                  <Link
                    href="/diplomas"
                    className="flex items-center gap-2 w-full"
                  >
                    <Icon name="GraduationCap" strokeWidth={1} /> Diplomas
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button
        asChild
        className="hidden md:inline-flex bg-white text-primary hover:bg-white/25 hover:text-white rounded-full p-6 font-bold"
      >
        <Link href="http://educacional.usecerbrum.net/">Portal Acadêmico</Link>
      </Button>
    </Fragment>
  );
}
