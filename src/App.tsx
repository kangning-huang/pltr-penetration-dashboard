import { useEffect, useMemo, useState } from 'react';
import type { IndustriesFile, SeriesFile, Series } from './types/data';
import { IndustryFilters } from './components/IndustryFilters';
import { PenetrationChart } from './components/PenetrationChart';
import { InsufficientList } from './components/InsufficientList';
import { MethodologyPanel } from './components/MethodologyPanel';
import './App.css';

function isTrendable(s: Series): boolean {
  return !s.insufficientForTrend && s.points.length >= 2;
}

export default function App() {
  const [industriesFile, setIndustriesFile] = useState<IndustriesFile | null>(
    null,
  );
  const [seriesFile, setSeriesFile] = useState<SeriesFile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [enabledIndustries, setEnabledIndustries] = useState<Set<string>>(
    new Set(),
  );
  const [showCompanyRef, setShowCompanyRef] = useState(false);
  const [unitFilter, setUnitFilter] = useState('count');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const base = import.meta.env.BASE_URL;
        const [indRes, serRes] = await Promise.all([
          fetch(`${base}data/industries.json`),
          fetch(`${base}data/series.json`),
        ]);
        if (!indRes.ok || !serRes.ok) {
          throw new Error('Failed to load data JSON');
        }
        const ind = (await indRes.json()) as IndustriesFile;
        const ser = (await serRes.json()) as SeriesFile;
        if (cancelled) return;
        setIndustriesFile(ind);
        setSeriesFile(ser);
        // Default: all verticals on, company off
        setEnabledIndustries(
          new Set(ind.industries.filter((i) => i.id !== 'company').map((i) => i.id)),
        );
        setReady(true);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const units = useMemo(() => {
    if (!seriesFile) return ['count'];
    const u = new Set(seriesFile.series.map((s) => s.unit));
    return Array.from(u).sort();
  }, [seriesFile]);

  const visibleSeries = useMemo(() => {
    if (!seriesFile) return { trend: [] as Series[], sparse: [] as Series[] };
    const filtered = seriesFile.series.filter((s) => {
      if (s.unit !== unitFilter) return false;
      if (s.industryId === 'company') return showCompanyRef;
      return enabledIndustries.has(s.industryId);
    });
    return {
      trend: filtered.filter(isTrendable),
      sparse: filtered.filter((s) => !isTrendable(s)),
    };
  }, [seriesFile, enabledIndustries, showCompanyRef, unitFilter]);

  const toggleIndustry = (id: string) => {
    setEnabledIndustries((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAll = () => {
    if (!industriesFile) return;
    setEnabledIndustries(
      new Set(
        industriesFile.industries
          .filter((i) => i.id !== 'company')
          .map((i) => i.id),
      ),
    );
  };

  const clearAll = () => setEnabledIndustries(new Set());

  if (error) {
    return (
      <div className="app shell">
        <header className="topbar">
          <h1>PLTR Industry Penetration</h1>
        </header>
        <main className="error-state">Failed to load data: {error}</main>
      </div>
    );
  }

  if (!ready || !industriesFile || !seriesFile) {
    return (
      <div className="app shell">
        <header className="topbar">
          <h1>PLTR Industry Penetration</h1>
        </header>
        <main className="loading-state">Loading proxy series…</main>
      </div>
    );
  }

  const asOf = seriesFile.asOf;

  return (
    <div className="app shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Palantir · proxy indices</p>
          <h1>Industry Penetration Dashboard</h1>
          <p className="subtitle">
            Log-scale trajectories from AIPCon / earnings / press · as of {asOf}
          </p>
        </div>
        <a className="top-link" href="#methodology">
          Methodology
        </a>
      </header>

      <div className="banner">
        Palantir does <strong>not</strong> disclose industry revenue mix. Charts
        show public penetration <em>proxies</em>, not official segment dollars.
      </div>

      <div className="layout">
        <IndustryFilters
          industries={industriesFile.industries}
          enabled={enabledIndustries}
          onToggle={toggleIndustry}
          onSelectAll={selectAll}
          onClear={clearAll}
          showCompanyRef={showCompanyRef}
          onToggleCompanyRef={() => {
            setShowCompanyRef((v) => {
              const next = !v;
              if (next) setUnitFilter('usd');
              return next;
            });
          }}
          unitFilter={unitFilter}
          onUnitFilter={setUnitFilter}
          units={units}
        />

        <div className="main-col">
          <section className="panel chart-panel">
            <div className="panel-header">
              <h2>Penetration proxies over time</h2>
              <span className="badge">Y · log scale</span>
            </div>
            <PenetrationChart
              trendSeries={visibleSeries.trend}
              sparseSeries={visibleSeries.sparse}
              industries={industriesFile.industries}
            />
          </section>

          <InsufficientList
            series={visibleSeries.sparse}
            industries={industriesFile.industries}
          />

          <MethodologyPanel
            asOf={asOf}
            industryDisclaimer={industriesFile.disclaimer}
            seriesDisclaimer={seriesFile.disclaimer}
          />
        </div>
      </div>

      <footer className="footer">
        Seed data from pltr-tracker research · Not investment advice ·{' '}
        {seriesFile.series.length} series · {industriesFile.industries.length}{' '}
        industry cards
      </footer>
    </div>
  );
}
