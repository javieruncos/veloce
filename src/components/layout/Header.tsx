import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteData } from "../../data/siteData";
import Container from "../ui/Container";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open ]);

  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-transparent">
      <Container>
        <div className="flex h-[68px] items-center justify-between">
          <a
            href="#top"
            className="font-sans text-sm font-bold tracking-[0.18em] text-text"
            aria-label="VÉLOCÉ Automotive — home"
          >
            {siteData.brand.wordmark}
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {siteData.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-sm font-medium text-metal transition-colors duration-150 hover:text-text"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#private-viewing"
            className="hidden min-h-[44px] items-center border border-line px-5 font-mono text-[11px] font-medium tracking-[0.16em] text-text uppercase transition-colors duration-150 hover:border-metal hover:text-bright sm:inline-flex"
          >
            Book a private viewing
          </a>

          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-text md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-ink md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {siteData.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="inline-flex min-h-[48px] items-center font-sans text-base font-medium text-text"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#private-viewing"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex min-h-[48px] items-center justify-center border border-line font-mono text-xs tracking-[0.16em] text-text uppercase"
            >
              Book a private viewing
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
