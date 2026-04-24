# AGENTS.md

## Project Overview

Greenhouse is an Astro 6 static site for tracking vegetable growing schedules in Kozani, Greece (Zone 7b/8a). It displays an interactive calendar of sowing, transplanting, and harvesting times for various plants.

## Tech Stack

- **Framework:** Astro 6 (static site generation)
- **Language:** TypeScript (strict mode via `astro/tsconfigs/strict`)
- **Runtime:** Node.js >= 22.12.0
- **Package manager:** npm
- **Styling:** Scoped CSS in `.astro` files (no CSS framework)

## Build & Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:4321
npm run build        # Production build to ./dist/
npm run preview      # Preview production build locally
npx astro check      # Type-check the project (no dedicated script in package.json)
```

### Linting & Formatting

There is no dedicated lint or format command configured. Use `npx astro check` for type-checking. If adding a linter, prefer `eslint` with Astro plugin.

### Testing

No test framework is currently configured. If adding tests:
- Unit tests: `vitest` (recommended by Astro ecosystem)
- Component tests: `@astrojs/testing` or Playwright for e2e
- Run a single test: `npx vitest run path/to/test.test.ts`
- Run all tests: `npx vitest run`

## Project Structure

```
src/
├── components/       # Reusable Astro components
│   └── GreenhouseCanvas.astro
├── data/             # Data files and type definitions
│   └── plants.ts     # Plant database with types and growing schedules
├── layouts/          # Page layout wrappers
│   └── BaseLayout.astro
└── pages/            # File-based routing
    ├── index.astro           # Home page with greenhouse canvas
    ├── schedule.astro        # Growing schedule calendar table
    └── plants/
        ├── index.astro       # Plant listing page
        └── [id].astro        # Dynamic plant detail pages (SSG)
public/              # Static assets (favicons, etc.)
```

## Code Style Guidelines

### Astro Components (`.astro` files)

- **Frontmatter:** Use `---` delimiters. Keep frontmatter concise — imports, props, and helper functions only.
- **Props interface:** Define a `Props` interface inside the frontmatter. Destructure from `Astro.props`.
  ```astro
  ---
  interface Props {
  	title: string;
  }
  const { title } = Astro.props;
  ---
  ```
- **Imports:** Use relative paths with explicit extensions for Astro files (`../layouts/BaseLayout.astro`). For TS files, omit extension (`../data/plants`).
- **Scoped styles:** Place `<style>` blocks at the end of the file. Use plain CSS, not CSS preprocessors.
- **No frameworks:** This project uses Astro components only (no React, Vue, Svelte integrations).

### TypeScript

- **Type definitions:** Define types and interfaces with `export` in `src/data/` or co-located with usage.
- **Use `interface` over `type`** for object shapes (matches existing `Plant`, `GrowingSchedule`, `Props` patterns).
- **Use `type`** for unions and aliases (matches existing `Month` pattern).
- **Strict mode** is enabled via `astro/tsconfigs/strict`. Respect null checks and explicit types.
- **No `any`.** Use proper types throughout.

### Naming Conventions

- **Files:** PascalCase for Astro components (`GreenhouseCanvas.astro`, `BaseLayout.astro`), camelCase for TypeScript data files (`plants.ts`).
- **Variables/constants:** camelCase for variables (`MONTHS`, `MONTH_LABELS` are exceptions as lookup tables). PascalCase for type/interface names.
- **CSS classes:** kebab-case (`sow-indoors`, `plant-name-col`, `month-grid`).
- **IDs:** kebab-case for plant IDs (`solanum-lycopersicum`, `cucumis-sativus`).
- **Dynamic routes:** Use `[param]` syntax in filenames (e.g., `[id].astro`).
- **Helper functions:** camelCase, defined in frontmatter before the template (e.g., `getCellClass`, `getCellLabel`).

### Formatting

- **Indentation:** Tabs (observed in all `.astro` and `.ts` files).
- **Strings:** Double quotes in TypeScript, double quotes in HTML attributes.
- **Semicolons:** Required in TypeScript.
- **Trailing commas:** Used in multi-line objects and arrays.
- **One true brace style:** Opening braces on the same line.

### Error Handling

- Use non-null assertions (`!`) sparingly and only when the type system cannot infer safety (e.g., `canvas.getContext("2d")!`).
- No runtime error boundaries currently. For data lookups, use `find` with fallbacks rather than direct indexing when possible.

### Patterns

- **Data-driven rendering:** Plant data lives in `src/data/plants.ts`. Pages consume it via imports. Do not hardcode plant data in pages.
- **Static paths:** Dynamic routes use `getStaticPaths()` for SSG. Return `{ params, props }` objects.
- **Layout wrapping:** All pages use `<BaseLayout>` with a `title` prop.
- **Schedule cell logic:** The priority order for cell coloring is `harvest > transplant > sowOutdoors > sowIndoors`. Maintain this order when extending.
- **CSS color scheme:** Dark theme with green accents (`#4ade80`, `#6ee7b7`, `#a7f3d0`). Schedule colors: blue `#2563eb` (sow indoors), green `#16a34a` (sow outdoors), amber `#d97706` (transplant), red `#dc2626` (harvest).
- **Responsive:** Include `@media` breakpoints for mobile (768px, 600px observed).

### Adding a New Plant

Add an entry to the `plants` array in `src/data/plants.ts` with all required fields: `id`, `name`, `scientificName`, `family`, `genus`, `year`, `author`, `imageUrl`, `description`, and `schedule` (with `sowIndoors`, `sowOutdoors`, `transplant`, `harvest` arrays of `Month` values). No other files need changes — the schedule and plant pages render automatically.

### Growing Schedule Data Source

Growing schedules are derived from [Gardenate](https://www.gardenate.com) planting calendars, adapted for Kozani, Greece (USDA Zone 7b/8a, Mediterranean climate).

**Methodology:**
- Gardenate's "Australia - temperate" zone data was used as the base, since it has a similar climate pattern (warm dry summers, mild wet winters).
- A +6 month hemisphere correction was applied (southern hemisphere months → northern hemisphere months) to convert Australian seasons to Greek seasons.
- Gardenate zone IDs: USA Zone 8a = `13`, Zone 7b = `114`. The site requires JavaScript for zone switching, so the Australia-temperate default (zone `2`) was fetched and hemisphere-corrected.
- Harvest months are estimated from Gardenate's "Harvest in X-Y weeks" info plus the transplant/sowing dates.
- Schedules were cross-checked against the existing manually-curated data and adjusted where the Gardenate data suggested broader planting windows.

**Key differences from original data:**
- Lettuce: Added autumn sowing months (aug, sep indoor; autumn transplant).
- Carrot: Added autumn sowing (aug, sep) for extended harvest.
- Zucchini: Added "mar" to sowIndoors (earlier indoor start).
- Basil: Added "apr" to sowIndoors (extended indoor sowing window).

**To update a plant's schedule from Gardenate:**
1. Visit `https://www.gardenate.com/plant/{plant-slug}?zone=13` (zone 13 = USA Zone 8a).
2. Read the S (sow indoors), T (transplant), P (sow outdoors) month markers.
3. Harvest timing is listed as "Harvest in X-Y weeks" — calculate harvest months from transplant date + weeks.
4. Update the `schedule` object in `src/data/plants.ts`.

### Adding a New Page

1. Create `.astro` file in `src/pages/` following file-based routing.
2. Import and wrap content with `<BaseLayout title="...">`.
3. Keep scoped styles in a `<style>` block at the bottom.
4. Add a nav link in `src/layouts/BaseLayout.astro` if it's a top-level page.
