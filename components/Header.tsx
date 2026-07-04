"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * VisionAI Header Component
 * Tối ưu SEO, Glassmorphism, Perfect Animation Hamburger, Floating Mobile Menu
 */
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Xử lý hiệu ứng khi cuộn trang
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Specifications", href: "#specs" },
        { name: "Updates", href: "#newsletter" },
    ];

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "border-b border-slate-100 bg-white/80 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#070b18]/85"
                : "border-b border-transparent bg-white dark:bg-[#070b18]"
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8" aria-label="Global Navigation">
                {/* LOGO */}
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                        <span className="sr-only">VisionAI</span>
                        <div className="flex items-center text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                            <svg
                                className="h-8 w-8 text-blue-600 mr-2 transition-transform group-hover:rotate-12"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Vision<span className="text-blue-600 transition-colors group-hover:text-blue-500">AI</span>
                        </div>
                    </Link>
                </div>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden md:flex md:gap-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold leading-6 text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* DESKTOP CTA */}
                <div className="hidden items-center gap-3 md:flex md:flex-1 md:justify-end">
                    <ThemeToggle />
                    <Link
                        href="#newsletter"
                        data-engagement="header-early-access"
                        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 active:scale-95"
                    >
                        Early access
                    </Link>
                </div>

                {/* MOBILE MENU BUTTON (Cải tiến tâm xoay chuẩn 100%) */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        type="button"
                        className="relative flex h-10 w-10 flex-col items-center justify-center rounded-full text-blue-600 transition-colors hover:bg-slate-50 dark:hover:bg-white/5"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <div className="flex flex-col items-end justify-center h-5 w-6 relative">
                            <span className={`absolute h-0.5 w-5 bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-1.5"
                                }`} />

                            {/* Thanh gạch GIỮA (Độ rộng ngắn hơn - tạo điểm nhấn chuẩn tech) */}
                            <span className={`absolute h-0.5 bg-current rounded-full transition-all duration-200 ease-in-out ${isOpen ? "opacity-0 scale-0" : "w-3 opacity-100"
                                }`} />

                            {/* Thanh gạch DƯỚI cùng (Độ rộng đầy đủ) */}
                            <span className={`absolute h-0.5 w-5 bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-1.5"
                                }`} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU PANEL (Cải tiến bo góc dưới, bóng đổ trượt mượt mà) */}
            <div
                className={`absolute left-0 right-0 overflow-hidden rounded-b-2xl border-b border-slate-100 bg-white shadow-xl shadow-slate-200/50 transition-all duration-300 ease-in-out dark:border-white/10 dark:bg-[#0b1124] dark:shadow-black/30 md:hidden ${isOpen
                    ? "max-h-100 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
                    }`}
            >
                <div className="space-y-1 px-6 pb-6 pt-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block rounded-lg px-3 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-blue-400"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="mt-4 border-t border-slate-100 pt-4 dark:border-white/10">
                        <Link
                            href="#newsletter"
                            data-engagement="mobile-early-access"
                            onClick={() => setIsOpen(false)}
                            className="block w-full rounded-full bg-blue-600 py-3.5 text-center text-base font-bold text-white shadow-lg shadow-blue-600/10 transition-colors hover:bg-blue-500"
                        >
                            Get Early Access
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
