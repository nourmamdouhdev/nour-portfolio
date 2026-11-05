import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import "./PixelTour.css";

const CHOICE_KEY = "nour-tour-choice";
const COINS_KEY = "nour-coins";
const COIN_EVENT = "nour-coins";
const TOTAL = 8;

const IDLE = [
  ".....hhhhhh.....",
  "...hhhhhhhhhh...",
  "..hhsssssssshh..",
  "..hsgggssgggsh..",
  "..hhsssmmssshh..",
  ".....ssssss.....",
  "......ssss......",
  "....bbbbbbbb....",
  "..bbbbbbbbbbbb..",
  "..bbwwttttwwbb..",
  "..bbbbbbbbbbbb..",
  "...bbbbbbbbbb...",
  "....bbbbbbbb....",
  ".....pppppp.....",
  ".....pp..pp.....",
  ".....pp..pp.....",
  "....kk....kk....",
];

const STEP = IDLE.slice(0, -1).concat("...kk......kk...");

const CHEER = [
  ".ba..........ab.",
  ".baa........aab.",
  "ba.hhhhhhhhhh.ab",
  "..hhsssssssshh..",
  "..hsgggssgggsh..",
  "..hhsssmmssshh..",
  ".....ssssss.....",
  "......ssss......",
  "....bbbbbbbb....",
  "..bbbbbbbbbbbb..",
  "..bbwwttttwwbb..",
  "..bbbbbbbbbbbb..",
  "...bbbbbbbbbb...",
  "....bbbbbbbb....",
  ".....pppppp.....",
  ".....pp..pp.....",
  ".....pp..pp.....",
  "....kk....kk....",
];

const POSES = { idle: IDLE, step: STEP, cheer: CHEER };

const PALETTE = {
  h: "#1a120c",
  s: "#e8b48a",
  g: "#0c0c0c",
  m: "#c47a66",
  b: "#141820",
  a: "#e8b48a",
  w: "#f7f4ee",
  t: "#5c4a6e",
  p: "#0e1218",
  k: "#0a0a0a",
};

const PIXEL_WORD = {
  N: ["H...H", "HH..H", "H.H.H", "H..HH", "H...H", "H...H", "H...H"],
  O: [".HHH.", "H...H", "H...H", "H...H", "H...H", "H...H", ".HHH."],
  U: ["H...H", "H...H", "H...H", "H...H", "H...H", "H...H", ".HHH."],
  R: ["HHHH.", "H...H", "H...H", "HHHH.", "H.H..", "H..H.", "H...H"],
};

const CONFETTI = Array.from({ length: 42 }, (_, index) => ({
  left: (index * 37) % 100,
  delay: (index % 7) * 0.07,
  duration: 1.5 + (index % 5) * 0.18,
  color: ["#f0c84b", "#6d8cff", "#ff5a1f", "#f7f4ee"][index % 4],
  size: 8 + (index % 3) * 4,
}));

const CHAPTERS = [
  {
    target: "hero",
    title: "Meet Nour",
    body: "Full-stack engineer in Giza. I design the interface, then I write the Next.js, React, and Supabase that ship it.",
  },
  {
    target: "stack",
    title: "The stack on the desk",
    body: "Next.js, React, TypeScript, and Angular on the screen. Supabase, PHP, ASP.NET, and SQL underneath. Figma when the screen comes first.",
  },
  {
    target: "about",
    title: "Four years",
    body: "Full Stack Engineer at Digital Experts Marketing. I study Information Technology at New Cairo Technological University.",
  },
  {
    target: "layers",
    title: "Same desk",
    body: "Interface, logic, data, code. I draw the screen, then I write the rules and the database that have to match it.",
  },
  {
    target: "skills",
    title: "Where each tool shipped",
    body: "Select a tool and it names the product. NestJS is the one still marked as learning. I have not shipped it.",
  },
  {
    target: "projects",
    title: "Selected work",
    body: "Client portals, a university gate, a store, a school, two CRMs, and a shop desk. Each row opens the system notes.",
  },
  {
    target: "clientroute",
    openProject: 0,
    title: "ClientRoute",
    body: "A freelancer and client operating system: clients, projects, tasks, invoices, and a portal the client can open.",
  },
  {
    target: "gates",
    openProject: 1,
    title: "NCTU Gates",
    body: "University event registration, payment review, QR tickets, and gate check-in. Approving a payment creates exactly one ticket.",
  },
  {
    target: "experience",
    title: "Where the four years went",
    body: "Digital Experts now. Before that: DEPI, teaching at KidZania, a GDG workshop run, and a frontend internship at Prospera.",
  },
  {
    target: "role-now",
    title: "Right now",
    body: "I built the company website at Digital Experts Marketing, and I work with Next.js and Supabase.",
  },
  {
    target: "contact",
    title: "Tell me what you’re building",
    body: "Email and LinkedIn are the fastest. Freelance profiles are there if you already work that way.",
  },
  {
    target: null,
    title: "Side quest",
    body: "Eight coins are hidden on this page. Click one when you see it. The count stays on this device.",
  },
];

const WIPE_COLS = 16;
const WIPE_ROWS = 10;

function readChoice() {
  try {
    return localStorage.getItem(CHOICE_KEY);
  } catch {
    return null;
  }
}

function saveChoice(value) {
  try {
    localStorage.setItem(CHOICE_KEY, value);
  } catch {
    /* private mode */
  }
}

function readCoins() {
  try {
    const raw = JSON.parse(localStorage.getItem(COINS_KEY) || "[]");
    return Array.isArray(raw) ? raw.filter((id) => typeof id === "string") : [];
  } catch {
    return [];
  }
}

function PixelGuide({ pose = "idle", scale = 4, className = "" }) {
  const rows = POSES[pose] ?? IDLE;
  const width = rows[0].length;
  const height = rows.length;
  const rects = [];
  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x += 1) {
      const fill = PALETTE[row[x]];
      if (!fill) continue;
      rects.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={fill} />);
    }
  });

  return (
    <svg
      className={`pixel-guide ${className}`.trim()}
      viewBox={`0 0 ${width} ${height}`}
      width={width * scale}
      height={height * scale}
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      {rects}
    </svg>
  );
}

function PixelWord({ progress }) {
  const letters = ["N", "O", "U", "R"];
  return (
    <div className="pixel-word" aria-hidden="true">
      {letters.map((letter, index) => (
        <svg
          key={letter}
          className={progress >= index / letters.length ? "is-on" : undefined}
          viewBox="0 0 5 7"
          width={40}
          height={56}
          shapeRendering="crispEdges"
        >
          {PIXEL_WORD[letter].flatMap((row, y) =>
            [...row].map((cell, x) => (
              cell === "H" ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null
            )),
          )}
        </svg>
      ))}
    </div>
  );
}

function PixelLoader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const doneRef = useRef(onDone);
  const finishRef = useRef(null);
  doneRef.current = onDone;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      doneRef.current();
      return undefined;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const started = performance.now();
    let frame = 0;
    let stop = false;
    const finish = () => {
      if (stop) return;
      stop = true;
      window.cancelAnimationFrame(frame);
      setLeaving(true);
      window.setTimeout(() => doneRef.current(), 560);
    };
    finishRef.current = finish;
    const tick = (now) => {
      if (stop) return;
      const next = Math.min(1, (now - started) / 2100);
      setProgress(next);
      setStep(Math.floor(now / 160) % 2 === 1);
      if (next < 1) frame = window.requestAnimationFrame(tick);
      else finish();
    };
    frame = window.requestAnimationFrame(tick);
    const onKey = (event) => {
      if (event.key === "Escape" || event.key === "Enter") finish();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      stop = true;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, []);

  const filled = Math.round(progress * 16);

  return (
    <div className={leaving ? "pixel-loader is-leaving" : "pixel-loader"} role="status" aria-live="polite" aria-label="Loading Nour Mamdouh">
      <PixelGuide pose={step ? "step" : "idle"} scale={6} className="pixel-loader-guide" />
      <PixelWord progress={progress} />
      <p className="pixel-loader-last">Mamdouh</p>
      <div className="pixel-loader-bar" aria-hidden="true">
        {Array.from({ length: 16 }, (_, index) => (
          <span key={index} className={index < filled ? "is-on" : undefined} />
        ))}
      </div>
      <button type="button" className="pixel-loader-skip" onClick={() => finishRef.current?.()}>
        Skip
      </button>
      <PixelWipe play={leaving} />
    </div>
  );
}

function CoinCelebration({ onDone }) {
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = window.setTimeout(() => doneRef.current(), reduce ? 1600 : 3800);
    const onKey = (event) => {
      if (event.key === "Escape" || event.key === "Enter") doneRef.current();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="coin-celebrate" role="dialog" aria-modal="true" aria-label="All 8 coins found">
      <div className="coin-confetti" aria-hidden="true">
        {CONFETTI.map((piece, index) => (
          <span
            key={index}
            style={{
              left: `${piece.left}%`,
              width: piece.size,
              height: piece.size,
              background: piece.color,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
            }}
          />
        ))}
      </div>
      <PixelGuide pose="cheer" scale={6} className="pixel-guide-cheer" />
      <p className="coin-celebrate-count">8 / 8</p>
      <p className="coin-celebrate-title">All coins found</p>
      <button type="button" className="tour-next" onClick={() => doneRef.current()}>
        Keep looking
      </button>
    </div>
  );
}

function PixelWipe({ play }) {
  if (!play) return null;
  const cells = [];
  for (let y = 0; y < WIPE_ROWS; y += 1) {
    for (let x = 0; x < WIPE_COLS; x += 1) {
      cells.push(
        <span
          key={`${x}-${y}`}
          style={{
            background: (x + y) % 2 === 0 ? "#f0c84b" : "#6d8cff",
            animationDelay: `${(WIPE_COLS - x) * 14}ms`,
          }}
        />,
      );
    }
  }
  return (
    <div className="pixel-wipe" aria-hidden="true">
      {cells}
    </div>
  );
}

const COIN_MOTION = {
  hero: ["3.2s", "0s"],
  stack: ["3.6s", "-0.5s"],
  about: ["3.4s", "-1s"],
  skills: ["3.8s", "-0.3s"],
  projects: ["3.3s", "-1.4s"],
  experience: ["3.5s", "-0.8s"],
  contact: ["3.2s", "-1.6s"],
  footer: ["3.7s", "-1.1s"],
};

export function TourCoin({ id, className = "" }) {
  const [found, setFound] = useState(() => readCoins().includes(id));
  const [spin, delay] = COIN_MOTION[id] || ["2.6s", "0s"];

  useEffect(() => {
    const sync = () => setFound(readCoins().includes(id));
    window.addEventListener(COIN_EVENT, sync);
    return () => window.removeEventListener(COIN_EVENT, sync);
  }, [id]);

  function collect() {
    if (found) return;
    const next = [...new Set([...readCoins(), id])];
    try {
      localStorage.setItem(COINS_KEY, JSON.stringify(next));
    } catch {
      /* private mode */
    }
    setFound(true);
    window.dispatchEvent(new Event(COIN_EVENT));
  }

  return (
    <button
      type="button"
      className={found ? `tour-coin is-found ${className}` : `tour-coin ${className}`}
      onClick={collect}
      aria-label={found ? "Coin found" : "Hidden coin"}
      disabled={found}
      style={{ "--spin": spin, "--delay": delay }}
    >
      <span className="tour-coin-spin" aria-hidden="true">
        <span className="tour-coin-front">
          <span className="tour-coin-mark" />
        </span>
        <span className="tour-coin-back">
          <span className="tour-coin-mark" />
        </span>
        {Array.from({ length: 12 }, (_, edge) => (
          <span
            key={edge}
            className="tour-coin-edge"
            style={{ transform: `rotateY(${edge * 30}deg) translateZ(17px)` }}
          />
        ))}
      </span>
    </button>
  );
}

function showTarget(chapter, reduce) {
  if (typeof chapter.openProject === "number") {
    window.dispatchEvent(
      new CustomEvent("tour-open-project", { detail: { index: chapter.openProject } }),
    );
  }
  if (!chapter.target) return;
  const node = document.querySelector(`[data-tour="${chapter.target}"]`);
  if (!node) return;
  const top = node.getBoundingClientRect().top + window.scrollY - 108;
  window.scrollTo({
    top: Math.max(0, top),
    behavior: reduce ? "auto" : "instant",
  });
}

function PixelTour() {
  const reduce = useReducedMotion();
  const [mode, setMode] = useState(() => (readChoice() ? "idle" : "prompt"));
  const [index, setIndex] = useState(0);
  const [wipe, setWipe] = useState(false);
  const [rect, setRect] = useState(null);
  const [coins, setCoins] = useState(() => readCoins().length);
  const [coinNote, setCoinNote] = useState("");
  const [booting, setBooting] = useState(true);
  const [celebrate, setCelebrate] = useState(false);
  const coinsRef = useRef(readCoins().length);
  const promptRef = useRef(null);
  const cardRef = useRef(null);
  const timers = useRef([]);
  const indexRef = useRef(0);
  const reduceRef = useRef(reduce);
  const lookRef = useRef(() => {});
  const finishRef = useRef(() => {});
  const nextRef = useRef(() => {});
  const backRef = useRef(() => {});

  reduceRef.current = reduce;
  const chapter = CHAPTERS[index];

  function clearTimers() {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }

  function reveal(next) {
    const step = CHAPTERS[next];
    if (!step) return;
    indexRef.current = next;
    const run = () => {
      setIndex(next);
      showTarget(step, reduceRef.current);
    };
    clearTimers();
    if (reduceRef.current) {
      setWipe(false);
      run();
      return;
    }
    setWipe(true);
    timers.current.push(window.setTimeout(run, 240));
    timers.current.push(window.setTimeout(() => setWipe(false), 640));
  }

  function lookAround() {
    saveChoice("solo");
    clearTimers();
    setWipe(false);
    setMode("idle");
  }

  function startTour() {
    saveChoice("tour");
    setMode("tour");
    reveal(0);
  }

  function finish() {
    saveChoice("done");
    clearTimers();
    setWipe(false);
    setRect(null);
    setMode("idle");
  }

  function goNext() {
    if (indexRef.current >= CHAPTERS.length - 1) finish();
    else reveal(indexRef.current + 1);
  }

  function goBack() {
    if (indexRef.current > 0) reveal(indexRef.current - 1);
  }

  lookRef.current = lookAround;
  finishRef.current = finish;
  nextRef.current = goNext;
  backRef.current = goBack;

  useEffect(() => () => clearTimers(), []);

  useEffect(() => {
    const onCoins = () => {
      const count = readCoins().length;
      if (coinsRef.current < TOTAL && count >= TOTAL) setCelebrate(true);
      coinsRef.current = count;
      setCoins(count);
      setCoinNote(count >= TOTAL ? "All 8 coins found." : `${count} of 8 coins found.`);
    };
    window.addEventListener(COIN_EVENT, onCoins);
    return () => window.removeEventListener(COIN_EVENT, onCoins);
  }, []);

  useEffect(() => {
    if (mode !== "prompt" || booting) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const root = promptRef.current;
    const buttons = () => (root ? [...root.querySelectorAll("button")] : []);
    buttons()[1]?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        lookRef.current();
        return;
      }
      if (event.key !== "Tab") return;
      const list = buttons();
      if (!list.length) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [mode, booting]);

  useEffect(() => {
    if (mode !== "tour") return undefined;
    const previous = document.body.style.paddingBottom;
    document.body.style.paddingBottom = "300px";
    cardRef.current?.focus();
    const onKey = (event) => {
      const card = cardRef.current;
      const active = document.activeElement;
      if (card && active && active !== document.body && !card.contains(active)) return;
      if (event.key === "Escape") {
        event.preventDefault();
        finishRef.current();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        nextRef.current();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        backRef.current();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.paddingBottom = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [mode]);

  useEffect(() => {
    if (mode !== "tour") return undefined;
    const step = CHAPTERS[index];
    if (!step?.target) {
      setRect(null);
      return undefined;
    }
    const measure = () => {
      const node = document.querySelector(`[data-tour="${step.target}"]`);
      setRect(node ? node.getBoundingClientRect() : null);
    };
    measure();
    const id = window.setTimeout(measure, 480);
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [mode, index, wipe]);

  const countLabel = `${String(index + 1).padStart(2, "0")} / ${String(CHAPTERS.length).padStart(2, "0")}`;

  return (
    <>
      <p className="sr-only" aria-live="polite">
        {coinNote}
        {mode === "tour" ? ` Chapter ${index + 1} of ${CHAPTERS.length}. ${chapter.title}. ${chapter.body}` : ""}
      </p>

      {booting ? <PixelLoader onDone={() => setBooting(false)} /> : null}
      {celebrate ? <CoinCelebration onDone={() => setCelebrate(false)} /> : null}

      <PixelWipe play={wipe} />

      {mode === "tour" && rect && !wipe ? (
        <div
          className="tour-hole"
          style={{
            top: rect.top - 12,
            left: rect.left - 12,
            width: rect.width + 24,
            height: rect.height + 24,
          }}
        />
      ) : null}

      {!booting && mode === "prompt" ? (
        <div className="tour-prompt-backdrop">
          <div
            ref={promptRef}
            className="tour-prompt"
            role="dialog"
            aria-modal="true"
            aria-labelledby="tour-prompt-title"
          >
            <PixelGuide />
            <p id="tour-prompt-title" className="tour-prompt-title">
              Want to look around on your own, or should I take you on a tour?
            </p>
            <p className="tour-prompt-note">
              Twelve stops. You can go back, skip, or keep going. Eight coins are hidden on the page.
            </p>
            <div className="tour-prompt-actions">
              <button type="button" className="tour-back" onClick={lookAround}>
                On my own
              </button>
              <button type="button" className="tour-next" onClick={startTour}>
                Take the tour
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {mode === "tour" ? (
        <section
          ref={cardRef}
          className="tour-card"
          tabIndex={-1}
          aria-label="Portfolio tour"
        >
          <div className="tour-avatar">
            <PixelGuide />
          </div>
          <div className="tour-hud">
            <p className="tour-count">Tour {countLabel}</p>
            <p className="tour-coins">
              <span className="tour-coin-pip" aria-hidden="true" />
              {coins}/{TOTAL}
            </p>
          </div>
          <p className="tour-kicker">guide.exe</p>
          <h2 className="tour-title">{chapter.title}</h2>
          <p className="tour-body">{chapter.body}</p>
          <div className="tour-progress" aria-hidden="true">
            {CHAPTERS.map((step, stepIndex) => (
              <span
                key={step.title}
                className={stepIndex === index ? "is-on" : stepIndex < index ? "is-done" : undefined}
              />
            ))}
          </div>
          <div className="tour-actions">
            <button type="button" className="tour-skip" onClick={finish}>
              Skip
            </button>
            <div className="tour-nav">
              <button type="button" className="tour-back" onClick={goBack} disabled={index === 0}>
                Back
              </button>
              <button type="button" className="tour-next" onClick={goNext}>
                {index === CHAPTERS.length - 1 ? "Done" : "Next"}
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {mode === "idle" ? (
        <button type="button" className="tour-launch" onClick={startTour}>
          <PixelGuide />
          <span className="tour-launch-copy">
            <span>Tour</span>
            <span className="tour-launch-coins">
              {coins}/{TOTAL}
            </span>
          </span>
        </button>
      ) : null}
    </>
  );
}

export default PixelTour;
