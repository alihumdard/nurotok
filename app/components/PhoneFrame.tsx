/** iPhone-style body around a screenshot: bezel, side buttons and notch. */
export default function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* side buttons */}
      <span aria-hidden="true" className="absolute -left-[3px] top-[18%] h-[4%] w-[3px] rounded-l-sm bg-[#1B2A22]" />
      <span aria-hidden="true" className="absolute -left-[3px] top-[26%] h-[7%] w-[3px] rounded-l-sm bg-[#1B2A22]" />
      <span aria-hidden="true" className="absolute -left-[3px] top-[35%] h-[7%] w-[3px] rounded-l-sm bg-[#1B2A22]" />
      <span aria-hidden="true" className="absolute -right-[3px] top-[28%] h-[11%] w-[3px] rounded-r-sm bg-[#1B2A22]" />

      <div className="relative overflow-hidden rounded-[13%/6.4%] bg-[#1B2A22] p-[3.2%] shadow-[0_14px_34px_rgba(11,54,31,0.22)]">
        <div className="relative overflow-hidden rounded-[11%/5.4%] bg-white">
          {children}
          {/* notch */}
          <span aria-hidden="true" className="absolute left-1/2 top-[0.9%] h-[2.4%] w-[26%] -translate-x-1/2 rounded-full bg-[#1B2A22]" />
        </div>
      </div>
    </div>
  );
}
