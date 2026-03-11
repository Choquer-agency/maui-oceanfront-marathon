"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { navigation } from "@/data/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [heroDark, setHeroDark] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Re-check after a short delay to allow new page hero to mount
    const timer = setTimeout(() => {
      setHeroDark(!!document.querySelector("[data-hero-dark]"));
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Light text when hero behind the header is dark and user hasn't scrolled
  const isLight = heroDark && !scrolled;

  const handleDropdownEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const textColor = isLight ? "text-white/90" : "text-ink/70";
  const textHover = "hover:text-brand";
  const logoColor = isLight ? "text-white" : "text-ink";
  const iconColor = isLight ? "text-white" : "text-ink";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 px-4 lg:px-8">
      <div
        className={`mx-auto max-w-[1100px] transition-all duration-500 rounded-full ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border border-white/50"
            : "bg-transparent"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`font-display text-3xl tracking-[0.1em] transition-colors duration-300 ${logoColor}`}>
              MOM
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((group) =>
              group.href ? (
                // Direct link (no dropdown) — e.g. Media
                <a
                  key={group.label}
                  href={group.href}
                  target={group.external ? "_blank" : undefined}
                  rel={group.external ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-1 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.06em] transition-colors duration-300 ${textColor} ${textHover}`}
                >
                  {group.label}
                  {group.external && (
                    <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 opacity-40">
                      <path d="M6 3h7v7M13 3L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>
              ) : (
                // Dropdown group
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(group.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.06em] transition-colors duration-300 ${textColor} ${textHover}`}
                  >
                    {group.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                  </button>
                  {openDropdown === group.label && group.items && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-56"
                      onMouseEnter={() => handleDropdownEnter(group.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="bg-white/95 backdrop-blur-xl shadow-xl border border-gray-100 rounded-xl p-2 animate-in fade-in-0 zoom-in-95 duration-150">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-3 text-[13px] font-medium text-ink/70 hover:text-brand hover:bg-brand/5 rounded-lg transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </nav>

          {/* Register CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Link
              href="https://raceroster.com/events/2027/82264/maui-oceanfront-marathon"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center rounded-full bg-brand px-6 py-2.5 text-[13px] font-bold uppercase tracking-[0.06em] text-white hover:bg-brand-dark transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Register Now
            </Link>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={`h-6 w-6 transition-colors duration-300 ${iconColor}`} />
              ) : (
                <Menu className={`h-6 w-6 transition-colors duration-300 ${iconColor}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden mx-auto max-w-[1100px] mt-2 bg-white/95 backdrop-blur-xl shadow-xl border border-gray-100 rounded-2xl overflow-hidden animate-in slide-in-from-top-2 duration-200">
          <div className="px-6 py-6 space-y-5">
            {navigation.map((group) =>
              group.href ? (
                // Direct link in mobile
                <a
                  key={group.label}
                  href={group.href}
                  target={group.external ? "_blank" : undefined}
                  rel={group.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 px-3 py-2.5 text-[14px] font-bold uppercase tracking-[0.15em] text-ink/70 hover:text-brand transition-colors rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {group.label}
                  {group.external && (
                    <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 opacity-40">
                      <path d="M6 3h7v7M13 3L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>
              ) : (
                // Dropdown group in mobile
                <div key={group.label}>
                  <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-ink/30 mb-2">
                    {group.label}
                  </p>
                  <div className="grid grid-cols-2 gap-0.5">
                    {group.items!.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2.5 text-[14px] text-ink/70 hover:text-brand transition-colors rounded-lg"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
            <Link
              href="https://raceroster.com/events/2027/82264/maui-oceanfront-marathon"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center rounded-full bg-brand px-6 py-4 text-[14px] font-bold uppercase tracking-wider text-white"
              onClick={() => setMobileOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
