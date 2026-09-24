import { motion, useReducedMotion } from "framer-motion";
import { siteData } from "../../data/siteData";
import Button from "../ui/Button";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

const footerNav = [
  { label: "Collection", href: "#collection" },
  { label: "Design", href: "#design" },
  { label: "Technology", href: "#technology" },
  { label: "Personalization", href: "#personalization" },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: EASE },
  };

  return (
    <footer className="border-t border-line bg-ink text-text">
      <Container className="py-16 md:py-20">
        <motion.div
          {...reveal}
          className="grid gap-12 md:grid-cols-12 md:gap-10"
        >
          <div className="md:col-span-5">
            <p className="font-sans text-sm font-bold tracking-[0.18em]">
              {siteData.brand.wordmark}
            </p>
            <p className="mt-4 max-w-[38ch] font-sans text-base leading-[1.6] text-muted">
              {siteData.brand.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <p className="font-mono text-[11px] font-medium tracking-[0.22em] text-metal uppercase">
              Navigation
            </p>
            <ul className="mt-4">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center font-sans text-sm font-medium text-metal transition-colors duration-150 hover:text-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] font-medium tracking-[0.22em] text-metal uppercase">
              Private viewing
            </p>
            <p className="mt-4 font-sans text-[15px] leading-[1.6] text-muted">
              Private appointments, on request.
            </p>
            <Button href="#private-viewing" variant="secondary" className="mt-6 w-full sm:w-auto">
              Book a private viewing
            </Button>
          </div>
        </motion.div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
            © {year} VÉLOCÉ Automotive
          </p>
          <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
            A boutique automotive marque
          </p>
        </div>
      </Container>
    </footer>
  );
}
