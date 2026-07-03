import Image from "next/image";
import {
  Feather,
  Battery,
  Camera,
  Cpu,
  Monitor,
  Wifi,
  AudioLines,
  Zap,
} from "lucide-react";
import { style } from "framer-motion/client";

const specs = [
  {
    icon: Feather,
    label: "Weight",
    value: "42g",
  },
  {
    icon: Battery,
    label: "Battery Life",
    value: "18 Hours",
  },
  {
    icon: Monitor,
    label: "Display",
    value: "Micro OLED",
  },
  {
    icon: Camera,
    label: "Camera",
    value: "12MP Ultra-wide",
  },
  {
    icon: AudioLines,
    label: "Audio",
    value: "Open-ear Spatial Audio",
  },
  {
    icon: Wifi,
    label: "Connectivity",
    value: "Wi-Fi 6 / Bluetooth 5.3",
  },
  {
    icon: Cpu,
    label: "Chipset",
    value: "VisionAI Neural Core",
  },
  {
    icon: Zap,
    label: "Charging",
    value: "USB-C Fast Charge",
  },
];

export default function Specs() {
  return (
    <section
      id="specs"
      className="relative overflow-hidden bg-[#faf8ff] py-12 lg:py-16"
    >
      {/* Blur Background */}
      <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wider text-[#2563eb] backdrop-blur-xl">
            BUILT FOR THE FUTURE
          </div>

          <h2 className="mt-5 text-[34px] font-bold lg:text-[52px]">
            <span className="text-[#2563eb]">VisionAI</span>{" "}
            <span className="text-[#131b2e]">Tech Specs</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#434655] lg:text-lg">
            Engineered for lightweight comfort, all-day intelligence and
            seamless spatial computing.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="mt-10 hidden gap-6 lg:grid lg:grid-cols-[1.05fr_0.95fr]">
          {/* Product Side */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/60 p-6 backdrop-blur-[24px]">
            {/* Halo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[380px] w-[380px] rounded-full border border-white/60 bg-gradient-to-b from-blue-100/40 to-transparent" />
            </div>

            {/* Glasses */}
            <div className="relative z-20 flex justify-center">
              <Image
                src="/glasses5.png"
                alt="VisionAI Smart Glasses"
                width={560}
                height={360}
                className="object-contain animate-float"
              />
            </div>

            {/* Platform */}
            <div className="relative mx-auto mt-2 h-20 w-[75%]">
              <div className="absolute bottom-0 h-14 w-full rounded-full bg-blue-200/20 blur-xl" />

              <div className="absolute bottom-4 h-6 w-full rounded-full border border-white/70 bg-white/70 backdrop-blur-xl" />

              <div className="absolute bottom-5 left-1/2 h-2 w-[65%] -translate-x-1/2 rounded-full bg-[#2563eb]/30 blur-md" />
            </div>

            {/* Highlights */}
            <div className="mt-6 flex justify-center gap-8 rounded-3xl border border-white/70 bg-white/70 px-6 py-4 backdrop-blur-xl">
              <Info title="Weight" value="42g" />
              <Info title="Battery" value="18 Hours" />
              <Info title="Chip" value="Neural Core" />
            </div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-3">
            {specs.map((spec) => {
              const Icon = spec.icon;

              return (
                <div
                  key={spec.label}
                  className="group rounded-[22px] border border-white/70 bg-white/70 p-4 shadow-[0_14px_35px_rgba(37,99,235,0.07)] backdrop-blur-[24px] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#2563eb]">
                    <Icon size={22} />
                  </div>

                  <p className="mt-4 text-sm text-[#434655]">
                    {spec.label}
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-[#2563eb]">
                    {spec.value}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        {/* Mobile Layout */}
        <div className="mt-8 lg:hidden">
          {/* Product Card */}
          <div className="rounded-[28px] border border-white/70 bg-white/60 p-5 backdrop-blur-[24px]">
            <div className="flex justify-center">
              <Image
                src="/glasses5.png"
                alt="VisionAI"
                width={320}
                height={200}
                className="object-contain animate-float"
              />
            </div>
          </div>

          {/* Specs Grid Mobile */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {specs.map((spec) => {
              const Icon = spec.icon;

              return (
                <div
                  key={spec.label}
                  className="
            rounded-[20px]
            border
            border-white/80
            bg-white/80
            p-3
            shadow-[0_14px_35px_rgba(37,99,235,0.14)]
            backdrop-blur-xl
          "
                >
                  <div
                    className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              bg-blue-50
              text-[#2563eb]
              shadow-[0_8px_20px_rgba(37,99,235,0.16)]
            "
                  >
                    <Icon size={18} />
                  </div>

                  <p className="mt-3 text-xs text-[#434655]">
                    {spec.label}
                  </p>

                  <h3 className="mt-1 text-sm font-bold leading-tight text-[#2563eb]">
                    {spec.value}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>

  );

}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="text-center">
      <p className="text-xs text-[#434655]">{title}</p>
      <p className="mt-1 text-sm font-semibold text-[#2563eb]">
        {value}
      </p>
    </div>
  );
}
