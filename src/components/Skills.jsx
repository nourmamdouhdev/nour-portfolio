import { useEffect, useRef, useState } from "react";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import LiveText from "./LiveText";
import { spring } from "../lib/motion";
import TechIcon from "./TechIcon";
import "./Skills.css";

const GROUPS = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      {
        name: "Next.js",
        where: "Digital Experts Marketing, current role",
        note: "I use Next.js as a Full Stack Engineer at Digital Experts Marketing. I built the company site with it.",
      },
      {
        name: "React",
        where: "This portfolio",
        note: "This site is React. The sections, the press states, and the copy live in the same components.",
      },
      {
        name: "Angular",
        where: "Tagom CRM (Angular 17) and Prime Care",
        note: "Tagom’s search, forms, and role-based dashboard are Angular 17. Prime Care’s patient, doctor, and admin screens are Angular, built against the ASP.NET Core API.",
      },
      {
        name: "TypeScript",
        where: "Tagom CRM",
        note: "Tagom’s client is TypeScript: Reactive Forms, customer search, and routes that change with the signed-in role.",
      },
      {
        name: "JavaScript",
        where: "Prospera internship and this portfolio",
        note: "At Prospera I built production screens in JavaScript, HTML, and CSS. I still use plain JavaScript when a framework is not the job.",
      },
      {
        name: "HTML & CSS",
        where: "Prospera internship and this portfolio",
        note: "Prospera’s screens were HTML and CSS on a shipping product. The layout on this site is that same work, written inside React.",
      },
      {
        name: "Responsive layout",
        where: "Prospera, Prime Care, and this portfolio",
        note: "Prospera’s screens had to fit the device in front of someone. Prime Care is web and mobile. This page is built the same way, from a narrow width up.",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & data",
    items: [
      {
        name: "Supabase",
        where: "Digital Experts Marketing, current role",
        note: "I use Supabase in this role. The company site I built uses it with Next.js.",
      },
      {
        name: "NestJS",
        learning: true,
        where: "Learning",
        note: "I am learning NestJS. I have not shipped it, including on the Digital Experts Marketing site.",
      },
      {
        name: "PHP",
        where: "Covering and 3zbawyh POS",
        note: "Covering’s pickup requests and 3zbawyh’s checkout are PHP. Sessions, invoices, and the admin desk sit on that stack.",
      },
      {
        name: "ASP.NET Core",
        where: "Tagom CRM and Prime Care",
        note: "Both products talk to ASP.NET Core APIs. Tagom uses them for auth, search, and the dashboard. Prime Care also keeps frequent reads in Redis.",
      },
      {
        name: "REST",
        where: "Tagom CRM and Prime Care",
        note: "Tagom and Prime Care’s Angular screens read and write through REST APIs for records, search, and flows that differ by role.",
      },
      {
        name: "SQL Server",
        where: "Tagom CRM and Prime Care",
        note: "Tagom’s customers and Prime Care’s medical records are stored in SQL Server.",
      },
      {
        name: "MySQL",
        where: "Covering and 3zbawyh POS",
        note: "Covering’s schedules, and 3zbawyh’s products, customers, tax, and discounts, are MySQL-backed.",
      },
      {
        name: "Python",
        where: "DEPI · Digital Egypt Pioneers",
        note: "On the DEPI track I cleaned real datasets and built simple predictive models in Python, beside the product work.",
      },
      {
        name: "Pandas",
        where: "DEPI · Digital Egypt Pioneers",
        note: "Pandas was how those datasets got cleaned before a model. It is part of the same track, not a separate hobby stack.",
      },
    ],
  },
  {
    id: "design",
    title: "Design",
    items: [
      {
        name: "UI/UX",
        where: "Smart Comfort, Prime Care, and GDG workshops",
        note: "I designed Prime Care’s paths and Smart Comfort’s status screen before building. At GDG I taught the same order: research, then the screen.",
      },
      {
        name: "Figma",
        where: "Smart Comfort, Prime Care, and GDG workshops",
        note: "Smart Comfort and Prime Care were drawn in Figma. The workshops used Figma from a rough idea through to a prototype.",
      },
      {
        name: "Wireframes",
        where: "Prime Care, Smart Comfort, and GDG workshops",
        note: "Workshops started on wireframes so the task was visible. Prime Care and Smart Comfort did too, before any visual polish.",
      },
      {
        name: "Prototypes",
        where: "GDG workshops and Smart Comfort",
        note: "Students left with a prototype they could click through. Smart Comfort stayed a designed prototype: battery, impact, and location on one screen.",
      },
      {
        name: "Accessibility",
        where: "Smart Comfort and GDG workshops",
        note: "Smart Comfort was framed around accessibility, not decoration. Workshop critique stayed on usability and whether someone could finish the task.",
      },
      {
        name: "Motion",
        where: "This portfolio, Smart Comfort, and GDG workshops",
        note: "Motion shows that a press landed and where something came from. This site settles with no bounce. Smart Comfort’s status screen was designed to stay clear under stress, and the GDG prototypes followed the same rule.",
      },
    ],
  },
  {
    id: "practice",
    title: "Practice",
    items: [
      {
        name: "Git & GitHub",
        where: "Prospera internship and Tagom CRM",
        note: "Prospera was a real Git and review rhythm with other developers. Tagom’s code is on GitHub.",
      },
      {
        name: "JWT auth",
        where: "Tagom CRM",
        note: "Tagom ships JWT authentication with HTTP-only cookies, then sends each role to the right dashboard.",
      },
      {
        name: "Workshops",
        where: "Google Developer Groups",
        note: "I led hands-on workshops on research, wireframing, and Figma, and mentored students from a rough idea to a prototype.",
      },
      {
        name: "Critique",
        where: "GDG workshops",
        note: "Critique stayed on usability and accessibility. The question was whether someone could finish the task.",
      },
      {
        name: "Writing things down",
        where: "Prime Care, Smart Comfort, and GDG workshops",
        note: "Prime Care has a case study and Smart Comfort has design notes, so the work can be read after the demo. GDG exercises were written down so a student could follow the task.",
      },
    ],
  },
];

function Pressable({ selected, className, highlightId, children, reduce, ...props }) {
  return (
    <motion.button
      type="button"
      className={selected ? `${className} is-selected` : className}
      aria-pressed={selected}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={spring.tap}
      {...props}
    >
      {selected && !reduce ? (
        <motion.span
          layoutId={highlightId}
          className={`${className}-highlight`}
          transition={spring.quick}
          aria-hidden="true"
        />
      ) : null}
      <span className={`${className}-label`}>{children}</span>
    </motion.button>
  );
}

function Skills() {
  const reduce = useReducedMotion();
  const skipScroll = useRef(true);
  const panelSeen = useRef(false);
  const [groupId, setGroupId] = useState(GROUPS[0].id);
  const [skillName, setSkillName] = useState(GROUPS[0].items[0].name);

  const group = GROUPS.find((item) => item.id === groupId) ?? GROUPS[0];
  const skill = group.items.find((item) => item.name === skillName) ?? group.items[0];

  function chooseGroup(nextId) {
    if (nextId === groupId) return;
    const next = GROUPS.find((item) => item.id === nextId) ?? GROUPS[0];
    setGroupId(next.id);
    setSkillName(next.items[0].name);
  }

  useEffect(() => {
    panelSeen.current = true;
  }, []);

  useEffect(() => {
    if (skipScroll.current) {
      skipScroll.current = false;
      return;
    }
    const panel = document.getElementById("skill-detail");
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    const inView = rect.top >= 80 && rect.bottom <= window.innerHeight - 12;
    if (inView) return;
    panel.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
  }, [skill.name, group.id, reduce]);

  return (
    <div className={reduce ? "skills skills--static" : "skills"}>
      <SectionHeading kicker="// skills.ts" title="Tech stack">
        Tools I ship with, and NestJS, which I am learning. Design and code stay
        in the same list because the work does too.
      </SectionHeading>

      <p className="skills-hint" id="skills-hint">
        Select a tool to see where it was used.
      </p>

      <LayoutGroup id="skills">
        <div className="skills-rail" role="group" aria-label="Skill groups">
            {GROUPS.map((item) => (
            <Pressable
              key={item.id}
              className="skills-group"
              highlightId="skills-group-highlight"
              selected={item.id === group.id}
              reduce={reduce}
              onClick={() => chooseGroup(item.id)}
            >
              <LiveText text={item.title} />
            </Pressable>
          ))}
        </div>

        <div className="skills-stage">
          <ul className="skills-list" aria-label={`${group.title} tools`}>
            {group.items.map((item) => (
              <li key={item.name}>
                <Pressable
                  className="skill-chip"
                  highlightId="skill-chip-highlight"
                  selected={item.name === skill.name}
                  reduce={reduce}
                  aria-controls="skill-detail"
                  onClick={() => setSkillName(item.name)}
                >
                  <span className="skill-mark" aria-hidden="true">
                    <TechIcon name={item.name} size={20} />
                  </span>
                  <span><LiveText text={item.name} /></span>
                  {item.learning ? <span className="skill-learning">Learning</span> : null}
                </Pressable>
              </li>
            ))}
          </ul>

          <div
            id="skill-detail"
            className="skill-panel"
            role="region"
            aria-live="polite"
            aria-atomic="true"
            aria-label="Where this tool shows up"
          >
            <div
              key={skill.name}
              className={panelSeen.current ? "skill-panel-copy is-changing" : "skill-panel-copy"}
            >
              <p className="skill-panel-kicker">{group.title}</p>
              <h3>
                <LiveText text={skill.name} />
                {skill.learning ? <span className="skill-learning">Learning</span> : null}
              </h3>
              <p className="skill-panel-where">
                <span>Where it shows up</span>
                <LiveText text={skill.where} />
              </p>
              <p className="skill-panel-note"><LiveText text={skill.note} /></p>
            </div>
          </div>
        </div>
      </LayoutGroup>
    </div>
  );
}

export default Skills;
