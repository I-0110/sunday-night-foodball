import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { spaceGroteskSize } from './ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-accent p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-backgrounddark:bg-darkBackground px-6 py-10 md:w-2/5 md:px-20">
          <div
            className={styles.shape}
          />
          <p className={`${spaceGroteskSize.className}text-xl text-textSecondary dark:text-darkTextSecondary md:text-3xl md:leading-normal`}>
            <strong>Welcome to Sunday Night Foodball.</strong> Weekly recaps, hot takes, and stats for die-hard Chiefs fans.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-accent dark:bg-darkAccent px-6 py-3 text-sm font-medium text-textPrimary dark:text-darkTextPrimary transition-colors hover:bg-buttonHover dark:hover:bg-darkButtonHover hover:text-darkTextPrimary md:text-base"
          >
            <span>Read the Latest Post</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-accent dark:bg-darkAccent px-6 py-3 text-sm font-medium text-textPrimary dark:text-darkTextPrimary transition-colors hover:bg-buttonHover dark:hover:bg-darkButtonHover hover:text-darkTextPrimary md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image 
            src="/snf.jpg"
            width={1000}
            height={760}
            className='hidden md:block'
            alt='Screenshots of the dashboard project showing desktop version'
          />
          <Image
            src="/snf.jpg"
            width={560}
            height={620}
            className='block md:hidden'
            alt='Screenshots of the dashboard project showing mobile version'
          />
        </div>
      </div>
    </main>
    </>
  );
}