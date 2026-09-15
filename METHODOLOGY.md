# PLTR Industry Penetration Dashboard — Methodology

**As of:** 2026-09-15  
**Seed sources:** `earnings-baseline.md`, `deals-by-industry.md`, `aipcon-presentations.md`, `aipcon-notes/*.md`, `industry-tam.md` (stage labels only).

---

## 1. What these charts are (and are not)

Palantir **does not disclose** commercial revenue mix by industry. Every industry series in `series.json` is a **proxy index** built from public client disclosures (AIPCon talks, press releases) or company-level segment figures from PLTR earnings.

| Layer | Meaning |
|-------|---------|
| **Company reference** | Official PLTR total revenue / US commercial revenue by quarter (SEC). |
| **Industry proxy** | Client-stated use cases, users, data sources, equipment, patients, builders, etc. |
| **Not claimed** | Industry $ revenue share, ARR by vertical, or official segment mix. |

**Disclaimer:** Proxy growth ≠ Palantir booking growth. A rising AT&T use-case count supports an expansion/NDR narrative but cannot be mapped to dollars without disclosure.

---

## 2. Point schema

Every point must include:

| Field | Rule |
|-------|------|
| `date` | ISO `YYYY-MM-DD` (quarter end for earnings; event/upload date for AIPCon; press date for press). |
| `value` | Number **> 0** (required for log-scale Y-axis). |
| `sourceType` | `pltr_earnings` \| `client_earnings` \| `aipcon` \| `press` |
| `sourceRef` | Short citation string |
| `url` | Canonical URL when known |
| `confidence` | `high` \| `med` \| `low` |

Series-level:

- `insufficientForTrend: true` when `pointCount < 2` (trend line needs ≥2 points).
- `note` explains empty or sparse series, exclusions, and caveats.

**Never invent numbers.** Sparse real points beat dense estimates. Directional phrases (“tens of millions”, “triple figure ROI”) are **not** seeded as numeric values.

---

## 3. How proxies work by industry

### Company (reference)
- **Total revenue** and **US commercial revenue** from Q2 FY2026 SEC EX-99.1 only (sole quarter with explicit $ in seed research).
- FY2025 annuals / H1 totals exist in research files but are **not** additional quarterly points.
- Use as dual-panel / reference line against industry proxies.

### Telecom
- Primary proxy: **AT&T** Foundry use cases, MAU, data sources, cumulative users (AIPCon 5 talk + AIPCon 6 follow-on quotes in `att.md`).
- Use-case count **580 → 660** and cumulative users **36k → 39k** are the only multi-point trajectories in seed.
- Do **not** conflate Ask AT&T GenAI platform metrics (100k users, etc.) with Foundry metrics.

### Energy
- Primary proxy: **bp** AIPCon 8 — Thunder Horse equipment (>60k), sensors (40k), digital twin simulations (>1.4M), global agent-covered equipment (~1.4M).
- Single-event snapshot → all energy series `insufficientForTrend` until a later bp disclosure.
- Partnership length (>10y) and “triple figure” ROI are qualitative only.

### Pharma / Life Sciences
- Primary proxy: **Novartis** Data42 AIPCon 8 — patient lives (>700M), clinical trials (~3k), trial patients (~1M).
- These measure **ontology/data-estate scale**, not PLTR revenue.
- Dose-prediction time cut (~week → ~2 hours) and ~100% small-molecule adoption are outcome metrics; adoption % omitted from seed (not a count trajectory).

### Airlines / Aviation
- **American Airlines** AIPCon 8 discloses ~6,500 flights/day (ops context) and “tens of millions” USD value unlocked.
- Flights seeded as context scale; **value_unlocked_usd omitted** because “tens of millions” is not a precise number.
- Not a Foundry user/use-case count.

### AI infra / Semiconductors
- **NVIDIA** AIPCon 11: allocation-task accuracy **86.7%** seeded as optional non-penetration capability metric.
- No users, use cases, or contract $ disclosed → no penetration trajectory series.
- SAIOS productization is qualitative leading-indicator only.

### Defense / Gov
- **Maven builders >25,000** (Q2 FY2026 call) — platform adoption proxy.
- **US government revenue $809M** — company segment (defense **and** civil); closest disclosed $ sleeve, not pure defense mix.
- Army Maven ceilings ($480M / ~$1.3B) and $10B EA are **caps / optionality**, not obligated spend or penetration trajectories — excluded from series points.

### Manufacturing / Auto
- **Lear** >11,000 users (press 2025-09-04); **175+ plants** on JIT control tower (AIPCon catalog).
- Stellantis / HD Hyundai expansions have **undisclosed** deal $ in research files → no $ series.

### Healthcare / Hospitals
- **Nebraska Medicine** 20+ use cases (AIPCon catalog / blog).
- **HSS** appeals 100 → 1,000/mo (before/after from AIPCon 8 signal) — only healthcare multi-point series in seed.
- Anonymized Q2 call **$37M** nonprofit health TCV is a booking example, not attributed to a named logo time series.

### Financial Services / Insurance
- **SOMPO** 8,000+ users (press 2025-08-12).
- TWG JV, AIG, Acrisure lack disclosed user/use-case counts in research files → no additional points.
- Anonymized asset-manager **$35M** TCV is booking context, not a named FS trajectory.

---

## 4. Confidence rubric

| Level | When used |
|-------|-----------|
| **high** | Spoken/SEC figure from primary video captions or EX-99.1 with clear numeral. |
| **med** | Secondary but documented in research notes (e.g. AIPCon 6 palantir.com quote; catalog blog metrics; approximate before/after dates). |
| **low** | Reserved for future estimated points — **none in seed**. |

---

## 5. Stage labels

`industries.json` `stage` values (`early` | `early-mid` | `mid`) come **only** from `industry-tam.md` public-evidence penetration rubric. They are judgment labels from public logos/IR, not cohort data. AI infra has no dedicated TAM row → labeled `early` with an explicit note.

---

## 6. How to append a new point

1. Confirm the number appears in a public primary source (earnings release, AIPCon talk, named press).
2. Add to the matching series in `series.json` (or create a new series with `industryId` + `metric`).
3. Fill all required point fields; set `confidence` honestly.
4. Recalculate `pointCount` and set `insufficientForTrend` to `false` only when `pointCount >= 2`.
5. Update `asOf` and mention the source in git commit / changelog.
6. Prefer metrics that can accumulate over time (use cases, users, sources) over one-off ROI anecdotes.

---

## 7. Chart guidance

- **Y-axis:** log scale (all values > 0).
- **Do not** mix incompatible units on one axis without toggle (e.g. AT&T use cases vs bp equipment vs USD revenue).
- Empty / single-point industries should show **“insufficient public points”** / `insufficientForTrend` in UI.
- Hover must show date, value, metric, `sourceType`, `sourceRef`, URL.

---

## 8. Seed exclusions (intentional)

| Claim in research | Why not seeded as a number |
|-------------------|----------------------------|
| AA “tens of millions” value | Not a precise USD figure |
| bp “triple figure” ROI | Not a precise % |
| NVIDIA 55.5% Ultra baseline | Capability comparison, not penetration; 86.7% kept only as optional non-penetration series |
| Army $10B EA / Maven ceilings | Caps, not obligated revenue |
| Ask AT&T 100k users / 120M API calls | Separate GenAI platform, not Foundry |
| Centrus ~$300M savings | Customer ROI claim, not PLTR contract value |
| Lear >$30M H1 savings | Customer savings, not deal size |

---

*Proxy methodology for internal pltr-tracker dashboard seed. Not investment advice.*
