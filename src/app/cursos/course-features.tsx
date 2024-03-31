import Icon, { IconProps } from '@components/ui/icon';
import { Separator } from '@components/ui/separator';
import { cn } from '@utils/cn';
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';

export const CourseFeatures = forwardRef<
  HTMLElement,
  PropsWithChildren<HTMLAttributes<HTMLElement>>
>(function CourseFeatures(
  {
    children,
    className,
    ...props
  }: PropsWithChildren<HTMLAttributes<HTMLElement>>,
  ref
) {
  return (
    <section
      className={cn(
        'container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-16',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </section>
  );
});

export function CourseFeature({
  children,
  separator = true,
}: PropsWithChildren<{ separator?: boolean }>) {
  return (
    <section className="grid grid-cols-[32px_1fr] lg:grid-cols-none lg:flex lg:flex-col lg:justify-center lg:items-center gap-1">
      {children}
      {separator && <Separator className="col-span-2 my-4 block lg:hidden" />}
    </section>
  );
}

export function CourseFeatureIcon(props: IconProps) {
  return (
    <Icon
      color="white"
      className="w-6 h-6 lg:w-[72px] lg:h-[72px] justify-self-start"
      {...props}
    />
  );
}

export function CourseFeatureTitle({ children }: PropsWithChildren) {
  return (
    <h2 className="font-bold text-secondary text-xl lg:text-md uppercase lg:normal-case justify-self-start lg:justify-self-center">
      {children}
    </h2>
  );
}

export const CourseFeatureValue = forwardRef<
  HTMLDivElement,
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
>(function CourseFeatureValue(
  {
    children,
    className,
    ...props
  }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
  ref
) {
  return (
    <div
      className={cn(
        'flex flex-col lg:justify-center items-center col-span-2 justify-self-start',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
