'use client'; 

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showQuestion, setShowQuestion] = useState(false);

  const toggleQuestion = () => {
    setShowQuestion(!showQuestion);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-5xl font-bold text-blue-600 mb-8">Civil Engineering Q&A</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-blue-100 shadow-lg rounded-2xl hover:shadow-xl transition duration-300 p-6 text-gray-800">
          <h2
            className="text-xl font-semibold text-gray-800 cursor-pointer"
            onClick={toggleQuestion}
          >
            Reinforced Concrete Design 🏗️
          </h2>
          <Link href="/reinforced-concrete" className="text-gray-800 hover:underline mt-4 inline-block">
            Go to topic →
          </Link>
          {showQuestion && (
            <div className="mt-4 text-gray-700">
  
            </div>
          )}
        </div>
        <div className="bg-blue-100 shadow-lg rounded-2xl hover:shadow-xl transition duration-300 p-6 text-gray-800">
          <h2 className="text-xl font-semibold text-gray-800">Foundation Design 🏠</h2>
          <Link href="/foundation-design" className="text-gray-800 hover:underline mt-4 inline-block">
            Go to topic →
          </Link>
        </div>
        <div className="bg-blue-100 shadow-lg rounded-2xl hover:shadow-xl transition duration-300 p-6 text-gray-800">
          <h2 className="text-xl font-semibold text-gray-800">Prestressed Concrete Design 🏢</h2>
          <Link href="/prestressed-concrete" className="text-gray-800 hover:underline mt-4 inline-block">
            Go to topic →
          </Link>
        </div>
      </div>
    </main>
  );
}
