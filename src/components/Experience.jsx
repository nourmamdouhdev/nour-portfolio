import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import LiveText from "./LiveText";
import { enterTransition, hiddenState } from "../lib/motion";
import "./Experience.css";

const ROLES = [
  {
    role: "Full Stack Engineer",
    place: "Digital Experts Marketing",
    href: "https://digitalexperts.ae/en",
    when: "Now",
    current: true,
    body: "I built the company website, and I work with Next.js and Supabase.",
  },
  {
    role: "Data Science & AI Trainee",
    place: "DEPI · Digital Egypt Pioneers",
    when: "Nov 2025 – May 2026",
    body: "Cleaned real datasets, built simple predictive models, and got comfortable with Python, Pandas, scikit-learn, and SQL as part of the product conversation — not a separate hobby.",
  },
  {
    role: "Instructor",
    place: "KidZania Egypt",
    when: "Jun 2025 – Sep 2025",
    body: "Taught in a loud, changing room. The useful part was communication: explaining a task once, watching where people got stuck, and adjusting without a slide deck.",
  },
  {
    role: "UI/UX Instructor",
    place: "Google Developer Groups · University chapter",
    when: "6 months",
    body: "Led hands-on workshops on research, wireframing, and Figma. Mentored students from a rough idea to a prototype, and kept the critique on usability and accessibility.",
  },
  {
    role: "Frontend Developer Intern",
    place: "Prospera Systems · Egypt",
    when: "Jul 2024 – Aug 2024",
    body: "Worked with developers and designers on production web apps. Built responsive screens in HTML, CSS, and JavaScript, and learned a real Git and review rhythm.",
  },
];

function Experience() {
  const reduce = useReducedMotion();

  return (
    <div>
      <SectionHeading kicker="// experience.log" title="Where the four years went">
        Full Stack Engineer at Digital Experts Marketing now. Before that,
        internships, teaching, and a data track. The through-line is sitting
        with someone else’s problem until the interface gets out of the way.
      </SectionHeading>

      <div className="timeline">
        <motion.div
          className="timeline-line"
          initial={reduce ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={reduce ? { duration: 0.2 } : { type: "spring", bounce: 0, duration: 0.55 }}
          style={{ transformOrigin: "top center" }}
          aria-hidden="true"
        />
        <ol>
          {ROLES.map((item, index) => (
            <motion.li
              key={item.role + item.place}
              className={item.current ? "card timeline-item timeline-now" : "card timeline-item"}
              initial={hiddenState(reduce)}
              animate={{ opacity: 1, y: 0 }}
              transition={enterTransition(reduce, reduce ? 0 : index * 0.04)}
            >
              <span
                className={item.current ? "timeline-node timeline-node-now" : "timeline-node"}
                aria-hidden="true"
              />
              <div className="timeline-meta">
                <h3><LiveText text={item.role} /></h3>
                {item.href ? (
                  <a
                    className="role timeline-place"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LiveText text={item.place} />
                  </a>
                ) : (
                  <p className="role"><LiveText text={item.place} /></p>
                )}
                {item.current ? (
                  <p className="meta">
                    <span className="now-label">Now</span>
                  </p>
                ) : (
                  <p className="meta">{item.when}</p>
                )}
              </div>
              <p><LiveText text={item.body} /></p>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Experience;
