# Generative AI Workshop

Updated stack: React 19 + TypeScript 5 + Vite 5 + Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+, 20.9+, or 22+ (Vite 5 requirement)
- npm (or pnpm / yarn / bun)

### Installation
```bash
git clone https://github.com/rnut/generative-ai-workshop.git
cd generative-ai-workshop
npm install
```

### Scripts
```bash
npm run dev     # start dev server
npm run build   # production build
npm run serve   # preview dist
```
Dev server default: http://localhost:3000 (configured in `vite.config.ts`). Preview server: http://localhost:4173.

## ✨ Technology Stack
- React 19 (createRoot API, concurrent-ready)
- TypeScript 5
- Vite 5 (esbuild + Rollup pipeline, fast HMR)
- Tailwind CSS (@import "tailwindcss" via Vite plugin `@tailwindcss/vite`)

## 🛠 Tailwind Setup Summary
Using the official Vite plugin approach:
1. Install deps (already in `devDependencies`): `tailwindcss @tailwindcss/vite`
2. Import plugin in `vite.config.ts`: `import tailwindcss from '@tailwindcss/vite'`
3. Add to plugins array: `plugins: [react(), tailwindcss()]`
4. Use `@import "tailwindcss";` inside `src/index.css` (already applied)
5. Use utility classes in components.

## 📁 Key Files
- `vite.config.ts` - Vite + React + Tailwind configuration
- `tsconfig.json` - TypeScript compiler options (ESNext targets)
- `src/main.tsx` - React 18/19 root renderer using `createRoot`
- `src/components/App.tsx` - Sample component

## 🔄 React 19 Notes
React 19 formal release introduces minor breaking changes around the deprecated createRoot vs render API (we already use `createRoot`). More advanced new features (Actions, Asset Loading, use() with Suspense for data fetching) can be layered later.

## 🧪 Next Steps
- Add ESLint + Prettier
- Integrate AI demo modules
- Add unit tests (Vitest + React Testing Library)

## 📚 Workshop Focus
Generative AI concepts, prompt design, model integration, and UI patterns.

## 👤 Author
Arnut K (@rnut)