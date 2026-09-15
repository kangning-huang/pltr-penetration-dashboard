# CHANGELOG — AIPCon enrichment of series.json

**Date:** 2026-09-15
**Scope:** Enumerated AIPCon 3–11 + Community Demo Expo (catalog); extracted client numeric disclosures from YouTube auto-captions (yt-dlp), AIPCon 11 stockanalysis transcript, Palantir AIPCon 8 blogs, and named press. **No invented numbers.**

## Event coverage

| Event | Approx. date | Notes |
|-------|--------------|-------|
| AIPCon 3 | 2024-03 | General Mills ($14M/yr, 200 plants) captions |
| AIPCon 4 | 2024-06-06 | United, Sompo, Tampa General, Fujitsu captions; Demo Expo orgs catalogued (no Expo numeric series without talk metrics) |
| AIPCon 5 | 2024-09 | AT&T (existing), Mount Sinai, Lear, Tampa sepsis captions |
| AIPCon 6 | 2025-03-13 | AT&T Scout captions (660 apps / 39k / 100 engineers), Parexel, Walgreens, Heineken, Wendy’s QSCC |
| AIPCon 7 | 2025-06 | Nebraska Medicine, Hertz, AIG captions |
| AIPCon 8 | 2025-09-08 | bp/Novartis/AA (existing), Lear JIT, HSS, Fujitsu, Lumen captions + Palantir blogs (Nebraska 20+ UC, Ursa Major hours, Cavanagh 1k employees, HSS Patient Card scale) |
| AIPCon 9 | 2026-03-12 | Centrus press $300M identified savings (speaker); Navy/GE mostly qualitative (no YT captions) |
| AIPCon 10 | 2026-06-04 | Parts Town 1,800 techs; McCarthy 5,000 activities (LinkedIn/YT); Hertz Fleet OS cut no captions |
| AIPCon 11 | 2026-09-10 | NVIDIA (existing + parts/rack press); L3Harris / Acrisure / Elmet from stockanalysis transcript; Hexion $300M EBITDA treated as **pre-Palantir** transformation — **not seeded** |
| Demo Expo (Jun 2024) | 2024-06 | Orgs listed in catalog; no standalone numeric series without public metrics |

## Summary counts

- Series before → after: **22 → 65** (+43)
- Points before → after: **25 → 74**
- Multi-point trendable series (insufficientForTrend=false): **8**

## New / extended points by industry

### Company (reference) (`company`)

| Series | Points before → after | New / changed AIPCon (or press) sources |
|--------|----------------------|----------------------------------------|
| `pltr-total-revenue` — PLTR total revenue (quarter) | 1 → 1 | (unchanged seed) |
| `pltr-us-comm-revenue` — PLTR US commercial revenue (quarter) | 1 → 1 | (unchanged seed) |

### Telecom (`telecom`)

| Series | Points before → after | New / changed AIPCon (or press) sources |
|--------|----------------------|----------------------------------------|
| `telecom-att-use-cases` — AT&T Foundry use cases / applications | 2 → 2 | AIPCon 6 captions upgraded confidence high (660 apps / 39k users) |
| `telecom-att-users-monthly` — AT&T Foundry monthly active users | 1 → 2 | Added AIPCon 6 continuity point (same 8,500 MAU); insufficientForTrend remains true |
| `telecom-att-data-sources` — AT&T Foundry data sources | 1 → 1 | (unchanged seed) |
| `telecom-att-users-cumulative` — AT&T Foundry cumulative users touched | 2 → 2 | AIPCon 6 captions upgraded confidence high (660 apps / 39k users) |
| `telecom-att-engineers` — AT&T dedicated Foundry/AIP engineers | 0 → 1 | AIPCon 6 AT&T — spoken 'over 100 AT&T dedicated engineers' supporting Scout/Foun |
| `telecom-lumen-data-sources` — Lumen enterprise product data sources | 0 → 1 | AIPCon 8 Lumen — spoken '~36 different data sources' for enterprise product jour |

### Energy / Oil & Gas (`energy`)

| Series | Points before → after | New / changed AIPCon (or press) sources |
|--------|----------------------|----------------------------------------|
| `energy-bp-equipment-thunder-horse` — bp Thunder Horse equipment pieces | 1 → 1 | (unchanged seed) |
| `energy-bp-simulations` — bp digital twin simulations (prior year) | 1 → 1 | (unchanged seed) |
| `energy-bp-equipment-global-agents` — bp equipment covered by scaled agent insights (global O&G) | 1 → 1 | (unchanged seed) |
| `energy-bp-sensors` — bp Thunder Horse real-time sensors | 1 → 1 | (unchanged seed) |
| `energy-centrus-savings-usd` — Centrus identified operational savings (USD) | 0 → 1 | Centrus–Palantir partnership (AIPCon 9 speaker) — Centrus cites nearly $300M in  |

### Pharma / Life Sciences (`pharma`)

| Series | Points before → after | New / changed AIPCon (or press) sources |
|--------|----------------------|----------------------------------------|
| `pharma-novartis-patient-lives` — Novartis Data42 real-world patient lives | 1 → 1 | (unchanged seed) |
| `pharma-novartis-clinical-trials` — Novartis Data42 clinical trials integrated | 1 → 1 | (unchanged seed) |
| `pharma-novartis-trial-patients` — Novartis Data42 trial patients | 1 → 1 | (unchanged seed) |
| `pharma-novartis-dose-prediction-hours` — Novartis Closing the Loop dose-prediction cycle time (hours) | 0 → 1 | AIPCon 8 Novartis — Closing the Loop dose prediction ~1 week → ~2 hours (~90–98% |
| `pharma-parexel-submission-weeks` — Parexel time to submission-ready materials (weeks) | 0 → 2 | AIPCon 6 Parexel — baseline 10–12 week average to submission-ready materials (mi; AIPCon 6 Parexel — estimated reduction to ~3–4 weeks (midpoint 3.5) |

### Airlines / Aviation (`airlines`)

| Series | Points before → after | New / changed AIPCon (or press) sources |
|--------|----------------------|----------------------------------------|
| `airlines-aa-flights-daily` — American Airlines flights / day (ops scale context) | 1 → 1 | (unchanged seed) |
| `airlines-hertz-fleet-vehicles` — Hertz fleet vehicles (Fleet OS scale context) | 0 → 1 | AIPCon 7 Hertz — Fleet OS talk (spoken 'more than half a million vehicles' / >11 |
| `airlines-hertz-locations` — Hertz rental locations | 0 → 1 | AIPCon 7 Hertz — spoken 'more than 11,000 locations' across 160 countries |
| `airlines-united-customers-saved` — United customers saved from delay/cancel (cumulative) | 0 → 1 | AIPCon 4 United — spoken 'saved over 100,000 customers from delays and cancellat |
| `airlines-united-delays-avoided` — United Airlines delays avoided (cumulative at talk) | 0 → 1 | AIPCon 4 United — spoken 'almost 300 delays' and '20 cancellations' avoided; 'ov |
| `airlines-united-flights-daily` — United Airlines flights / day (ops scale context) | 0 → 1 | AIPCon 4 United Airlines — The Future of Aircraft Maintenance (spoken 2,600 flig |

### AI infra / Semiconductors (`ai_infra`)

| Series | Points before → after | New / changed AIPCon (or press) sources |
|--------|----------------------|----------------------------------------|
| `ai_infra-nvidia-allocation-accuracy` — NVIDIA fine-tuned Nemotron allocation-task accuracy % | 1 → 1 | (unchanged seed) |
| `ai_infra-nvidia-parts-per-rack` — NVIDIA Vera Rubin rack parts count (supply-chain scale) | 0 → 1 | AIPCon 11 / NVIDIA–Palantir BW — 1.3 million parts per Vera Rubin rack (supply-c |

### Defense / Gov (`defense`)

| Series | Points before → after | New / changed AIPCon (or press) sources |
|--------|----------------------|----------------------------------------|
| `defense-maven-builders` — Maven Smart System builders on platform | 1 → 1 | (unchanged seed) |
| `defense-us-gov-revenue` — PLTR US government revenue (quarter) — defense+civil mix | 1 → 1 | (unchanged seed) |
| `defense-elmet-apps` — Elmet Group Foundry/AIP applications deployed | 0 → 1 | AIPCon 11 The Elmet Group — 10 applications rolled out across 2 divisions in ~2  |
| `defense-elmet-defense-programs` — Elmet defense programs supported | 0 → 1 | AIPCon 11 The Elmet Group — supports >125 defense programs (+ ~90 DOE projects) |
| `defense-l3harris-data-connections` — L3Harris UDL data connections | 0 → 1 | AIPCon 11 L3Harris — spoken '3.5 million data connections' for near real-time in |
| `defense-l3harris-data-feeds` — L3Harris scheduled data feeds into Foundry | 0 → 1 | AIPCon 11 L3Harris — spoken 'more than 5,000 scheduled data feeds' into Foundry  |
| `defense-l3harris-erps` — L3Harris ERPs in unified data layer | 0 → 1 | AIPCon 11 L3Harris — enterprise UDL pulling together 33 ERPs (transcript) |
| `defense-l3harris-model-cost-reduction-pct` — L3Harris fine-tuned vs frontier model cost reduction % | 0 → 1 | AIPCon 11 L3Harris — fine-tuned open-source model cost 95% lower than frontier m |
| `defense-l3harris-mvp-weeks` — L3Harris Program Digital Cockpit MVP delivery (weeks) | 0 → 1 | AIPCon 11 L3Harris — Program Digital Cockpit MVP in 12 weeks |

### Manufacturing / Auto (`manufacturing`)

| Series | Points before → after | New / changed AIPCon (or press) sources |
|--------|----------------------|----------------------------------------|
| `manufacturing-lear-users` — Lear Foundry/AIP users | 1 → 1 | (unchanged seed) |
| `manufacturing-lear-plants` — Lear plants on JIT control tower | 1 → 1 | (unchanged seed) |
| `manufacturing-cavanagh-employees` — Thomas Cavanagh Construction employees on Foundry workforce app | 0 → 1 | AIPCon 8 blog — Thomas Cavanagh Construction workforce app deployed to over 1,00 |
| `manufacturing-fujitsu-applications` — Fujitsu internal Foundry applications | 0 → 1 | AIPCon 4 Fujitsu — spoken 'built more than 100 applications' internally on Found |
| `manufacturing-fujitsu-customer-savings-usd` — Fujitsu customer SCM annual cost savings (USD) | 0 → 1 | AIPCon 8 Fujitsu — Japanese manufacturer customer: annual cost saving 'over $10  |
| `manufacturing-fujitsu-users` — Fujitsu internal Foundry users | 0 → 1 | AIPCon 4 Fujitsu — spoken '15,000 Foundry users' and 'more than 100 Foundry engi |
| `manufacturing-generalmills-plants` — General Mills North America plants (ops scale) | 0 → 1 | AIPCon 3 General Mills — spoken over 200 plants in North America fed by ~4,000 s |
| `manufacturing-generalmills-savings-usd` — General Mills intelligent-execution annual savings (USD) | 0 → 1 | AIPCon 3 General Mills — spoken '~$40,000/day ≈ $14 million annually' savings fr |
| `manufacturing-heineken-accounts` — Heineken accounts in next-best-item AIP use case | 0 → 1 | AIPCon 6 Heineken — next-best-item across '350,000 accounts'; also 33k container |
| `manufacturing-lear-facilities` — Lear global facilities (company footprint) | 0 → 1 | AIPCon 5 Lear — spoken 265 facilities / sites globally (company footprint; Found |
| `manufacturing-mccarthy-activities` — McCarthy Pulse concurrent construction activities | 0 → 1 | AIPCon 10 McCarthy Pulse — risks across 5,000 concurrent activities (Palantir Li |
| `manufacturing-partstown-technicians` — Parts Town field technicians on ontology dispatch | 0 → 1 | AIPCon 10 Parts Town — Ontology-powered dispatch/routing across 1,800 field tech |
| `manufacturing-ursamajor-eng-hours-saved` — Ursa Major projected engineering hours saved / year | 0 → 1 | AIPCon 8 blog (Ursa Major demo) — projected '10,000 to 15,000 hours of engineeri |
| `manufacturing-wendys-restaurants` — Wendy's QSCC restaurants in supply-chain network | 0 → 1 | AIPCon 6 Wendy's QSCC — spoken orders from '6,500 restaurants'; inventory/Frosty |

### Healthcare / Hospitals (`healthcare`)

| Series | Points before → after | New / changed AIPCon (or press) sources |
|--------|----------------------|----------------------------------------|
| `healthcare-nebraska-use-cases` — Nebraska Medicine use cases | 1 → 1 | (unchanged seed) |
| `healthcare-hss-appeals-monthly` — HSS denial appeals processed / month | 2 → 2 | (unchanged seed) |
| `healthcare-hss-appeal-minutes` — HSS insurance appeal handling time (minutes) | 0 → 2 | AIPCon 8 HSS — 45 minutes manual appeal work (pre); AIPCon 8 HSS — appeal work down to 5 minutes (built in ~5 weeks) |
| `healthcare-hss-appeal-success-pct` — HSS insurance appeal success rate % | 0 → 2 | HSS AIPCon 8 / Newsweek quote — appeals success 68% → 99%; HSS AIPCon 8 / Newsweek — appeals success 99% |
| `healthcare-hss-patients-annual` — HSS patients cared for / year (ops scale) | 0 → 1 | AIPCon 8 blog HSS — >200,000 patients; >40,000 surgical procedures/year |
| `healthcare-mountsinai-denial-minutes` — Mount Sinai clinical denial letter time (minutes) | 0 → 2 | AIPCon 5 Mount Sinai — denial letter 45 minutes–1 hour (midpoint 52.5≈52) pre-LL; AIPCon 5 Mount Sinai — denial letter created/reviewed in ~8 minutes; cited ~$133 |
| `healthcare-nebraska-discharge-accuracy-pct` — Nebraska Medicine discharge prediction accuracy % | 0 → 1 | AIPCon 7 Nebraska Medicine — spoken '95% discharge prediction accuracy' |
| `healthcare-nebraska-review-minutes` — Nebraska Medicine physician review cycle time (minutes) | 0 → 2 | AIPCon 7 Nebraska Medicine — physician review average was 80 minutes (pre); AIPCon 7 Nebraska Medicine — review reduced to 7 minutes; 50–70 pages → 2 |
| `healthcare-tampa-lives-saved-annual` — Tampa General sepsis lives saved / year (est.) | 0 → 1 | AIPCon 5 Tampa General — sepsis program 'save about 300 lives a year' (conservat |
| `healthcare-tampa-los-reduction-pct` — Tampa General length-of-stay reduction % | 0 → 1 | AIPCon 4 Tampa General — spoken reduced length of stay by 30% |
| `healthcare-walgreens-stores` — Walgreens stores on Foundry pharmacy workflows | 0 → 1 | AIPCon 6 Walgreens — pilot 10 stores → ~4,000 stores within 8 months on Foundry  |

### Financial Services / Insurance (`fs`)

| Series | Points before → after | New / changed AIPCon (or press) sources |
|--------|----------------------|----------------------------------------|
| `fs-sompo-users` — SOMPO Foundry/AIP users | 1 → 1 | (unchanged seed) |
| `fs-acrisure-acquisitions` — Acrisure M&A roll-up companies on Auris AI journey | 0 → 1 | AIPCon 11 Acrisure — spoken 'close to 1,000 businesses' / '1,000 acquisitions' r |
| `fs-acrisure-carrier-partners` — Acrisure carrier partners in Exchange marketplace | 0 → 1 | AIPCon 11 Acrisure — spoken 'over 2,000 carrier partners' |
| `fs-aig-data-quality-pct` — AIG underwriter-assistance data quality accuracy % | 0 → 1 | AIPCon 7 AIG — spoken 'over a 90% data quality accuracy rate' vs manual; underwr |
| `fs-sompo-profit-improvement-usd` — SOMPO underwriting profit improvement (USD, 3-year cumulative) | 0 → 1 | AIPCon 4 Sompo — spoken '$60 million U.S. dollar improvement in profit' over las |

## industries.json flagship logo updates

| Industry | flagshipLogos |
|----------|---------------|
| Telecom | AT&T, Lumen |
| Energy / Oil & Gas | bp, APA, Rio Tinto, Centrus |
| Pharma / Life Sciences | Novartis, Parexel |
| Airlines / Aviation | American Airlines, United Airlines, Hertz |
| AI infra / Semiconductors | NVIDIA |
| Defense / Gov | US Army (Maven), NATO, US Navy (ShipOS), L3Harris, Elmet Group |
| Manufacturing / Auto | Lear, Stellantis, HD Hyundai, Fujitsu, Ursa Major, Parts Town, McCarthy, General Mills, Wendy's QSCC, Heineken |
| Healthcare / Hospitals | Nebraska Medicine, Tampa General, HSS, Mount Sinai, Walgreens |
| Financial Services / Insurance | SOMPO, AIG, Acrisure, TWG Global, Citi Wealth |

## Explicitly excluded (no invented $ / unverified)

- American Airlines “tens of millions” USD — directional only (already noted in seed).
- bp “triple figure” ROI — qualitative only.
- Hexion $300M EBITDA — speaker framed as prior 3-year reinvention before “building today with Palantir.”
- Ask AT&T GenAI platform metrics (100k users, 120M API calls) — not Foundry.
- Army/Maven contract ceilings — caps, not penetration trajectories (already excluded).
- Demo Expo orgs without public numeric talks.
- AIPCon 9–11 cuts lacking captions where transcript/press lacked hard adoption metrics (FAA qualitative SMS; GE/Navy qualitative OS narrative).

## Sync

- Overwrote `/workspace/pltr-dash-push/public/data/series.json` and `industries.json`
- Synced copies to `/workspace/pltr-tracker/dashboard-brief/data/`
