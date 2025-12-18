'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface NavLinkProps extends Omit<LinkProps, 'className'> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, pendingClassName, href, ...props }, ref) => {
    const pathname = usePathname();

    const isActive = pathname === href;
    const isPending = false;

    return (
      <Link
        href={href}
        ref={ref}
        className={cn(className, isActive && activeClassName, isPending && pendingClassName)}
        {...props}
      />
    );
  }
);

NavLink.displayName = 'NavLink';

export { NavLink };
