import { useId } from "react";

type Props = {
  /** Rendered width/height in px */
  size?: number;
  /** Use on dark backgrounds (e.g. footer): outlines switch to ivory */
  light?: boolean;
  className?: string;
  title?: string;
};

/** One tapered band: outer circle r30 minus offset inner circle r26, tips where they intersect. */
const BAND = "M71.67 29.25 A30 30 0 1 0 71.67 70.75 A26 26 0 1 1 71.67 29.25 Z";
const NODES = [
  [50, 10],
  [90, 50],
  [50, 90],
  [10, 50],
] as const;

/**
 * NuroTok brand mark: outer ring with four mint nodes, two interlocking
 * tapered mint bands and a central "N" with a mint diagonal.
 * Source of truth for the standalone file: public/images/nurotok-logo.svg
 */
export default function NuroTokMark({ size = 44, light = false, className, title = "NuroTok" }: Props) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const ink = light ? "#F6F3EC" : "#1E5A3B";
  const stem = light ? "#F6F3EC" : "#0B361F";
  const gA = `nt-a-${uid}`;
  const gB = `nt-b-${uid}`;
  const gNode = `nt-node-${uid}`;
  const clip = `nt-over-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      {...(title ? { role: "img", "aria-label": title } : { "aria-hidden": true })}
    >
      <defs>
        <linearGradient id={gA} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#C4F0DA" />
          <stop offset="1" stopColor="#7FCBA6" />
        </linearGradient>
        <linearGradient id={gB} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A9E3C6" />
          <stop offset="1" stopColor="#5EAE88" />
        </linearGradient>
        <radialGradient id={gNode} cx="0.4" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#C4F0DA" />
          <stop offset="1" stopColor="#86D2AE" />
        </radialGradient>
        <clipPath id={clip}>
          <rect x="0" y="0" width="100" height="50" transform="rotate(-25 50 50)" />
        </clipPath>
      </defs>

      {/* Outer ring */}
      <circle cx="50" cy="50" r="40" fill="none" stroke={ink} strokeWidth="5" />

      {/* Interlocking bands: A under B at the bottom, A over B at the top */}
      <g stroke={ink} strokeWidth="2.2" strokeLinejoin="round">
        <path d={BAND} fill={`url(#${gA})`} transform="rotate(-25 50 50)" />
        <path d={BAND} fill={`url(#${gB})`} transform="rotate(155 50 50)" />
        <path d={BAND} fill={`url(#${gA})`} transform="rotate(-25 50 50)" clipPath={`url(#${clip})`} />
      </g>

      {/* Central N: mint diagonal under dark stems */}
      <path d="M38 36 H45.5 L62 64 H54.5 Z" fill={`url(#${gA})`} stroke={ink} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M38 36 H44.5 V64 H38 Z" fill={stem} />
      <path d="M55.5 36 H62 V64 H55.5 Z" fill={stem} />

      {/* Four nodes on the ring */}
      {NODES.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6.5" fill={`url(#${gNode})`} stroke={ink} strokeWidth="3" />
      ))}
    </svg>
  );
}
