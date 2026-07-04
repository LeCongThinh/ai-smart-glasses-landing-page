import Link from "next/link";
import { ArrowUpRight, Eye, Mail, Phone } from "lucide-react";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Tech specs", href: "#specs" },
  { label: "Product updates", href: "#newsletter" },
];

const contactDetails = [
  {
    label: "0379 711 416",
    href: "tel:+84379711416",
    icon: Phone,
    ariaLabel: "Call Le Cong Thinh at 0379 711 416",
  },
  {
    label: "lecongthinh24062002@gmail.com",
    href: "mailto:lecongthinh24062002@gmail.com",
    icon: Mail,
    ariaLabel: "Email Le Cong Thinh",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#050a1c] px-5 pb-7 pt-14 text-slate-300 md:px-8 lg:pb-8 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_1.25fr_1fr] lg:gap-12 lg:pb-14">
          <div>
            <Link
              href="/"
              aria-label="VisionAI home"
              className="inline-flex items-center gap-2.5 rounded-lg text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/25">
                <Eye aria-hidden="true" size={22} />
              </span>
              <span className="text-2xl font-extrabold tracking-tight">
                Vision<span className="text-blue-500">AI</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Pioneering the next frontier of spatial computing. Intelligent
              eyewear designed to make technology feel more human.
            </p>
            <p className="mt-5 text-sm font-medium text-slate-300">Created by Le Cong Thinh</p>
          </div>

          <nav aria-labelledby="footer-product-heading">
            <h2
              id="footer-product-heading"
              className="text-xs font-bold uppercase tracking-[0.16em] text-white"
            >
              Product
            </h2>
            <ul className="mt-5 space-y-3.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic" aria-labelledby="footer-contact-heading">
            <h2
              id="footer-contact-heading"
              className="text-xs font-bold uppercase tracking-[0.16em] text-white"
            >
              Contact
            </h2>
            <ul className="mt-5 space-y-4">
              {contactDetails.map(({ label, href, icon: Icon, ariaLabel }) => (
                <li key={href}>
                  <a
                    href={href}
                    aria-label={ariaLabel}
                    className="group flex items-start gap-3 text-sm leading-6 text-slate-400 transition-colors hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                  >
                    <Icon aria-hidden="true" className="mt-0.5 shrink-0 text-blue-400" size={17} />
                    <span className="min-w-0 [overflow-wrap:anywhere]">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </address>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Stay updated
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              Get the latest VisionAI product news and early-access invitations.
            </p>
            <Link
              href="#newsletter"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              Join the newsletter
              <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VisionAI. All rights reserved.</p>
          <p>Designed and developed by Le Cong Thinh.</p>
        </div>
      </div>
    </footer>
  );
}
