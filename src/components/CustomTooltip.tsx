import type { ChartPointMeta } from '../types/data';
import { formatDate, formatValue } from '../lib/format';

interface Props {
  active?: boolean;
  payload?: Array<{ payload: Record<string, unknown> }>;
  label?: string | number;
}

/** Recharts tooltip: date, value, label, sourceType, sourceRef, confidence, link */
export function CustomTooltip({ active, payload }: Props) {
  if (!active || !payload?.length) return null;

  const row = payload[0]?.payload;
  if (!row) return null;

  // Multi-series share one x; collect metas present on this date
  const metas: ChartPointMeta[] = [];
  for (const entry of payload) {
    const p = entry.payload;
    const metaKey = Object.keys(p).find((k) => k.endsWith('__meta'));
    if (metaKey && p[metaKey]) {
      metas.push(p[metaKey] as ChartPointMeta);
    }
  }

  // Fallback: single-point scatter may store meta differently
  if (metas.length === 0 && row.meta) {
    metas.push(row.meta as ChartPointMeta);
  }

  if (metas.length === 0) return null;

  return (
    <div className="tooltip">
      <div className="tooltip-date">{formatDate(String(metas[0].date))}</div>
      {metas.map((m) => (
        <div key={`${m.seriesId}-${m.date}`} className="tooltip-row">
          <div className="tooltip-label">{m.label}</div>
          <div className="tooltip-value">
            {formatValue(m.value, m.unit)}
            <span className="tooltip-unit"> ({m.unit})</span>
          </div>
          <div className="tooltip-meta">
            <span className="chip">{m.sourceType}</span>
            <span className={`chip conf-${m.confidence}`}>{m.confidence}</span>
          </div>
          <div className="tooltip-ref">{m.sourceRef}</div>
          {m.url ? (
            <a
              className="tooltip-link"
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Source ↗
            </a>
          ) : null}
        </div>
      ))}
    </div>
  );
}
