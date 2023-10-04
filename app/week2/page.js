import React from 'react';
import StudentInfo from '../StudentInfo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>My Shopping list</p>
      
      <div>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        < StudentInfo/>
      </div>
    </main>
  );
}
