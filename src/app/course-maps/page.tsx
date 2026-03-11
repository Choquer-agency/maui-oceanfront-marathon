import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Course Maps | Maui Oceanfront Marathon",
};

const courses = [
  {
    name: "Marathon (26.2 mi)",
    start: "Shops at Wailea",
    finish: "Launiupoko Beach Park",
    description:
      "Starting at the Shops at Wailea, the course goes around the Shops, out the Marriott driveway, south 1 mile to the Fairmont Hotel, then back onto South Kihei Road. Run through oceanfront Kihei Town, turn left onto Highway 30 at the 13-mile mark above Maalaea Bay, and continue to Launiupoko Beach Park.",
  },
  {
    name: "Half Marathon (13.1 mi)",
    start: "Maalaea Harbor",
    finish: "Launiupoko Beach Park",
    description:
      "A point-to-point course starting at daybreak from Maalaea Harbor. Follow the oceanfront route along Highway 30 with continuous ocean views and Maalaea Bay breezes to Launiupoko Beach.",
  },
  {
    name: "15K (9.3 mi)",
    start: "Papalaua Beach",
    finish: "Launiupoko Beach Park",
    description:
      "A flat and fast oceanfront point-to-point course starting at Papalaua Beach and following Highway 30 along the coast to the marathon finish line.",
  },
  {
    name: "10K (6.2 mi)",
    start: "Highway 30",
    finish: "Launiupoko Beach Park",
    description:
      "A flat and fast out-and-back oceanfront course along Highway 30 with stunning coastal views throughout.",
  },
  {
    name: "6-Miler",
    start: "Ukumehame Beach Park",
    finish: "Launiupoko Beach Park",
    description:
      "Point-to-point course starting at Ukumehame Beach Park, running along the oceanfront highway to the marathon finish line.",
  },
  {
    name: "5K Run-Walk (3.1 mi)",
    start: "Lone Palm Point",
    finish: "Launiupoko Beach Park",
    description:
      "Starting 3.1 miles south of Lahaina at Lone Palm Point. Flat, fast, and 100% closed to traffic, finishing at the marathon finish line.",
  },
];

export default function CourseMapsPage() {
  return (
    <>
      <PageHero
        title="Course Maps"
        subtitle="Every race runs along Maui's stunning oceanfront"
      />
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-6 text-center">
          {courses.map((course, index) => (
            <ScrollReveal key={course.name} delay={index * 0.05}>
              <div className="bg-white border border-ink/5 rounded-xl overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-[3/1] bg-brand/5 flex items-center justify-center">
                  <p className="text-xs text-ink/20">
                    Course map image placeholder
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl uppercase tracking-tight text-ink">
                    {course.name}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">
                    <span className="bg-brand/5 text-brand font-medium px-3 py-1 rounded-full">
                      Start: {course.start}
                    </span>
                    <span className="bg-brand/5 text-brand font-medium px-3 py-1 rounded-full">
                      Finish: {course.finish}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-ink/50 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
