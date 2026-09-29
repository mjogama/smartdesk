"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import QueueDisplay from "@/components/QueueDisplay";
import AppointmentSlots from "@/components/AppointmentSlots";
import ReservedCalendar, { buildSampleMonth } from "@/components/ReservedCalendar";
import { NEXT_UP, OCCUPIED_DATES, SLOTS } from "../../constants/SAMPLE_DATA";

export default function SmartDeskDashboard() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = setTimeout(tick, 0);
    const timer = setInterval(tick, 1000 * 30);
    return () => {
      clearTimeout(first);
      clearInterval(timer);
    };
  }, []);

  const timeLabel = now ? now.toLocaleTimeString("en-PH", { hour: "numeric", minute: "2-digit" }) : "--:--";
  const dateLabel = now ? now.toLocaleDateString("en-PH", { weekday: "long", month: "long", day: "numeric" }) : "";

  const calendarDays = buildSampleMonth(30, OCCUPIED_DATES);

  return (
    <div className="flex min-h-dvh w-full flex-col bg-[#101418] text-[#F3F1EA] lg:h-dvh lg:overflow-hidden">
      <header className="flex shrink-0 items-center justify-between gap-4 border-b border-[#262C33] bg-[#171C22] px-4 py-4 sm:px-8 lg:h-24 lg:px-12 lg:py-0">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Image src="/Logo.png" alt="SmartDesk logo" width={48} height={48} priority className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" />
          <div className="min-w-0">
            <div className="font-serif text-xl font-semibold leading-none sm:text-2xl">SmartDesk</div>
            <div className="mt-0.5 truncate text-xs text-[#8A9099] sm:text-sm">Accounting Office</div>
          </div>
        </div>
        <div className="shrink-0 text-right">
          <div className="font-serif text-xl font-semibold sm:text-2xl">{timeLabel}</div>
          <div className="mt-0.5 hidden text-sm text-[#8A9099] sm:block">{dateLabel}</div>
        </div>
      </header>

      <main className="flex grow flex-col lg:min-h-0 lg:flex-row">
        <QueueDisplay current="A-042" counterLabel="Counter 2 — Payments" nextUp={NEXT_UP} />

        <div className="flex w-full flex-col gap-7 px-4 py-6 sm:px-8 sm:py-8 md:grid md:grid-cols-2 md:items-start lg:flex lg:w-1/3 lg:items-stretch lg:overflow-hidden lg:px-10 lg:py-12">
          <ReservedCalendar monthLabel="October" days={calendarDays} />
          <AppointmentSlots slots={SLOTS} />
        </div>
      </main>

      <footer className="flex shrink-0 flex-col items-center gap-1 border-t border-[#262C33] bg-[#171C22] px-4 py-3 text-center text-xs text-[#5F656D] sm:flex-row sm:justify-between sm:px-8 sm:text-left sm:text-sm lg:h-13 lg:px-12 lg:py-0">
        <div>Please wait for your number to be called before approaching the counter.</div>
        <div>SmartDesk · Team FullStackDB</div>
      </footer>
    </div>
  );
}
