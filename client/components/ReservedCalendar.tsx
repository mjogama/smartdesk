type CalendarDay = {
  day: number;
  occupied: boolean;
};

type ReservedCalendarProps = {
  monthLabel: string;
  days: CalendarDay[];
};

const WEEK_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

export default function ReservedCalendar({ monthLabel, days }: ReservedCalendarProps) {
  return (
    <div className="mx-auto w-full max-w-md md:max-w-none">
      <div className="mb-4.5 text-sm font-bold uppercase tracking-widest text-[#8A9099]">Reserved Dates — {monthLabel}</div>
      <div className="rounded-2xl border border-[#262C33] bg-[#171C22] p-5">
        <div className="mb-2.5 grid grid-cols-7 gap-1.5">
          {WEEK_LABELS.map((label, i) => (
            <div key={i} className="text-center text-xs font-bold text-[#5F656D]">
              {label}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {days.map(({ day, occupied }) => (
            <div key={day} className={`flex aspect-square items-center justify-center rounded-lg text-sm font-semibold ${occupied ? "bg-[#C6602F] text-[#101418]" : "bg-[#232930] text-[#C9CDD2]"}`}>
              {day}
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-x-4.5 gap-y-2 border-t border-[#262C33] pt-4">
          <div className="flex items-center gap-2 text-xs text-[#8A9099]">
            <span className="h-3 w-3 rounded-sm bg-[#C6602F]" />
            Fully booked
          </div>
          <div className="flex items-center gap-2 text-xs text-[#8A9099]">
            <span className="h-3 w-3 rounded-sm bg-[#3A4048]" />
            Slots open
          </div>
          <span className="block basis-full text-xs italic text-[#5F656D]">(Beyond 20+ reservations is considered full, expect a slow transaction if not reserved)</span>{" "}
        </div>
      </div>
    </div>
  );
}

export function buildSampleMonth(daysInMonth: number, occupiedDates: number[]): CalendarDay[] {
  const occupiedSet = new Set(occupiedDates);
  return Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    occupied: occupiedSet.has(i + 1),
  }));
}
