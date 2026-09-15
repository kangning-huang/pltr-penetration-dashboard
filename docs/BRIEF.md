# PLTR Industry Penetration Dashboard — Product Brief

## Goal
Website dashboard showing **market penetration trajectories into each industry** for Palantir (PLTR), with **log-scale trend lines**. Built for a concentrated holder who wants to see whether AIP/Foundry penetration is accelerating by vertical, to help forecast earnings.

## Critical constraint
Palantir does **not** disclose commercial revenue mix by industry. The dashboard must:
1. Be honest that industry series are **proxy indices** (not official segment revenue).
2. Show **source provenance** on every data point (PLTR earnings / client earnings / AIPCon).
3. Allow multiple metric types per industry (use cases, users, $ value unlocked, named logos, US Comm company-level as reference).

## Charts
- One multi-series chart (and/or per-industry cards) with **Y-axis log scale**.
- X-axis: time (quarter or event date).
- Hover: date, value, metric name, source type, citation URL/note.
- Toggle industries on/off; toggle metric families.
- Optional reference line: company US commercial revenue (from PLTR earnings) on its own log scale or dual panel.

## Data model (suggested)
```json
{
  "industries": [{ "id": "telecom", "name": "Telecom", "stage": "early-mid" }],
  "series": [{
    "id": "telecom-use-cases",
    "industryId": "telecom",
    "metric": "use_cases",
    "unit": "count",
    "label": "AT&T Foundry use cases",
    "points": [
      { "date": "2024-XX-XX", "value": 580, "sourceType": "aipcon", "sourceRef": "AIPCon 5 AT&T", "url": "...", "confidence": "high" }
    ]
  }]
}
```

Metric families to support:
- `use_cases`, `users_monthly`, `data_sources`, `value_unlocked_usd`, `equipment_count`, `customer_logos` (count of named public logos in that vertical over time), `pltr_us_comm_revenue_usd` (company-level reference only).

## Seed content
Extract initial points from attached research files (earnings baseline, deals-by-industry, AIPCon notes for AT&T/bp/Novartis/AA/NVIDIA, aipcon-presentations catalog). Do not invent numbers; mark estimates clearly. Prefer sparse real points over dense fake series.

Priority industries for v1: Telecom, Energy, Pharma/LS, Airlines, AI infra/semis, Defense (gov), Manufacturing/Auto, Healthcare hospitals, FS/Insurance.

## Stack preferences
- Modern static or lightly serverless web app (Vite + React or Next is fine).
- Chart library that supports log scales well (e.g. Recharts, Observable Plot, Chart.js, ECharts).
- Data as versioned JSON/CSV in repo so the bot can append points later.
- README: how to add a point, methodology, disclaimers.
- Local `npm run dev` works; nice polish, dark finance-dashboard aesthetic OK.
- No fake authentication; no paid APIs required for v1.

## Done when
1. App runs locally with seed data for ≥5 industries.
2. Log-scale trend lines render; empty industries show “insufficient public points”.
3. Methodology + disclaimer page/section exists.
4. Clear path to append new earnings/AIPCon points as JSON.
