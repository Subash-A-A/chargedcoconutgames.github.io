const CAR_PATTERN = [
  0, 0, 1, 1, 1, 1, 0, 0,
  0, 1, 1, 2, 2, 2, 2, 1,
  1, 1, 1, 1, 1, 1, 1, 1,
  3, 3, 3, 3, 3, 3, 3, 3,
  4, 0, 4, 4, 4, 4, 0, 4,
];

function colorFor(cell: number, body: string) {
  switch (cell) {
    case 1:
      return body;
    case 2:
      return "#aaddff";
    case 3:
      return body === "#ff2d6b" ? "#cc2255" : "#2255cc";
    case 4:
      return "#222";
    default:
      return "transparent";
  }
}

function PixelCar({ body }: { body: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(8,10px)",
        gridTemplateRows: "repeat(5,10px)",
        gap: "1px",
      }}
    >
      {CAR_PATTERN.map((cell, i) => (
        <div key={i} style={{ background: colorFor(cell, body) }} />
      ))}
    </div>
  );
}

export default function DualDriveVisual() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
      <PixelCar body="#ff2d6b" />
      <PixelCar body="#4488ff" />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background:
            "repeating-linear-gradient(90deg, var(--yellow) 0px, var(--yellow) 16px, transparent 16px, transparent 32px)",
          opacity: 0.3,
        }}
      />
    </div>
  );
}
