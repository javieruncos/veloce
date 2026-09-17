import { motion, useReducedMotion } from "framer-motion";
import { siteData } from "../../data/siteData";
import Button from "../ui/Button";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FeaturedModel() {
  const reduceMotion = useReducedMotion();
  const { featured } = siteData;

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: EASE },
  };

  return (
    <section
      id="featured"
      aria-labelledby="featured-title"
      className="bg-ink py-24 text-text md:py-32"
    >
      <Container>
        <motion.div {...reveal}>
          <p className="font-mono text-xs font-medium tracking-[0.22em] text-metal uppercase">
            {featured.eyebrow}
          </p>
          <h2
            id="featured-title"
            className="mt-4 font-sans text-[28px] leading-[1.05] font-semibold tracking-[-0.02em] text-balance md:text-5xl"
          >
            {featured.title}
          </h2>
          <p className="mt-4 font-mono text-[11px] font-medium tracking-[0.22em] text-metal uppercase">
            {featured.category} — {featured.name}
          </p>
          <p className="mt-4 max-w-[60ch] font-sans text-base leading-[1.6] text-muted">
            {featured.description}
          </p>
        </motion.div>

        <motion.div
          {...reveal}
          className="relative mt-12 aspect-[4/3] overflow-hidden rounded-[6px] border border-line bg-raised md:mt-14 md:aspect-[21/9]"
          role="img"
          aria-label="VÉLOCÉ GT grand tourer side profile in a dark studio, placeholder for final photography"
        >
          <div className="absolute inset-0 bg-raised" aria-hidden="true" />
          <div
            className="absolute inset-x-10 top-1/3 h-px bg-metal/25 md:inset-x-16"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-16 top-2/3 h-px bg-metal/15 md:inset-x-24"
            aria-hidden="true"
          />
          <p className="absolute bottom-5 left-5 font-mono text-[11px] tracking-[0.22em] text-muted uppercase md:bottom-6 md:left-6">
            {featured.imageLabel}
          </p>
          <p className="absolute top-5 right-5 font-mono text-[11px] tracking-[0.22em] text-muted uppercase md:top-6 md:right-6">
            FLAGSHIP
          </p>
        </motion.div>

        <motion.dl
          {...reveal}
          className="mt-10 grid grid-cols-2 gap-x-6 md:mt-12 md:grid-cols-4"
        >
          {featured.specs.map((spec) => (
            <div key={spec.label} className="border-t border-line pt-5">
              <dd className="font-mono text-[28px] leading-none font-medium text-text tabular-nums md:text-4xl">
                {spec.value}
              </dd>
              <dt className="mt-2 font-mono text-[11px] font-medium tracking-[0.14em] text-metal uppercase">
                {spec.unit} — {spec.label}
              </dt>
            </div>
          ))}
        </motion.dl>

        <motion.div {...reveal} className="mt-10 md:mt-12">
          <Button href={featured.cta.href} variant="secondary" className="w-full sm:w-auto">
            {featured.cta.label}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
