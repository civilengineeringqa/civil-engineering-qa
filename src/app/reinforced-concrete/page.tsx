"use client";

import React from "react";
import Link from "next/link";

export default function ReinforcedConcretePage() {
  // Define categories and problems
  const categories = [
    {
      id: 1,
      title: "Singly Reinforced Concrete",
      link: "/reinforced-concrete/singly",
      problems: [
        {
          id: "p1",
          title: "Rectangular Beam Design",
          link: "/reinforced-concrete/singly/problem-1",
        },
      ],
    },
    {
      id: 2,
      title: "Doubly Reinforced Beam Design",
      link: "/reinforced-concrete/doubly",
      problems: [
        {
          id: "p2",
          title: "Doubly Reinforced Beam Analysis",
          link: "/reinforced-concrete/doubly/problem-1",
        },
      ],
    },
    {
      id: 3,
      title: "Shear Strength of Beams",
      link: "/reinforced-concrete/shear",
      problems: [],
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-5xl font-bold text-blue-600 mb-8 flex items-center gap-2">
        Reinforced Concrete Design 🏗️
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        This page contains content and questions related to reinforced concrete structures.
      </p>

      {/* DISPLAY CATEGORIES AND PROBLEMS */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Categories & Questions</h2>
        
        <ul className="list-disc pl-6 text-gray-700">
          {categories.map((category) => (
            <li key={category.id} className="mb-4">
              <Link href={category.link} className="text-blue-500 hover:underline text-lg font-semibold">
                {category.title}
              </Link>
              {category.problems.length > 0 && (
                <ul className="list-disc pl-6 mt-2">
                  {category.problems.map((problem) => (
                    <li key={problem.id}>
                      <Link href={problem.link} className="text-blue-500 hover:underline">
                        {problem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
        Back to Home
      </Link>
    </main>
  );
}
