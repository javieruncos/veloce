import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { siteData } from "../../data/siteData";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

const inputClasses =
  "min-h-[48px] w-full rounded-[3px] border border-line bg-ink px-4 font-sans text-base text-text placeholder:text-muted focus:border-metal focus:outline-none";
const labelClasses =
  "mb-2 block font-mono text-[11px] font-medium tracking-[0.22em] text-metal uppercase";
const errorClasses = "mt-2 font-mono text-xs tracking-[0.08em] text-bright uppercase";

type Status = "idle" | "sending" | "sent";

export default function PrivateViewing() {
  const reduceMotion = useReducedMotion();
  const { privateViewing } = siteData;
  const [model, setModel] = useState<string>(privateViewing.models[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [preference, setPreference] = useState("email");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const successRef = useRef<HTMLHeadingElement>(null);

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: EASE },
  };

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Name is required";
    if (!email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Enter a valid email";
    if (preference === "phone" && !phone.trim())
      next.phone = "Phone is required for phone contact";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      requestAnimationFrame(() => successRef.current?.focus());
    }, 900);
  }

  function onReset() {
    setModel(privateViewing.models[0]);
    setName("");
    setEmail("");
    setPreference("email");
    setPhone("");
    setMessage("");
    setErrors({});
    setStatus("idle");
  }

  return (
    <section
      id="private-viewing"
      aria-labelledby="private-viewing-title"
      className="bg-ink py-24 text-text md:py-32"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <motion.div {...reveal} className="md:col-span-5">
            <p className="font-mono text-xs font-medium tracking-[0.22em] text-metal uppercase">
              {privateViewing.eyebrow}
            </p>
            <h2
              id="private-viewing-title"
              className="mt-4 font-sans text-[28px] leading-[1.05] font-semibold tracking-[-0.02em] text-balance md:text-5xl"
            >
              {privateViewing.title}
            </h2>
            <p className="mt-4 max-w-[60ch] font-sans text-base leading-[1.6] text-muted">
              {privateViewing.intro}
            </p>
            <ul className="mt-8">
              {privateViewing.expectations.map((item) => (
                <li
                  key={item}
                  className="border-t border-line py-4 font-sans text-[15px] leading-[1.6] text-metal last:border-b"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
              {privateViewing.note}
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            className="rounded-[6px] border border-line bg-raised p-6 md:col-span-7 md:p-8"
          >
            {status === "sent" ? (
              <div aria-live="polite">
                <span className="inline-flex h-11 w-11 items-center justify-center border border-line text-metal">
                  <Check size={20} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3
                  ref={successRef}
                  tabIndex={-1}
                  className="mt-5 font-sans text-2xl font-semibold tracking-[-0.01em] focus:outline-none"
                >
                  {privateViewing.success.title}
                </h3>
                <p className="mt-3 max-w-[52ch] font-sans text-base leading-[1.6] text-muted">
                  {model} — {name}. {privateViewing.success.line}
                </p>
                <button
                  type="button"
                  onClick={onReset}
                  className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-[3px] border border-line bg-transparent px-6 font-mono text-xs font-medium tracking-[0.16em] text-text uppercase transition-colors duration-150 hover:border-metal hover:text-bright sm:w-auto"
                >
                  {privateViewing.success.againLabel}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div>
                  <label htmlFor="pv-model" className={labelClasses}>
                    Model of interest
                  </label>
                  <select
                    id="pv-model"
                    value={model}
                    onChange={(event) => setModel(event.target.value)}
                    className={inputClasses}
                  >
                    {privateViewing.models.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="pv-name" className={labelClasses}>
                      Name
                    </label>
                    <input
                      id="pv-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "pv-name-error" : undefined}
                      placeholder="Alex Moreau"
                      className={inputClasses}
                    />
                    {errors.name && (
                      <p id="pv-name-error" role="alert" className={errorClasses}>
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="pv-email" className={labelClasses}>
                      Email
                    </label>
                    <input
                      id="pv-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "pv-email-error" : undefined}
                      placeholder="alex@example.com"
                      className={inputClasses}
                    />
                    {errors.email && (
                      <p id="pv-email-error" role="alert" className={errorClasses}>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <fieldset className="mt-6">
                  <legend className={labelClasses}>Contact preference</legend>
                  <div className="flex gap-3">
                    {["email", "phone"].map((option) => (
                      <label
                        key={option}
                        className={`inline-flex min-h-[48px] flex-1 cursor-pointer items-center justify-center rounded-[3px] border font-mono text-xs tracking-[0.16em] uppercase transition-colors duration-150 ${
                          preference === option
                            ? "border-metal text-text"
                            : "border-line text-muted hover:border-metal hover:text-text"
                        }`}
                      >
                        <input
                          type="radio"
                          name="contact-preference"
                          value={option}
                          checked={preference === option}
                          onChange={() => setPreference(option)}
                          className="sr-only"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </fieldset>

                {preference === "phone" && (
                  <div className="mt-6">
                    <label htmlFor="pv-phone" className={labelClasses}>
                      Phone
                    </label>
                    <input
                      id="pv-phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "pv-phone-error" : undefined}
                      placeholder="+34 600 000 000"
                      className={inputClasses}
                    />
                    {errors.phone && (
                      <p id="pv-phone-error" role="alert" className={errorClasses}>
                        {errors.phone}
                      </p>
                    )}
                  </div>
                )}

                <div className="mt-6">
                  <label htmlFor="pv-message" className={labelClasses}>
                    Message <span className="text-muted">(optional)</span>
                  </label>
                  <textarea
                    id="pv-message"
                    rows={4}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Preferred date, model questions…"
                    className={`${inputClasses} resize-y py-3`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-[3px] bg-text px-6 font-mono text-xs font-medium tracking-[0.16em] text-ink uppercase transition-colors duration-150 hover:bg-bright disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : privateViewing.submitLabel}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
