const PALETTE = {
  blue: "#5b93c9",
  yellow: "#e3ba3e",
  red: "#d8604a",
  green: "#57a374",
};

// each tile: [color, isMatched]
const BOARD: [keyof typeof PALETTE, boolean][] = [
  ["blue", false], ["blue", true], ["yellow", false], ["red", false],
  ["green", false], ["red", false], ["yellow", true], ["blue", false],
  ["red", false], ["green", false], ["blue", false], ["yellow", false],
  ["yellow", false], ["green", false], ["green", false], ["red", false],
];

export default function SpinPalsVisual() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,26px)",
          gridTemplateRows: "repeat(4,26px)",
          gap: 4,
        }}
      >
        {BOARD.map(([color, matched], i) => (
          <div
            key={i}
            style={{
              background: PALETTE[color],
              borderRadius: 6,
              boxShadow: matched ? "0 0 0 2px var(--yellow)" : undefined,
            }}
          />
        ))}
      </div>
      <div
        style={{
          marginTop: 12,
          height: 3,
          background:
            "repeating-linear-gradient(90deg, var(--yellow) 0px, var(--yellow) 16px, transparent 16px, transparent 32px)",
        }}
      />
    </div>
  );
}
