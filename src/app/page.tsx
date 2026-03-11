"use client";

import { Hero } from "@/components/Hero";
import { SponsorBar } from "@/components/SponsorBar";
import { StorySection } from "@/components/StorySection";
import { RaceCard } from "@/components/RaceCard";
import { Marquee } from "@/components/Marquee";
import { races } from "@/data/races";
import { ScrollReveal } from "@/components/ScrollReveal";
import { VideoCard } from "@/components/VideoModal";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-[-30%]">
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>
    </div>
  );
}

/* Approximate the Wailea→Launiupoko coastal route */
function CourseLineDrawing() {
  return (
    <svg
      viewBox="0 0 300 400"
      fill="none"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M80 30 C85 50, 75 70, 70 90 C65 110, 55 130, 50 150 C45 170, 60 185, 75 200 C90 215, 110 220, 125 235 C140 250, 155 270, 165 290 C175 310, 190 325, 210 340 C230 355, 245 360, 255 370"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="8 5"
        opacity="0.8"
      />
      <path
        d="M95 25 C100 45, 90 65, 85 85 C80 105, 70 125, 65 145 C60 165, 75 180, 90 195 C105 210, 125 215, 140 230 C155 245, 170 265, 180 285 C190 305, 205 320, 225 335 C245 350, 260 355, 270 365"
        stroke="white"
        strokeWidth="0.5"
        fill="none"
        opacity="0.2"
      />
      <circle cx="80" cy="30" r="10" fill="#3CA6C4" opacity="0.3" />
      <circle cx="80" cy="30" r="6" fill="#3CA6C4" />
      <circle cx="80" cy="30" r="3" fill="white" />
      <text x="98" y="28" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui" letterSpacing="0.1em">START</text>
      <text x="98" y="42" fill="white" fontSize="8" opacity="0.5" fontFamily="system-ui">Shops at Wailea</text>
      <circle cx="255" cy="370" r="10" fill="#3CA6C4" opacity="0.3" />
      <circle cx="255" cy="370" r="6" fill="#3CA6C4" />
      <circle cx="255" cy="370" r="3" fill="white" />
      <text x="155" y="393" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui" letterSpacing="0.1em">FINISH</text>
      <text x="155" y="405" fill="white" fontSize="8" opacity="0.5" fontFamily="system-ui">Launiupoko Beach Park</text>
      <circle cx="50" cy="150" r="2.5" fill="white" opacity="0.5" />
      <text x="30" y="166" fill="white" fontSize="7" opacity="0.35" fontFamily="system-ui">Kihei</text>
      <circle cx="75" cy="200" r="2.5" fill="white" opacity="0.5" />
      <text x="40" y="215" fill="white" fontSize="7" opacity="0.35" fontFamily="system-ui">Maalaea Bay</text>
      <circle cx="165" cy="290" r="2.5" fill="white" opacity="0.5" />
      <text x="175" y="288" fill="white" fontSize="7" opacity="0.35" fontFamily="system-ui">Hwy 30</text>
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero — new finish line image */}
      <Hero
        title="Maui Oceanfront Marathon"
        eyebrow="January 18–19, 2027 — MLK Weekend"
        subtitle="26.2 miles of oceanfront paradise. Boston Qualifier. MLK Weekend, January 2027. Maui, Hawai'i."
        ctaText="Register Now"
        ctaHref="https://raceroster.com/events/2027/82264/maui-oceanfront-marathon"
        secondaryCtaText="View Races"
        secondaryCtaHref="#races"
        backgroundVideo={{ videoId: "S4d7uaiaKx0", startSeconds: 210, endSeconds: 240 }}
      />

      {/* Sponsor Bar */}
      <SponsorBar />

      {/* Story + Stats */}
      <StorySection />

      {/* Marquee — tilted band */}
      <Marquee />

      {/* Race Cards */}
      <section id="races" className="py-24 bg-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand">
                Choose Your Distance
              </span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-ink">
                Find Your Race
              </h2>
              <p className="mt-4 text-base text-ink/50 max-w-lg mx-auto">
                From a full marathon to a fun run with cookies — there&apos;s a
                race for every runner on Maui&apos;s stunning oceanfront course.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {races
              .filter((race) => !["cookie-fun-run", "15k", "10k", "double-marathon"].includes(race.slug))
              .map((race, index) => (
                <RaceCard key={race.slug} race={race} index={index} />
              ))}
          </div>
        </div>
      </section>

      {/* Course — parallax image with course line drawing */}
      <section className="relative py-32 overflow-hidden">
        <ParallaxImage
          src="/images/hero/maui-coast.webp"
          alt="Maui coastline aerial view"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand-light">
                The Course
              </span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-white leading-[0.95]">
                Wailea to
                <br />
                Launiupoko
              </h2>
              <p className="mt-6 text-base text-white/70 max-w-lg leading-relaxed">
                Start at the Shops at Wailea and run along South Kihei Road,
                through oceanfront Kihei Town, above Maalaea Bay on Highway 30,
                and finish at Launiupoko Beach Park. Flat, fast, breathtaking.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Boston Qualifier",
                  "Flat & Fast",
                  "19 Aid Stations",
                  "Sea Level",
                  "Ocean Views",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-[12px] font-semibold uppercase tracking-wider text-white/90 border border-white/20 bg-white/5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/course-maps"
                className="mt-8 inline-flex items-center rounded-full border-2 border-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white hover:bg-white hover:text-ink transition-all"
              >
                View Course Maps &rarr;
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="right">
              <div className="hidden lg:block h-[450px] relative">
                <CourseLineDrawing />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Whale Season — compact, image-forward layout */}
      <section className="py-20 bg-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Image — takes more space */}
            <ScrollReveal direction="left" className="lg:col-span-3">
              <div className="relative">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden">
                  <motion.div
                    whileInView={{ scale: [1.08, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src="/images/hero/whales.webp"
                      alt="Humpback whale breaching off Maui coast"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                {/* Runner photo tucked into corner */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-4 -right-4 w-32 h-40 rounded-xl overflow-hidden shadow-xl border-4 border-cream rotate-2"
                >
                  <Image
                    src="/images/hero/runner-bryce.webp"
                    alt="Runner on the coast"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Text — concise */}
            <ScrollReveal direction="right" delay={0.1} className="lg:col-span-2">
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand">
                January Is Whale Season
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink leading-[0.95]">
                Run With
                <br />
                The Whales
              </h2>
              <p className="mt-4 text-[15px] text-ink/60 leading-relaxed">
                January is peak humpback whale season. Spot whales breaching
                offshore as you run — then celebrate with a sunset dinner cruise.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/dinner-cruise"
                  className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-brand-dark transition-all hover:scale-[1.02]"
                >
                  Dinner Cruise &rarr;
                </Link>
                <Link
                  href="/races/marathon"
                  className="inline-flex items-center rounded-full border-2 border-ink/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-ink hover:border-ink transition-all"
                >
                  View Marathon
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Race Videos */}
      <section className="py-20 bg-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand">
                Race Highlights
              </span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-ink">
                Watch The Action
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScrollReveal delay={0}>
              <VideoCard videoId="S4d7uaiaKx0" title="Maui Oceanfront Marathon Highlights" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <VideoCard videoId="aaDVBToMiTk" title="Race Day Experience" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <VideoCard videoId="vS283R0maeQ" title="Course Preview & Scenery" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA — compact, blurry image bg + blue overlay, promo as eyebrow */}
      <section className="py-12 px-6 lg:px-16 bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Blurry background image + brand overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero/maui-beach.webp"
              alt=""
              fill
              className="object-cover blur-sm scale-110"
            />
            <div className="absolute inset-0 bg-brand/80" />
          </div>

          <div className="relative z-10 py-14 px-8 lg:px-16 text-center">
            {/* Promo eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-[13px] font-bold uppercase tracking-[0.2em] text-white/90 bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full mb-6"
            >
              Use code <span className="font-mono">MARCHEARLY BIRD15</span> — $15 off registration
            </motion.p>

            <h2 className="font-display text-5xl sm:text-6xl lg:text-8xl uppercase tracking-tight text-white leading-[0.9]">
              Ready to Run
              <br />
              Paradise?
            </h2>
            <p className="mt-4 text-sm text-white/60 max-w-md mx-auto">
              MLK Weekend, January 2027 — Maui, Hawai&apos;i
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://raceroster.com/events/2027/82264/maui-oceanfront-marathon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border-2 border-white bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-brand hover:bg-transparent hover:text-white transition-all"
              >
                Register Now &rarr;
              </Link>
              <Link
                href="/schedule"
                className="inline-flex items-center rounded-full border-2 border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white hover:border-white transition-all"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
