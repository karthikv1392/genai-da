# Digital Architecture in the Age of GenAI

Website for the tutorial "Digital Architecture in the Age of GenAI" at VU Amsterdam.

**Date:** January 28, 2026
**Time:** 13:30 - 18:30
**Venue:** Room NU-5A, VU Amsterdam, Digital Sustainability Center

## Speakers

- **Karthik Vaidhyanathan** - Assistant Professor, SERC, IIIT-Hyderabad, India
- **Henry Muccini** - Professor in Computer Science, University of L'Aquila, Italy

## Development

### Prerequisites

- Node.js 20.19+ (use `nvm use` if you have nvm installed)

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Build output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Push the code to a GitHub repository
2. Import the project to [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### GitHub Pages

1. Add this to `vite.config.ts`:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   })
   ```
2. Build the project: `npm run build`
3. Deploy the `dist/` folder to GitHub Pages

### Netlify

1. Push to GitHub
2. Import to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Lucide React (icons)

## Project Structure

```
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── OverviewSection.tsx
│   │   ├── SpeakersSection.tsx
│   │   ├── ScheduleSection.tsx
│   │   ├── ResourcesSection.tsx
│   │   └── Footer.tsx
│   ├── App.tsx       # Main app component
│   ├── main.tsx      # Entry point
│   └── index.css     # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## License

MIT
