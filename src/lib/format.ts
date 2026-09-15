export function formatValue(value: number, unit: string): string {
  if (unit === 'usd') {
    if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
    return `$${value.toLocaleString()}`;
  }
  if (unit === 'percent') return `${value}%`;
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return value.toLocaleString();
  return String(value);
}

export function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function stageLabel(stage: string | null | undefined): string {
  if (!stage) return 'Reference';
  return stage;
}
