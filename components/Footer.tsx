import Link from "next/link";
import { ArrowUpRight, Eye, Mail } from "lucide-react";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Tech specs", href: "#specs" },
  { label: "Get updates", href: "#newsletter" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-[#faf8ff] px-5 pb-8 pt-12 text-[#131b2e] md:px-8 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-slate-200 pb-10 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:pb-14">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600" aria-label="VisionAI home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <Eye aria-hidden="true" size={22} />
              </span>
              <span className="text-2xl font-extrabold tracking-tight">Vision<span className="text-blue-600">AI</span></span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-600">
              Human-centered AI glasses that help you understand, navigate and
              capture the world—without looking down.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-900">Explore</h2>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-600 transition hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-900">Talk to us</h2>
            <a href="mailto:hello@visionai.example" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
              <Mail aria-hidden="true" size={17} />
              hello@visionai.example
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <p className="mt-3 text-sm leading-6 text-slate-500">Built for curious people everywhere.</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VisionAI. All rights reserved.</p>
          <p>Designed for a smarter point of view.</p>
        </div>
      </div>
    </footer>
  );
}
