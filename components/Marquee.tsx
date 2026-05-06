const TICKER = "DROP 01  —  ÉDITION LIMITÉE  —  FRENCH MADE  —  ATELIER KŪRA  —  ";

export default function Marquee() {
  const content = TICKER.repeat(8);

  return (
    <div className="overflow-hidden border-y border-white/[0.06] py-[10px] select-none" aria-hidden>
      <span
        className="inline-block whitespace-nowrap text-[10px] uppercase tracking-[0.3em] text-[#A8926E]/40"
        style={{ animation: "marquee 42s linear infinite" }}
      >
        {content}
      </span>
    </div>
  );
}
