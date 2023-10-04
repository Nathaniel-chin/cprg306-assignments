import React from 'react';
import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        < StudentInfo/>
        <Link href="/week2">Go to Week 2</Link>
      </div>
    </main>
  );
}
