import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Race Videos | Maui Oceanfront Marathon",
};

export default function VideosPage() {
  return (
    <>
      <PageHero title="Race Videos" subtitle="Watch highlights from race day" />
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="bg-white border border-ink/5 rounded-2xl p-12">
              <div className="w-16 h-16 mx-auto bg-brand/10 rounded-2xl flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-brand">
                  <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
                </svg>
              </div>
              <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
                Race Videos
              </h2>
              <p className="mt-4 text-sm text-ink/40 max-w-md mx-auto">
                Check out our YouTube channel for race highlights, course
                previews, and more.
              </p>
              <a
                href="https://www.youtube.com/@mauioceanfrontmarathon"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-full bg-brand px-6 py-3 text-[13px] font-semibold uppercase tracking-wider text-white hover:bg-brand-dark transition-all hover:scale-[1.02]"
              >
                Watch on YouTube &rarr;
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
