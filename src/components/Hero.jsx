import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, RotateCcw } from "lucide-react";
import { spring } from "../lib/motion";
import TechIcon from "./TechIcon";
import LiveText from "./LiveText";

const NOW = "Now: Full Stack Engineer at Digital Experts Marketing";
const HELLO = "Hello! I'm";
const FIRST = "Nour";
const LAST = "Mamdouh";
const BIO = "I design the interface, then I write the Next.js, React, and Supabase that ship it.";
const ROLE = ["FULL-STACK", "ENGINEER"];
const CODE = [
  "type Nour = Designer & Developer",
  'const role = "Full-Stack Engineer"',
  'const stack = ["Next.js", "React", "Supabase"]',
  'const place = "Giza, Egypt"',
];

const SOCIAL = [
  { href: "mailto:nourmamdouh54@gmail.com", label: "Email", icon: Mail },
  { href: "https://www.linkedin.com/in/nour-mamdouh/", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/nourmamdouhdev", label: "GitHub", icon: Github },
];

function buildPlan() {
  let t = 180;
  const now = { start: t, end: t + NOW.length * 16 };
  const hello = { start: t, end: t + HELLO.length * 42 };
  t = hello.end + 140;
  const first = { start: t, end: t + FIRST.length * 100 };
  t = first.end + 160;
  const last = { start: t, end: t + LAST.length * 100 };
  const roleStart = first.start;
  const role = ROLE.map((line) => {
    const start = roleStart + ROLE.slice(0, ROLE.indexOf(line)).reduce((sum, item) => sum + item.length * 72 + 120, 0);
    return { start, end: start + line.length * 72, text: line };
  });
  t = last.end + 180;
  const bio = { start: t, end: t + BIO.length * 18 };
  t = Math.max(role[role.length - 1].end, last.end) + 200;
  const code = CODE.map((line) => {
    const start = t;
    t += line.length * 16 + 90;
    return { start, end: start + line.length * 16, text: line };
  });
  return { now, hello, first, last, role, bio, code, done: t + 200 };
}

const PLAN = buildPlan();

function sliceAt(ms, start, text, speed) {
  if (ms < start) return "";
  const count = Math.min(text.length, Math.floor((ms - start) / speed));
  return text.slice(0, count);
}

function Caret({ on }) {
  if (!on) return null;
  return <span className="caret" aria-hidden="true" />;
}

function paint(line, shown) {
  const visible = line.slice(0, shown);
  const keyword = line.startsWith("type") ? "type" : line.startsWith("const") ? "const" : "";
  return (
    <>
      <span className="tok-kw">{visible.slice(0, keyword.length)}</span>
      {visible.slice(keyword.length)}
    </>
  );
}

const STACK_ROWS = [
  ["Next.js", "React", "TypeScript", "Angular"],
  ["JavaScript", "Supabase", "PHP", "ASP.NET", "SQL"],
  ["Figma", "NestJS", "HTML & CSS"],
];
const STACK = STACK_ROWS.flat();
const STACK_DOTS = [
  [8, 18], [18, 62], [30, 28], [42, 74], [54, 16], [66, 58],
  [76, 24], [88, 70], [14, 42], [48, 46], [84, 40], [36, 12],
];

function StackField({ reduce }) {
  const [lit, setLit] = useState(0);

  useEffect(() => {
    if (reduce) return undefined;
    const id = window.setInterval(() => {
      setLit((value) => (value + 1) % STACK.length);
    }, 880);
    return () => window.clearInterval(id);
  }, [reduce]);

  let cursor = 0;

  return (
    <div className="stack-field">
      <div className="stack-sky" aria-hidden="true">
        <span className="stack-orb stack-orb-a" />
        <span className="stack-orb stack-orb-b" />
        <span className="stack-aurora" />
        <span className="stack-grid" />
        {STACK_DOTS.map(([x, y], index) => (
          <span key={index} className="bg-dot" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${index * -0.45}s` }} />
        ))}
      </div>
      <p className="stack-title"><LiveText text="Tech stack" /></p>
      <div className="stack-rows">
        {STACK_ROWS.map((row) => (
          <div key={row[0]} className="stack-row">
            {row.map((name) => {
              const index = cursor;
              cursor += 1;
              const on = !reduce && index === lit;
              return (
                <motion.a
                  key={name}
                  className={on ? "stack-card is-lit" : "stack-card"}
                  href="#skills"
                  aria-label={name}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    opacity: reduce ? { duration: 0.2 } : { ...spring.settle, delay: index * 0.04 },
                    y: reduce ? { duration: 0.2 } : { ...spring.settle, delay: index * 0.04 },
                    scale: spring.tap,
                  }}
                >
                  <span className="stack-mark" aria-hidden="true">
                    <TechIcon name={name} />
                  </span>
                  <span>{name}</span>
                </motion.a>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function CairoClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Africa/Cairo",
  }).format(now);

  return <time dateTime={now.toISOString()}>{time}</time>;
}

function Hero() {
  const reduce = useReducedMotion();
  const [playId, setPlayId] = useState(0);
  const [ms, setMs] = useState(reduce ? PLAN.done : 0);

  useEffect(() => {
    if (reduce) {
      setMs(PLAN.done);
      return undefined;
    }
    setMs(0);
    const start = performance.now();
    const id = window.setInterval(() => {
      const next = performance.now() - start;
      setMs(next >= PLAN.done ? PLAN.done : next);
      if (next >= PLAN.done) window.clearInterval(id);
    }, 32);
    return () => window.clearInterval(id);
  }, [playId, reduce]);

  const now = reduce ? NOW : sliceAt(ms, PLAN.now.start, NOW, 16);
  const hello = reduce ? HELLO : sliceAt(ms, PLAN.hello.start, HELLO, 42);
  const first = reduce ? FIRST : sliceAt(ms, PLAN.first.start, FIRST, 100);
  const last = reduce ? LAST : sliceAt(ms, PLAN.last.start, LAST, 100);
  const bio = reduce ? BIO : sliceAt(ms, PLAN.bio.start, BIO, 18);
  const roleLines = PLAN.role.map((line) => ({
    text: reduce ? line.text : sliceAt(ms, line.start, line.text, 72),
    typing: !reduce && ms >= line.start && ms < line.end,
  }));
  const codeLines = PLAN.code.map((line) => ({
    text: line.text,
    shown: reduce ? line.text.length : Math.max(0, Math.min(line.text.length, Math.floor((ms - line.start) / 16))),
    typing: !reduce && ms >= line.start && ms < line.end,
  }));

  return (
    <div className="hero">
      <span className="hero-corner hero-corner-tl" aria-hidden="true" />
      <span className="hero-corner hero-corner-br" aria-hidden="true" />

      <div className="hero-social" aria-label="Social">
        {SOCIAL.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          );
        })}
      </div>

      <div className="hero-stage">
        <div className="stage-top">
          <p className="now-pill">
            <span className="status-dot" aria-hidden="true" />
            <span className="sr-only">{NOW}</span>
            <span aria-hidden="true">
              {now}
              <Caret on={!reduce && ms >= PLAN.now.start && ms < PLAN.now.end} />
            </span>
          </p>
          <p className="stage-place">
            Giza, Egypt
            <span aria-hidden="true">·</span>
            <CairoClock />
          </p>
        </div>

        <div className="stage-main">
          <div className="stage-copy">
            <p className="hello">
              <span className="sr-only">{HELLO}</span>
              <span aria-hidden="true">
                {hello}
                <Caret on={!reduce && ms >= PLAN.hello.start && ms < PLAN.hello.end} />
              </span>
            </p>
            <h1>
              <span className="sr-only">Nour Mamdouh</span>
              <span className="typed-line" aria-hidden="true">
                {first}
                <Caret on={!reduce && ms >= PLAN.first.start && ms < PLAN.last.start} />
              </span>
              <span className="typed-line" aria-hidden="true">
                {last}
                <Caret on={!reduce && ms >= PLAN.last.start && ms < PLAN.last.end} />
              </span>
            </h1>
            <p className="stage-bio">
              <span className="sr-only">{BIO}</span>
              <span aria-hidden="true">
                {bio}
                <Caret on={!reduce && ms >= PLAN.bio.start && ms < PLAN.bio.end} />
              </span>
            </p>
            <div className="hero-actions">
              <motion.a className="btn btn-primary" href="#projects" whileTap={{ scale: 0.97 }} transition={spring.tap}>
                View the work
                <ArrowUpRight size={16} aria-hidden="true" />
              </motion.a>
              <motion.a className="btn btn-secondary" href="#contact" whileTap={{ scale: 0.97 }} transition={spring.tap}>
                Contact me
              </motion.a>
            </div>
          </div>

          <div className="stage-code">
            <p className="sr-only">A full-stack engineer. Designer and developer.</p>
            <div className="role-stack" aria-hidden="true">
              <p className="role-a">
                A
                <Caret on={!reduce && ms >= PLAN.hello.end && ms < PLAN.role[0].start} />
              </p>
              <p className="role-words">
                {roleLines.map((line, index) => (
                  <span key={PLAN.role[index].text}>
                    {line.text}
                    <Caret on={line.typing} />
                  </span>
                ))}
              </p>
            </div>

            <div className="hero-code">
              <div className="hero-code-bar">
                <span aria-hidden="true">nour.ts</span>
                <button type="button" className="hero-replay" onClick={() => setPlayId((value) => value + 1)}>
                  <RotateCcw size={14} aria-hidden="true" />
                  Replay
                </button>
              </div>
              <div className="hero-code-body" aria-hidden="true">
                {codeLines.map((line, index) => (
                  <p key={line.text} className="hero-code-line">
                    <span className="hero-ln">{String(index + 1).padStart(2, "0")}</span>
                    <span>
                      {paint(line.text, line.shown)}
                      <Caret on={line.typing} />
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <a className="stage-resume" href="/Nour_Mamdoh-cv.pdf" target="_blank" rel="noopener noreferrer">
          Resume
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <StackField reduce={reduce} />
      </div>
    </div>
  );
}

export default Hero;
