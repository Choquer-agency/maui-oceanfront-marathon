"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Race } from "@/data/races";
import { raceIcons } from "./RaceIcons";

interface RaceCardProps {
  race: Race;
  index: number;
}

export function RaceCard({ race, index }: RaceCardProps) {
  const IconComponent = raceIcons[race.slug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/races/${race.slug}`}
        className="group relative block bg-white border border-ink/5 p-7 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
      >
        {/* Hover accent line */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Top row: icon + distance badge */}
        <div className="flex items-start justify-between mb-5">
          {IconComponent ? (
            <div className="text-ink/40 group-hover:text-brand transition-colors duration-300">
              <IconComponent className="w-8 h-8" />
            </div>
          ) : (
            <span className="text-2xl">{race.icon}</span>
          )}
          <span className="text-[13px] font-bold uppercase tracking-wider text-brand bg-brand/8 px-3 py-1">
            {race.distance}
          </span>
        </div>

        {/* Name — big, bold, condensed */}
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ink group-hover:text-brand transition-colors duration-300">
          {race.name}
        </h3>

        {/* Details */}
        <div className="mt-3 space-y-1 text-[13px] text-ink/50">
          <p>
            <span className="font-semibold text-ink/70">Start:</span>{" "}
            {race.startTime}
          </p>
          <p>
            <span className="font-semibold text-ink/70">From:</span>{" "}
            {race.startLocation}
          </p>
        </div>

        <p className="mt-4 text-[13px] text-ink/40 line-clamp-2 leading-relaxed">
          {race.description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-brand">
          <span className="w-8 h-px bg-brand group-hover:w-14 transition-all duration-300" />
          Learn more
        </div>
      </Link>
    </motion.div>
  );
}
