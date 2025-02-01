'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBtn({
  route,
  children,
  bgcolor = '',
  txtcolor = '',
}) {
  const pathname = usePathname();
  return (
    <div
      className={`px-3 py-3 text-xl 
        ${pathname === route ? 'text-blue-500' : 'text-gray-300'}
        ${bgcolor} ${txtcolor}
        hover:text-white hover:bg-gray-800 rounded`}
    >
      <Link href={route}>{children}</Link>
    </div>
  );
}
