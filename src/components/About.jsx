import { motion, useReducedMotion } from "framer-motion";
import { enterTransition, hiddenState } from "../lib/motion";
import LiveText from "./LiveText";
import "./About.css";

const LAYERS = [
  { index: "01", name: "Interface", note: "The screen a person can use" },
  { index: "02", name: "Logic", note: "The rules that change state" },
  { index: "03", name: "Data", note: "What the system remembers" },
  { index: "04", name: "Code", note: "The program that ships" },
];

const SCREEN = ["React", "Angular", "Figma"];
const UNDER = ["PHP", "ASP.NET Core", "SQL"];

const PILLS = ["IT @ NCTU", "Frontend & UI/UX", "PHP & .NET", "DEPI Data Science"];

function About() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: hiddenState(reduce),
    animate: { opacity: 1, y: 0 },
    transition: enterTransition(reduce, reduce ? 0 : delay),
  });

  return (
    <div className="about-root">
      <header className="about-mast">
        <motion.p className="about-kicker" {...reveal(0)}>
          // about.tsx
        </motion.p>
        <motion.h2 className="about-title" {...reveal(0.04)}>
          <LiveText text="Design and engineering, same desk" />
        </motion.h2>
        <motion.p className="about-years" {...reveal(0.06)}>
          <span className="about-years-num">4</span>
          <span className="about-years-copy">
            <span className="about-years-k">Years</span>
            <span className="about-years-label">building real products</span>
          </span>
        </motion.p>
        <motion.p className="about-lede" {...reveal(0.08)}>
          <LiveText text="Four years turning ideas into interfaces, then into software that ships. I am a Full Stack Engineer at Digital Experts Marketing. I study Information Technology at New Cairo Technological University, and I spend the rest of the time on real products." />
        </motion.p>
      </header>

      <div className="about-body">
        <motion.figure className="about-figure" {...reveal(0.06)}>
          <div className="about-frame">
            <img
              src="/profile-400w.webp"
              alt="Portrait of Nour Mamdouh"
              width="400"
              height="400"
              loading="lazy"
            />
          </div>
          <figcaption className="about-nameplate">
            <span className="about-name">Nour Mamdouh</span>
            <span className="about-meta">Information Technology</span>
            <span className="about-meta">New Cairo Technological University</span>
          </figcaption>
        </motion.figure>

        <div className="about-story">
          <motion.div className="about-work" {...reveal(0.08)}>
            <h3 className="about-work-title"><LiveText text="The work is a program" /></h3>
            <div className="about-tray">
              <ol className="about-surfaces">
                {LAYERS.map((layer) => (
                  <li key={layer.index} className="about-surface">
                    <span className="about-index">{layer.index}</span>
                    <span className="about-layer"><LiveText text={layer.name} /></span>
                    <span className="about-layer-note"><LiveText text={layer.note} /></span>
                  </li>
                ))}
              </ol>
              <div className="about-landed-track" aria-hidden="true">
                <motion.span
                  className="about-landed"
                  initial={reduce ? { opacity: 0 } : { scaleX: 0 }}
                  animate={reduce ? { opacity: 1 } : { scaleX: 1 }}
                  transition={
                    reduce
                      ? { duration: 0.2 }
                      : { type: "spring", bounce: 0, duration: 0.4, delay: 0.08 }
                  }
                />
              </div>
            </div>
            <p className="about-principle">
              <LiveText text="Computer science is the job. I design the interface, then I write the logic, the data, and the code that keep it true." />
            </p>
          </motion.div>

          <div className="about-stack">
            <motion.span
              className="about-rail"
              aria-hidden="true"
              initial={reduce ? { opacity: 0 } : { scaleY: 0 }}
              animate={reduce ? { opacity: 1 } : { scaleY: 1 }}
              transition={
                reduce
                  ? { duration: 0.2 }
                  : { type: "spring", bounce: 0, duration: 0.4, delay: 0.05 }
              }
            />
            <motion.div className="about-sheets" {...reveal(0.1)}>
              <div className="about-system">
                <article className="about-sheet about-sheet-screen">
                  <h3><LiveText text="On the screen" /></h3>
                  <ul className="about-tools">
                    {SCREEN.map((tool) => (
                      <li key={tool}><LiveText text={tool} /></li>
                    ))}
                  </ul>
                </article>
                <article className="about-sheet about-sheet-base">
                  <h3><LiveText text="Under it" /></h3>
                  <ul className="about-tools">
                    {UNDER.map((tool) => (
                      <li key={tool}><LiveText text={tool} /></li>
                    ))}
                  </ul>
                </article>
              </div>
              <article className="about-sheet about-sheet-data">
                <h3><LiveText text="Lately" /></h3>
                <p>
                  <LiveText text="I have been adding data work — cleaning, modeling, and asking better questions of the same products." />
                </p>
              </article>
            </motion.div>
          </div>

          <motion.ul className="about-pills" aria-label="Background" {...reveal(0.12)}>
            {PILLS.map((pill) => (
              <li key={pill}><LiveText text={pill} /></li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

export default About;
