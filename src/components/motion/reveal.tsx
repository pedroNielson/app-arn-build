"use client";
import { useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = { as?: ElementType; className?: string; stagger?: number; children: ReactNode };

/** Anima em sequência todos os filhos marcados com `data-reveal` quando o grupo entra na tela. */
export function Reveal({ as: Tag = "div", className, stagger = 0.12, children }: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ref.current!.querySelectorAll("[data-reveal]"),
          { y: 48, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger, clearProps: "transform", scrollTrigger: { trigger: ref.current, start: "top 82%", once: true } },
        );
      });
    },
    { scope: ref },
  );

  return <Tag ref={ref} className={className}>{children}</Tag>;
}
