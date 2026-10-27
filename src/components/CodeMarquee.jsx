const TOKENS = [
  "Next.js",
  "React",
  "Supabase",
  "Angular",
  "TypeScript",
  "PHP",
  "ASP.NET",
  "SQL",
  "Figma",
  "NestJS",
];

function CodeMarquee() {
  const row = [...TOKENS, ...TOKENS];

  return (
    <div className="code-marquee" aria-hidden="true">
      <div className="code-track">
        {row.map((token, index) => (
          <span key={`${token}-${index}`} className="code-token">
            {token}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CodeMarquee;
