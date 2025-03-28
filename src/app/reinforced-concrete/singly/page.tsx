"use client";  

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SinglyReinforcedConcretePage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-5xl font-bold text-blue-600 mb-8">
        Singly Reinforced Concrete 🏗️
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        This section contains problems related to singly reinforced concrete.
      </p>

      {/* PROBLEM 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Problem 1: Rectangular Beam Design
        </h2>
        <p className="text-gray-700 mb-4">
          A rectangular beam having a width of <strong>425mm</strong> and a total height of <strong>550mm</strong> has <strong>4-36mm</strong> diameter bars at the bottom in a single layer for tension and <strong>3 legs of 10mm stirrups spaced at 100mm on center</strong>.  
          Given:
        </p>

        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>f'c</strong> = 28 MPa</li>
          <li><strong>fy</strong> = 270 MPa (transverse reinforcement)</li>
          <li><strong>fy</strong> = 420 MPa (longitudinal reinforcement)</li>
        </ul>

        <p className="text-gray-700 mt-4">Calculate the following using Ultimate Strength Design:</p>
        <ul className="list-decimal pl-6 text-gray-700">
          <li>Depth of compression concrete in mm (a)</li>
          <li>Ultimate moment capacity of the beam in kN-m (Mu)</li>
          <li>Ultimate moment capacity of the beam at balanced condition in kN-m (Mb)</li>
          <li>Nominal shear strength of concrete, kN (Vc)</li>
          <li>Ultimate Shear capacity of the beam, kN (Vu)</li>
        </ul>
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="mt-6 flex justify-between w-full max-w-4xl">
        <Link href="/reinforced-concrete" className="text-blue-500 hover:underline">
          ⬅ Back to Reinforced Concrete
        </Link>
        <button
          onClick={() => router.push("/reinforced-concrete/singly/problem-2")}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md hover:bg-blue-700"
        >
          Next Problem ➡
        </button>
      </div>
    </main>
  );
}
