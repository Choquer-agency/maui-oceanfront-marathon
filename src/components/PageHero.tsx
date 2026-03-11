"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative min-h-[45vh] flex items-end overflow-hidden pt-20 bg-cream">
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/60 to-cream/20" />
        </>
      )}

      <div className="relative z-10 w-full pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-brand">
              Maui Oceanfront Marathon
            </span>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-ink">
              {title}
            </h1>
          </motion.div>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-3 text-base sm:text-lg text-ink/60 max-w-xl text-center mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
