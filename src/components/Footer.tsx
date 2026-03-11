"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* Mountain silhouette pinned to the very bottom of the footer */
function MountainDecoration() {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
      <div className="relative w-full h-[600px] opacity-[0.05]">
        <Image
          src="/images/vectors/maui-mountain.svg"
          alt=""
          fill
          className="object-contain object-bottom brightness-0 invert"
          unoptimized
        />
      </div>
    </div>
  );
}

/* Real Maui island outline doodle */
function MauiOutline() {
  return (
    <div className="absolute right-0 top-8 w-[400px] h-[220px] opacity-[0.05] pointer-events-none">
      <Image
        src="/images/vectors/maui.svg"
        alt=""
        fill
        className="object-contain brightness-0 invert"
        unoptimized
      />
    </div>
  );
}


const footerLinks = [
  {
    title: "Races",
    links: [
      { label: "Marathon", href: "/races/marathon" },
      { label: "Half Marathon", href: "/races/half-marathon" },
      { label: "15K", href: "/races/15k" },
      { label: "10K", href: "/races/10k" },
      { label: "6-Miler", href: "/races/6-miler" },
      { label: "5K Run-Walk", href: "/races/5k" },
      { label: "Double Marathon", href: "/races/double-marathon" },
      { label: "Cookie Fun Run", href: "/races/cookie-fun-run" },
    ],
  },
  {
    title: "Event Info",
    links: [
      { label: "Schedule", href: "/schedule" },
      { label: "Course Maps", href: "/course-maps" },
      { label: "Results", href: "/results" },
      { label: "Photos", href: "/photos" },
      { label: "Videos", href: "/videos" },
    ],
  },
  {
    title: "Travel",
    links: [
      { label: "Getting to Maui", href: "/getting-to-maui" },
      { label: "Lodging", href: "/lodging" },
      { label: "Dinner Cruise", href: "/dinner-cruise" },
    ],
  },
];

/* Animated plumeria for footer */
function FooterPlumeria({ className }: { className: string }) {
  return (
    <motion.svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse
          key={angle}
          cx="20"
          cy="12"
          rx="4"
          ry="9"
          stroke="currentColor"
          strokeWidth="0.8"
          transform={`rotate(${angle} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="3" fill="currentColor" />
    </motion.svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-ink text-white pt-20 pb-10 overflow-hidden">
      <MountainDecoration />
      <MauiOutline />

      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-brand/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-brand/3 blur-3xl" />

      {/* Floating plumeria decorations */}
      <FooterPlumeria className="absolute top-16 right-[15%] w-16 h-16 text-white/[0.03]" />
      <FooterPlumeria className="absolute bottom-32 left-[10%] w-12 h-12 text-white/[0.04]" />

      <div className="relative mx-auto px-6 lg:px-16">
        {/* Top: Big brand moment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-brand mb-4">
                Maui Oceanfront Marathon
              </p>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.9] tracking-tight">
                See you
                <br />
                <span className="text-brand">in Maui</span>
              </h2>
            </div>

            <motion.a
              href="https://raceroster.com/events/2027/82264/maui-oceanfront-marathon"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-brand hover:bg-brand-light text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full transition-colors duration-300 self-start lg:self-end"
            >
              Register Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-14" />

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 sm:col-span-3 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center">
                <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5 text-brand">
                  <path
                    d="M16 4C16 4 22 10 22 18C22 22 19.5 26 16 28C12.5 26 10 22 10 18C10 10 16 4 16 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-display text-2xl uppercase tracking-wider">
                MOM
              </span>
            </div>
            <p className="text-[13px] text-white/40 max-w-xs leading-[1.8]">
              A 501(c)(3) non-profit community event benefiting local Maui
              school teams, clubs, and organizations.
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/runmaui/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand/20 flex items-center justify-center transition-colors duration-300 group"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white/40 group-hover:text-brand transition-colors">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Link columns */}
          {footerLinks.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
            >
              <h3 className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand/70 mb-5">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/40 hover:text-white hover:pl-1 transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand/70 mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:runmaui@gmail.com"
                  className="text-[13px] text-white/40 hover:text-white transition-all duration-300"
                >
                  runmaui@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:530-559-2261"
                  className="text-[13px] text-white/40 hover:text-white transition-all duration-300"
                >
                  Tel: 530-559-2261
                </a>
              </li>
            </ul>

            {/* Mailing List */}
            <h3 className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand/70 mb-3 mt-8">
              Join Our Mailing List
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex gap-0"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-l-full px-4 py-2.5 text-[13px] text-white placeholder:text-white/25 focus:outline-none focus:border-brand/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-brand hover:bg-brand-light text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-r-full transition-colors whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[13px] text-white/20 uppercase tracking-wider">
              &copy; {new Date().getFullYear()} Maui Oceanfront Marathon. All
              rights reserved.
            </p>

            {/* Choquer Agency credit */}
            <Link
              href="https://choquer.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <span className="text-[13px] text-white uppercase tracking-wider">
                Donated by
              </span>
              <div className="relative h-7 w-34">
                <Image
                  src="/images/sponsors/choquer-agency-footer.svg"
                  alt="Choquer Agency"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
