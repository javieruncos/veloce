import { motion, useReducedMotion } from "framer-motion";
import heroImg from "../../assets/images/automovil-premium.jpg";
import { siteData } from "../../data/siteData";
import Button from "../ui/Button";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { hero } = siteData;

  const textTransition = { duration: 0.8, ease: EASE };
  const imageTransition = { duration: 1.2, ease: EASE };

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-text"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <motion.img
          src={heroImg}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] md:object-[65%_60%]"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={imageTransition}
        />
        <p className="absolute right-12 bottom-24 hidden font-mono text-[11px] tracking-[0.22em] text-metal uppercase md:block">
          GT — 3/4 Front / Studio
        </p>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/15" />
      </div>

      <Container className="relative pb-16 md:pb-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={textTransition}
          className="max-w-[720px] pt-40"
        >
          <p className="font-mono text-xs font-medium tracking-[0.22em] text-metal uppercase">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-sans text-[42px] leading-[0.95] font-bold tracking-[-0.04em] text-balance sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            {hero.titleLines[0]}
            <br />
            {hero.titleLines[1]}
          </h1>
          <p className="mt-5 max-w-[52ch] font-sans text-base leading-[1.6] text-metal md:text-[17px]">
            {hero.supporting}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={hero.primaryCta.href} variant="primary" className="w-full sm:w-auto">
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </motion.div>

        <p
          aria-hidden="true"
          className="absolute right-6 bottom-6 hidden font-mono text-[11px] tracking-[0.22em] text-muted uppercase md:right-8 md:block"
        >
          {hero.scrollHint}
        </p>
      </Container>
    </section>
  );
}
