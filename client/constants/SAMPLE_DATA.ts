export const NEXT_UP = [
  { number: "A-043", label: "On deck" },
  { number: "A-044", label: "Waiting" },
  { number: "A-045", label: "Waiting" },
  { number: "A-046", label: "Waiting" },
  { number: "A-047", label: "Waiting" },
  { number: "A-048", label: "Waiting" },
];

export const OCCUPIED_DATES = [3, 4, 5, 10, 11, 17, 18, 24, 25, 26];

export const SLOTS: { time: string; name: string; status: "Reserved" | "Available" }[] = [
  { time: "9:00 AM", name: "R. Vitto — Tuition", status: "Reserved" },
  { time: "9:30 AM", name: "J. Osorio — Exam Permit", status: "Reserved" },
  { time: "10:00 AM", name: "Open slot", status: "Available" },
  { time: "10:30 AM", name: "M. Dalisay — Tuition", status: "Reserved" },
  { time: "11:00 AM", name: "A. Agapito", status: "Available" },
  { time: "1:00 PM", name: "J. Melendres", status: "Available" },
];
