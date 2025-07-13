'use client';

import {
  UserCircleIcon,
  HomeIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Posts',
    href: '/dashboard/posts',
    icon: PencilIcon,
  },
  { name: 'Admin', href: '/dashboard/admin', icon: UserCircleIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `flex h-[48px] grow items-center justify-center gap-2 
               rounded-md bg-borderLight dark:bg-borderDark 
               p-3 text-sm font-medium 
               text-textPrimary dark:text-darkTextPrimary 
               hover:bg-buttonHover hover:text-white 
               dark:hover:bg-darkButtonHover dark:hover:text-darkBackground 
               transition-colors md:flex-none md:justify-start md:p-2 md:px-3`,
              {
                'bg-buttonHover text-white dark:bg-darkButtonHover dark:text-darkBackground':
                  pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
