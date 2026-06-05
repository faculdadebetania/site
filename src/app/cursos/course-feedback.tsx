import { cn } from '@utils/cn'
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react'

export const CourseFeedbacks = forwardRef<
  HTMLElement,
  PropsWithChildren<HTMLAttributes<HTMLElement>>
>(function CourseFeedbacks(
  { children, className, ...props },
  ref
) {
  return (
    <section
      ref={ref}
      className={cn(
        `
        container
        pt-0
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-10
        `,
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
})

export const CourseFeedback = forwardRef<
  HTMLDivElement,
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
>(function CourseFeedback(
  { children, className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        `
        flex
        flex-col
        gap-5
        `,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})

export function CourseFeedbackHeader({
  image,
  name,
  subtitle,
}: {
  image: string
  name: string
  subtitle: string
}) {
  return (
    <div className="flex items-start gap-4 lg:min-h-[50px]">
      <img
        src={image}
        alt={name}
        className="
          w-24
          h-24
          rounded-full
          object-cover
          shrink-0
        "
      />

      <div>
        <h3 className="text-secondary font-bold text-3xl">
          {name}
        </h3>

        <p className="text-white text-sm leading-snug">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export const CourseFeedbackBubble = forwardRef<
  HTMLDivElement,
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
>(function CourseFeedbackBubble(
  { children, className, ...props },
  ref
) {
  return (
    <div className="relative">
      {/* sombra bege atrás */}
      <div
        className="
          absolute
          inset-0
          translate-x-3
          translate-y-3
          rounded-[34px]
          bg-[#FFFFFF]
        "
      />

      {/* balão principal */}
      <div
        ref={ref}
        className={cn(
          `
          relative
          bg-[#70739A]
          border-[3px]
          border-black
          rounded-[34px]
          px-8
          py-8
          lg:min-h-[350px]
          after:content-['']
          after:absolute
          after:right-16
          after:-bottom-5
          after:w-10
          after:h-10
          after:bg-[#70739A]
          after:border-r-[3px]
          after:border-b-[3px]
          after:border-black
          after:rotate-45
          `,
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  )
})

export function CourseFeedbackText({
  children,
}: PropsWithChildren) {
  return (
    <p
      className="
        text-white
        text-lg
        leading-relaxed
      "
    >
      {children}
    </p>
  )
}