// src/app/reinforced-concrete/page.tsx
'use client'; // Ensures this page is treated as a client component

import Link from "next/link";

export default function ReinforcedConcretePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-5xl font-bold text-blue-600 mb-8">Reinforced Concrete Design 🏗️</h1>
      <p className="text-lg text-gray-700 mb-6">
        This page contains content and questions related to reinforced concrete structures.
      </p>

      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Question: Rectangular Beam Design
        </h2>
        <p className="text-gray-700 mb-4">
          A rectangular beam having a width of 425mm and a total height of 550mm has 4-36mm diameter bars at the bottom in a single layer for tension and 3 legs of 10mm stirrups spaced at 100mm on center. f'c = 28 MPa, fy = 270 MPa for transverse reinforcement, and fy = 420 MPa for longitudinal reinforcements. Calculate the following using Ultimate Strength Design:
        </p>

        <ul className="list-disc pl-6 text-gray-700">
          <li>1. Depth of compression concrete in mm (a)</li>
          <li>2. Ultimate moment capacity of the beam in kN-m (Mu)</li>
          <li>3. Ultimate moment capacity of the beam at balanced condition in kN-m (Mb)</li>
          <li>4. Nominal shear strength of concrete, kN (Vc)</li>
          <li>5. Ultimate Shear capacity of the beam, kN (Vu)</li>
        </ul>
      </div>

      {/* You can add more information or calculations as needed */}
      
      <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
        Back to Home
      </Link>
    </main>
  );
}
