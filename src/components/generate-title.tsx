"use client";

export function GenerateTitle() {
  const text = "Generate Cursor Rule from Your Dependencies";

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
