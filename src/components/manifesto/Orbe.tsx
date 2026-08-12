export function Orbe() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: "min(92vw, 620px)",
        aspectRatio: "1",
        background: `
          radial-gradient(circle at 50% 50%, rgba(211,58,52,0.30) 0%, transparent 58%),
          radial-gradient(circle at 42% 38%, rgba(214,178,104,0.16) 0%, transparent 42%),
          radial-gradient(circle at 50% 50%, rgba(12,11,11,0.92) 34%, transparent 62%)
        `,
      }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow:
            "inset 0 -1px 60px rgba(214,178,104,0.20), inset 0 0 1px rgba(214,178,104,0.55)",
        }}
      />
      <div className="absolute inset-[9%] rounded-full border border-brass/12" />
      <div className="absolute inset-[22%] rounded-full border border-brass/8" />
    </div>
  );
}
