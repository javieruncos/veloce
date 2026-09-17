import { motion, useReducedMotion } from "framer-motion";
import { Activity, Gauge, MonitorDot, ShieldCheck } from "lucide-react";
import techCockpitImg from "../../assets/images/tech-cockpit.jpg";
import { siteData } from "../../data/siteData";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

const icons = {
  cruise: Activity,
  display: MonitorDot,
  gauge: Gauge,
  shield: ShieldCheck,
} as const;

type TechItem = (typeof siteData.technology.items)[number];

export default function Technology() {
  const reduceMotion = useReducedMotion();
  const { technology } = siteData;

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: EASE },
  };

  return (
    <section
      id="technology"
      aria-labelledby="technology-title"
      className="bg-ink py-24 text-text md:py-32"
    >
      <Container>
        <motion.div {...reveal}>
          <p className="font-mono text-xs font-medium tracking-[0.22em] text-metal uppercase">
            {technology.eyebrow}
          </p>
          <h2
            id="technology-title"
            className="mt-4 font-sans text-[28px] leading-[1.05] font-semibold tracking-[-0.02em] text-balance md:text-5xl"
          >
            {technology.title}
          </h2>
          <p className="mt-4 max-w-[60ch] font-sans text-base leading-[1.6] text-muted">
            {technology.intro}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-12 md:mt-14 md:gap-10 lg:grid-cols-12">
          <motion.div
            {...reveal}
            className="relative aspect-[16/10] overflow-hidden rounded-[6px] border border-line bg-raised lg:col-span-5 lg:aspect-[3/4]"
            role="img"
            aria-label="VÉLOCÉ GT cockpit with driver display and central screen at night"
          >
            <img
              src={techCockpitImg}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/10"
              aria-hidden="true"
            />
            <p className="absolute bottom-5 left-5 font-mono text-[11px] tracking-[0.22em] text-bright uppercase md:bottom-6 md:left-6">
              {technology.imageLabel}
            </p>
          </motion.div>

          <motion.ul
            {...reveal}
            className="lg:col-span-7"
          >
            {technology.items.map((item: TechItem) => {
              const Icon = icons[item.icon as keyof typeof icons];
              return (
                <li
                  key={item.id}
                  className="flex gap-5 border-t border-line py-7 last:border-b md:gap-6"
                >
                  <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-line text-metal">
                    <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="font-mono text-[11px] font-medium tracking-[0.22em] text-metal uppercase">
                      {item.index}
                    </span>
                    <span className="mt-1 block font-sans text-xl font-semibold tracking-[-0.01em] text-text">
                      {item.title}
                    </span>
                    <span className="mt-2 block max-w-[52ch] font-sans text-[15px] leading-[1.6] text-muted">
                      {item.line}
                    </span>
                  </span>
                </li>
              );
            })}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
