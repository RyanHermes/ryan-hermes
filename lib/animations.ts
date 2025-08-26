import { useReducedMotion } from "framer-motion";
export function useFadeInUp(delay = 0.2, distance = 30) {
  const prefersReduced = useReducedMotion();
  return {
    hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    },
  } as const;
}

export function useStaggerChildren(staggerChildren = 0.1) {
  const prefersReduced = useReducedMotion();
  return {
    hidden: { opacity: 0 },
    visible: prefersReduced
      ? { opacity: 1 }
      : {
          opacity: 1,
          transition: { staggerChildren },
        },
  } as const;
}

export function useSlideInX(distance = 20) {
  const prefersReduced = useReducedMotion();
  return {
    hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, x: -distance },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  } as const;
}
