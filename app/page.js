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
        <div>
        <Link href="/week3">Go to Week 3</Link>
        </div>
        <div>
        <Link href="/week4">Go to Week 4</Link>
        </div>
        <div>
        <Link href='/week5'>Go to Week 5</Link>
        </div>
        <div>
          <Link href='/week6'>Go to Week 6</Link>
        </div>
      </div>
    </main>
  );
}
