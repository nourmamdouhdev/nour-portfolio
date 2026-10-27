/** Springs aligned with critically damped UI motion: no overshoot unless a flick caused it. */
export const spring = {
  settle: { type: "spring", bounce: 0, duration: 0.4 },
  quick: { type: "spring", bounce: 0, duration: 0.28 },
  tap: { type: "spring", bounce: 0, duration: 0.18 },
};

export function enterTransition(reduce, delay = 0) {
  if (reduce) return { duration: 0.2 };
  return { ...spring.settle, delay };
}

export function hiddenState(reduce) {
  return reduce ? { opacity: 0 } : { opacity: 0, y: 18 };
}
