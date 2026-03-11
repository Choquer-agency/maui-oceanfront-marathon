import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Course Records | Maui Oceanfront Marathon",
};

const records = [
  {
    race: "Marathon",
    distance: "26.2 miles",
    men: { name: "TBD", time: "TBD", year: "—" },
    women: { name: "TBD", time: "TBD", year: "—" },
  },
  {
    race: "Half Marathon",
    distance: "13.1 miles",
    men: { name: "TBD", time: "TBD", year: "—" },
    women: { name: "TBD", time: "TBD", year: "—" },
  },
  {
    race: "15K",
    distance: "9.3 miles",
    men: { name: "TBD", time: "TBD", year: "—" },
    women: { name: "TBD", time: "TBD", year: "—" },
  },
  {
    race: "10K",
    distance: "6.2 miles",
    men: { name: "TBD", time: "TBD", year: "—" },
    women: { name: "TBD", time: "TBD", year: "—" },
  },
  {
    race: "6-Miler",
    distance: "6 miles",
    men: { name: "TBD", time: "TBD", year: "—" },
    women: { name: "TBD", time: "TBD", year: "—" },
  },
  {
    race: "5K",
    distance: "3.1 miles",
    men: { name: "TBD", time: "TBD", year: "—" },
    women: { name: "TBD", time: "TBD", year: "—" },
  },
];

export default function RecordsPage() {
  return (
    <>
      <PageHero
        title="Course Records"
        subtitle="The fastest times ever recorded on the Maui Oceanfront Marathon courses"
      />
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-[15px] text-ink/50 leading-relaxed text-center max-w-2xl mx-auto mb-12">
              Course records spanning over a decade of racing along Maui&apos;s
              stunning oceanfront. Think you can beat one? Register for the
              next edition and take your shot at history.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {records.map((record, index) => (
              <ScrollReveal key={record.race} delay={index * 0.05}>
                <div className="bg-white border border-ink/5 rounded-xl p-6 md:p-8 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="font-display text-xl uppercase tracking-tight text-ink">
                      {record.race}
                    </h3>
                    <span className="text-xs font-medium text-ink/30 bg-ink/5 px-2 py-0.5 rounded-full">
                      {record.distance}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Men's Record */}
                    <div className="bg-cream/50 rounded-lg p-4">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/30 block mb-2">
                        Men&apos;s Record
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-2xl text-brand">
                          {record.men.time}
                        </span>
                        {record.men.year !== "—" && (
                          <span className="text-xs text-ink/30">
                            ({record.men.year})
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-ink/50 mt-1 block">
                        {record.men.name}
                      </span>
                    </div>

                    {/* Women's Record */}
                    <div className="bg-cream/50 rounded-lg p-4">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/30 block mb-2">
                        Women&apos;s Record
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-2xl text-brand">
                          {record.women.time}
                        </span>
                        {record.women.year !== "—" && (
                          <span className="text-xs text-ink/30">
                            ({record.women.year})
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-ink/50 mt-1 block">
                        {record.women.name}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-sm text-ink/40">
                Know a record we&apos;re missing? Contact us at{" "}
                <a
                  href="mailto:info@mauioceanfrontmarathon.com"
                  className="text-brand font-semibold hover:text-brand-dark transition-colors"
                >
                  info@mauioceanfrontmarathon.com
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
