import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { lodgingPartners } from "@/data/lodging";

export const metadata = {
  title: "Lodging | Maui Oceanfront Marathon",
};

export default function LodgingPage() {
  return (
    <>
      <PageHero
        title="Where to Stay"
        subtitle="Official lodging partners with exclusive rates for MOM runners"
      />
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lodgingPartners.map((partner, index) => (
              <ScrollReveal key={partner.name} delay={index * 0.1}>
                <div className="bg-white border border-ink/5 rounded-xl p-8 hover:shadow-lg transition-all text-center h-full flex flex-col">
                  {/* Location icon */}
                  <div className="w-14 h-14 mx-auto bg-brand/10 rounded-xl flex items-center justify-center mb-5">
                    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-brand">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl uppercase tracking-tight text-ink">
                    {partner.name}
                  </h3>
                  <p className="mt-1 text-sm text-brand font-medium">
                    {partner.location}
                  </p>
                  <p className="mt-4 text-[15px] text-ink/50 leading-relaxed flex-1">
                    {partner.description}
                  </p>
                  <div className="mt-4 bg-brand/5 border border-brand/10 rounded-lg p-4">
                    <p className="text-sm font-semibold text-brand">
                      Runner Special: {partner.deal}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap justify-center gap-3">
                    {partner.phone && (
                      <a
                        href={`tel:${partner.phone}`}
                        className="inline-flex items-center bg-ink/5 px-4 py-2 rounded-full text-sm font-semibold text-ink/60 hover:bg-ink/10 transition-colors"
                      >
                        {partner.phone}
                      </a>
                    )}
                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[13px] font-bold uppercase tracking-wider text-brand hover:text-brand-dark transition-all"
                      >
                        Visit Website &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
