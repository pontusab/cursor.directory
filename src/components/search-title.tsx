"use client";

export function SearchTitle() {
  return (
    <div className="text-center mb-6">
      <h1
        className="text-xl mb-2"
        style={{
          opacity: 0,
          animation: "fadeIn 0.2s ease forwards",
        }}
      >
        Find MCP servers
      </h1>
      <p
        className="text-sm text-[#878787]"
        style={{
          opacity: 0,
          animation: "fadeIn 0.2s ease forwards",
        }}
      >
        Discover and search for custom MCP tools to extend the Agent in Cursor's
        Composer feature.{" "}
        <a
          href="https://docs.cursor.com/context/model-context-protocol"
          className="underline"
        >
          How to use them in Cursor.
        </a>
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
