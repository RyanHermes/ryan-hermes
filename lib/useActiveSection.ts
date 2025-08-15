"use client";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Heuristic based active section detection:
 * Picks the section whose top is closest to a focus line (viewport * focusRatio)
 * while already scrolled into (top < viewport * visibleLimit).
 * More reliable for tall sections than intersection ratios that can be skewed.
 */
export function useActiveSection(ids: string[], focusRatio = 0.25) {
  const [activeId, setActiveId] = useState("");
  const tickingRef = useRef(false);

  const measure = useCallback(() => {
    const focusLine = window.innerHeight * focusRatio; // e.g. 25% from top
    let closestId = activeId || ids[0] || "";
    let closestDistance = Infinity;
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      // Consider sections that have started entering viewport (top < 70% viewport)
      if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
        const distance = Math.abs(rect.top - focusLine);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = id;
        }
      }
    }
    if (closestId !== activeId) {
      setActiveId(closestId);
    }
  }, [activeId, ids, focusRatio]);

  useEffect(() => {
    const onScroll = () => {
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          measure();
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };
    const onResize = () => measure();
    measure(); // initial
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [measure]);

  return activeId;
}
