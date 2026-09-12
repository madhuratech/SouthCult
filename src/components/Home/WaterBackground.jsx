export default function WaterBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050505]">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="blur">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
        </defs>

        {/* Dark base */}
        <rect width="1440" height="900" fill="#050505" />

        {/* Horizontal water lines */}
        {Array.from({ length: 32 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${180 + i * 22}
              C240 ${170 + i * 22}, 480 ${190 + i * 22},
              720 ${180 + i * 22}
              S1200 ${170 + i * 22}, 1440 ${180 + i * 22}`}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
            fill="none"
          />
        ))}

        {/* Stone ripple */}
        <g filter="url(#blur)">
          {[90, 150, 210, 270].map((r, i) => (
            <circle
              key={i}
              cx="720"
              cy="420"
              r={r}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1.2"
              fill="none"
              className={`ripple ripple-${i}`}
            />
          ))}
        </g>

        {/* Reflection */}
        <ellipse
          cx="720"
          cy="390"
          rx="180"
          ry="14"
          fill="rgba(255,255,255,0.06)"
        />
      </svg>
    </div>
  );
}