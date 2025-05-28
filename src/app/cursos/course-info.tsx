import { cn } from '@utils/cn';
import { PropsWithChildren, VideoHTMLAttributes, forwardRef } from 'react';

export function CourseInfo({ children }: PropsWithChildren) {
  return (
    <section className="container bg-neutral-200 space-y-4">
      <h1 className="font-bold text-4xl lg:text-7xl uppercase text-primary">SOBRE O CURSO</h1>
      {children}
    </section>
  );
}

type CourseInfoVideoProps = {
  source: string;
  width?: number;
} & VideoHTMLAttributes<HTMLVideoElement>;
export const CourseInfoVideo = forwardRef<HTMLVideoElement, CourseInfoVideoProps>(function CourseInfoVideo(
  { source, width, className, ...props }: CourseInfoVideoProps,
  ref
) {
  return (
    <video
      controls
      className={cn('w-auto h-auto md:max-w-[512px]', className)}
      style={{ width }}
      ref={ref}
      preload="metadata"
      {...props}
    >
      <source src={source} type="video/mp4" />
    </video>
  );
});
