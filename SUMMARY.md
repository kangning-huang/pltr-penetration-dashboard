# Summary — PLTR Industry Penetration Dashboard

Built a static **Vite + React + TypeScript** web app at `/workspace/pltr-penetration-dashboard` that charts Palantir industry **penetration proxies** on a **log-scale** Y-axis (Recharts).

## What shipped

- **Data:** Copied `industries.json`, `series.json`, and `METHODOLOGY.md` from `pltr-tracker/dashboard-brief` into `public/data/` (plus methodology at repo root, `docs/`, and `public/` for in-app link). Product brief at `docs/BRIEF.md`.
- **UI:** Dark investor-dashboard layout with industry checkboxes, unit filter, optional company-level revenue reference toggle, multi-series log chart, rich provenance tooltips, “Insufficient for trend” list for sparse series, and a methodology/disclaimer panel stating PLTR does not disclose industry revenue mix.
- **Honesty rules:** No invented numbers; lines only when ≥2 points and `insufficientForTrend=false`; single-point series render as dots + list entries.
- **Docs:** README with `npm install` / `npm run dev` / `npm run build` and instructions to append points to `series.json`.
- **Verify:** `npm install && npm run build` succeeds; zip at `/workspace/pltr-penetration-dashboard.zip` (excludes `node_modules`, includes `package-lock.json`).

## Seed coverage

10 industry cards (incl. company reference) and 22 series from AIPCon / earnings / press — majority sparse by design; multi-point trend lines currently include AT&T use cases, AT&T cumulative users, and HSS appeals.
