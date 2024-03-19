import { cn } from '@utils/cn';
import { PropsWithChildren, VideoHTMLAttributes, forwardRef } from 'react';

export function CourseInfo({ children }: PropsWithChildren) {
  return <section className="container bg-neutral-200">{children}</section>;
}

type CourseInfoVideoProps = {
  source: string;
  width?: number;
} & VideoHTMLAttributes<HTMLVideoElement>;
export const CourseInfoVideo = forwardRef<
  HTMLVideoElement,
  CourseInfoVideoProps
>(function CourseInfoVideo(
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
