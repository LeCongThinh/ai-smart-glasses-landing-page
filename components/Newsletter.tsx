"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, Mail, ShieldCheck, Sparkles } from "lucide-react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }

    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="newsletter" className="bg-[#faf8ff] px-5 py-12 md:px-8 lg:py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#101a35] px-6 py-12 shadow-[0_30px_90px_rgba(37,99,235,0.18)] sm:px-10 md:rounded-[40px] lg:px-16 lg:py-18">
        <div className="pointer-events-none absolute -right-28 -top-36 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 left-1/3 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold tracking-wide text-blue-200 backdrop-blur-xl">
              <Sparkles aria-hidden="true" size={15} />
              BE FIRST TO SEE WHAT&apos;S NEXT
            </div>
            <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              The future looks better from here.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 lg:text-lg">
              Get product updates, early-access invitations and stories from the
              VisionAI lab—delivered occasionally, never noisily.
            </p>
          </div>

          <div className="rounded-3xl border border-white/12 bg-white/8 p-4 backdrop-blur-xl sm:p-6">
            <form onSubmit={handleSubmit} noValidate={false}>
              <label htmlFor="newsletter-email" className="text-sm font-semibold text-white">
                Email address
              </label>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <div className="relative min-w-0 flex-1">
                  <Mail aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@example.com"
                    aria-describedby="newsletter-note newsletter-status"
                    className="h-13 w-full rounded-full border border-white/15 bg-white px-11 pr-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 active:translate-y-0"
                >
                  Join the list
                  <ArrowRight aria-hidden="true" size={18} />
                </button>
              </div>
              <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate-400">
                <ShieldCheck aria-hidden="true" className="mt-0.5 shrink-0 text-blue-300" size={16} />
                <p id="newsletter-note">No spam. Unsubscribe any time. We respect your inbox.</p>
              </div>
              <p id="newsletter-status" aria-live="polite" className={`mt-4 flex items-center gap-2 text-sm font-medium text-emerald-300 ${submitted ? "" : "sr-only"}`}>
                <Check aria-hidden="true" size={17} />
                You&apos;re on the list. Welcome to VisionAI.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
