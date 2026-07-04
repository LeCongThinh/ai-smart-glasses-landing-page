import Image from "next/image";
import glassesImage from "@/public/glasses5.webp";
import { ArrowRight, Play, Languages, Mic, Navigation, Camera, Users, Star, Cpu, } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#faf8ff] px-5 pt-0 pb-12 text-[#131b2e] transition-colors duration-300 dark:bg-[#070b18] dark:text-white md:px-16 lg:min-h-[calc(100vh-88px)] lg:pt-2 lg:pb-16">
            {/* Background glow */}
            <div className="pointer-events-none absolute right-[-12%] top-10 h-155 w-155 rounded-full bg-[#2563eb]/10 blur-3xl" />
            <div className="pointer-events-none absolute left-[-10%] bottom-[-20%] h-105 w-105 rounded-full bg-[#64a8fe]/20 blur-3xl" />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

                {/* LEFT CONTENT */}
                <div data-reveal="left" className="text-left lg:text-left">
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-5 py-2 text-sm font-semibold text-[#2563eb] shadow-[0_20px_50px_rgba(37,99,235,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5 dark:text-blue-400">
                        ✦ Next Generation AI Smart Glasses
                    </div>

                    <h1 className="mt-8 max-w-2xl text-[48px] font-bold leading-[1.05] tracking-[-0.04em] text-[#131b2e] dark:text-white md:text-[64px] lg:text-[78px]">
                        See <span className="text-[#2563eb]">Smarter.</span>
                        <br />
                        Live <span className="text-[#2563eb]">Better.</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-[1.6] text-[#434655] dark:text-slate-300">
                        VisionAI Glasses combine advanced AI technology with real-time translation, voice assistance, AR navigation, and smart camera
                        intelligence in one premium wearable device.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a href="#newsletter" data-engagement="hero-early-access" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2563eb]
                        px-8 py-4 font-semibold text-white shadow-[0_20px_50px_rgba(37,99,235,0.22)] transition-all hover:-translate-y-0.5
                        hover:shadow-[0_25px_70px_rgba(37,99,235,0.32)]"> Get Early Access <ArrowRight size={18} />
                        </a>

                        <a href="#features" data-engagement="hero-explore-features" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2563eb]/40
                         bg-white/60 px-8 py-4 font-semibold text-[#2563eb] shadow-[0_20px_50px_rgba(37,99,235,0.08)] backdrop-blur-2xl 
                         transition-all hover:-translate-y-0.5 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10"> Explore Features <Play size={18} />
                        </a>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-2 lg:mt-12 lg:max-w-xl lg:gap-5">

                        <Stat icon={<Users size={18} />} title="10,000+" desc="Happy Users" />
                        <Stat icon={<Star size={18} />} title="4.9/5" desc="User Rating" />
                        <Stat icon={<Cpu size={18} />} title="AI Powered" desc="Next Gen Tech" />

                    </div>
                </div>

                {/* RIGHT SHOWCASE */}
                <div data-reveal="right" className="relative order-2 mt-8 flex min-h-90 items-center justify-center overflow-hidden lg:order-0 lg:mt-0 lg:min-h-162.5">
                    {/* Background glow */}
                    <div className="absolute h-80 w-[320px] rounded-full bg-[#64a8fe]/25 blur-3xl sm:h-105 sm:w-105 lg:h-140 lg:w-140" />
                    <div className="absolute h-70 w-70 rounded-full border border-white/80 bg-white/25 backdrop-blur-sm sm:h-95 sm:w-95 lg:h-125 lg:w-125" />
                    <div className="absolute h-82.5 w-82.5 rounded-full border border-[#2563eb]/10 sm:h-115 sm:w-115 lg:h-155 lg:w-155" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_60%)]" />

                    <FeatureCard className="left-2 top-6 lg:left-2 lg:top-12" icon={<Languages size={20} />} title="Real-time" desc="Translation" />

                    <FeatureCard className="right-2 top-10 lg:right-2 lg:top-24" icon={<Mic size={20} />} title="Voice" desc="Assistant" />

                    <FeatureCard className="bottom-10 left-1 lg:bottom-32 lg:left-4" icon={<Navigation size={20} />} title="AR" desc="Navigation" />

                    <FeatureCard className="bottom-20 right-2 lg:bottom-28 lg:right-4" icon={<Camera size={20} />} title="Smart" desc="Camera" />

                    {/* Product image */}
                    <div data-parallax="0.045" className="group relative z-20 w-full max-w-[420px] animate-[float_6s_ease-in-out_infinite] transition-transform duration-500 hover:scale-[1.03] sm:max-w-[520px] lg:max-w-[720px]">
                        <Image
                            src={glassesImage}
                            alt="VisionAI AI Smart Glasses 3D product render"
                            preload
                            placeholder="blur"
                            quality={80}
                            sizes="(max-width: 640px) 360px, (max-width: 1024px) 520px, 720px"
                            className="h-auto w-full select-none drop-shadow-[0_35px_70px_rgba(37,99,235,0.22)] transition-transform duration-700 group-hover:rotate-1"
                        />

                        <div className="pointer-events-none absolute left-[48%] top-[34%] h-12 w-20 rounded-full bg-blue-300/20 blur-xl lg:h-20 lg:w-32 lg:blur-2xl" />
                        <div className="pointer-events-none absolute right-[18%] top-[30%] h-8 w-16 rounded-full bg-blue-500/20 blur-lg lg:h-10 lg:w-24 lg:blur-xl" />
                    </div>

                    {/* Platform */}
                    <div className="absolute bottom-4 z-10 h-12 w-[88%] rounded-[50%] bg-linear-to-b from-white/90 to-[#dee7ff] shadow-[0_10px_35px_rgba(37,99,235,0.16)] lg:h-24 lg:w-[76%]" />
                    <div className="absolute bottom-8 z-20 h-1.5 w-[76%] rounded-full bg-[#2563eb]/35 blur-md lg:bottom-10 lg:h-2 lg:w-[68%]" />
                    <div className="absolute bottom-8 z-30 h-10 w-[72%] rounded-[50%] border-t border-white/60 bg-linear-to-b from-white to-[#eaf0ff] shadow-[0_10px_35px_rgba(37,99,235,0.2)] lg:bottom-12 lg:h-24 lg:w-[68%]" />
                    <div className="absolute bottom-12 z-40 h-1.5 w-[56%] rounded-full bg-[#2563eb]/30 blur-sm lg:bottom-20 lg:h-2 lg:w-[50%]" />
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, desc, className, }: { icon: React.ReactNode; title: string; desc: string; className?: string; }) {
    return (
        <div className={`absolute z-40 flex items-center gap-2 rounded-xl border border-white/70 bg-white/40 px-3 py-2 shadow-[0_10px_25px_rgba(37,99,235,0.1)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/55 lg:gap-4 lg:rounded-3xl lg:px-5 lg:py-4 ${className}`}>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2563eb] text-white shadow-[0_10px_25px_rgba(37,99,235,0.2)] lg:h-14 lg:w-14">
                {icon}
            </div>
            <div className="leading-tight">
                <p className="text-[11px] font-semibold text-[#131b2e] dark:text-white lg:text-base">{title}</p>
                <p className="text-[10px] text-[#434655] dark:text-slate-400 lg:text-sm">{desc}</p>
            </div>
        </div>
    );
}

function Stat({ icon, title, desc, }: { icon: React.ReactNode; title: string; desc: string; }) {
    return (
        <div className="flex flex-col items-center rounded-2xl border border-white/70 bg-white/60 p-3 text-center dark:border-white/10 dark:bg-white/5
        shadow-[0_10px_30px_rgba(37,99,235,0.08)] backdrop-blur-xl lg:flex-row lg:items-center lg:gap-3 lg:p-4 lg:text-left">
            <div className="mb-2 text-[#2563eb] lg:mb-0">{icon}</div>
            <div>
                <p className="text-xs font-bold text-[#131b2e] dark:text-white lg:text-sm">{title}</p>
                <p className="text-[10px] text-[#434655] dark:text-slate-400 lg:text-xs">{desc}</p>
            </div>
        </div>
    );
}
