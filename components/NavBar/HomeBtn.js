// 'use client';

import Link from 'next/link';

export default function HomeBtn() {
  return (
    <div>
      <button className={`px-3 py-3 text-2xl text-yellow-300 font-extrabold`}>
        <Link href={'/'}>⚡Turbo Tonic⚡</Link>
      </button>
    </div>
  );
}
