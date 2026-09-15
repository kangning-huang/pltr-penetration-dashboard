/** Stable palette keyed by industry id */
export const INDUSTRY_COLORS: Record<string, string> = {
  company: '#94a3b8',
  telecom: '#38bdf8',
  energy: '#fbbf24',
  pharma: '#a78bfa',
  airlines: '#fb7185',
  ai_infra: '#34d399',
  defense: '#60a5fa',
  manufacturing: '#f97316',
  healthcare: '#2dd4bf',
  fs: '#e879f9',
};

export function colorForIndustry(id: string): string {
  return INDUSTRY_COLORS[id] ?? '#64748b';
}
