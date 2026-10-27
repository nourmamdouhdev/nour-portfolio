import { motion, useReducedMotion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { spring } from "../lib/motion";

function Caret({ on }) {
  if (!on) return null;
  return <span className="caret caret-code" aria-hidden="true" />;
}

function Studio({ rows, progress, codeDone, pressed, hotLine, onReplay }) {
  const reduce = useReducedMotion();

  return (
    <div className="studio-wrap">
      <div className="studio">
        <div className="studio-chrome">
          <span className="studio-file">nour.ts</span>
          <span className="studio-file studio-file-dim">{codeDone ? "compiled" : "typing"}</span>
          <button type="button" className="text-btn studio-replay" onClick={onReplay}>
            <RotateCcw size={16} aria-hidden="true" />
            Replay
          </button>
        </div>

        <div className="code" aria-hidden="true">
          {rows.map((tokens, index) => {
            const full = tokens.map((token) => token.t).join("");
            const count = progress[index]?.shown ?? full.length;
            const typing = progress[index]?.typing;
            return (
              <div
                key={full + index}
                className={pressed && index === hotLine ? "code-row is-hot" : "code-row"}
              >
                <span className="ln">{String(index + 1).padStart(2, "0")}</span>
                <span className="code-text">
                  <span className="code-reveal" style={{ width: `${count}ch` }}>
                    <span className="code-full">
                      {tokens.map((token, tokenIndex) => (
                        <span key={tokenIndex} className={token.k ? `tok tok-${token.k}` : undefined}>
                          {token.t}
                        </span>
                      ))}
                    </span>
                  </span>
                  <Caret on={!!typing} />
                </span>
              </div>
            );
          })}
        </div>

        <motion.div
          className="emit"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={
            reduce || codeDone
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 10 }
          }
          transition={reduce ? { duration: 0.2 } : spring.settle}
        >
          <span className="emit-label">output</span>
          <motion.a
            href="#projects"
            className="emit-btn"
            animate={{ scale: pressed ? 0.97 : 1 }}
            whileTap={{ scale: 0.97 }}
            transition={spring.tap}
          >
            View the work
          </motion.a>
          <span className="emit-type">Designer | Developer</span>
        </motion.div>
      </div>
    </div>
  );
}

export default Studio;
