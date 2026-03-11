"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const sponsors = [
  { name: "Maui Visitors Bureau", src: "/images/sponsors/maui-visit.avif" },
  { name: "Maui Sunriders Bike Co", src: "/images/sponsors/maui-sunriders.avif" },
  { name: "Maui School", src: "/images/sponsors/maui-school.avif" },
  { name: "Shops at Wailea", src: "/images/sponsors/wailea-shops.avif" },
  { name: "Sponsor", src: "/images/sponsors/sponsor-1.gif" },
  { name: "Mail", src: "/images/sponsors/mail.avif" },
];

export function SponsorBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-10 bg-cream overflow-hidden"
    >
      <p className="text-center text-[12px] font-bold uppercase tracking-[0.25em] text-ink/25 mb-8">
        Our Sponsors
      </p>
      <div className="flex items-center justify-center flex-wrap gap-6 md:gap-8 px-8">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="relative h-14 w-36 flex-shrink-0 transition-transform duration-300 hover:scale-105"
            style={{ mixBlendMode: "darken" }}
          >
            <Image
              src={sponsor.src}
              alt={sponsor.name}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ))}
        {/* Choquer Agency — clickable */}
        <Link
          href="https://choquer.agency"
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-14 w-36 flex-shrink-0 transition-transform duration-300 hover:scale-105"
          style={{ mixBlendMode: "darken" }}
        >
          <Image
            src="/images/sponsors/choquer-agency.svg"
            alt="Choquer Agency"
            fill
            className="object-contain"
            unoptimized
          />
        </Link>
      </div>
    </motion.section>
  );
}
