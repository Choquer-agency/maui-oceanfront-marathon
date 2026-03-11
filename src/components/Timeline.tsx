"use client";

import { motion } from "framer-motion";
import { schedule } from "@/data/schedule";

export function Timeline() {
  return (
    <div className="space-y-12">
      {schedule.map((day, dayIndex) => (
        <motion.div
          key={day.day}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 w-16 h-16 bg-brand rounded-xl flex items-center justify-center">
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                {day.day.slice(0, 3)}
              </span>
            </div>
            <div>
              <h3 className="font-display text-3xl uppercase tracking-tight text-ink">
                {day.day}
              </h3>
              <p className="text-sm text-ink/40">{day.date}</p>
            </div>
          </div>

          <div className="ml-7 border-l-2 border-brand/20 pl-10 space-y-4">
            {day.events.map((event, eventIndex) => (
              <div
                key={eventIndex}
                className="relative bg-white border border-ink/5 rounded-lg p-4 hover:border-brand/20 hover:shadow-sm transition-all"
              >
                <div className="absolute -left-[2.85rem] top-5 w-3 h-3 rounded-full bg-brand border-2 border-cream" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-sm font-bold text-brand whitespace-nowrap">
                    {event.time}
                  </span>
                  <span className="font-semibold text-ink">{event.title}</span>
                </div>
                <p className="mt-1 text-sm text-ink/40">
                  {event.location}
                </p>
                {event.description && (
                  <p className="mt-1 text-sm text-ink/30">
                    {event.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
