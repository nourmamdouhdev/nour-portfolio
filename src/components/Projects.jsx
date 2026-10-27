import { useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";
import LiveText from "./LiveText";
import { enterTransition, hiddenState } from "../lib/motion";
import "./Projects.css";

const revealSpring = { type: "spring", bounce: 0, duration: 0.35 };

function metaLine(project) {
  return [project.year, project.type].filter(Boolean).join(" · ");
}

function CareSketch() {
  const rows = ["Patient records", "Prescriptions", "Doctors", "Admins"];
  return (
    <div className="work-ui">
      <div className="work-ui-top">
        <span>patients</span>
        <span>list</span>
      </div>
      <ul className="work-rows">
        {rows.map((row) => (
          <li key={row}>
            <span className="work-mark" aria-hidden="true" />
            {row}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComfortSketch() {
  return (
    <div className="work-ui">
      <div className="work-ui-top">
        <span>status</span>
        <span>screen</span>
      </div>
      <div className="work-comfort">
        <div className="work-battery">
          <span>Battery</span>
          <span className="work-cell">
            <i />
          </span>
        </div>
        <div className="work-loc">
          <span>Location</span>
          <span className="work-map">
            <i />
          </span>
        </div>
      </div>
      <p className="work-impact">
        <span className="work-mark" aria-hidden="true" />
        Impact
      </p>
    </div>
  );
}

function CrmSketch() {
  return (
    <div className="work-ui">
      <div className="work-ui-top">
        <span>dashboard</span>
        <span>role</span>
      </div>
      <div className="work-crm">
        <div className="work-crm-nav">
          <span>Auth</span>
          <span className="is-on">Role</span>
        </div>
        <div className="work-crm-main">
          <span className="work-search">Search</span>
          <span>Customers</span>
        </div>
      </div>
    </div>
  );
}

function RouteSketch() {
  return (
    <div className="work-ui">
      <div className="work-ui-top">
        <span>schedule</span>
      </div>
      <div className="work-table">
        <span>Place</span>
        <span>Time</span>
        <span>Request</span>
        <span>Admin</span>
      </div>
    </div>
  );
}

function PosSketch() {
  const lines = ["Customer", "Product", "Tax", "Discount", "Payment"];
  return (
    <div className="work-ui">
      <div className="work-ui-top">
        <span>invoice</span>
      </div>
      <ul className="work-receipt">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

function SiteSketch() {
  const rows = ["Services", "Case Studies", "Contact"];
  return (
    <div className="work-ui">
      <div className="work-ui-top">
        <span>en</span>
        <span>site</span>
      </div>
      <ul className="work-rows">
        {rows.map((row) => (
          <li key={row}>
            <span className="work-mark" aria-hidden="true" />
            {row}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Sketch({ preview }) {
  if (preview === "site") return <SiteSketch />;
  if (preview === "care") return <CareSketch />;
  if (preview === "comfort") return <ComfortSketch />;
  if (preview === "crm") return <CrmSketch />;
  if (preview === "route") return <RouteSketch />;
  if (preview === "pos") return <PosSketch />;
  return null;
}

function ProjectDetail({ project, reduce, pathLabelId, stackLabelId }) {
  const pathName = project.kind === "screen" ? "Screen" : "Path";

  return (
    <motion.div
      className="work-detail"
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={reduce ? { duration: 0.2 } : revealSpring}
    >
      <p className="work-role">{project.role}</p>

      <div className="work-path-wrap">
        <p id={pathLabelId} className="work-block-label">
          {pathName}
        </p>
        <ol className="work-path" aria-labelledby={pathLabelId}>
          {project.path.map((step, stepIndex) => (
            <li key={`${step.tier}-${step.name}`}>
              {stepIndex > 0 ? (
                <span className="work-arrow" aria-hidden="true">
                  →
                </span>
              ) : null}
              <span className="work-step">
                <span className="work-tier">{step.tier}</span>
                <span className="work-step-name">{step.name}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="work-detail-grid">
        <Sketch preview={project.preview} />
        <p className="work-desc"><LiveText text={project.description} /></p>
      </div>

      <div>
        <p id={stackLabelId} className="work-block-label">
          Stack
        </p>
        <ul className="work-modules" aria-labelledby={stackLabelId}>
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="work-notes-title">System notes</h4>
        <ol className="work-notes">
          {project.highlights.map((item, noteIndex) => (
            <li key={item}>
              <span className="work-ln" aria-hidden="true">
                {String(noteIndex + 1).padStart(2, "0")}
              </span>
              <span><LiveText text={item} /></span>
            </li>
          ))}
        </ol>
      </div>

      {project.links.length > 0 ? (
        <div className="work-links">
          {project.links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="work-link"
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={revealSpring}
            >
              {link.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </motion.a>
          ))}
        </div>
      ) : null}
    </motion.div>
  );
}

function Projects() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const uid = useId();
  const buttonRefs = useRef([]);

  function onKeyDown(event, index) {
    const last = projects.length - 1;
    let next = null;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      next = index === last ? 0 : index + 1;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      next = index === 0 ? last : index - 1;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = last;
    }
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    buttonRefs.current[next]?.focus({ focusVisible: true });
  }

  return (
    <div className="work">
      <SectionHeading kicker="// projects/" title="Selected work">
        Systems and interfaces from the last few years. Each one had a person on
        the other side of the screen, so the motion and the model both had to be clear.
      </SectionHeading>

      <motion.div
        className="work-list"
        initial={hiddenState(reduce)}
        animate={{ opacity: 1, y: 0 }}
        transition={enterTransition(reduce)}
      >
        <p className="work-dir">systems/</p>
        {projects.map((project, index) => {
          const isOpen = index === active;
          const buttonId = `${uid}-project-${index}`;
          const panelId = `${uid}-notes-${index}`;
          return (
            <article
              key={project.title}
              className={isOpen ? "work-item is-open" : "work-item"}
            >
              <h3 className="work-heading">
                <button
                  ref={(node) => {
                    buttonRefs.current[index] = node;
                  }}
                  id={buttonId}
                  type="button"
                  className="work-toggle"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                >
                  <span className="work-item-top">
                    <span className="work-title-row">
                      <span className="work-index" aria-hidden="true">
                        {`_${String(index + 1).padStart(2, "0")}`}
                      </span>
                      <span className="work-title"><LiveText text={project.title} /></span>
                    </span>
                    <span className="work-meta">{metaLine(project)}</span>
                  </span>
                  <span className="work-module">{project.module}</span>
                  {isOpen ? null : (
                    <span className="work-mini-path">
                      {project.path.map((step, stepIndex) => (
                        <span key={`${step.tier}-${step.name}`} className="work-mini-step">
                          {stepIndex > 0 ? (
                            <span className="work-arrow" aria-hidden="true">
                              →
                            </span>
                          ) : null}
                          {step.name}
                        </span>
                      ))}
                    </span>
                  )}
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
              >
                {isOpen ? (
                  <ProjectDetail
                    project={project}
                    reduce={reduce}
                    pathLabelId={`${uid}-path-${index}`}
                    stackLabelId={`${uid}-stack-${index}`}
                  />
                ) : null}
              </div>
            </article>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Projects;
