export const projects = [
  {
    title: "ClientRoute",
    role: "Full Stack Engineer",
    type: "Web app",
    year: "2026",
    description:
      "A freelancer and client operating system: clients, projects, tasks, invoices, and a portal the client can open.",
    tech: ["Next.js", "React", "Prisma", "PostgreSQL", "NextAuth"],
    highlights: [
      "Signed people in with NextAuth. The default role is freelancer.",
      "Invoices, subscriptions, promo codes, and payments through Geidea and InstaPay.",
      "Each client gets a portal. Project chat can be locked with a password.",
    ],
    links: [
      {
        label: "clientroute.space",
        href: "https://clientroute.space",
      },
    ],
    preview: "portal",
    module: "p/[id]/page.tsx",
    kind: "path",
    path: [
      { tier: "client", name: "Portal" },
      { tier: "api", name: "Next.js" },
      { tier: "data", name: "PostgreSQL" },
    ],
  },
  {
    title: "NCTU Gates",
    role: "Full Stack Engineer",
    type: "Web app",
    year: "2026",
    description:
      "University event registration, payment review, QR tickets, and gate check-in. The rules live in the database.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "Row Level Security"],
    highlights: [
      "Approving a payment creates exactly one ticket, and the action can be retried safely.",
      "Check-in locks the ticket row and marks it used in one transaction.",
      "The QR code is random bytes. It does not carry a name, phone, or student ID.",
    ],
    links: [
      {
        label: "uni-six-delta.vercel.app",
        href: "https://uni-six-delta.vercel.app",
      },
    ],
    preview: "gate",
    module: "check_in.sql",
    kind: "path",
    path: [
      { tier: "gate", name: "Scanner" },
      { tier: "rules", name: "Postgres" },
      { tier: "auth", name: "Supabase" },
    ],
  },
  {
    title: "Opera",
    role: "Full Stack Engineer",
    type: "Web app",
    year: "2026",
    description:
      "A trip-booking platform: public trips, bookings, payments, and an admin desk for staff and reports.",
    tech: ["Next.js", "React", "Prisma", "NextAuth"],
    highlights: [
      "Public trip list, booking, favorites, and a payment step.",
      "Admin for trips, bookings, staff, and reports, behind a role guard.",
      "A confirmation email, an invoice PDF, and a QR code on the trip.",
    ],
    links: [
      {
        label: "opera-rose.vercel.app",
        href: "https://opera-rose.vercel.app",
      },
    ],
    preview: "booking",
    module: "booking/page.tsx",
    kind: "path",
    path: [
      { tier: "public", name: "Trips" },
      { tier: "api", name: "Next.js" },
      { tier: "data", name: "Prisma" },
    ],
  },
  {
    title: "Martex Store",
    role: "Full Stack Engineer",
    type: "Web app",
    year: "2026",
    description:
      "A bilingual store. Checkout is InstaPay: the customer uploads a payment screenshot, and the order waits for review.",
    tech: ["Next.js", "Prisma", "Zustand", "NextAuth", "Tailwind CSS"],
    highlights: [
      "Shop, cart, checkout, and order tracking in Arabic and English.",
      "Admin for products, orders, discount codes, and store settings.",
      "An order starts as pending payment review until the screenshot is checked.",
    ],
    links: [
      {
        label: "martx-store.vercel.app",
        href: "https://martx-store.vercel.app",
      },
    ],
    preview: "store",
    module: "checkout/page.tsx",
    kind: "path",
    path: [
      { tier: "shop", name: "Cart" },
      { tier: "pay", name: "InstaPay" },
      { tier: "data", name: "PostgreSQL" },
    ],
  },
  {
    title: "Elearn",
    role: "Full Stack Engineer",
    type: "Web app",
    year: "2026",
    description:
      "An online school with separate desks for students, teachers, and admins, plus a wallet for buying lessons.",
    tech: ["Next.js", "Prisma", "NextAuth", "SQLite"],
    highlights: [
      "Students follow lessons, favorites, and a wallet.",
      "Teachers write courses, lesson content, and exams.",
      "Deposits, redeem codes, and a webhook sit behind course and lesson purchases.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/nourmamdouhdev/Elearn",
      },
    ],
    preview: "school",
    module: "wallet/route.ts",
    kind: "path",
    path: [
      { tier: "desk", name: "Student" },
      { tier: "desk", name: "Teacher" },
      { tier: "money", name: "Wallet" },
    ],
  },
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
        label: "Digital Experts Marketing",
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
        label: "LinkedIn profile",
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
        label: "LinkedIn profile",
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
      "A CRM split the way a .NET shop splits it: customers, products, sales, suppliers, inventory, and invoices.",
    tech: ["Angular 17", "TypeScript", "ASP.NET Core", "SQL Server", "JWT"],
    highlights: [
      "Shipped JWT auth with HTTP-only cookies.",
      "Built customer search and forms with Reactive Forms.",
      "Routed the dashboard by role.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/nourmamdouhdev/TgomCrm",
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
    title: "Tagom CRM (PHP)",
    role: "Full Stack Developer",
    type: "Web app",
    year: "2026",
    description:
      "The same business rebuilt in plain PHP: customers, suppliers, stock, sales invoices, and purchase invoices.",
    tech: ["PHP", "MySQL", "Docker", "PHPUnit"],
    highlights: [
      "Stock movement with a running ledger, plus payments in and payments out.",
      "Dashboard numbers for receivables, payables, overdue, and low stock.",
      "Session login, roles, CSRF, and a WhatsApp send path.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/nourmamdouhdev/CRM",
      },
    ],
    preview: "ledger",
    module: "ledger.php",
    kind: "path",
    path: [
      { tier: "desk", name: "Invoices" },
      { tier: "server", name: "PHP" },
      { tier: "data", name: "MySQL" },
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
    year: "2025",
    description:
      "A shop desk for Elezbawyh: category tree, cart checkout, invoices, barcode printing, and reports.",
    tech: ["PHP", "MySQL", "Sessions"],
    highlights: [
      "Category tree down to item, then cart checkout and a printable invoice.",
      "Session login, roles, barcode printing, and a database backup.",
      "Item image uploads and a PWA manifest for the desk.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/nourmamdouhdev/3zbawyh",
      },
    ],
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
