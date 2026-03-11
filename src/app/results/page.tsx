import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { results } from "@/data/results";
import Link from "next/link";

export const metadata = {
  title: "Past Results | Maui Oceanfront Marathon",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        title="Past Results"
        subtitle="Race results from every year of the Maui Oceanfront Marathon"
      />
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="space-y-3">
              {results.map((result) => (
                <Link
                  key={result.year}
                  href={result.href}
                  className="group flex items-center justify-between bg-white border border-ink/5 rounded-xl p-5 hover:shadow-md hover:border-brand/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center font-display text-lg text-brand">
                      {result.year.toString().slice(2)}
                    </span>
                    <span className="font-semibold text-ink group-hover:text-brand transition-colors">
                      {result.year} Race Results
                    </span>
                  </div>
                  <span className="text-ink/30 group-hover:text-brand group-hover:translate-x-1 transition-all">
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
