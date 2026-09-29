type SlotStatus = "Reserved" | "Available";

type AppointmentSlot = {
  time: string;
  name: string;
  status: SlotStatus;
};

const STATUS_STYLES: Record<SlotStatus, string> = {
  Reserved: "bg-[#23303B] text-[#7FD8A0]",
  Available: "bg-[#262C33] text-[#8A9099]",
};

type AppointmentSlotsProps = {
  slots: AppointmentSlot[];
};

export default function AppointmentSlots({ slots }: AppointmentSlotsProps) {
  return (
    <div className="flex min-h-0 grow flex-col">
      <div className="mb-4 text-sm font-bold uppercase tracking-widest text-[#8A9099]">Today&apos;s Appointment Slots</div>
      <div className="flex flex-col gap-2.5 lg:min-h-0 lg:overflow-y-auto">
        {slots.map((slot) => (
          <div key={slot.time} className="flex items-center justify-between gap-3 rounded-xl border border-[#262C33] bg-[#171C22] px-4.5 py-3.5">
            <div>
              <div className="text-sm font-semibold">{slot.time}</div>
              <div className="mt-0.5 text-xs text-[#8A9099]">{slot.name}</div>
            </div>
            <div className={`rounded-full px-3 py-1.5 text-xs font-bold ${STATUS_STYLES[slot.status]}`}>{slot.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
