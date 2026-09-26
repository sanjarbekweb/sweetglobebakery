# Sweet Globe Bakery

A bakery landing page built with React, TypeScript, Vite, Tailwind CSS, Motion, and Lucide icons. It presents pastries, bread, drinks, the bakery team, and location/contact information with animated sections and mobile navigation.

## Run locally

Use Node.js 22.12+ and npm:

```sh
npm install
npm run dev
```

Open `http://localhost:3000`. The development script binds to all network interfaces.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite on port 3000 |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | TypeScript checking with `tsc --noEmit` |

## Customize

Edit `MENU_ITEMS`, `TEAM`, and section content in `src/App.tsx`. Styling is in `src/index.css`; the app starts in `src/main.tsx`.

The current page does not call Gemini, so an AI API key is not needed for the bakery UI despite the inherited AI Studio environment template. There is no implemented ordering, payment, or database service. Publish `dist/` to a static host after building.

No automated test script is included.
