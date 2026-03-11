export interface Race {
  slug: string;
  name: string;
  distance: string;
  startTime: string;
  startLocation: string;
  finishLocation: string;
  description: string;
  highlights: string[];
  registrationUrl: string;
  icon: string;
  color: string;
  startAddress?: string;
  courseDescription?: string;
  courseType?: string;
  surface?: string;
  elevation?: string;
  aidStations?: string;
  cutoffTime?: string;
  parking?: string;
  finisherAwards?: string[];
  policies?: string[];
  finishLineAmenities?: string[];
}

export const races: Race[] = [
  {
    slug: "marathon",
    name: "Marathon",
    distance: "26.2 miles",
    startTime: "5:00 AM",
    startLocation: "Shops at Wailea",
    finishLocation: "Launiupoko Beach Park",
    description:
      "Our flagship event — 26.2 miles of breathtaking oceanfront running from Wailea to Launiupoko Beach. A certified Boston Qualifier course that hugs the Maui coastline with views of whales, surfers, and the West Maui Mountains. With 19 aid stations and a mostly flat, fast course at sea level, this is paradise running at its finest.",
    highlights: [
      "Boston Qualifying course",
      "19 aid stations along the route",
      "Flat & fast at sea level",
      "4:00 AM early start available",
      "Ocean views for 26.2 miles",
    ],
    registrationUrl: "https://raceroster.com/events/2027/82264/maui-oceanfront-marathon",
    icon: "🏅",
    color: "bg-ocean",
    startAddress: "3750 Wailea Alanui Dr, Wailea, HI 96753 (Shops at Wailea North parking lot)",
    courseDescription:
      "Starting at the Shops at Wailea, the course goes around the Shops, out the Marriott driveway, and south 1 mile to the Fairmont Hotel turnaround. From there, runners head back onto South Kihei Road through oceanfront Kihei Town. At the 13-mile mark, turn left onto Highway 30 above scenic Maalaea Bay. The route continues oceanfront along the highway all the way to the finish at Launiupoko Beach Park. The entire course is traffic-free, marked with cones, informative signs, and course marshals at key intersections.",
    courseType: "Point-to-point",
    surface: "Entirely on asphalt and shoulder bike path, mostly 4-8 feet wide.",
    elevation:
      "Starts at approximately 236 feet above sea level in Wailea. Rolling downhill to sea level by mile 1.3. Flat and at sea level until mile 10. Uphill from mile 10 to mile 11 reaching 157 feet. Maximum elevation: 196 feet. Generally fast and mostly flat with a few gentle rolling hills.",
    aidStations:
      "18-19 aid stations along the oceanfront route, spaced approximately 1 mile apart. Each station is manned by local high school teams, non-profit organizations, and businesses. Stations serve water, Ultima Replenisher, Clif Bar, Clif Bloks, cookies, candy, and oranges. A reusable crushable cup is provided at the start line — carry it with you and use it at every aid station (no paper cups). You may drop off headlamps at any aid station and sweepers will bring them to the finish.",
    cutoffTime:
      "All race timing stops at noon. Regular 5:00 AM start gives you a 7-hour time limit. The 4:00 AM early start gives you 8 hours to finish.",
    parking:
      "Free parking at the Shops at Wailea south parking lot. You can also be dropped off anywhere at the Shops at Wailea and walk through the breezeway to the north parking lot and start line. Regular flush restrooms are available inside the mall before the start.",
    finisherAwards: [
      "Finisher's medal for all competitors",
      "Age division awards in 5-year divisions (3 deep)",
      "Souvenir Maui Oceanfront event tech t-shirt (men's and women's cut)",
    ],
    policies: [
      "Open to both runners and walkers",
      "4:00 AM early start available for athletes needing additional time",
      "Marathon Head Start for 55+ runners (eligible for age division awards, but not overall awards)",
      "Traffic-free course",
    ],
    finishLineAmenities: [
      "Finisher's medal presentation",
      "Spray showers",
      "Free massage tables from Maui School of Therapeutic Massage",
      "Food and refreshments",
    ],
  },
  {
    slug: "half-marathon",
    name: "Half Marathon",
    distance: "13.1 miles",
    startTime: "6:40 AM",
    startLocation: "Maalaea Harbor",
    finishLocation: "Launiupoko Beach Park",
    description:
      "Starting at daybreak from scenic Maalaea Harbor, this point-to-point half marathon takes you along the stunning Maui coastline to Launiupoko Beach. One of the prettiest half marathons you'll ever run, with uninterrupted ocean views and gentle Maalaea Bay breezes the entire way.",
    highlights: [
      "Point-to-point course",
      "Starts at daybreak from Maalaea Harbor",
      "Continuous ocean views",
      "Flat and fast",
      "Finishes at Launiupoko Beach",
    ],
    registrationUrl: "https://raceroster.com/events/2027/82264/maui-oceanfront-marathon",
    icon: "🏃",
    color: "bg-ocean-light",
    courseDescription:
      "A point-to-point course starting at daybreak from Maalaea Harbor. Follow the oceanfront route along Highway 30 with continuous ocean views and Maalaea Bay breezes all the way to the finish at Launiupoko Beach Park. The course is traffic-free, flat, and fast — one of the prettiest half marathons you'll ever do.",
    courseType: "Point-to-point",
    surface: "Asphalt and shoulder bike path, 4-8 feet wide.",
    elevation: "Flat course run entirely at sea level with minimal elevation change.",
    aidStations:
      "Approximately 1 aid station per mile, manned by local high school teams and non-profit organizations. Stations serve water, Ultima Replenisher, and nutrition.",
    cutoffTime: "3-hour time limit from the gun start.",
    parking:
      "MOM shuttle bus available from select hotel locations. If driving, use the MOM shuttle to return to your vehicle after the race.",
    finisherAwards: [
      "Finisher's medal for all competitors",
      "Age division awards in 5-year divisions (3 deep)",
      "Souvenir Maui Oceanfront event tech t-shirt (men's and women's cut)",
    ],
    policies: [
      "Runners only — NOT open to walkers",
      "Boston Qualifier certified course",
      "Traffic-free course",
    ],
    finishLineAmenities: [
      "Finisher's medal presentation",
      "Spray showers",
      "Free massage tables",
      "Food and refreshments",
    ],
  },
  {
    slug: "15k",
    name: "15K",
    distance: "9.3 miles",
    startTime: "7:00 AM",
    startLocation: "Papalaua Beach",
    finishLocation: "Launiupoko Beach Park",
    description:
      "A flat and fast oceanfront point-to-point race starting at beautiful Papalaua Beach. This 9.3-mile course follows the stunning coastline with mountain and ocean views before finishing at Launiupoko Beach Park. Perfect for runners looking for a challenge beyond a 10K.",
    highlights: [
      "Point-to-point course",
      "Flat and fast",
      "Oceanfront the entire way",
      "Beautiful Papalaua Beach start",
    ],
    registrationUrl: "https://raceroster.com/events/2027/82264/maui-oceanfront-marathon",
    icon: "⚡",
    color: "bg-sunset",
    courseDescription:
      "Starting just north of the tunnel at beautiful Papalaua Beach, this absolutely flat and fast course follows Highway 30 along the oceanfront at sea level all the way to the marathon finish line at Launiupoko Beach Park. Enjoy stunning mountain and ocean views throughout with opportunities to spot whales breaching offshore.",
    courseType: "Point-to-point",
    surface: "Asphalt and shoulder bike path, 4-8 feet wide.",
    elevation: "Absolutely flat course at sea level. No significant elevation changes.",
    aidStations:
      "Aid stations each mile, manned by local high school teams, non-profits, and businesses. Stations serve water, Ultima Replenisher, and special treats at each station.",
    parking:
      "Shuttle bus available from select hotel locations to the start. Post-race shuttle available to return you to your vehicle.",
    finisherAwards: [
      "Finisher's medal for all competitors",
      "Age division awards",
      "Souvenir Maui Oceanfront event tech t-shirt (men's and women's cut)",
    ],
    policies: [
      "Runners only — NOT open to walkers",
      "Traffic-free course",
    ],
    finishLineAmenities: [
      "Finisher's medal presentation",
      "Spray showers courtesy of the Four Seasons Hotel",
      "18-22 free massage tables from Maui School of Therapeutic Massage",
      "Food and refreshments",
    ],
  },
  {
    slug: "10k",
    name: "10K",
    distance: "6.2 miles",
    startTime: "7:30 AM",
    startLocation: "Highway 30",
    finishLocation: "Launiupoko Beach Park",
    description:
      "A flat and fast out-and-back oceanfront race along Highway 30. Experience the beauty of Maui's coastline on this accessible distance that's perfect for intermediate runners and those looking to set a personal record on a fast course.",
    highlights: [
      "Flat and fast course",
      "Out-and-back format",
      "Oceanfront running",
      "Great for PRs",
    ],
    registrationUrl: "https://raceroster.com/events/2027/82264/maui-oceanfront-marathon",
    icon: "🔥",
    color: "bg-sunset-warm",
    courseDescription:
      "An out-and-back course along Highway 30's traffic-free oceanfront route. Runners head south from the start, turnaround, and finish at Launiupoko Beach Park. Flat and fast with stunning coastal views throughout — a great course for setting a personal record.",
    courseType: "Out-and-back",
    surface: "Asphalt and shoulder bike path, 4-8 feet wide.",
    elevation: "Flat course at sea level. Minimal elevation change.",
    aidStations:
      "Approximately 1 aid station per mile serving water, Ultima Replenisher, and nutrition.",
    parking:
      "MOM shuttle bus available from select hotel locations. Bus transportation also available from the Marathon start line in Wailea to the 10K start.",
    finisherAwards: [
      "Finisher's medal for all competitors",
      "Age division awards",
      "Souvenir Maui Oceanfront event tech t-shirt (men's and women's cut)",
    ],
    policies: [
      "Traffic-free course",
    ],
    finishLineAmenities: [
      "Finisher's medal presentation",
      "Spray showers",
      "Free massage tables",
      "Food and refreshments",
    ],
  },
  {
    slug: "6-miler",
    name: "6-Miler",
    distance: "6 miles",
    startTime: "8:00 AM",
    startLocation: "Ukumehame Beach Park",
    finishLocation: "Launiupoko Beach Park",
    description:
      "A scenic point-to-point 6-mile run starting at Ukumehame Beach Park. This unique distance offers a perfect middle ground with stunning ocean and mountain vistas along the way. A local favorite for runners who want a solid workout with incredible scenery.",
    highlights: [
      "Point-to-point course",
      "Starts at Ukumehame Beach Park",
      "Ocean and mountain vistas",
      "Unique distance",
    ],
    registrationUrl: "https://raceroster.com/events/2027/82264/maui-oceanfront-marathon",
    icon: "🌊",
    color: "bg-palm",
    courseDescription:
      "Starting at Ukumehame Beach Park, run 6 miles along Highway 30's oceanfront route to the marathon finish line at Launiupoko Beach Park. A flat and fast course with the sunrise at your back — whales on your left, rainbows on your right. A local favorite and one of Maui's most scenic running routes.",
    courseType: "Point-to-point",
    surface: "Asphalt and shoulder bike path, 4-8 feet wide.",
    elevation: "Flat course at sea level.",
    parking:
      "MOM shuttle bus available from select hotel locations to the start at Ukumehame Beach Park. Limited parking available at the beach park itself.",
    finisherAwards: [
      "Finisher's medal for all competitors",
      "Age division awards",
      "Souvenir Maui Oceanfront event tech t-shirt (men's and women's cut)",
    ],
    policies: [
      "Traffic-free course",
    ],
    finishLineAmenities: [
      "Finisher's medal presentation",
      "Spray showers",
      "Free massage tables",
      "Food and refreshments",
    ],
  },
  {
    slug: "5k",
    name: "5K Run-Walk",
    distance: "3.1 miles",
    startTime: "8:30 AM",
    startLocation: "Lone Palm Point",
    finishLocation: "Launiupoko Beach Park",
    description:
      "Our 5K Run-Walk starts 3.1 miles south of Lahaina at Lone Palm Point on the ocean and finishes at the marathon finish line at Launiupoko Beach Park. The course is flat, fast, and 100% closed to traffic — perfect for all fitness levels, families, and first-time racers.",
    highlights: [
      "100% closed to traffic",
      "Flat and fast",
      "Great for families & beginners",
      "Walk-friendly",
      "Finishes at marathon finish line",
    ],
    registrationUrl: "https://raceroster.com/events/2027/82264/maui-oceanfront-marathon",
    icon: "🌺",
    color: "bg-coral",
    courseDescription:
      "Starting 3.1 miles south of Lahaina at Lone Palm Point on the ocean, the 5K course heads north along Highway 30 to the marathon finish line at Launiupoko Beach Park. The entire course is flat, fast, and 100% closed to traffic. Scenic pullouts and public beaches along the route offer great spots for family and supporters to watch and cheer.",
    courseType: "Point-to-point",
    surface: "Asphalt and shoulder bike path, 4-8 feet wide.",
    elevation: "Flat course at sea level. No elevation change.",
    parking:
      "MOM shuttle bus available from select hotel locations. The course is 100% closed to traffic, so supporters can watch from scenic pullouts and public beaches along the route.",
    finisherAwards: [
      "Finisher's medal for all competitors",
      "First-place award in each 5-year age division",
      "Souvenir Maui Oceanfront event tech t-shirt (men's and women's cut)",
    ],
    policies: [
      "Open to both walkers and runners",
      "Baby strollers allowed (course is 100% traffic-free)",
      "Perfect for all fitness levels, families, and first-time racers",
      "100% closed to traffic",
    ],
    finishLineAmenities: [
      "Finisher's medal presentation",
      "Spray showers",
      "Free massage tables",
      "Food and refreshments",
    ],
  },
  {
    slug: "double-marathon",
    name: "Double Marathon",
    distance: "52.4 miles",
    startTime: "12:00 AM (Midnight)",
    startLocation: "Shops at Wailea",
    finishLocation: "Launiupoko Beach Park",
    description:
      "The ultimate challenge — MOM's Midnight Double Marathon. Starting at midnight under the stars, run the full marathon course twice for an unforgettable 52.4-mile ultramarathon experience along the Maui coastline. Only for the most dedicated and adventurous runners.",
    highlights: [
      "Midnight start under the stars",
      "52.4 miles of oceanfront running",
      "Ultra-marathon challenge",
      "Run the course twice",
    ],
    registrationUrl: "https://raceroster.com/events/2027/82264/maui-oceanfront-marathon",
    icon: "🌙",
    color: "bg-ocean-dark",
    startAddress: "3750 Wailea Alanui Dr, Wailea, HI 96753 (Shops at Wailea North parking lot)",
    courseDescription:
      "Starting at midnight under the stars from the Shops at Wailea, run the full 26.2-mile marathon course to Launiupoko Beach Park, then turn around and run it again for a total of 52.4 miles. The same traffic-free oceanfront route, aid stations, and course support as the marathon — but twice. You'll run through the night, watch the sunrise over the ocean, and finish as an ultramarathoner.",
    courseType: "Point-to-point (double out-and-back of marathon course)",
    surface: "Entirely on asphalt and shoulder bike path, mostly 4-8 feet wide.",
    elevation:
      "Same elevation profile as the marathon, run twice. Maximum elevation: 196 feet. Mostly flat and at sea level.",
    aidStations:
      "Same aid stations as the marathon — 18-19 stations along the route, spaced approximately 1 mile apart. Water, Ultima Replenisher, Clif Bar, Clif Bloks, cookies, candy, and oranges.",
    cutoffTime:
      "All race timing stops at noon. Midnight start gives you 12 hours to complete 52.4 miles.",
    parking:
      "Free parking at the Shops at Wailea south parking lot. Indoor restrooms available inside the mall.",
    finisherAwards: [
      "Finisher's medal for all competitors",
      "Souvenir Maui Oceanfront event tech t-shirt (men's and women's cut)",
    ],
    policies: [
      "Ultra-marathon distance — for experienced distance runners only",
      "Traffic-free course",
      "Headlamps recommended for the midnight start (can be dropped at aid stations)",
    ],
  },
  {
    slug: "cookie-fun-run",
    name: "Cookie Fun Run",
    distance: "Fun Run",
    startTime: "11:00 AM (Thursday)",
    startLocation: "Kalama Beach Park, Kihei",
    finishLocation: "Kalama Beach Park, Kihei",
    description:
      "MOM's legendary Cookie Fun Run — a free, low-key, un-timed fun run held on Thursday before race weekend. No entry fee! Just bring cookies, donuts, bagels, fruit, or a case of water to share with fellow runners. It's the perfect way to kick off marathon weekend and meet the MOM community.",
    highlights: [
      "Completely FREE",
      "Un-timed & low-key",
      "Bring snacks to share",
      "Thursday before race day",
      "Meet the MOM community",
    ],
    registrationUrl: "#",
    icon: "🍪",
    color: "bg-sand-dark",
    courseDescription:
      "A casual, un-timed fun run at Kalama Beach Park in Kihei. The route stays in and around the park — no set distance, no course markings, no pressure. Just show up, run (or walk), and share snacks with the MOM community. It's the perfect low-key kickoff to race weekend.",
    courseType: "Loop (casual)",
    parking:
      "Free parking available at Kalama Beach Park on South Kihei Road. The park is centrally located in Kihei with plenty of space.",
    policies: [
      "Completely free — no entry fee or registration required",
      "Un-timed and low-key",
      "Open to everyone — all ages, all fitness levels",
      "Family-friendly",
      "Bring cookies, donuts, bagels, fruit, or a case of water to share",
    ],
  },
];

export function getRaceBySlug(slug: string): Race | undefined {
  return races.find((race) => race.slug === slug);
}
