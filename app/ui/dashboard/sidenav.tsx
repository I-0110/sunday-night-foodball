import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';

import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-[#F8FAFC] dark:bg-[#0F172A]">
      {/* Logo Section */}
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-[#0E7490] p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-[#F8FAFC] md:w-40">
          <h1 className='text-lg font-bold'>Sunday Night Foodball</h1>
        </div>
      </Link>

      {/* Main Nav + Sign Out */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />

        {/* Spacer block */}
        <div className="hidden h-auto w-full grow rounded-md bg-[#E2E8F0] dark:bg-[#334155] md:block"></div>

        {/* Sign Out Button */}
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-[#E2E8F0] p-3 text-sm font-medium text-[#1E293B] hover:bg-[#CBD5E1] hover:text-[#0C5C70] dark:bg-[#334155] dark:text-[#E2E8F0] dark:hover:text-[#22D3EE] dark:hover:bg-[#1E293B] md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
