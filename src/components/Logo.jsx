// The UpTux mark from the original logo file. The square/bar shapes use
// currentColor so the logo works on light and dark backgrounds.
export function LogoMark({ id = 'ut', className, title }) {
  const bar = <rect x="969.208" y="1056.59" width="1016.47" height="4761.35" />;
  const sq = <rect x="2826.83" y="7244.43" width="575.598" height="575.598" />;
  return (
    <svg
      className={className}
      viewBox="0 0 5746 4501"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(5222.78,0,0,4500.51,582.729,3906.66)">
          <stop offset="0" stopColor="#004E4A" />
          <stop offset="1" stopColor="#49D390" />
        </linearGradient>
      </defs>
      <g transform="matrix(1,0,0,1,-582.729,-1656.41)">
        <g transform="matrix(0.531573,0,0,0.531573,3113.18,2870.58)">
          <g transform="matrix(0.707107,-0.707107,0.457142,0.457142,1984.29,4207.99)">{bar}</g>
          <g transform="matrix(0.707107,0.707107,-0.457142,0.457142,5126.92,2118.57)">{bar}</g>
          <g transform="matrix(1.2487,0,0,1.25158,-375.586,-3605.11)">{sq}</g>
          <g transform="matrix(1.2487,0,0,1.25158,-375.586,-5780.06)">{sq}</g>
          <g transform="matrix(1.2487,0,0,1.25158,1799.37,-5780.06)">{sq}</g>
          <g transform="matrix(1.2487,0,0,1.25158,1799.37,-3605.11)">{sq}</g>
        </g>
        <g transform="matrix(0.5,0,0,0.5,1569.47,3020.06)">
          <g transform="matrix(1,0,0,0.646496,4328.06,2512.42)">{bar}</g>
          <g transform="matrix(0,1,-0.61236,0,6960.75,4288.02)">{bar}</g>
          <g transform="matrix(2,0,0,2,-3138.94,-6040.13)">
            <path d="M3651.16,4617.82L3268.51,5000.47L3268.51,6156.91L3776.74,6156.91L3776.74,4617.82L3651.16,4617.82Z" />
          </g>
        </g>
        <path
          d="M2728.17,1656.41L5804.34,1656.41L5804.34,2164.64L5805.51,2164.64L5805.51,4542.01L4789.04,4542.01L4789.04,3391.63L2023.75,6156.91L582.729,6156.91L1571.83,5171.34C1571.83,5171.34 4070.28,2672.88 4070.28,2672.88L2728.17,2672.88L2728.17,1656.41Z"
          fill={`url(#${id}-g)`}
        />
      </g>
    </svg>
  );
}

export function Logo({ id }) {
  return (
    <span className="logo">
      <LogoMark id={id} className="logo-mark" />
      <span className="logo-word">UpTux</span>
    </span>
  );
}
