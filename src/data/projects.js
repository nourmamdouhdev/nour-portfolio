export const projects = [
  {
    title: "Digital Experts Marketing",
    role: "Full Stack Engineer",
    type: "Web",
    year: "2026",
    description:
      "The company website for Digital Experts Marketing, a UAE digital marketing agency. I built the site.",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    highlights: [
      "Built the public website.",
      "Shipped the pages in Next.js.",
      "Used Supabase on this project.",
    ],
    links: [
      {
        label: "Visit site",
        href: "https://digitalexperts.ae/en",
      },
    ],
    preview: "site",
    module: "en/page.tsx",
    kind: "path",
    path: [
      { tier: "client", name: "Web" },
      { tier: "service", name: "Next.js" },
      { tier: "data", name: "Supabase" },
    ],
  },
  {
    title: "Prime Care",
    role: "UI/UX Designer & Frontend Developer",
    type: "Web + Mobile",
    year: "2024",
    description:
      "A medical platform for patient records, prescriptions, and separate flows for patients, doctors, and admins.",
    tech: ["Angular", "ASP.NET Core", "SQL Server", "Redis", "Groq"],
    highlights: [
      "Designed the full interface and the paths through it.",
      "Built the Angular frontend against ASP.NET Core APIs.",
      "Used Redis to keep frequent reads fast.",
    ],
    links: [
      {
        label: "Case study",
        href: "https://www.linkedin.com/in/nour-mamdouh/",
      },
    ],
    preview: "care",
    module: "patients.component.ts",
    kind: "path",
    path: [
      { tier: "client", name: "Angular" },
      { tier: "api", name: "ASP.NET Core" },
      { tier: "data", name: "SQL Server" },
    ],
  },
  {
    title: "Smart Comfort",
    role: "Concept Owner & UI/UX Designer",
    type: "Mobile app",
    year: "2024",
    description:
      "An assistive app concept for wheelchair battery, impact alerts, and live location — designed for clarity under stress.",
    tech: ["Figma", "Mobile UI", "Accessibility"],
    highlights: [
      "Framed the product around accessibility, not decoration.",
      "Designed status, impact, and map tracking as one calm screen.",
    ],
    links: [
      {
        label: "Design notes",
        href: "https://www.linkedin.com/in/nour-mamdouh/",
      },
    ],
    preview: "comfort",
    module: "status.frame",
    kind: "screen",
    path: [
      { tier: "status", name: "Battery" },
      { tier: "alert", name: "Impact" },
      { tier: "map", name: "Location" },
    ],
  },
  {
    title: "Tagom CRM",
    role: "Full Stack Developer",
    type: "Web app",
    year: "2025",
    description:
      "A customer system with authentication, search, and a role-based dashboard.",
    tech: ["Angular 17", "TypeScript", "ASP.NET Core", "SQL Server", "JWT"],
    highlights: [
      "Shipped JWT auth with HTTP-only cookies.",
      "Built customer search and forms with Reactive Forms.",
      "Routed the dashboard by role.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/nourmamdouhdev",
      },
    ],
    preview: "crm",
    module: "dashboard.component.ts",
    kind: "path",
    path: [
      { tier: "client", name: "Angular 17" },
      { tier: "api", name: "ASP.NET Core" },
      { tier: "data", name: "SQL Server" },
    ],
  },
  {
    title: "Covering",
    role: "Backend & System Developer",
    type: "Web app",
    year: "",
    description:
      "Waste-collection requests: people book a place and a time, and an admin desk schedules the route.",
    tech: ["PHP", "MySQL", "Admin"],
    highlights: [
      "Modeled pickup requests, schedules, and admin review.",
      "Connected the workflow to a database-backed CRUD layer.",
    ],
    links: [],
    preview: "route",
    module: "schedule.php",
    kind: "path",
    path: [
      { tier: "client", name: "Admin" },
      { tier: "server", name: "PHP" },
      { tier: "data", name: "MySQL" },
    ],
  },
  {
    title: "3zbawyh POS",
    role: "PHP Developer",
    type: "Web app",
    year: "",
    description:
      "A point-of-sale desk for products, customers, invoices, tax, discounts, and payment.",
    tech: ["PHP", "MySQL", "Sessions"],
    highlights: [
      "Calculated invoices with tax and discount rules.",
      "Added session login and role-based access.",
    ],
    links: [],
    preview: "pos",
    module: "invoice.php",
    kind: "path",
    path: [
      { tier: "client", name: "Web" },
      { tier: "server", name: "PHP" },
      { tier: "data", name: "MySQL" },
    ],
  },
];
