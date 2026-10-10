// Small stroke icon set (24px grid).
import type { ReactNode } from 'react';

const paths = {
  activity: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  plug: <><path d="M9 2v6M15 2v6" /><path d="M6 8h12v3a6 6 0 0 1-12 0V8z" /><path d="M12 17v5" /></>,
  code: <><path d="m8 7-5 5 5 5M16 7l5 5-5 5" /><path d="m14 4-4 16" /></>,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  refresh: <><path d="M20 11a8 8 0 0 0-14.9-3M4 4v4h4" /><path d="M4 13a8 8 0 0 0 14.9 3M20 20v-4h-4" /></>,
  shield: <><path d="M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6l-8-3z" /><path d="m9 12 2 2 4-4" /></>,
  factory: <><path d="M3 21V10l5 3V10l5 3V10l5 3V4h3v17H3z" /><path d="M7 17h2M12 17h2M17 17h1" /></>,
  cpu: <><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9.5" y="9.5" width="5" height="5" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></>,
  cloud: <path d="M7 19a5 5 0 0 1-.5-9.97A7 7 0 0 1 20 11a4 4 0 0 1-1 8H7z" />,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5z" /><path d="m3 13 9 5 9-5" /></>,
  file: <><path d="M14 3H6v18h12V7l-4-4z" /><path d="M14 3v4h4M9 13h6M9 17h6" /></>,
  check: <path d="m5 12 5 5 9-10" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  pin: <><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2z" /></>,
  wrench: <path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 6.3-6.3a4 4 0 0 1-5-5L13 5z M4 20l5-5" />,
  handshake: <><path d="m11 17 2 2a2 2 0 0 0 3-3" /><path d="m14 14 2.5 2.5a2 2 0 0 0 3-3l-4-4a3 3 0 0 0-4 0l-1 1a2 2 0 0 1-3-3L10 5h4l6 6" /><path d="m2 12 4-4 5 5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

export function Icon({ name, size = 24, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
