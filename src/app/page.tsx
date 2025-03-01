export default function Home() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Engineering Q&A</h1>
      <p className="text-lg text-gray-600 mt-2">
        Study and review engineering questions with answers.
      </p>

      <div className="mt-6 space-y-4">
        <a href="/reinforced-concrete" className="block text-lg text-white bg-blue-500 px-4 py-2 rounded">
          📏 Reinforced Concrete Design
        </a>
        <a href="/foundation-design" className="block text-lg text-white bg-blue-500 px-4 py-2 rounded">
          🏗️ Foundation Design
        </a>
      </div>
    </main>
  );
}
