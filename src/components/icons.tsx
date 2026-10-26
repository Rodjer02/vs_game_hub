import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base: P = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function PcIcon(props: P) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" strokeWidth="1.7" {...base} {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

export function PsIcon(props: P) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" strokeWidth="1.7" {...base} {...props}>
      <path d="M7 6h10a5 5 0 0 1 4.9 6l-.8 4a2.5 2.5 0 0 1-4.3 1.2L15 15H9l-1.8 2.2A2.5 2.5 0 0 1 2.9 16l-.8-4A5 5 0 0 1 7 6z" />
      <path d="M6 11h4M8 9v4" />
      <circle cx="15.5" cy="10" r=".6" />
      <circle cx="17.5" cy="12" r=".6" />
    </svg>
  );
}

export function GamepadIcon(props: P) {
  return (
    <svg viewBox="0 0 24 16" strokeWidth="0.55" {...base} stroke="#E9D5FF" {...props}>
      <path d="M7 1h10a5 5 0 0 1 4.9 6l-.9 5a2.6 2.6 0 0 1-4.5 1.2L14.6 11H9.4l-1.9 2.2A2.6 2.6 0 0 1 3 12l-.9-5A5 5 0 0 1 7 1z" />
      <path d="M5.5 6h3M7 4.5v3" />
      <circle cx="16" cy="5" r=".7" />
      <circle cx="18" cy="7" r=".7" />
      <circle cx="10" cy="8.5" r=".9" />
      <circle cx="14" cy="8.5" r=".9" />
    </svg>
  );
}

export function ArrowIcon(props: P) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="2.2" {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon(props: P) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" {...base} {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export function MenuIcon(props: P) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" {...base} {...props}>
      <path d="M4 7h16M4 12h10M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: P) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function BoltIcon(props: P) {
  return (
    <svg viewBox="0 0 40 140" strokeWidth="1.2" {...base} stroke="#E9D5FF" strokeLinecap="butt" {...props}>
      <path d="M22 0 L14 34 L24 38 L10 74 L20 78 L4 140 M14 34 L4 46 M10 74 L30 92 M20 78 L34 70" />
    </svg>
  );
}
