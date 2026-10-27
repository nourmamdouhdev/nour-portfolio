import { motion, useReducedMotion } from "framer-motion";
import { enterTransition, hiddenState } from "../lib/motion";
import LiveText from "./LiveText";

function SectionHeading({ kicker, title, children }) {
  const reduce = useReducedMotion();

  return (
    <header className="section-head">
      <motion.p
        className="kicker"
        initial={hiddenState(reduce)}
        animate={{ opacity: 1, y: 0 }}
        transition={enterTransition(reduce, 0)}
      >
        <LiveText text={kicker} />
      </motion.p>
      <motion.h2
        initial={hiddenState(reduce)}
        animate={{ opacity: 1, y: 0 }}
        transition={enterTransition(reduce, reduce ? 0 : 0.04)}
      >
        <LiveText text={title} />
      </motion.h2>
      {children ? (
        <motion.p
          className="lede"
          initial={hiddenState(reduce)}
          animate={{ opacity: 1, y: 0 }}
          transition={enterTransition(reduce, reduce ? 0 : 0.08)}
        >
          {typeof children === "string" ? <LiveText text={children} /> : children}
        </motion.p>
      ) : null}
    </header>
  );
}

export default SectionHeading;
