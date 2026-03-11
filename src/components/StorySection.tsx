"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "./AnimatedCounter";

export function StorySection() {
  return (
    <>
      {/* About — asymmetric editorial layout */}
      <section className="py-28 bg-cream overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Left column — old hero image now used here */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero/finish-line.webp"
                  alt="Finish line at the Maui Oceanfront Marathon"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating accent block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-brand px-6 py-4"
              >
                <p className="font-display text-3xl text-white">
                  EST. 2009
                </p>
              </motion.div>
            </motion.div>

            {/* Right column — text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-7 lg:pl-8"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-brand">
                Our Story
              </p>

              <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl uppercase text-ink leading-[0.95] tracking-tight">
                You have to start
                <br />
                so you can{" "}
                <span className="text-brand">finish</span>
              </h2>

              <div className="mt-8 max-w-lg">
                <p className="text-[15px] text-ink/60 leading-[1.8]">
                  The Maui Oceanfront Marathon is more than a race — it&apos;s a
                  celebration of community, coastline, and the spirit of aloha.
                  As a 501(c)(3) nonprofit, every mile you run supports local
                  school teams, clubs, and organizations that make Maui special.
                </p>
                <p className="mt-5 text-[15px] text-ink/60 leading-[1.8]">
                  From Wailea to Launiupoko Beach, our Boston-qualifying course
                  offers 26.2 miles of uninterrupted ocean views, whale
                  sightings, and the warmth of Maui&apos;s running community
                  cheering you every step.
                </p>
              </div>

              <Link
                href="https://raceroster.com/events/2027/82264/maui-oceanfront-marathon"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-full bg-brand px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white hover:bg-brand-dark transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Register Now &rarr;
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats — massive animated numbers in brand color, cream bg */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter
              end={15}
              suffix="+"
              label="Years Running"
              sublabel="Since 2009"
            />
            <AnimatedCounter
              end={5000}
              label="Annual Runners"
              sublabel="Maui, Hawai'i"
            />
            <AnimatedCounter
              end={26}
              suffix=".2"
              label="Miles Oceanfront"
              sublabel="Boston Qualifier"
              duration={1.5}
            />
            <AnimatedCounter
              end={8}
              label="Race Distances"
              sublabel="5K to Double Marathon"
              duration={1}
            />
          </div>
        </div>
      </section>
    </>
  );
}
