import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteData } from "../../data/siteData";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

type Model = (typeof siteData.collection.models)[number];

function ModelVisual({ model, aspect }: { model: Model; aspect: string }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[6px] border border-line bg-raised ${aspect}`}
    >
      <div className="absolute inset-0 bg-raised" aria-hidden="true" />
      <div
        className="absolute inset-x-10 top-1/3 h-px bg-metal/25 transition-transform duration-600 ease-out group-hover:scale-x-105 md:inset-x-16"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-16 top-2/3 h-px bg-metal/15 md:inset-x-24"
        aria-hidden="true"
      />
      <p className="absolute bottom-5 left-5 font-mono text-[11px] tracking-[0.22em] text-muted uppercase md:bottom-6 md:left-6">
        {model.imageLabel}
      </p>
      <p className="absolute top-5 right-5 font-mono text-[11px] tracking-[0.22em] text-muted uppercase md:top-6 md:right-6">
        {model.role}
      </p>
    </div>
  );
}

function ModelInfo({ model, nameId }: { model: Model; nameId: string }) {
  return (
    <div className="mt-6">
      <p className="font-mono text-[11px] font-medium tracking-[0.22em] text-metal uppercase">
        {model.category}
      </p>
      <h3
        id={nameId}
        className="mt-2 font-sans text-2xl font-semibold tracking-[-0.01em] text-text md:text-[28px]"
      >
        {model.name}
      </h3>
      <p className="mt-2 max-w-[52ch] font-sans text-base leading-[1.6] text-muted">
        {model.line}
      </p>
      <a
        href={model.href}
        aria-describedby={nameId}
        className="mt-4 inline-flex min-h-[44px] items-center gap-2 font-mono text-xs font-medium tracking-[0.16em] text-text uppercase transition-colors duration-150 hover:text-bright"
      >
        View model
        <ArrowUpRight
          size={15}
          strokeWidth={1.5}
          aria-hidden="true"
          className="text-metal"
        />
      </a>
    </div>
  );
}

export default function ModelCollection() {
  const reduceMotion = useReducedMotion();
  const { collection } = siteData;
  const [gt, s7, x] = collection.models;

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: EASE },
  };

  return (
    <section
      id="collection"
      aria-labelledby="collection-title"
      className="bg-surface py-24 text-text md:py-32"
    >
      <Container>
        <motion.div {...reveal}>
          <p className="font-mono text-xs font-medium tracking-[0.22em] text-metal uppercase">
            {collection.eyebrow}
          </p>
          <h2
            id="collection-title"
            className="mt-4 font-sans text-[28px] leading-[1.05] font-semibold tracking-[-0.02em] text-balance md:text-5xl"
          >
            {collection.title}
          </h2>
          <p className="mt-4 max-w-[60ch] font-sans text-base leading-[1.6] text-muted">
            {collection.intro}
          </p>
        </motion.div>

        <motion.article aria-labelledby="model-gt" {...reveal} className="mt-14 md:mt-16">
          <ModelVisual model={gt} aspect="aspect-[16/10] md:aspect-[21/9]" />
          <ModelInfo model={gt} nameId="model-gt" />
        </motion.article>

        <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-0">
          <motion.article
            aria-labelledby="model-s7"
            {...reveal}
            className="md:border-r md:border-line md:pr-10"
          >
            <ModelVisual model={s7} aspect="aspect-[4/3] md:aspect-[16/10]" />
            <ModelInfo model={s7} nameId="model-s7" />
          </motion.article>
          <motion.article
            aria-labelledby="model-x"
            {...reveal}
            className="md:pl-10"
          >
            <ModelVisual model={x} aspect="aspect-[4/3] md:aspect-[16/10]" />
            <ModelInfo model={x} nameId="model-x" />
          </motion.article>
        </div>
      </Container>
    </section>
  );
}
