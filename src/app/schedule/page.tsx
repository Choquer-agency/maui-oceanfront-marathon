import { PageHero } from "@/components/PageHero";
import { Timeline } from "@/components/Timeline";

export const metadata = {
  title: "Race Weekend Schedule | Maui Oceanfront Marathon",
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        title="Race Weekend Schedule"
        subtitle="Everything happening from Thursday through Monday — January 2027"
      />
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Timeline />
        </div>
      </section>
    </>
  );
}
