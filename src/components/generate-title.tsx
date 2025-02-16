"use client";

export function GenerateTitle() {
  const text = "Discover Cursor Rules & MCP Servers";

  return (
    <div className="text-center mb-6">
      <h1
        className="text-[21px]"
        style={{
          opacity: 0,
          animation: "fadeIn 0.2s ease forwards",
        }}
      >
        {text}
      </h1>

      <p
        className="text-[#878787] text-sm"
        style={{
          opacity: 0,
          animation: "fadeIn 0.2s ease forwards 0.1s",
        }}
      >
        Browse community-submitted rules and MCP servers or generate custom ones{" "}
        <br />
        by dragging and dropping your package.json.
      </p>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
