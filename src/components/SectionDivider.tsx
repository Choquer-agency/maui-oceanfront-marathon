interface SectionDividerProps {
  from?: string;
  to?: string;
  direction?: "left" | "right";
}

export function SectionDivider({
  from = "white",
  to = "gray-50",
  direction = "right",
}: SectionDividerProps) {
  return (
    <div className={`relative h-24 bg-${from}`}>
      <svg
        viewBox="0 0 1440 100"
        className={`absolute bottom-0 w-full h-full text-${to}`}
        preserveAspectRatio="none"
      >
        {direction === "right" ? (
          <polygon fill="currentColor" points="0,100 1440,0 1440,100" />
        ) : (
          <polygon fill="currentColor" points="0,0 1440,100 0,100" />
        )}
      </svg>
    </div>
  );
}
