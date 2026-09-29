type NextUpItem = {
  number: string;
  label: string;
};

type QueueDisplayProps = {
  current: string;
  counterLabel: string;
  nextUp: NextUpItem[];
};

export default function QueueDisplay({ current, counterLabel, nextUp }: QueueDisplayProps) {
  return (
    <div className="flex w-full flex-col gap-6 border-b border-[#262C33] p-4 sm:gap-8 sm:p-8 lg:w-2/3 lg:border-b-0 lg:border-r lg:p-12">
      <div className="relative flex min-h-64 grow flex-col items-center justify-center gap-5 rounded-[20px] px-4 pb-10 pt-16 sm:min-h-80 lg:min-h-0 lg:py-0 border border-[#262C33] bg-[#171C22]">
        <div className="absolute left-5 top-5 text-xs sm:left-8 sm:top-7 sm:text-sm font-bold uppercase tracking-widest text-[#8A9099]">Now Serving</div>
        <div className="font-serif text-[clamp(4.5rem,14vw,180px)] font-bold leading-none text-[#F3F1EA]">{current}</div>
        <div className="flex items-center gap-2.5 rounded-full bg-[#23303B] px-4 py-2 text-center text-base font-semibold sm:px-6 sm:py-2.5 sm:text-lg text-[#7FD8A0]">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#7FD8A0]" />
          {counterLabel}
        </div>
      </div>

      <div>
        <div className="mb-4 text-sm font-bold uppercase tracking-widest text-[#8A9099]">Up Next</div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-3 sm:gap-5">
          {nextUp.map((item) => (
            <div key={item.number} className="rounded-2xl border border-[#262C33] bg-[#171C22] py-4 text-center sm:py-6">
              <div className="font-serif text-3xl font-bold text-[#C6602F] sm:text-4xl">{item.number}</div>
              <div className="mt-1.5 text-sm text-[#8A9099]">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
