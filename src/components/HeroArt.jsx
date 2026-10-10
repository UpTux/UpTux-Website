import { LogoMark } from './Logo.jsx';
import { useT } from '../i18n.js';

// Illustration: an existing machine is connected through UpTux to dashboards
// and IT systems. Decorative, so hidden from assistive tech.
export function HeroArt() {
  const { art } = useT();
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 560 440" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ha-line" x1="0" x2="1">
            <stop offset="0" stopColor="#49D390" stopOpacity=".2" />
            <stop offset="1" stopColor="#49D390" />
          </linearGradient>
          <linearGradient id="ha-panel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#123432" />
            <stop offset="1" stopColor="#0B2423" />
          </linearGradient>
        </defs>

        {/* connections */}
        <path className="flow" d="M178 236 C 220 236, 220 220, 240 220" stroke="url(#ha-line)" />
        <path className="flow" d="M322 200 C 360 200, 360 110, 392 110" stroke="url(#ha-line)" />
        <path className="flow" d="M322 240 C 360 240, 360 330, 392 330" stroke="url(#ha-line)" />

        {/* machine */}
        <g transform="translate(18 120)">
          <rect width="160" height="210" rx="14" fill="url(#ha-panel)" stroke="#2A4C49" />
          <text x="16" y="28" className="ha-label">{art.machine}</text>
          <text x="16" y="46" className="ha-sub">{art.year}</text>
          <rect x="16" y="62" width="128" height="70" rx="6" fill="#0A1C1B" stroke="#2A4C49" />
          <circle cx="40" cy="97" r="16" fill="none" stroke="#49D390" strokeOpacity=".6" strokeWidth="3" />
          <circle cx="40" cy="97" r="4" fill="#49D390" />
          <rect x="68" y="80" width="62" height="8" rx="4" fill="#2A4C49" />
          <rect x="68" y="94" width="44" height="8" rx="4" fill="#2A4C49" />
          <rect x="68" y="108" width="52" height="8" rx="4" fill="#2A4C49" />
          <g transform="translate(16 146)">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect key={i} x={i * 22} y="0" width="16" height="24" rx="3" fill={i === 2 ? '#F5B941' : '#1D3B39'} />
            ))}
            <text x="0" y="46" className="ha-sub">{art.bus}</text>
          </g>
        </g>

        {/* uptux core */}
        <g transform="translate(240 160)">
          <rect width="82" height="120" rx="16" fill="#0E2B29" stroke="#49D390" strokeOpacity=".7" />
          <g transform="translate(13 30)" color="#E8F5F0">
            <LogoMark id="ha" width="56" height="44" />
          </g>
          <text x="41" y="104" textAnchor="middle" className="ha-label">UpTux</text>
        </g>
        <g className="ha-tag" transform="translate(328 140)">
          <rect width="64" height="22" rx="11" />
          <text x="32" y="15" textAnchor="middle">OPC UA</text>
        </g>
        <g className="ha-tag" transform="translate(332 282)">
          <rect width="56" height="22" rx="11" />
          <text x="28" y="15" textAnchor="middle">MQTT</text>
        </g>

        {/* dashboard */}
        <g transform="translate(392 40)">
          <rect width="150" height="140" rx="14" fill="url(#ha-panel)" stroke="#2A4C49" />
          <text x="14" y="26" className="ha-label">{art.dash}</text>
          <text x="14" y="58" className="ha-kpi">{art.kpi}</text>
          <text x="14" y="74" className="ha-sub">{art.avail}</text>
          {[34, 52, 40, 66, 58, 78, 70].map((h, i) => (
            <rect key={i} x={14 + i * 18} y={126 - h * 0.6} width="11" height={h * 0.6} rx="2" fill="#49D390" fillOpacity={0.35 + i * 0.09} />
          ))}
        </g>

        {/* IT systems */}
        <g transform="translate(392 270)">
          <rect width="150" height="120" rx="14" fill="url(#ha-panel)" stroke="#2A4C49" />
          <text x="14" y="26" className="ha-label">{art.it}</text>
          {['MES', 'ERP', 'Cloud'].map((t, i) => (
            <g key={t} transform={`translate(14 ${40 + i * 24})`}>
              <rect width="122" height="18" rx="5" fill="#0A1C1B" stroke="#2A4C49" />
              <circle cx="11" cy="9" r="3" fill="#49D390" />
              <text x="22" y="13" className="ha-sub">{t}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

// Large logo lockup shown above the illustration on the home page.
export function HeroBrand() {
  return (
    <div className="hero-brand">
      <LogoMark id="hb" className="hero-brand-mark" title="UpTux" />
      <div>
        <span className="hero-brand-word">UpTux</span>
        <span className="hero-brand-slogan">Get your software right</span>
      </div>
    </div>
  );
}
