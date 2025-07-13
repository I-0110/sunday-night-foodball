import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';

import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-background dark:bg-darkBackground">
      {/* Logo Section */}
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-primary p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <h1 className='text-lg font-bold'>Sunday Night Foodball</h1>
        </div>
      </Link>

      {/* Main Nav + Sign Out */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />

        {/* Spacer block */}
        <div className="hidden h-auto w-full grow rounded-md bg-borderLight dark:bg-borderDark md:block"></div>

        {/* Sign Out Button */}
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-borderLight p-3 text-sm font-medium text-textPrimary hover:bg-buttonHover hover:text-white dark:bg-borderDark dark:text-darkTextPrimary dark:hover:bg-darkButtonHover dark:hover:text-darkBackground md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
