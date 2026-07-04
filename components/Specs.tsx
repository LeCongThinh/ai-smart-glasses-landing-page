import Image, { type StaticImageData } from "next/image";
import {
  AudioLines,
  Battery,
  Camera,
  Cpu,
  Feather,
  Monitor,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";

import glassesImage from "@/public/glasses5.webp";
import explodedImage from "@/public/visionai-exploded.png";
import macroImage from "@/public/visionai-macro.png";

type Spec = {
  icon: LucideIcon;
  label: string;
  value: string;
};

const specs: Spec[] = [
  { icon: Feather, label: "Weight", value: "42g" },
  { icon: Battery, label: "Battery Life", value: "18 Hours" },
  { icon: Monitor, label: "Display", value: "Micro OLED" },
  { icon: Camera, label: "Camera", value: "12MP Ultra-wide" },
  { icon: AudioLines, label: "Audio", value: "Open-ear Spatial Audio" },
  { icon: Wifi, label: "Connectivity", value: "Wi-Fi 6 / Bluetooth 5.3" },
  { icon: Cpu, label: "Chipset", value: "VisionAI Neural Core" },
  { icon: Zap, label: "Charging", value: "USB-C Fast Charge" },
];

const productDetails: Array<{
  image: StaticImageData;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  imageClassName?: string;
}> = [
  {
    image: macroImage,
    alt: "Macro view of the camera and sensor system built into VisionAI smart glasses",
    eyebrow: "Precision optics",
    title: "See every detail",
    description: "A discreet 12MP ultra-wide camera built for natural, hands-free capture.",
  },
  {
    image: explodedImage,
    alt: "Exploded view showing the internal components of VisionAI smart glasses",
    eyebrow: "Inside VisionAI",
    title: "Engineered as one",
    description: "Display, audio, battery and neural processing in one balanced frame.",
    imageClassName: "object-contain p-3 sm:p-5",
  },
];

export default function Specs() {
  return (
    <section
      id="specs"
      aria-labelledby="specs-heading"
      className="relative isolate overflow-hidden bg-[#faf8ff] py-16 transition-colors duration-300 dark:bg-[#070b18] sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 top-44 -z-10 h-80 w-80 rounded-full bg-blue-300/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-28 top-10 -z-10 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <header data-reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-blue-600 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-blue-400">
            BUILT FOR THE FUTURE
          </p>
          <h2
            id="specs-heading"
            className="mt-5 text-balance text-4xl font-bold tracking-tight text-[#131b2e] dark:text-white sm:text-5xl lg:text-[3.25rem]"
          >
            <span className="text-blue-600">VisionAI</span> smart glasses specifications
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-[#565b6b] dark:text-slate-300 sm:text-lg">
            Engineered for lightweight comfort, all-day intelligence and seamless spatial computing.
          </p>
        </header>

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          <figure data-reveal="left" className="relative flex min-h-80 flex-col overflow-hidden rounded-[28px] border border-white/80 bg-white/65 p-5 shadow-[0_24px_70px_rgba(37,99,235,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5 sm:min-h-107.5 sm:p-7">
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-2xl sm:h-96 sm:w-96" />
            <div data-parallax="0.035" className="relative flex flex-1 items-center justify-center">
              <Image
                src={glassesImage}
                alt="VisionAI lightweight AI smart glasses in black"
                sizes="(max-width: 1023px) 90vw, 48vw"
                placeholder="blur"
                className="h-auto w-full max-w-160 object-contain motion-safe:animate-float"
              />
            </div>
            <figcaption className="relative grid grid-cols-3 divide-x divide-blue-100 rounded-2xl border border-white/80 bg-white/80 px-2 py-4 shadow-sm backdrop-blur-xl dark:divide-white/10 dark:border-white/10 dark:bg-slate-900/70 sm:px-5">
              <QuickFact label="Weight" value="42g" />
              <QuickFact label="Battery" value="18 hours" />
              <QuickFact label="Chip" value="Neural Core" />
            </figcaption>
          </figure>

          <dl
            aria-label="VisionAI technical specifications"
            data-stagger
            className="grid self-start grid-cols-2 auto-rows-max gap-3"
          >
            {specs.map(({ icon: Icon, label, value }) => (
              <div
                data-reveal
                key={label}
                className="group min-h-28 rounded-[20px] border border-white/80 bg-white/75 p-3.5 shadow-[0_12px_30px_rgba(37,99,235,0.07)] backdrop-blur-2xl transition duration-300 motion-safe:hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 sm:flex sm:min-h-0 sm:items-center sm:gap-3 sm:p-3.5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-[0_8px_20px_rgba(37,99,235,0.10)] sm:h-10 sm:w-10">
                  <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <dt className="mt-3 text-xs leading-none text-[#656979] dark:text-slate-400 sm:mt-0">{label}</dt>
                  <dd className="mt-1.5 text-sm font-bold leading-tight text-blue-600 sm:text-[0.95rem]">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div data-stagger className="mt-5 grid gap-5 md:grid-cols-2 lg:mt-6 lg:gap-6">
          {productDetails.map((detail) => (
            <figure
              data-reveal
              key={detail.title}
              className="group overflow-hidden rounded-[28px] border border-white/80 bg-white/70 shadow-[0_20px_60px_rgba(37,99,235,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-linear-to-br from-blue-50 to-white">
                <Image
                  src={detail.image}
                  alt={detail.alt}
                  fill
                  sizes="(max-width: 767px) 90vw, 45vw"
                  placeholder="blur"
                  className={`transition-transform duration-500 motion-safe:group-hover:scale-[1.03] ${detail.imageClassName ?? "object-cover"}`}
                />
              </div>
              <figcaption className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">{detail.eyebrow}</p>
                <h3 className="mt-2 text-xl font-bold text-[#131b2e] dark:text-white sm:text-2xl">{detail.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[#565b6b] dark:text-slate-400 sm:text-base">{detail.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickFact({ label, value }: { label: string; value: string }) {
  return (
    <span className="px-2 text-center">
      <span className="block text-[0.65rem] text-[#656979] sm:text-xs">{label}</span>
      <span className="mt-1 block text-xs font-semibold text-blue-600 sm:text-sm">{value}</span>
    </span>
  );
}
