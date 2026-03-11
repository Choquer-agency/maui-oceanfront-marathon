import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "Book Your Cruise | Maui Oceanfront Marathon",
};

const cruiseOptions = [
  {
    name: "Sunday After-Party Sunset Whale Cruise",
    date: "Sunday, January 17, 2027",
    time: "5:00 PM",
    location: "Lahaina Harbor",
    details: [
      "Sunset dinner cruise along the Maui coast",
      "Watch for humpback whales breaching offshore",
      "Dinner, cocktails, and live entertainment",
      "Celebrate with fellow runners and supporters",
      "Approximately 2-hour cruise",
    ],
  },
  {
    name: "Monday After-Party Cruise",
    date: "Monday, January 18, 2027",
    time: "5:00 PM",
    location: "Lahaina Harbor",
    details: [
      "Second chance sunset whale-watching dinner cruise",
      "Same amazing experience as Sunday",
      "Perfect if you missed Sunday or want to go again",
      "Dinner, cocktails, and camaraderie on the water",
      "Approximately 2-hour cruise",
    ],
  },
];

export default function BookCruisePage() {
  return (
    <>
      <PageHero
        title="Book Your Cruise"
        subtitle="Reserve your spot on our after-party sunset whale dinner cruise"
      />
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-brand/5 border border-brand/10 rounded-2xl p-8 md:p-10 text-center mb-12">
              <div className="w-14 h-14 mx-auto bg-brand/10 rounded-xl flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-brand">
                  <path d="M3 15c3-2 6 2 9 0s6-2 9 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M3 19c3-2 6 2 9 0s6-2 9 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M12 3v8M8 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="font-display text-2xl uppercase tracking-tight text-ink mb-3">
                Cruises Sell Out Quickly
              </h2>
              <p className="text-[15px] text-ink/50 leading-relaxed max-w-lg mx-auto">
                January is peak whale season on Maui. Our after-party dinner
                cruises are one of the most popular parts of race weekend.
                Reserve your tickets early to guarantee your spot.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {cruiseOptions.map((cruise, index) => (
              <ScrollReveal key={cruise.name} delay={index * 0.1}>
                <div className="bg-white border border-ink/5 rounded-xl p-8 hover:shadow-md transition-all h-full flex flex-col">
                  <h3 className="font-display text-xl uppercase tracking-tight text-ink mb-3">
                    {cruise.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm mb-5">
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
                  <ul className="space-y-2 flex-1">
                    {cruise.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-[14px] text-ink/50">
                        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand">
                          <path d="M4 8l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="bg-white border border-ink/5 rounded-2xl p-8 md:p-10 text-center">
              <h3 className="font-display text-2xl uppercase tracking-tight text-ink mb-4">
                Ready to Book?
              </h3>
              <p className="text-[15px] text-ink/50 leading-relaxed mb-6 max-w-md mx-auto">
                To reserve your cruise tickets, please contact us directly.
                Tickets are limited and sold on a first-come, first-served basis.
              </p>
              <a
                href="mailto:info@mauioceanfrontmarathon.com"
                className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-[13px] font-semibold uppercase tracking-wider text-white hover:bg-brand-dark transition-all hover:scale-[1.02]"
              >
                Contact Us to Book &rarr;
              </a>
              <p className="mt-4 text-xs text-ink/30">
                Email:{" "}
                <a href="mailto:info@mauioceanfrontmarathon.com" className="text-brand/60 hover:text-brand transition-colors">
                  info@mauioceanfrontmarathon.com
                </a>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 text-center">
              <Link
                href="/dinner-cruise"
                className="inline-flex items-center text-[13px] font-bold uppercase tracking-wider text-brand hover:text-brand-dark transition-colors"
              >
                &larr; Back to Dinner Cruise
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
