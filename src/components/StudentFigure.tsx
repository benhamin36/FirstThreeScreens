import { useId } from 'react';

type HairStyle = 'short' | 'medium' | 'long';
type Expression = 'neutral' | 'confused' | 'happy';
type Accessory = 'book' | 'pencil' | 'none';

interface StudentFigureProps {
  skinColor: string;
  hairColor: string;
  shirtFrom: string;
  shirtTo: string;
  hairStyle: HairStyle;
  expression: Expression;
  accessory: Accessory;
  bookColor?: string;
  size?: number;
  className?: string;
}

export default function StudentFigure({
  skinColor,
  hairColor,
  shirtFrom,
  shirtTo,
  hairStyle,
  expression,
  accessory,
  bookColor = '#3b82f6',
  size = 100,
  className = '',
}: StudentFigureProps) {
  const rawId = useId();
  const gid = rawId.replace(/[:]/g, '');

  const hairPaths: Record<HairStyle, string> = {
    short: 'M25 24 Q25 9 40 6 Q55 9 55 24 Q53 16 40 14 Q27 16 25 24 Z',
    medium: 'M22 26 Q20 7 40 4 Q60 7 58 26 Q56 18 40 16 Q24 18 22 26 Z',
    long: 'M20 30 Q18 7 40 4 Q62 7 60 30 L60 52 Q58 49 57 47 L57 33 Q54 22 40 20 Q26 22 23 33 L23 47 Q22 49 20 52 Z',
  };

  const mouthPaths: Record<Expression, string> = {
    neutral: 'M35 35 Q40 37 45 35',
    confused: 'M35 36 Q40 33 45 36',
    happy: 'M34 34 Q40 39 46 34',
  };

  const eyebrowPaths: Record<Expression, { left: string; right: string }> = {
    neutral: { left: 'M31 20 L37 20', right: 'M43 20 L49 20' },
    confused: { left: 'M31 21 L37 19', right: 'M43 20 L49 20' },
    happy: { left: 'M31 19 L37 19', right: 'M43 19 L49 19' },
  };

  const eb = eyebrowPaths[expression];

  return (
    <svg
      viewBox="0 0 80 110"
      width={size}
      height={size * 1.375}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`shirt-${gid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={shirtFrom} />
          <stop offset="100%" stopColor={shirtTo} />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="40" cy="107" rx="20" ry="2.5" fill="rgba(0,0,0,0.06)" />

      {/* Body / shirt */}
      <path d="M15 110 Q15 65 28 56 Q40 50 52 56 Q65 65 65 110 Z" fill={`url(#shirt-${gid})`} />

      {/* Long hair back layer */}
      {hairStyle === 'long' && (
        <path d="M18 33 Q16 7 40 3 Q64 7 62 33 L62 56 Q60 53 59 51 L59 35 Q56 24 40 22 Q24 24 21 35 L21 51 Q20 53 18 56 Z" fill={hairColor} />
      )}

      {/* Neck */}
      <rect x="36" y="37" width="8" height="15" rx="3" fill={skinColor} />

      {/* Head */}
      <circle cx="40" cy="26" r="14" fill={skinColor} />

      {/* Hair top */}
      <path d={hairPaths[hairStyle]} fill={hairColor} />

      {/* Eyebrows */}
      <path d={eb.left} stroke={hairColor} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d={eb.right} stroke={hairColor} strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Eyes */}
      <circle cx="34" cy="24" r="1.8" fill="#3a3a3a" />
      <circle cx="46" cy="24" r="1.8" fill="#3a3a3a" />

      {/* Mouth */}
      <path d={mouthPaths[expression]} stroke="#4a4a4a" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Blush for happy expression */}
      {expression === 'happy' && (
        <>
          <circle cx="31" cy="30" r="2.5" fill="#fbbf24" opacity="0.2" />
          <circle cx="49" cy="30" r="2.5" fill="#fbbf24" opacity="0.2" />
        </>
      )}

      {/* Accessory: Book */}
      {accessory === 'book' && (
        <g>
          <rect x="27" y="70" width="26" height="22" rx="2.5" fill={bookColor} />
          <rect x="28.5" y="71.5" width="23" height="19" rx="1.5" fill="white" />
          <line x1="40" y1="71.5" x2="40" y2="90.5" stroke={bookColor} strokeWidth="0.8" opacity="0.3" />
          {[77, 80, 83].map((y) => (
            <g key={y}>
              <line x1="31" y1={y} x2="38" y2={y} stroke="#d1d5db" strokeWidth="0.7" />
              <line x1="42" y1={y} x2="49" y2={y} stroke="#d1d5db" strokeWidth="0.7" />
            </g>
          ))}
        </g>
      )}

      {/* Accessory: Pencil */}
      {accessory === 'pencil' && (
        <g transform="rotate(-22 40 80)">
          <rect x="38" y="65" width="4.5" height="4" fill="#f97316" rx="0.5" />
          <rect x="38" y="69" width="4.5" height="18" fill="#fbbf24" />
          <path d="M38 87 L40.25 92 L42.5 87 Z" fill="#f5e6d3" />
          <path d="M39.5 90 L40.25 92 L41 90 Z" fill="#374151" />
        </g>
      )}
    </svg>
  );
}
