import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import type { Series, Industry, ChartPointMeta } from '../types/data';
import { colorForIndustry } from '../lib/colors';
import { formatValue } from '../lib/format';
import { CustomTooltip } from './CustomTooltip';

interface Props {
  trendSeries: Series[];
  sparseSeries: Series[];
  industries: Industry[];
}

type Row = Record<string, string | number | ChartPointMeta | undefined>;

function buildChartData(
  trendSeries: Series[],
  sparseSeries: Series[],
): { rows: Row[]; lineKeys: string[]; scatterKeys: string[] } {
  const dateSet = new Set<string>();
  for (const s of [...trendSeries, ...sparseSeries]) {
    for (const p of s.points) dateSet.add(p.date);
  }
  const dates = Array.from(dateSet).sort();
  const rows: Row[] = dates.map((date) => ({ date }));

  const byDate = new Map(rows.map((r) => [r.date as string, r]));
  const lineKeys: string[] = [];
  const scatterKeys: string[] = [];

  for (const s of trendSeries) {
    lineKeys.push(s.id);
    for (const p of s.points) {
      const row = byDate.get(p.date);
      if (!row) continue;
      row[s.id] = p.value;
      row[`${s.id}__meta`] = {
        seriesId: s.id,
        label: s.label,
        industryId: s.industryId,
        industryName: s.industryId,
        unit: s.unit,
        sourceType: p.sourceType,
        sourceRef: p.sourceRef,
        confidence: p.confidence,
        url: p.url,
        value: p.value,
        date: p.date,
      } satisfies ChartPointMeta;
    }
  }

  for (const s of sparseSeries) {
    scatterKeys.push(s.id);
    for (const p of s.points) {
      const row = byDate.get(p.date);
      if (!row) continue;
      row[s.id] = p.value;
      row[`${s.id}__meta`] = {
        seriesId: s.id,
        label: s.label,
        industryId: s.industryId,
        industryName: s.industryId,
        unit: s.unit,
        sourceType: p.sourceType,
        sourceRef: p.sourceRef,
        confidence: p.confidence,
        url: p.url,
        value: p.value,
        date: p.date,
      } satisfies ChartPointMeta;
    }
  }

  return { rows, lineKeys, scatterKeys };
}

export function PenetrationChart({
  trendSeries,
  sparseSeries,
  industries,
}: Props) {
  const { rows, lineKeys, scatterKeys } = buildChartData(
    trendSeries,
    sparseSeries,
  );

  const labelOf = (id: string) => {
    const s = [...trendSeries, ...sparseSeries].find((x) => x.id === id);
    return s?.label ?? id;
  };

  const industryOf = (id: string) => {
    const s = [...trendSeries, ...sparseSeries].find((x) => x.id === id);
    return s?.industryId ?? '';
  };

  if (rows.length === 0) {
    return (
      <div className="chart-empty">
        No series match the current filters. Enable industries or change the
        unit filter.
      </div>
    );
  }

  const allValues = [...trendSeries, ...sparseSeries].flatMap((s) =>
    s.points.map((p) => p.value),
  );
  const minV = Math.min(...allValues);
  const maxV = Math.max(...allValues);
  // log domain padding
  const yMin = Math.max(minV / 2, 0.01);
  const yMax = maxV * 2;

  const unit =
    trendSeries[0]?.unit ?? sparseSeries[0]?.unit ?? 'count';

  return (
    <div className="chart-wrap">
      <ResponsiveContainer width="100%" height={420}>
        <ComposedChart
          data={rows}
          margin={{ top: 16, right: 24, bottom: 8, left: 16 }}
        >
          <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            stroke="#64748b"
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            tickFormatter={(d: string) => d.slice(0, 7)}
          />
          <YAxis
            scale="log"
            domain={[yMin, yMax]}
            allowDataOverflow
            stroke="#64748b"
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            tickFormatter={(v: number) => formatValue(v, unit)}
            width={72}
            label={{
              value: `Value (${unit}) — log scale`,
              angle: -90,
              position: 'insideLeft',
              fill: '#64748b',
              fontSize: 11,
              offset: 0,
              style: { textAnchor: 'middle' },
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ color: '#cbd5e1', fontSize: 12 }}
            formatter={(value) => labelOf(String(value))}
          />
          {lineKeys.map((key) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              name={key}
              stroke={colorForIndustry(industryOf(key))}
              strokeWidth={2.5}
              dot={{ r: 4, strokeWidth: 1 }}
              activeDot={{ r: 6 }}
              connectNulls={false}
            />
          ))}
          {scatterKeys.map((key) => (
            <Scatter
              key={key}
              dataKey={key}
              name={key}
              fill={colorForIndustry(industryOf(key))}
              shape="circle"
              legendType="circle"
            />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
      <div className="chart-footnote">
        Colored by industry
        {industries.length
          ? ` · ${industries
              .filter((i) =>
                [...trendSeries, ...sparseSeries].some(
                  (s) => s.industryId === i.id,
                ),
              )
              .map((i) => i.name)
              .join(', ')}`
          : ''}
        . Lines = ≥2 points; dots = insufficient for trend.
      </div>
    </div>
  );
}
