import { cn } from '@/lib/utils';
import type { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';

interface ContainerOwnProps {
  children: ReactNode;
  className?: string;
  /**
   * Fluid = full-width, only horizontal padding (no max-width cap).
   * Use for full-bleed sections like the hero background.
   * Default (false) = centered content column, matches "Explore Packages",
   * "Top Destinations", etc. (max-w-6xl in the original page).
   */
  fluid?: boolean;
  /** Render as a different element/tag, e.g. as="section" or as="header" */
  as?: ElementType;
}

type ContainerProps<T extends ElementType> = ContainerOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof ContainerOwnProps>;

export function Container<T extends ElementType = 'div'>({
  children,
  className,
  fluid = false,
  as,
  ...rest
}: ContainerProps<T>) {
  const Tag = as || 'div';

  return (
    <Tag
      className={cn(
        'mx-auto w-full px-6 sm:px-8 lg:px-10',
        !fluid && 'max-w-7xl',
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}