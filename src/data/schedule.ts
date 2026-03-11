export interface ScheduleDay {
  day: string;
  date: string;
  events: {
    time: string;
    title: string;
    location: string;
    description?: string;
  }[];
}

export const schedule: ScheduleDay[] = [
  {
    day: "Thursday",
    date: "January 14, 2027",
    events: [
      {
        time: "11:00 AM",
        title: "MOM's Cookie Fun Run",
        location: "Kalama Beach Park, Kihei",
        description: "Free, un-timed fun run. Bring cookies or snacks to share!",
      },
    ],
  },
  {
    day: "Friday",
    date: "January 15, 2027",
    events: [
      {
        time: "10:00 AM – 5:00 PM",
        title: "Race Bib & T-Shirt Pickup",
        location: "Shops at Wailea",
        description: "Registration confirmation, race bib, and t-shirt collection.",
      },
    ],
  },
  {
    day: "Saturday",
    date: "January 16, 2027",
    events: [
      {
        time: "10:00 AM – 5:00 PM",
        title: "Race Bib & T-Shirt Pickup",
        location: "Shops at Wailea",
        description: "Last day to pick up your race materials.",
      },
    ],
  },
  {
    day: "Sunday",
    date: "January 17, 2027",
    events: [
      {
        time: "12:00 AM",
        title: "Double Marathon Start",
        location: "Shops at Wailea",
      },
      {
        time: "4:00 AM",
        title: "Marathon Early Start",
        location: "Shops at Wailea",
        description: "For runners needing additional time to finish before noon.",
      },
      {
        time: "5:00 AM",
        title: "Marathon Start",
        location: "Shops at Wailea",
      },
      {
        time: "6:40 AM",
        title: "Half Marathon Start",
        location: "Maalaea Harbor",
      },
      {
        time: "7:00 AM",
        title: "15K Start",
        location: "Papalaua Beach",
      },
      {
        time: "7:30 AM",
        title: "10K Start",
        location: "Highway 30",
      },
      {
        time: "8:00 AM",
        title: "6-Miler Start",
        location: "Ukumehame Beach Park",
      },
      {
        time: "8:30 AM",
        title: "5K Run-Walk Start",
        location: "Lone Palm Point",
      },
      {
        time: "12:00 PM",
        title: "Course Closes",
        location: "Launiupoko Beach Park",
      },
    ],
  },
  {
    day: "Sunday Evening",
    date: "January 17, 2027",
    events: [
      {
        time: "5:00 PM",
        title: "After-Party Sunset Whale Cruise",
        location: "Lahaina Harbor",
        description: "Celebrate with a sunset dinner cruise. Tickets sold separately.",
      },
    ],
  },
  {
    day: "Monday",
    date: "January 18, 2027",
    events: [
      {
        time: "5:00 PM",
        title: "Monday After-Party Cruise",
        location: "Lahaina Harbor",
        description: "Second chance to celebrate on the water. Tickets sold separately.",
      },
    ],
  },
];
