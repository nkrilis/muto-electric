"use client";

import React from "react";
import { motion } from "framer-motion";

// The full monogram mark (no wordmark), lifted from public/images/logo-small-white.svg.
const MARK_PATH =
  "M 37.791 41.738 C 37.602 42.157, 37.610 84.912, 37.807 136.750 L 38.167 231 66.833 231 L 95.500 231 95.272 197.250 L 95.044 163.500 101.490 188 C 105.036 201.475, 108.987 216.550, 110.272 221.500 L 112.606 230.500 135.063 230.768 L 157.520 231.036 166.030 196.905 L 174.540 162.773 174.155 196.886 L 173.770 231 190.666 231 L 207.563 231 220.191 203.750 C 227.137 188.762, 234.870 172.113, 237.377 166.750 L 241.934 157 218.477 157 L 195.019 157 202.259 145.184 C 206.242 138.685, 221.400 113.947, 235.943 90.210 C 250.487 66.474, 262.508 47.175, 262.657 47.324 C 262.903 47.569, 256.102 67.311, 239.919 113.331 C 236.663 122.589, 234 130.351, 234 130.581 C 234 130.812, 245.454 131, 259.453 131 L 284.905 131 265.953 156 C 255.529 169.750, 238.471 192.250, 228.047 206 L 209.095 231 300.547 231 L 392 231 392 205 L 392 179 346 179 L 300 179 300 171 L 300 163 321.412 163 L 342.823 163 359.412 137.561 C 368.535 123.570, 376 111.870, 376 111.561 C 376 111.253, 358.877 111, 337.949 111 L 299.899 111 300.081 102 L 300.263 93 345.131 93 L 390 93 390 67 L 390 41 274.500 41 C 210.975 41, 158.986 41.112, 158.970 41.250 C 158.753 43.050, 135.238 135.095, 134.912 135.422 C 134.663 135.670, 129.997 118.240, 124.542 96.687 C 119.087 75.134, 113.651 53.900, 112.460 49.500 L 110.296 41.500 74.215 41.238 C 54.370 41.093, 37.979 41.318, 37.791 41.738";

// The bolt is the lightning-shaped notch cut into the mark's right diagonal
// — the exact boundary loop, closed into its own filled shape so it renders
// as the bolt itself rather than an outline traced along one edge of it.
const BOLT_FILL_PATH =
  "M 207.563 231 L 220.191 203.750 C 227.137 188.762, 234.870 172.113, 237.377 166.750 L 241.934 157 L 218.477 157 L 195.019 157 L 202.259 145.184 C 206.242 138.685, 221.400 113.947, 235.943 90.210 C 250.487 66.474, 262.508 47.175, 262.657 47.324 C 262.903 47.569, 256.102 67.311, 239.919 113.331 C 236.663 122.589, 234 130.351, 234 130.581 C 234 130.812, 245.454 131, 259.453 131 L 284.905 131 L 265.953 156 C 255.529 169.750, 238.471 192.250, 228.047 206 L 209.095 231 Z";

const STORAGE_KEY = "muto-intro-seen";

// Two curves cover every transition here: OUT for motion arriving
// (the spark drawing in), STANDARD for state changes and fades.
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_STANDARD: [number, number, number, number] = [0.4, 0, 0.2, 1];

// Timeline (ms)
const BOLT_DRAW = 550;
const IGNITE_AT = 430;
const MARK_REVEAL = 420;
const HOLD = 220;
const OVERLAY_FADE = 420;

const EXIT_AT = IGNITE_AT + MARK_REVEAL + HOLD;
const DONE_AT = EXIT_AT + OVERLAY_FADE;

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

type Phase = "waiting" | "boot" | "ignite" | "exit" | "done";

export const IntroAnimation = () => {
  const [phase, setPhase] = React.useState<Phase>("waiting");
  const timers = React.useRef<ReturnType<typeof setTimeout>[]>([]);

  const finish = React.useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Storage unavailable (private mode, etc.) — safe to ignore.
    }
    document.body.style.removeProperty("overflow");
    setPhase("done");
  }, []);

  const skip = React.useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setPhase("exit");
    timers.current.push(setTimeout(finish, OVERLAY_FADE));
  }, [finish]);

  useIsomorphicLayoutEffect(() => {
    let alreadySeen = true;

    try {
      alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadySeen = false;
    }

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (alreadySeen) {
      setPhase("done");

      return;
    }

    if (reducedMotion) {
      // Preserve the final state, skip the choreography entirely.
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore
      }
      setPhase("done");

      return;
    }

    document.body.style.overflow = "hidden";
    setPhase("boot");

    timers.current.push(setTimeout(() => setPhase("ignite"), IGNITE_AT));
    timers.current.push(setTimeout(() => setPhase("exit"), EXIT_AT));
    timers.current.push(setTimeout(finish, DONE_AT));

    // aria-hidden below keeps this out of the a11y tree, so keyboard skip
    // can't rely on focus — listen on window instead.
    const handleKeyDown = () => skip();

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (phase === "done") return null;

  const boltDrawn = phase === "boot" || phase === "ignite" || phase === "exit";
  const ignited = phase === "ignite" || phase === "exit";

  return (
    <motion.div
      animate={{ opacity: phase === "exit" ? 0 : 1 }}
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      role="presentation"
      transition={{ duration: OVERLAY_FADE / 1000, ease: EASE_STANDARD }}
      onClick={skip}
    >
      <div className="relative h-28 w-auto sm:h-36">
        <svg
          fill="none"
          height="100%"
          viewBox="0 0 429 258"
          width="auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Full mark — ignites once the spark completes */}
          <motion.path
            animate={
              ignited
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.96, filter: "blur(6px)" }
            }
            d={MARK_PATH}
            fill="#FFFFFF"
            initial={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}
            style={{ transformOrigin: "center", transformBox: "fill-box" }}
            transition={{
              type: "spring",
              duration: MARK_REVEAL / 1000,
              bounce: 0,
            }}
          />
          {/* Spark — charges up filling the bolt notch, then fades as it hands off to the mark */}
          <motion.path
            animate={{
              scaleY: boltDrawn ? 1 : 0.2,
              opacity: ignited ? 0 : boltDrawn ? 1 : 0,
            }}
            d={BOLT_FILL_PATH}
            fill="#ED1C24"
            initial={{ scaleY: 0.2, opacity: 0 }}
            style={{
              filter: "drop-shadow(0 0 8px #ED1C24)",
              transformOrigin: "bottom",
              transformBox: "fill-box",
            }}
            transition={{
              scaleY: { duration: BOLT_DRAW / 1000, ease: EASE_OUT },
              opacity: {
                duration: boltDrawn ? MARK_REVEAL / 1000 : BOLT_DRAW / 1000,
                ease: EASE_STANDARD,
              },
            }}
          />
        </svg>
        {/* Flash — a brief glint as the spark hands off to the full mark */}
        <motion.div
          animate={ignited ? { opacity: [0, 0.5, 0] } : { opacity: 0 }}
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)",
            mixBlendMode: "screen",
          }}
          transition={{ duration: 0.24, times: [0, 0.3, 1], ease: EASE_STANDARD }}
        />
      </div>
    </motion.div>
  );
};
