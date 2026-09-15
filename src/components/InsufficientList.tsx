import type { Series, Industry } from '../types/data';
import { colorForIndustry } from '../lib/colors';
import { formatDate, formatValue } from '../lib/format';

interface Props {
  series: Series[];
  industries: Industry[];
}

export function InsufficientList({ series, industries }: Props) {
  const nameOf = (id: string) =>
    industries.find((i) => i.id === id)?.name ?? id;

  if (series.length === 0) {
    return (
      <section className="panel insufficient">
        <h2>Insufficient for trend</h2>
        <p className="hint">No sparse series in the current filter.</p>
      </section>
    );
  }

  return (
    <section className="panel insufficient">
      <h2>Insufficient for trend</h2>
      <p className="hint">
        Series with fewer than 2 points are shown as dots (not lines). Sparse
        real points beat dense estimates.
      </p>
      <ul className="insuff-list">
        {series.map((s) => {
          const pt = s.points[0];
          return (
            <li key={s.id}>
              <span
                className="dot"
                style={{ background: colorForIndustry(s.industryId) }}
              />
              <div className="insuff-body">
                <div className="insuff-title">
                  <strong>{s.label}</strong>
                  <span className="muted"> · {nameOf(s.industryId)}</span>
                </div>
                {pt ? (
                  <div className="insuff-pt">
                    {formatDate(pt.date)} · {formatValue(pt.value, s.unit)} ·{' '}
                    <span className="chip">{pt.sourceType}</span>{' '}
                    <span className={`chip conf-${pt.confidence}`}>
                      {pt.confidence}
                    </span>
                    {pt.url ? (
                      <>
                        {' '}
                        <a href={pt.url} target="_blank" rel="noopener noreferrer">
                          source
                        </a>
                      </>
                    ) : null}
                  </div>
                ) : (
                  <div className="insuff-pt muted">No points</div>
                )}
                {s.note ? <div className="insuff-note">{s.note}</div> : null}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
