import type { Industry } from '../types/data';
import { colorForIndustry } from '../lib/colors';
import { stageLabel } from '../lib/format';

interface Props {
  industries: Industry[];
  enabled: Set<string>;
  onToggle: (id: string) => void;
  onSelectAll: () => void;
  onClear: () => void;
  showCompanyRef: boolean;
  onToggleCompanyRef: () => void;
  unitFilter: string;
  onUnitFilter: (u: string) => void;
  units: string[];
}

export function IndustryFilters({
  industries,
  enabled,
  onToggle,
  onSelectAll,
  onClear,
  showCompanyRef,
  onToggleCompanyRef,
  unitFilter,
  onUnitFilter,
  units,
}: Props) {
  const verticals = industries.filter((i) => i.id !== 'company');
  const company = industries.find((i) => i.id === 'company');

  return (
    <aside className="filters panel">
      <div className="panel-header">
        <h2>Industries</h2>
        <div className="filter-actions">
          <button type="button" className="btn-ghost" onClick={onSelectAll}>
            All
          </button>
          <button type="button" className="btn-ghost" onClick={onClear}>
            None
          </button>
        </div>
      </div>

      <ul className="industry-list">
        {verticals.map((ind) => {
          const on = enabled.has(ind.id);
          return (
            <li key={ind.id}>
              <label className={`industry-toggle ${on ? 'on' : ''}`}>
                <input
                  type="checkbox"
                  checked={on}
                  onChange={() => onToggle(ind.id)}
                />
                <span
                  className="swatch"
                  style={{ background: colorForIndustry(ind.id) }}
                />
                <span className="ind-name">{ind.name}</span>
                <span className="stage-pill">{stageLabel(ind.stage)}</span>
              </label>
              {ind.flagshipLogos?.length ? (
                <div className="logos">{ind.flagshipLogos.join(' · ')}</div>
              ) : null}
            </li>
          );
        })}
      </ul>

      <div className="panel-section">
        <h3>Company reference</h3>
        <p className="hint">
          Company-level PLTR revenue (USD) — not industry mix. Enabling
          switches the unit filter to usd.
        </p>
        <label className={`industry-toggle company-ref ${showCompanyRef ? 'on' : ''}`}>
          <input
            type="checkbox"
            checked={showCompanyRef}
            onChange={onToggleCompanyRef}
          />
          <span
            className="swatch"
            style={{ background: colorForIndustry('company') }}
          />
          <span className="ind-name">
            {company?.name ?? 'Company (reference)'}
          </span>
        </label>
      </div>

      <div className="panel-section">
        <h3>Unit filter</h3>
        <p className="hint">Avoid mixing incompatible units on one log axis.</p>
        <div className="unit-pills">
          {units.map((u) => (
            <button
              key={u}
              type="button"
              className={`pill ${unitFilter === u ? 'active' : ''}`}
              onClick={() => onUnitFilter(u)}
            >
              {u}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
