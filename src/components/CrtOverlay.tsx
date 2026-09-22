/** Purely decorative CRT layer: scanlines, a slow phosphor flicker and a vignette. */
export function CrtOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, rgba(255,255,255,0.055) 0px, rgba(255,255,255,0.055) 1px, transparent 1px, transparent 3px)',
        }}
      />
      <div className="absolute inset-0 animate-flicker bg-white" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)',
        }}
      />
    </div>
  );
}
