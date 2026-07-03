import {
  Languages,
  Mic,
  Navigation,
  Camera,
  Search,
  BatteryCharging,
} from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "Real-time Translation",
    desc: "Translate conversations instantly in over 100 languages directly through your lenses.",
  },
  {
    icon: Mic,
    title: "AI Voice Assistant",
    desc: "Control tasks, reminders, calls, and information hands-free with natural voice commands.",
  },
  {
    icon: Navigation,
    title: "AR Navigation",
    desc: "See turn-by-turn directions projected naturally into your field of view.",
  },
  {
    icon: Camera,
    title: "Smart Camera",
    desc: "Capture photos and videos effortlessly while keeping your hands completely free.",
  },
  {
    icon: Search,
    title: "Contextual AI Search",
    desc: "Look at an object and get instant AI-powered insights, summaries, and recommendations.",
  },
  {
    icon: BatteryCharging,
    title: "All-Day Battery",
    desc: "Enjoy up to 18 hours of intelligent power management for uninterrupted daily use.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#faf8ff] px-5 py-20 text-[#131b2e] md:px-16 lg:py-28"
    >
      <div className="pointer-events-none absolute left-[-10%] top-20 h-105 w-105 rounded-full bg-[#64a8fe]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8%] bottom-10 h-130 w-130 rounded-full bg-[#2563eb]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-white/70 bg-white/70 px-5 py-2 text-sm font-semibold text-[#2563eb] shadow-[0_20px_50px_rgba(37,99,235,0.08)] backdrop-blur-2xl">
            AI-Powered Features
          </div>

          <h2 className="mt-6 text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] md:text-[40px] lg:text-[56px]">
            <span className="text-[#2563eb]">Powerful AI.</span>
            <br />
            <span className="text-[#131b2e]">Seamlessly</span>{' '}
            <span className="text-[#2563eb]">Integrated.</span>
          </h2>

          <p className="mt-5 text-base leading-[1.6] text-[#434655] md:text-lg">
            VisionAI brings intelligent assistance, spatial awareness, and
            real-time information into a lightweight wearable experience.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:gap-5 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[20px] border border-white/70 bg-white/70 p-4 shadow-[0_20px_50px_rgba(37,99,235,0.08)] 
                backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(37,99,235,0.15)] lg:rounded-3xl lg:p-6">

                <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-[#2563eb]/10 blur-2xl" />

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] lg:h-14 lg:w-14" >
                    <Icon size={22} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-[#131b2e] lg:text-xl">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#434655] lg:mt-3 lg:text-base">{feature.desc}</p>
                    <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#2563eb] lg:mt-5">VisionAI Intelligence</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}