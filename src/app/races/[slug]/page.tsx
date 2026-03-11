import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { races, getRaceBySlug } from "@/data/races";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export function generateStaticParams() {
  return races.map((race) => ({ slug: race.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const race = getRaceBySlug(slug);
  if (!race) return { title: "Race Not Found" };
  return {
    title: `${race.name} | Maui Oceanfront Marathon`,
    description: race.description,
  };
}

export default async function RacePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const race = getRaceBySlug(slug);

  if (!race) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={race.name}
      />

      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {/* Quick Stats — large like homepage counters */}
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 -mt-12 md:-mt-20 relative z-10 mb-16 md:mb-20">
              {[
                { label: "Distance", value: race.distance },
                { label: "Start Time", value: race.startTime },
                { label: "Start", value: race.startLocation, isLocation: true },
                { label: "Finish", value: race.finishLocation, isLocation: true },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-ink/5 rounded-xl p-4 md:p-6 text-center">
                  <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-ink/40">
                    {stat.label}
                  </p>
                  {stat.isLocation ? (
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stat.value + ", Maui, Hawaii")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 font-display text-3xl sm:text-4xl text-brand leading-none hover:text-brand-dark transition-colors block"
                      title={`View ${stat.value} on Google Maps`}
                    >
                      {stat.value}
                      <svg viewBox="0 0 16 16" fill="none" className="inline-block w-4 h-4 ml-2 -mt-1 opacity-40">
                        <path d="M6 3h7v7M13 3L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ) : (
                    <p className="mt-2 font-display text-3xl sm:text-4xl text-brand leading-none">
                      {stat.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Description — two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink">
                About This Race
              </h2>
              <p className="mt-6 text-[15px] text-ink/50 leading-[1.8]">
                {race.description}
              </p>
            </ScrollReveal>

            {/* Highlights */}
            <ScrollReveal delay={0.1}>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-ink mb-6">
                Highlights
              </h3>
              <div className="space-y-3">
                {race.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-4 bg-white border border-ink/5 rounded-xl p-5"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center text-brand text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-[15px] font-medium text-ink">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Course Details */}
          {(race.courseDescription || race.elevation || race.surface) && (
            <ScrollReveal>
              <div className="mt-20">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink mb-8">
                  Course Details
                </h2>
                <div className="bg-white border border-ink/5 rounded-xl p-8 space-y-6">
                  {race.courseType && (
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-brand/5 text-brand font-medium text-sm px-3 py-1 rounded-full">
                        {race.courseType}
                      </span>
                      {race.surface && (
                        <span className="bg-ink/5 text-ink/50 font-medium text-sm px-3 py-1 rounded-full">
                          {race.surface}
                        </span>
                      )}
                    </div>
                  )}
                  {race.courseDescription && (
                    <p className="text-[15px] text-ink/50 leading-[1.8]">
                      {race.courseDescription}
                    </p>
                  )}
                  {race.elevation && (
                    <div className="bg-cream/50 rounded-lg p-5">
                      <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-ink/40 mb-2">
                        Elevation Profile
                      </h4>
                      <p className="text-[14px] text-ink/50 leading-relaxed">
                        {race.elevation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* On-Course Support */}
          {race.aidStations && (
            <ScrollReveal>
              <div className="mt-12">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink mb-8">
                  On-Course Support
                </h2>
                <div className="bg-white border border-ink/5 rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand">
                        <path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink mb-2">Aid Stations</h4>
                      <p className="text-[14px] text-ink/50 leading-relaxed">
                        {race.aidStations}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Race Policies & Time Limit */}
          {(race.cutoffTime || (race.policies && race.policies.length > 0)) && (
            <ScrollReveal>
              <div className="mt-12">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink mb-8">
                  Race Policies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {race.cutoffTime && (
                    <div className="bg-white border border-ink/5 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-ink mb-1">Time Limit</h4>
                          <p className="text-[14px] text-ink/50 leading-relaxed">
                            {race.cutoffTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {race.policies && race.policies.map((policy) => (
                    <div key={policy} className="bg-white border border-ink/5 rounded-xl p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center text-brand text-sm font-bold">
                          ✓
                        </span>
                        <span className="text-[14px] text-ink/60">{policy}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* What's Included */}
          {race.finisherAwards && race.finisherAwards.length > 0 && (
            <ScrollReveal>
              <div className="mt-12">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink mb-8">
                  What&apos;s Included
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {race.finisherAwards.map((award) => (
                    <div key={award} className="bg-white border border-ink/5 rounded-xl p-6 text-center">
                      <span className="text-[14px] font-medium text-ink">{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Logistics */}
          {(race.parking || race.startAddress || (race.finishLineAmenities && race.finishLineAmenities.length > 0)) && (
            <ScrollReveal>
              <div className="mt-12">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink mb-8">
                  Logistics
                </h2>
                <div className="space-y-4">
                  {race.startAddress && (
                    <div className="bg-white border border-ink/5 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand">
                            <path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
                            <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-ink mb-1">Start Location</h4>
                          <p className="text-[14px] text-ink/50">{race.startAddress}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {race.parking && (
                    <div className="bg-white border border-ink/5 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand">
                            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M9 16V8h4a3 3 0 010 6H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-ink mb-1">Parking & Transportation</h4>
                          <p className="text-[14px] text-ink/50 leading-relaxed">{race.parking}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {race.finishLineAmenities && race.finishLineAmenities.length > 0 && (
                    <div className="bg-white border border-ink/5 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand">
                            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 22v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-ink mb-2">At the Finish Line</h4>
                          <ul className="space-y-1">
                            {race.finishLineAmenities.map((amenity) => (
                              <li key={amenity} className="text-[14px] text-ink/50 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-brand/40 rounded-full flex-shrink-0" />
                                {amenity}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Course Map */}
          <ScrollReveal>
            <div className="mt-20">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink mb-8">
                Course Map
              </h2>
              <div className="bg-white border border-ink/5 rounded-xl overflow-hidden">
                <div className="aspect-[3/1] bg-brand/5 flex items-center justify-center">
                  <p className="text-xs text-ink/20">
                    Course map image coming soon
                  </p>
                </div>
                <div className="p-6 flex flex-wrap gap-3">
                  <span className="bg-brand/5 text-brand font-medium text-sm px-3 py-1 rounded-full">
                    Start: {race.startLocation}
                  </span>
                  <span className="bg-brand/5 text-brand font-medium text-sm px-3 py-1 rounded-full">
                    Finish: {race.finishLocation}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA — same style as homepage: blurry image bg + brand overlay */}
      <section className="py-12 px-6 lg:px-16 bg-cream">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0">
            <Image
              src="/images/hero/maui-beach.webp"
              alt=""
              fill
              className="object-cover blur-sm scale-110"
            />
            <div className="absolute inset-0 bg-brand/80" />
          </div>

          <div className="relative z-10 py-14 px-8 lg:px-16 text-center">
            {/* Promo eyebrow */}
            <p className="inline-block text-[13px] font-bold uppercase tracking-[0.2em] text-white/90 bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
              Use code <span className="font-mono">MARCHEARLY BIRD15</span> — $15 off registration
            </p>

            <h2 className="font-display text-5xl sm:text-6xl lg:text-8xl uppercase tracking-tight text-white leading-[0.9]">
              Ready to Run
              <br />
              Paradise?
            </h2>
            <p className="mt-4 text-sm text-white/60 max-w-md mx-auto">
              MLK Weekend, January 2027 — Maui, Hawai&apos;i
            </p>

            <div className="mt-8">
              {race.registrationUrl !== "#" ? (
                <a
                  href="https://raceroster.com/events/2027/82264/maui-oceanfront-marathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border-2 border-white bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-brand hover:bg-transparent hover:text-white transition-all"
                >
                  Register Now &rarr;
                </a>
              ) : (
                <span className="inline-flex items-center px-8 py-4 text-lg font-semibold uppercase tracking-wider text-white/90">
                  Free Event — No Registration Needed
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
