"use client";

import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";

type Notice = { message: string; key: number } | null;

export default function ExperienceLayer() {
  const [progress, setProgress] = useState(0);
  const [notice, setNotice] = useState<Notice>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    revealElements.forEach((element) => observer.observe(element));

    let frame = 0;
    let scrollNoticeShown = sessionStorage.getItem("visionai-scroll-notice") === "shown";
    let clickNoticeShown = sessionStorage.getItem("visionai-click-notice") === "shown";

    const sendEvent = (type: "click" | "scroll", label: string) => {
      const payload = JSON.stringify({ type, label, path: window.location.pathname });
      navigator.sendBeacon("/api/events", new Blob([payload], { type: "application/json" }));
    };

    const updateScroll = () => {
      frame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
      setProgress(nextProgress);

      if (!reduceMotion) {
        parallaxElements.forEach((element) => {
          const speed = Number(element.dataset.parallax ?? 0.08);
          const rect = element.getBoundingClientRect();
          const distance = (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed;
          element.style.setProperty("--parallax-y", `${distance.toFixed(1)}px`);
        });
      }

      if (!scrollNoticeShown && nextProgress >= 0.55) {
        scrollNoticeShown = true;
        sessionStorage.setItem("visionai-scroll-notice", "shown");
        setNotice({ message: "You’re halfway there—explore the full VisionAI story.", key: Date.now() });
        sendEvent("scroll", "page-55-percent");
      }
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };

    const onEngagement = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-engagement]");
      if (!target) return;

      const label = target.dataset.engagement;
      window.dispatchEvent(new CustomEvent("visionai:engagement", { detail: { type: "click", label } }));
      if (label) sendEvent("click", label);

      if (!clickNoticeShown) {
        clickNoticeShown = true;
        sessionStorage.setItem("visionai-click-notice", "shown");
        setNotice({ message: "Got it—your next VisionAI destination is ready.", key: Date.now() });
      }
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onEngagement);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onEngagement);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(null), 4500);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  return (
    <>
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-70 h-0.5 bg-transparent">
        <div
          className="h-full origin-left bg-linear-to-r from-blue-600 via-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.65)]"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-5 left-1/2 z-80 flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center gap-3 rounded-2xl border border-blue-200/70 bg-white/95 p-4 text-sm text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.2)] backdrop-blur-xl transition duration-500 dark:border-blue-400/20 dark:bg-slate-900/95 dark:text-slate-200 ${notice ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"}`}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
          <Check aria-hidden="true" size={17} />
        </span>
        <span className="flex-1">{notice?.message}</span>
        <button
          type="button"
          onClick={() => setNotice(null)}
          aria-label="Dismiss notification"
          className="rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
        >
          <X aria-hidden="true" size={17} />
        </button>
      </div>
    </>
  );
}
