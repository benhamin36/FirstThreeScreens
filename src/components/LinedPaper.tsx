import { type ReactNode } from 'react';

interface LinedPaperProps {
  children?: ReactNode;
  className?: string;
  lineSpacing?: number;
  lineColor?: string;
  showHoles?: boolean;
  showMargin?: boolean;
  marginPosition?: string;
}

export default function LinedPaper({
  children,
  className = '',
  lineSpacing = 32,
  lineColor = 'rgba(59, 130, 246, 0.1)',
  showHoles = true,
  showMargin = true,
  marginPosition = '36px',
}: LinedPaperProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        backgroundColor: '#fefdf6',
        backgroundImage: `repeating-linear-gradient(to bottom, transparent, transparent ${lineSpacing - 1}px, ${lineColor} ${lineSpacing - 1}px, ${lineColor} ${lineSpacing}px)`,
      }}
    >
      {showMargin && (
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-red-300/40"
          style={{ left: marginPosition }}
        />
      )}
      {showHoles && (
        <>
          <div className="absolute left-2 top-8 w-2.5 h-2.5 rounded-full bg-gray-200/70 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]" />
          <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gray-200/70 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]" />
          <div className="absolute left-2 bottom-8 w-2.5 h-2.5 rounded-full bg-gray-200/70 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]" />
        </>
      )}
      {children}
    </div>
  );
}
