'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBtn({
  route,
  children,
  bgcolor = '',
  txtcolor = 'text-white',
}) {
  const pathname = usePathname();
  return (
    <div
      className={`px-3 py-3 text-xl 
        ${bgcolor}
        ${
          pathname === route && route !== 'sign-in'
            ? 'text-yellow-300'
            : txtcolor
        }
        hover:text-white hover:bg-gray-800 rounded`}
    >
      <Link href={route}>{children}</Link>
    </div>
  );
}
