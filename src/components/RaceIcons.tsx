interface IconProps {
  className?: string;
}

export function MarathonIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M10 28l4-10 2 4 2-4 4 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18l-3-4h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HalfIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M8 26C8 26 10 14 16 14C22 14 24 26 24 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 4v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="4" r="2" fill="currentColor" />
    </svg>
  );
}

export function SpeedIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M6 20h6M4 16h8M6 12h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 8l-4 12h8l-4 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FireIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M16 4C16 4 22 10 22 18C22 22 19.5 26 16 28C12.5 26 10 22 10 18C10 10 16 4 16 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16 16c0-2 2-4 2-4s2 2 2 4c0 2-1 3-2 3s-2-1-2-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WaveIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M4 16c2-3 4-3 6 0s4 3 6 0 4-3 6 0 4 3 6 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 22c2-3 4-3 6 0s4 3 6 0 4-3 6 0 4 3 6 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

export function FlowerIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse
          key={angle}
          cx="16"
          cy="9"
          rx="3"
          ry="5"
          stroke="currentColor"
          strokeWidth="1.5"
          transform={`rotate(${angle} 16 16)`}
        />
      ))}
    </svg>
  );
}

export function MoonIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M22 16c0 5-3.5 9-8 9-1 0-2-.2-3-.5C14.5 23 17 20 17 16s-2.5-7-6-8.5c1-.3 2-.5 3-.5 4.5 0 8 4 8 9z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="22" cy="8" r="1" fill="currentColor" />
      <circle cx="25" cy="12" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function CookieIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="13" cy="13" r="1.5" fill="currentColor" />
      <circle cx="19" cy="11" r="1" fill="currentColor" />
      <circle cx="15" cy="19" r="1.5" fill="currentColor" />
      <circle cx="20" cy="17" r="1" fill="currentColor" />
      <circle cx="11" cy="17" r="0.8" fill="currentColor" />
    </svg>
  );
}

export const raceIcons: Record<string, React.ComponentType<IconProps>> = {
  marathon: MarathonIcon,
  "half-marathon": HalfIcon,
  "15k": SpeedIcon,
  "10k": FireIcon,
  "6-miler": WaveIcon,
  "5k": FlowerIcon,
  "double-marathon": MoonIcon,
  "cookie-fun-run": CookieIcon,
};
