export default function Hero() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">

                {/* Left */}

                <div>
                    <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-400">
                        AI Smart Glasses
                    </span>

                    <h1 className="mt-6 text-5xl font-bold leading-tight">
                        See Smarter.
                        <br />
                        Live Better.
                    </h1>

                    <p className="mt-6 text-lg text-slate-400">
                        AI-powered smart glasses with real-time translation,
                        voice assistant and augmented reality navigation.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950">
                            Pre-order Now
                        </button>

                        <button className="rounded-full border border-white/20 px-6 py-3">
                            Watch Demo
                        </button>
                    </div>
                </div>

                {/* Right */}

                <div className="flex justify-center">
                    <div className="h-100 w-100 rounded-3xl bg-slate-800 flex items-center justify-center">
                        Product Image
                    </div>
                </div>

            </div>
        </section>
    );
}