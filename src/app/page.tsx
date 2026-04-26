// Homepage: cinematic cloud-video hero with pull-up heading and pill nav. Created 2026-04-19.
import WordsPullUp from "./components/WordsPullUp";
import PillNav from "./components/PillNav";
import HeroCTA from "./components/HeroCTA";

export default function Home() {
  return (
    <div className="h-screen bg-black p-4 md:p-6 flex">
      {/* Inner rounded container */}
      <div className="relative flex-1 rounded-[2rem] overflow-hidden">

        {/* Cloud video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Fractal noise overlay */}
        <div className="noise-overlay mix-blend-overlay" style={{ opacity: 0.7 }} />

        {/* Gradient — darkens top + bottom edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Floating pill nav */}
        <PillNav />

        {/* Hero content — bottom aligned */}
        <div className="absolute bottom-8 left-8 right-8 grid grid-cols-12 items-end gap-4">

          {/* Giant name */}
          <div className="col-span-12 lg:col-span-8">
            <WordsPullUp
              words={["Kevin", "Jay"]}
              className="flex-col items-start"
              style={{
                fontSize: "clamp(5rem, 20vw, 22vw)",
                color: "#E1E0CC",
                lineHeight: 0.85,
                letterSpacing: "-0.07em",
                fontWeight: 500,
              }}
            />
          </div>

          {/* Bio + CTA */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 pb-2">
            <p
              className="text-xs sm:text-sm"
              style={{ color: "rgba(222, 219, 200, 0.7)", lineHeight: 1.2 }}
            >
              I build intelligent systems and ship products at the intersection
              of machine learning and software engineering.
            </p>
            <HeroCTA />
          </div>

        </div>
      </div>
    </div>
  );
}
