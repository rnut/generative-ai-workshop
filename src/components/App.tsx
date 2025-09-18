import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">Generative AI Workshop</h1>
          <nav className="flex gap-4 text-sm font-medium">
            <a href="#stack" className="hover:text-indigo-600">Stack</a>
            <a href="#next" className="hover:text-indigo-600">Next</a>
          </nav>
        </div>
      </header>
      <main className="flex-1 mx-auto w-full max-w-4xl px-6 py-10 space-y-10">
        <section>
          <h2 className="text-2xl font-bold mb-2">Environment OK ✅</h2>
          <p className="text-slate-600">React 19 + Vite 5 + TypeScript 5 + Tailwind CSS is running.</p>
        </section>
        <section id="stack" className="grid gap-4 sm:grid-cols-2">
          {[
            { label: 'React', value: '19.x' },
            { label: 'Vite', value: '5.x' },
            { label: 'TypeScript', value: '5.x' },
            { label: 'Tailwind', value: 'v4 plugin (@tailwindcss/vite)' },
          ].map(card => (
            <div key={card.label} className="rounded-lg border bg-white p-5 shadow-sm hover:shadow transition">
              <div className="text-sm font-medium text-slate-500">{card.label}</div>
              <div className="text-lg font-semibold mt-1">{card.value}</div>
            </div>
          ))}
        </section>
        <section id="next" className="space-y-2">
          <h3 className="text-xl font-semibold">Next Steps</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>เพิ่ม ESLint / Prettier</li>
            <li>ตั้งค่า Vitest + React Testing Library</li>
            <li>เริ่มรวมโมดูล AI ตัวอย่าง</li>
          </ul>
        </section>
      </main>
      <footer className="border-t py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Generative AI Workshop
      </footer>
    </div>
  );
};

export default App;