import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteData } from "../../data/siteData";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

const swatches: Record<string, string> = {
  noir: "bg-ink",
  argent: "bg-metal",
  nuit: "bg-surface",
};

export default function Personalization() {
  const reduceMotion = useReducedMotion();
  const { personalization } = siteData;
  const [selectedId, setSelectedId] = useState<string>(personalization.finishes[0].id);
  const selected =
    personalization.finishes.find((finish) => finish.id === selectedId) ??
    personalization.finishes[0];

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: EASE },
  };

  return (
    <section
      id="personalization"
      aria-labelledby="personalization-title"
      className="bg-surface py-24 text-text md:py-32"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <motion.div
            {...reveal}
            className="relative aspect-[4/3] overflow-hidden rounded-[6px] border border-line bg-raised md:col-span-7 md:aspect-[16/10]"
            role="img"
            aria-label={`VÉLOCÉ GT in ${selected.name}, placeholder for final photography`}
          >
            <motion.div
              key={selected.id}
              className="absolute inset-0 bg-raised"
              aria-hidden="true"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: EASE }}
            />
            <div
              className="absolute inset-x-10 top-1/3 h-px bg-metal/25 md:inset-x-14"
              aria-hidden="true"
            />
            <div
              className="absolute inset-x-14 top-2/3 h-px bg-metal/15 md:inset-x-20"
              aria-hidden="true"
            />
            <p className="absolute bottom-5 left-5 font-mono text-[11px] tracking-[0.22em] text-muted uppercase md:bottom-6 md:left-6">
              GT — {selected.code} / Studio 3/4
            </p>
          </motion.div>

          <motion.div {...reveal} className="md:col-span-5">
            <p className="font-mono text-xs font-medium tracking-[0.22em] text-metal uppercase">
              {personalization.eyebrow}
            </p>
            <h2
              id="personalization-title"
              className="mt-4 font-sans text-[28px] leading-[1.05] font-semibold tracking-[-0.02em] text-balance md:text-5xl"
            >
              {personalization.title}
            </h2>
            <p className="mt-4 max-w-[60ch] font-sans text-base leading-[1.6] text-muted">
              {personalization.intro}
            </p>

            <div
              role="radiogroup"
              aria-label="Exterior finish"
              className="mt-8 flex gap-3"
            >
              {personalization.finishes.map((finish) => {
                const active = finish.id === selectedId;
                return (
                  <button
                    key={finish.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    aria-label={`${finish.name} — ${finish.code}`}
                    onClick={() => setSelectedId(finish.id)}
                    className={`inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-[4px] border p-1.5 transition-colors duration-150 ${
                      active
                        ? "border-metal"
                        : "border-line hover:border-metal"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`block h-8 w-8 rounded-[3px] border border-line ${swatches[finish.id] ?? "bg-raised"}`}
                    />
                  </button>
                );
              })}
            </div>

            <p aria-live="polite" className="mt-4 font-mono text-[11px] font-medium tracking-[0.22em] text-metal uppercase">
              {selected.name} — {selected.code}
            </p>

            <a
              href="#private-viewing"
              className="mt-6 inline-flex min-h-[44px] items-center gap-2 font-mono text-xs font-medium tracking-[0.16em] text-text uppercase transition-colors duration-150 hover:text-bright"
            >
              {personalization.continueLabel} {selected.name}
              <ArrowRight size={15} strokeWidth={1.5} aria-hidden="true" className="text-metal" />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
