interface Props {
  asOf: string;
  industryDisclaimer: string;
  seriesDisclaimer: string;
}

export function MethodologyPanel({
  asOf,
  industryDisclaimer,
  seriesDisclaimer,
}: Props) {
  return (
    <section className="panel methodology" id="methodology">
      <h2>Methodology &amp; disclaimer</h2>
      <div className="callout warn">
        <strong>Palantir does not disclose</strong> commercial revenue mix by
        industry. Every industry series is a <em>proxy index</em> built from
        public client disclosures (AIPCon talks, press releases) or company-level
        segment figures from PLTR earnings — not official segment revenue.
      </div>
      <p className="hint">Data as of {asOf}.</p>
      <blockquote>{industryDisclaimer}</blockquote>
      <blockquote>{seriesDisclaimer}</blockquote>
      <ul className="method-bullets">
        <li>
          <strong>Company reference</strong> — official PLTR total / US commercial
          revenue by quarter (SEC). Clearly labeled as company-level, not industry
          mix.
        </li>
        <li>
          <strong>Industry proxy</strong> — client-stated use cases, users, data
          sources, equipment, patients, builders, etc. from AIPCon / earnings /
          press.
        </li>
        <li>
          <strong>Not claimed</strong> — industry $ revenue share, ARR by
          vertical, or official segment mix.
        </li>
        <li>
          Proxy growth ≠ Palantir booking growth. A rising use-case count supports
          an expansion narrative but cannot be mapped to dollars without
          disclosure.
        </li>
        <li>
          Y-axis uses a <strong>log scale</strong> (all values &gt; 0). Series with
          &lt;2 points are marked insufficient for trend — no fabricated lines.
        </li>
      </ul>
      <p className="hint">
        Full write-up:{' '}
        <a href="/METHODOLOGY.md" target="_blank" rel="noopener noreferrer">
          METHODOLOGY.md
        </a>{' '}
        (also in repo root / docs/). Not investment advice.
      </p>
    </section>
  );
}
