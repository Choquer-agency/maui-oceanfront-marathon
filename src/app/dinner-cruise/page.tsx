import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Dinner & Whale Cruise | Maui Oceanfront Marathon",
};

const cruises = [
  {
    name: "Sunday After-Party Sunset Whale Cruise",
    date: "Sunday, January 17, 2027",
    time: "5:00 PM",
    location: "Lahaina Harbor",
    description:
      "Celebrate your finish with a spectacular sunset dinner cruise! Watch for humpback whales as you sail along the Maui coast with fellow runners. Enjoy dinner, cocktails, and camaraderie as the sun sets over the Pacific.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-brand">
        <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 18c0-1 2-4 4-5h8c2 1 4 4 4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 22h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Monday After-Party Cruise",
    date: "Monday, January 18, 2027",
    time: "5:00 PM",
    location: "Lahaina Harbor",
    description:
      "Missed Sunday's cruise or want to celebrate again? The Monday after-party cruise is your second chance for a sunset whale-watching dinner cruise.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-brand">
        <path d="M3 15c3-2 6 2 9 0s6-2 9 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 19c3-2 6 2 9 0s6-2 9 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 3v2M5.64 5.64l1.41 1.41M18.36 5.64l-1.41 1.41M21 12h-2M5 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function DinnerCruisePage() {
  return (
    <>
      <PageHero
        title="Dinner & Whale Cruise"
        subtitle="Celebrate your finish with a sunset cruise along the Maui coast"
      />
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="relative aspect-[2/1] mb-12 overflow-hidden rounded-2xl">
              <Image
                src="/images/hero/whales-aerial.webp"
                alt="Humpback whales off Maui"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-[15px] text-ink/50 leading-relaxed mb-12 text-center max-w-2xl mx-auto">
              January is peak whale season on Maui! Our after-party dinner
              cruises combine celebration with one of nature&apos;s most
              incredible shows — humpback whales breaching in warm Hawaiian waters.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cruises.map((cruise, index) => (
              <ScrollReveal key={cruise.name} delay={index * 0.1}>
                <div className="bg-white border border-ink/5 rounded-xl p-8 hover:shadow-md transition-all text-center h-full flex flex-col">
                  <div className="w-14 h-14 mx-auto bg-brand/10 rounded-xl flex items-center justify-center mb-5">
                    {cruise.icon}
                  </div>
                  <h3 className="font-display text-2xl uppercase tracking-tight text-ink">
                    {cruise.name}
                  </h3>
                  <div className="mt-3 flex flex-wrap justify-center gap-2 text-sm">
                    <span className="bg-brand/5 px-3 py-1 rounded-full font-medium text-brand">
                      {cruise.date}
                    </span>
                    <span className="bg-brand/5 px-3 py-1 rounded-full font-medium text-brand">
                      {cruise.time}
                    </span>
                    <span className="bg-ink/5 px-3 py-1 rounded-full font-medium text-ink/50">
                      {cruise.location}
                    </span>
                  </div>
                  <p className="mt-4 text-[15px] text-ink/50 leading-relaxed flex-1">
                    {cruise.description}
                  </p>
                  <Link
                    href="/dinner-cruise/book"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-[13px] font-semibold uppercase tracking-wider text-white hover:bg-brand-dark transition-all hover:scale-[1.02]"
                  >
                    Book Tickets &rarr;
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 text-center">
              <p className="text-sm text-ink/40">
                Cruises sell out quickly!{" "}
                <Link
                  href="/schedule"
                  className="text-brand font-semibold hover:text-brand-dark transition-colors"
                >
                  View the full schedule &rarr;
                </Link>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
