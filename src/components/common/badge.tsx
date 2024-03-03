import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva('inline-flex items-center rounded-full px-[0.75rem] py-[0.4375rem] gap-[0.25rem]', {
  variants: {
    variant: {
      default: 'border-transparent bg-white-a10 text-[0.8125rem]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  label: string;
  number?: number;
}

function Badge({ className, variant, label, number, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      <span className="text-white-a80">{label}</span>
      {number && <span className="text-white-a100">{number.toLocaleString()}</span>}
    </div>
  );
}

export { Badge, badgeVariants };
