import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { spaceGroteskSize } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${spaceGroteskSize.className} flex flex-row items-center leading-none text-textPrimary dark:text-darkTextPrimary`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[34px]">Sunday Night Foodball</p>
    </div>
  );
}
