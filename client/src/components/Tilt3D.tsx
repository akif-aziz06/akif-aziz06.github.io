"use client";

import { useCallback, useRef, type ReactNode } from "react";

type Tilt3DProps = {
  children: ReactNode;
  /** Maximum rotation in degrees on each axis. */
  max?: number;
  className?: string;
};

/**
 * Pointer-driven 3D tilt. Writes rotation and cursor position to CSS custom
 * properties so children can layer themselves at different depths (.depth-*)
 * and the glare can follow the cursor — no re-render per pointer move.
 *
 * Mouse only: touch devices skip it (no hover), and reduced-motion users get a
 * flat card via the media query in globals.css.
 */
export default function Tilt3D({ children, max = 10, className = "" }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const handleMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (event.pointerType !== "mouse") return;
      const node = ref.current;
      if (!node) return;

      const { left, top, width, height } = node.getBoundingClientRect();
      const x = (event.clientX - left) / width - 0.5;
      const y = (event.clientY - top) / height - 0.5;

      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        node.style.setProperty("--rx", `${(-y * max).toFixed(2)}deg`);
        node.style.setProperty("--ry", `${(x * max).toFixed(2)}deg`);
        node.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
        node.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(1)}%`);
      });
    },
    [max],
  );

  const handleEnter = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    ref.current?.classList.add("is-tilting");
  }, []);

  const handleLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    node.classList.remove("is-tilting");
    node.style.setProperty("--rx", "0deg");
    node.style.setProperty("--ry", "0deg");
    node.style.setProperty("--mx", "50%");
    node.style.setProperty("--my", "50%");
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      className={`tilt3d ${className}`}
    >
      {children}
    </div>
  );
}
