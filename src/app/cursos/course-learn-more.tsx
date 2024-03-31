import Icon, { IconProps } from '@components/ui/icon';
import { cn } from '@utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import {
  HTMLAttributes,
  LiHTMLAttributes,
  PropsWithChildren,
  forwardRef,
} from 'react';

export const CourseLearnMore = forwardRef<
  HTMLElement,
  PropsWithChildren<HTMLAttributes<HTMLElement>>
>(function CourseLearnMore(
  {
    children,
    className,
    ...props
  }: PropsWithChildren<HTMLAttributes<HTMLElement>>,
  ref
) {
  return (
    <section
      className={cn('container bg-secondary flex flex-col gap-8', className)}
      ref={ref}
      {...props}
    >
      {children}
    </section>
  );
});

export const CourseLearnMoreTitle = forwardRef<
  HTMLHeadingElement,
  PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>
>(function CourseLearnMoreTitle(
  {
    children,
    className,
    ...props
  }: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>,
  ref
) {
  return (
    <h1
      className={cn('uppercase text-5xl lg:text-7xl font-extrabold', className)}
      ref={ref}
      {...props}
    >
      {children}
    </h1>
  );
});

export function CourseLearnMoreItems({ children }: PropsWithChildren) {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
      {children}
    </ul>
  );
}

type CourseLearnMoreItemProps = PropsWithChildren<{
  image?: string;
  icon?: IconProps['name'];
  link: string;
  target?: string;
}> &
  LiHTMLAttributes<HTMLLIElement>;

export const CourseLearnMoreItem = forwardRef<
  HTMLLIElement,
  CourseLearnMoreItemProps
>(function CourseLearnMoreItem(
  {
    image,
    link,
    icon,
    children,
    target,
    className,
    ...props
  }: CourseLearnMoreItemProps,
  ref
) {
  return (
    <li
      ref={ref}
      className={cn(
        'bg-primary hover:bg-white text-white hover:text-primary rounded-lg transition',
        className
      )}
      {...props}
    >
      <Link
        href={link}
        className="flex items-center gap-4 p-8 w-full h-full"
        target={target}
      >
        {image && (
          <div className="relative">
            <Image
              src={image}
              alt={link}
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
        {icon && <Icon name={icon} size={48} />}
        <h3 className="text-2xl font-bold">{children}</h3>
      </Link>
    </li>
  );
});
