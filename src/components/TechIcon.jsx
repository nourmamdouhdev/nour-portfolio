function Glyph({ size, children, fill = "none" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function TechIcon({ name, size = 22 }) {
  switch (name) {
    case "Next.js":
      return (
        <Glyph size={size}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5z" />
          <path d="M8 16V8l8 8V8" />
        </Glyph>
      );
    case "React":
      return (
        <Glyph size={size}>
          <circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.6" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.6" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.6" transform="rotate(120 12 12)" />
        </Glyph>
      );
    case "TypeScript":
      return (
        <Glyph size={size}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 9h8M12 9v7M8.5 16.5h3" />
        </Glyph>
      );
    case "JavaScript":
      return (
        <Glyph size={size}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 16c0 1.2.8 2 2.2 2 1.5 0 2.3-.7 2.3-2v-5M15 9h2.2c1 0 1.8.6 1.8 1.6S18.2 12.2 17.2 12.2H15" />
        </Glyph>
      );
    case "Angular":
      return (
        <Glyph size={size}>
          <path d="M12 2.5 4 6v5.6c0 4.4 3.1 7.6 8 8.9 4.9-1.3 8-4.5 8-8.9V6z" />
          <path d="M12 7.2 8.8 16h1.7l.7-1.8h2.2l.7 1.8h1.7zM12 10.2l.6 1.6h-1.2z" fill="currentColor" stroke="none" />
        </Glyph>
      );
    case "Supabase":
      return (
        <Glyph size={size} fill="currentColor">
          <path d="M13.2 2.2 4 13.2h6.4l-.8 8.6L20 10.2h-6.6z" stroke="none" />
        </Glyph>
      );
    case "PHP":
      return (
        <Glyph size={size}>
          <ellipse cx="12" cy="12" rx="8.5" ry="6.2" />
          <path d="M7.2 12h2.2a1.6 1.6 0 0 0 0-3.2H7.2zm0 0v3.4M12 8.8h1.8a1.6 1.6 0 0 1 0 3.2H12V8.8zm0 3.2V15.4M16.2 8.8h2.1a1.5 1.5 0 0 1 0 3H16.2z" />
        </Glyph>
      );
    case "ASP.NET":
    case "ASP.NET Core":
      return (
        <Glyph size={size}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 8h18M8 12h3.2v4M13 12h3.4M13 14h2.4M13 16h3.2" />
        </Glyph>
      );
    case "SQL":
    case "SQL Server":
    case "MySQL":
      return (
        <Glyph size={size}>
          <ellipse cx="12" cy="6" rx="7" ry="2.6" />
          <path d="M5 6v12c0 1.5 3.1 2.6 7 2.6s7-1.1 7-2.6V6" />
          <path d="M5 12c0 1.5 3.1 2.6 7 2.6s7-1.1 7-2.6" />
        </Glyph>
      );
    case "Figma":
      return (
        <Glyph size={size}>
          <circle cx="9" cy="6" r="2.3" />
          <circle cx="15" cy="6" r="2.3" fill="currentColor" />
          <circle cx="9" cy="12" r="2.3" />
          <circle cx="15" cy="12" r="2.3" />
          <circle cx="9" cy="18" r="2.3" fill="currentColor" />
        </Glyph>
      );
    case "NestJS":
      return (
        <Glyph size={size}>
          <path d="M12 21c-4.6-1.6-7.5-4.6-7.5-9.2V7.2L12 3l7.5 4.2v4.6C19.5 16.4 16.6 19.4 12 21z" />
          <path d="M9 11.2c.6-1.4 1.4-2 3-2s2.4.6 3 2M9.2 14.2h.1M14.7 14.2h.1M10 16.2c.6.6 1.2.8 2 .8s1.4-.2 2-.8" />
        </Glyph>
      );
    case "HTML & CSS":
      return (
        <Glyph size={size}>
          <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" />
        </Glyph>
      );
    case "Responsive layout":
      return (
        <Glyph size={size}>
          <rect x="2.5" y="5" width="12" height="9" rx="1.4" />
          <path d="M6 17h5" />
          <rect x="16" y="7" width="5.5" height="10" rx="1.2" />
        </Glyph>
      );
    case "REST":
      return (
        <Glyph size={size}>
          <path d="M7 7h11M14 4l4 3-4 3M17 17H6M10 14l-4 3 4 3" />
        </Glyph>
      );
    case "Python":
      return (
        <Glyph size={size}>
          <path d="M12 3c2.8 0 4 1.4 4 3.4V9H9.2C7.2 9 6 10 6 11.8S7.2 14.5 9.2 14.5H12" />
          <path d="M12 21c-2.8 0-4-1.4-4-3.4V15h6.8c2 0 3.2-1 3.2-2.8S16.8 9.5 14.8 9.5H12" />
          <circle cx="10" cy="6.2" r="0.7" fill="currentColor" stroke="none" />
          <circle cx="14" cy="17.8" r="0.7" fill="currentColor" stroke="none" />
        </Glyph>
      );
    case "Pandas":
      return (
        <Glyph size={size}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M4 9h16M4 14h16M9 4v16M15 4v16" />
        </Glyph>
      );
    case "UI/UX":
      return (
        <Glyph size={size}>
          <rect x="3" y="4" width="8" height="7" rx="1.4" />
          <rect x="13" y="4" width="8" height="4" rx="1.2" />
          <rect x="13" y="10" width="8" height="10" rx="1.4" />
          <rect x="3" y="13" width="8" height="7" rx="1.4" />
        </Glyph>
      );
    case "Wireframes":
      return (
        <Glyph size={size}>
          <rect x="4" y="3" width="16" height="18" rx="2" strokeDasharray="2.4 2" />
          <path d="M8 8h8M8 12h5" />
        </Glyph>
      );
    case "Prototypes":
      return (
        <Glyph size={size}>
          <path d="M12 3 4 7l8 4 8-4z" />
          <path d="M4 12l8 4 8-4M4 17l8 4 8-4" />
        </Glyph>
      );
    case "Accessibility":
      return (
        <Glyph size={size}>
          <circle cx="12" cy="5" r="1.6" fill="currentColor" stroke="none" />
          <path d="M5 9h14M12 9v4M8.5 20 12 13l3.5 7" />
        </Glyph>
      );
    case "Motion":
      return (
        <Glyph size={size}>
          <path d="M3 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0" />
          <path d="M3 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
        </Glyph>
      );
    case "Git & GitHub":
      return (
        <Glyph size={size}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="12" r="2" />
          <path d="M6 8v8M8 6h4a4 4 0 0 1 4 4v0" />
        </Glyph>
      );
    case "JWT auth":
      return (
        <Glyph size={size}>
          <circle cx="8" cy="14" r="3.2" />
          <path d="M11 14h9l-2 2 2 2h-3" />
        </Glyph>
      );
    case "Workshops":
      return (
        <Glyph size={size}>
          <circle cx="9" cy="9" r="2.2" />
          <circle cx="16" cy="10" r="1.8" />
          <path d="M4.5 18c.6-2.4 2.4-3.6 4.5-3.6s3.9 1.2 4.5 3.6M14 14.6c1.4-.3 2.6.2 3.6 1.6" />
        </Glyph>
      );
    case "Critique":
      return (
        <Glyph size={size}>
          <path d="M5 6h14v9H9l-4 3z" />
        </Glyph>
      );
    case "Writing things down":
      return (
        <Glyph size={size}>
          <path d="M4 20h4l11-11-4-4L4 16z" />
          <path d="m13 7 4 4" />
        </Glyph>
      );
    default:
      return (
        <Glyph size={size}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M9 12h6" />
        </Glyph>
      );
  }
}

export default TechIcon;
