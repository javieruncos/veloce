import { motion, useReducedMotion } from "framer-motion";
import detailFrontImg from "../../assets/images/detail-front.jpg";
import detailInteriorImg from "../../assets/images/detail-interior.jpg";
import detailWheelImg from "../../assets/images/detail-wheel.jpg";
import { siteData } from "../../data/siteData";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

const detailImages: Record<string, { src: string; alt: string }> = {
  front: {
    src: detailFrontImg,
    alt: "VÉLOCÉ GT headlight and bonnet close-up in a dark studio",
  },
  interior: {
    src: detailInteriorImg,
    alt: "VÉLOCÉ GT cockpit with stitched leather seats and VÉLOCÉ sill plate",
  },
  wheel: {
    src: detailWheelImg,
    alt: "VÉLOCÉ GT wheel with drilled brake disc and V center cap",
  },
};

type Detail = (typeof siteData.design.details)[number];

function DetailVisual({ detail, aspect }: { detail: Detail; aspect: string }) {
  const image = detailImages[detail.id];
  return (
    <div
      className={`group relative overflow-hidden rounded-[6px] border border-line bg-raised ${aspect}`}
      role="img"
      aria-label={detail.title}
    >
      {image && (
        <img
          src={image.src}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.02]"
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/10"
        aria-hidden="true"
      />
      <p className="absolute bottom-5 left-5 font-mono text-[11px] tracking-[0.22em] text-bright uppercase md:bottom-6 md:left-6">
        {detail.imageLabel}
      </p>
    </div>
  );
}

function DetailInfo({ detail, nameId }: { detail: Detail; nameId: string }) {
  return (
    <div className="mt-5">
      <p className="font-mono text-[11px] font-medium tracking-[0.22em] text-metal uppercase">
        {detail.label}
      </p>
      <h3
        id={nameId}
        className="mt-2 font-sans text-xl font-semibold tracking-[-0.01em] text-text"
      >
        {detail.title}
      </h3>
      <p className="mt-2 max-w-[52ch] font-sans text-[15px] leading-[1.6] text-muted">
        {detail.line}
      </p>
    </div>
  );
}

export default function DesignDetails() {
  const reduceMotion = useReducedMotion();
  const { design } = siteData;
  const [front, interior, wheel] = design.details;

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: EASE },
  };

  return (
    <section
      id="design"
      aria-labelledby="design-title"
      className="bg-surface py-24 text-text md:py-32"
    >
      <Container>
        <motion.div {...reveal}>
          <p className="font-mono text-xs font-medium tracking-[0.22em] text-metal uppercase">
            {design.eyebrow}
          </p>
          <h2
            id="design-title"
            className="mt-4 font-sans text-[28px] leading-[1.05] font-semibold tracking-[-0.02em] text-balance md:text-5xl"
          >
            {design.title}
          </h2>
          <p className="mt-4 max-w-[60ch] font-sans text-base leading-[1.6] text-muted">
            {design.intro}
          </p>
        </motion.div>

        <motion.article
          aria-labelledby="detail-front"
          {...reveal}
          className="mt-12 md:mt-14"
        >
          <DetailVisual detail={front} aspect="aspect-[16/10] md:aspect-[21/9]" />
          <DetailInfo detail={front} nameId="detail-front" />
        </motion.article>

        <div className="mt-12 grid gap-12 md:mt-14 md:grid-cols-2 md:gap-0">
          <motion.article
            aria-labelledby="detail-interior"
            {...reveal}
            className="md:border-r md:border-line md:pr-10"
          >
            <DetailVisual detail={interior} aspect="aspect-[16/10]" />
            <DetailInfo detail={interior} nameId="detail-interior" />
          </motion.article>
          <motion.article
            aria-labelledby="detail-wheel"
            {...reveal}
            className="md:pl-10"
          >
            <DetailVisual detail={wheel} aspect="aspect-[16/10]" />
            <DetailInfo detail={wheel} nameId="detail-wheel" />
          </motion.article>
        </div>
      </Container>
    </section>
  );
}
