export default function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <a href="/" aria-label="NuroTok home" className="flex items-center gap-2.5">
      <span {...(light ? { "data-light": true } : {})} className={`shrink-0 ${light ? "rounded-full bg-[#F6F3EC] p-1" : ""}`}>
        <img src="/images/nurotok-logo.png" alt="" width={56} height={56} className={`${light ? "" : "nt-logo-img "}h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] lg:h-[56px] lg:w-[56px]`} />
      </span>
      <span
        className={`font-heading text-[26px] font-bold leading-none tracking-[-0.03em] sm:text-[30px] lg:text-[34px] ${light ? "text-white" : "text-[#0E4A2E]"}`}
      >
        NuroTok<sup className="text-[0.45em] font-semibold align-super">TM</sup>
      </span>
    </a>
  );
}
