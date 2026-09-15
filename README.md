# PLTR Industry Penetration Dashboard

Dark investor-style dashboard of **proxy** market-penetration trajectories for Palantir (PLTR) by industry, with a **log-scale** Y-axis.

> **Disclaimer:** Palantir does **not** disclose commercial revenue mix by industry. Every industry series is a proxy index from AIPCon talks, press, or PLTR earnings — not official segment revenue. Not investment advice.

## Stack

- Vite + React + TypeScript
- Recharts (log-scale Y-axis)
- Static JSON in `public/data/` — no auth, no backend

## Quick start

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview   # optional local preview of dist/
```

## Data files

| File | Role |
|------|------|
| `public/data/industries.json` | Industry cards, stage labels, flagship logos |
| `public/data/series.json` | Metric series + dated points with provenance |
| `METHODOLOGY.md` / `docs/METHODOLOGY.md` | Proxy rules, exclusions, confidence rubric |
| `docs/BRIEF.md` | Product brief |

## How to add a data point to `series.json`

1. Confirm the number appears in a **public primary source** (earnings release, AIPCon talk, named press). **Do not invent numbers.**
2. Find the matching series in `public/data/series.json`, or create a new series with `industryId`, `metric`, `unit`, and `label`.
3. Append a point:

```json
{
  "date": "YYYY-MM-DD",
  "value": 1234,
  "sourceType": "aipcon",
  "sourceRef": "Short citation",
  "url": "https://…",
  "confidence": "high"
}
```

`sourceType` ∈ `pltr_earnings` | `client_earnings` | `aipcon` | `press`  
`confidence` ∈ `high` | `med` | `low`  
`value` must be **> 0** (log scale).

4. Update `pointCount` to match `points.length`.
5. Set `insufficientForTrend` to `false` only when `pointCount >= 2`; otherwise `true`.
6. Update top-level `asOf` and commit with a note of the source.

Prefer metrics that can accumulate over time (use cases, users, sources) over one-off ROI anecdotes. See `METHODOLOGY.md` §6–8 for exclusions.

## Features (v1)

1. Multi-series chart of penetration proxies over time; **log** Y-axis.
2. Industry toggles; series colored by industry.
3. Hover tooltip: date, value, label, sourceType, sourceRef, confidence, link.
4. Series with `insufficientForTrend` or &lt;2 points → scatter dots + “Insufficient for trend” list (no fake lines).
5. Optional **Company (reference)** toggle for US Comm / total revenue — labeled company-level, not industry mix.
6. Methodology / disclaimer panel.
7. Unit filter (`count` / `usd` / `percent`) so incompatible units are not mixed on one axis.

## License / use

Internal research dashboard seed. Not investment advice.
