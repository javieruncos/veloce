import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import veloceGtGraphiteImg from "../../assets/images/veloce-gt-graphite.jpg";
import veloceGtMidnightImg from "../../assets/images/veloce-gt-midnight.jpg";
import veloceGtSilverImg from "../../assets/images/veloce-gt-silver.jpg";
import { siteData } from "../../data/siteData";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

const finishImages: Record<string, { src: string; alt: string }> = {
  graphite: {
    src: veloceGtGraphiteImg,
    alt: "VÉLOCÉ GT en acabado Graphite",
  },
  silver: {
    src: veloceGtSilverImg,
    alt: "VÉLOCÉ GT en acabado Silver",
  },
  midnight: {
    src: veloceGtMidnightImg,
    alt: "VÉLOCÉ GT en acabado Midnight",
  },
};

export default function Personalization() {
  const reduceMotion = useReducedMotion();
  const { personalization } = siteData;
  const [selectedId, setSelectedId] = useState<string>(personalization.finishes[0].id);
  const selected =
    personalization.finishes.find((finish) => finish.id === selectedId) ??
    personalization.finishes[0];
  const selectedImage = finishImages[selected.id];

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
        <div className="grid gap-12 md:gap-10 lg:grid-cols-12">
          <motion.div
            {...reveal}
            className="relative aspect-[4/3] overflow-hidden rounded-[6px] border border-line bg-raised lg:col-span-7 lg:aspect-[16/10]"
          >
            {selectedImage && (
              <motion.img
                key={selected.id}
                src={selectedImage.src}
                alt={selectedImage.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: EASE }}
              />
            )}
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/10"
              aria-hidden="true"
            />
            <p className="absolute bottom-5 left-5 font-mono text-[11px] tracking-[0.22em] text-bright uppercase md:bottom-6 md:left-6">
              GT — {selected.code} / Studio 3/4
            </p>
          </motion.div>

          <motion.div {...reveal} className="lg:col-span-5">
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
              role="group"
              aria-label="Exterior finish"
              className="mt-8 flex flex-col gap-3 md:flex-row"
            >
              {personalization.finishes.map((finish) => {
                const active = finish.id === selectedId;
                const thumb = finishImages[finish.id];
                return (
                  <button
                    key={finish.id}
                    type="button"
                    aria-pressed={active}
                    aria-label={`${finish.name} — ${finish.code}`}
                    onClick={() => setSelectedId(finish.id)}
                    className={`inline-flex min-h-[48px] w-full items-center justify-start gap-3 rounded-[4px] border py-1.5 pr-4 pl-1.5 transition-colors duration-150 md:w-auto ${
                      active
                        ? "border-metal"
                        : "border-line hover:border-metal"
                    }`}
                  >
                    {thumb && (
                      <img
                        src={thumb.src}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        className="block h-8 w-12 rounded-[3px] border border-line object-cover object-center"
                      />
                    )}
                    <span
                      className={`font-mono text-[11px] font-medium tracking-[0.14em] uppercase ${
                        active ? "text-text" : "text-muted"
                      }`}
                    >
                      {finish.name}
                    </span>
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
              {personalization.continueLabel}
              <ArrowRight size={15} strokeWidth={1.5} aria-hidden="true" className="text-metal" />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
