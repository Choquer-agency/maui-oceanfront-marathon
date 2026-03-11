import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { results, getResultByYear } from "@/data/results";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ year: string }>;
}

export async function generateStaticParams() {
  return results.map((r) => ({ year: r.year.toString() }));
}

export async function generateMetadata({ params }: Props) {
  const { year } = await params;
  return {
    title: `${year} Race Results | Maui Oceanfront Marathon`,
  };
}

export default async function YearResultsPage({ params }: Props) {
  const { year: yearStr } = await params;
  const year = parseInt(yearStr, 10);
  const result = getResultByYear(year);

  if (!result) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={`${year} Results`}
        subtitle={result.description}
      />
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white border border-ink/5 rounded-2xl p-8 md:p-12 text-center">
              <div className="w-16 h-16 mx-auto bg-brand/10 rounded-2xl flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-brand">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              <h2 className="font-display text-3xl uppercase tracking-tight text-ink mb-4">
                {year} Race Results
              </h2>

              {result.externalUrl ? (
                <>
                  <p className="text-[15px] text-ink/50 leading-relaxed mb-8 max-w-md mx-auto">
                    {result.description}
                  </p>
                  <a
                    href={result.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-[13px] font-semibold uppercase tracking-wider text-white hover:bg-brand-dark transition-all hover:scale-[1.02]"
                  >
                    View Full Results &rarr;
                  </a>
                </>
              ) : (
                <>
                  <p className="text-[15px] text-ink/50 leading-relaxed mb-6 max-w-md mx-auto">
                    Historical results for the {year} Maui Oceanfront Marathon.
                    We are working on making these results available online.
                  </p>
                  <div className="bg-brand/5 border border-brand/10 rounded-xl p-6">
                    <p className="text-sm text-ink/60">
                      For {year} results, please contact us at{" "}
                      <a
                        href="mailto:info@mauioceanfrontmarathon.com"
                        className="text-brand font-semibold hover:text-brand-dark transition-colors"
                      >
                        info@mauioceanfrontmarathon.com
                      </a>
                    </p>
                  </div>
                </>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-8 text-center">
              <Link
                href="/results"
                className="inline-flex items-center text-[13px] font-bold uppercase tracking-wider text-brand hover:text-brand-dark transition-colors"
              >
                &larr; All Results
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
