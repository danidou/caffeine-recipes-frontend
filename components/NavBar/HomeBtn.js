// 'use client';

import Link from 'next/link';

export default function HomeBtn() {
  return (
    <div className="flex items-center">
      <Link
        href={'/'}
        className={`px-3 py-3 text-2xl text-yellow-300 font-extrabold`}
      >
        ⚡Turbo Tonic⚡
      </Link>
    </div>
  );
}
