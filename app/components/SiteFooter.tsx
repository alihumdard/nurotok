import Image from "next/image";
import BrandLogo from "./BrandLogo";
import { ND_TRAINING_URL, ND_STORE_URL } from "./links";

export default function SiteFooter() {
  return (
    <footer data-dark="footer" className="bg-[#BDEED7] text-[#0B361F]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 px-6 py-8 sm:px-8 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] lg:gap-0 lg:px-12 xl:px-[88px]">
        <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:pr-8">
          <BrandLogo />
          <p className="mt-3 max-w-[280px] text-[16px] leading-[1.45] text-[#3E5146]">A sensory regulation app from NeuroDigital Support.</p>
          <p className="mt-2 text-[15px] font-semibold text-[#0B361F]">
            Supported by{" "}
            <a href="https://neurodigitalsupport.com/" className="underline underline-offset-2 hover:text-[#367050]">
              NeuroDigital Support
            </a>
          </p>
        </div>

        <nav aria-label="Quick links" className="lg:border-l lg:border-[#0B361F]/15 lg:pl-10">
          <h3 className="text-[17px] font-bold text-[#0B361F]">Quick links</h3>
          <ul className="mt-2 space-y-0.5">
            {[["Home", "/"], ["About", "/about-us/"], ["Features", "/features/"], ["Research", "/research/"], ["Training", ND_TRAINING_URL]].map(([label, href]) => (
              <li key={label}><a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-[16px] text-[#3E5146] hover:text-[#0B361F]">{label}</a></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="More" className="lg:border-l lg:border-[#0B361F]/15 lg:pl-10">
          <h3 className="text-[17px] font-bold text-[#0B361F]">More</h3>
          <ul className="mt-2 space-y-0.5">
            {[["Blogs", "/blogs/"], ["Store", ND_STORE_URL], ["News", "/news/"], ["Contact", "/contact-us/"]].map(([label, href]) => (
              <li key={label}><a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-[16px] text-[#3E5146] hover:text-[#0B361F]">{label}</a></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Information" className="lg:border-l lg:border-[#0B361F]/15 lg:pl-10">
          <h3 className="text-[17px] font-bold text-[#0B361F]">Information</h3>
          <ul className="mt-2 space-y-0.5">
            {[["Accessibility", "/accessibility/"], ["Privacy Policy", "/privacy-policy/"], ["Terms of Use", "/terms/"]].map(([label, href]) => (
              <li key={label}><a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-[16px] text-[#3E5146] hover:text-[#0B361F]">{label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="flex min-w-0 flex-col items-start justify-center text-left md:col-span-2 lg:col-span-1 lg:items-center lg:border-l lg:border-[#0B361F]/15 lg:pl-10 lg:text-center">
          <a
            href="https://neurodigitalsupport.com/"
            aria-label="NeuroDigital Support"
            className="flex w-full max-w-[96px] justify-center rounded-lg bg-white p-2 transition-transform hover:-translate-y-0.5 lg:max-w-[116px]"
          >
            <Image
              src="/images/nd-support-logo.png"
              alt="NeuroDigital Support"
              width={886}
              height={755}
              sizes="100px"
              quality={90}
              className="h-auto w-full"
            />
          </a>
          <p className="mt-3 max-w-full text-[13px] font-semibold leading-snug text-[#0B361F] lg:w-max lg:text-[14.5px]">
            Powered by{" "}
            <a href="https://neurodigitalsupport.com/" className="underline underline-offset-2 hover:text-[#367050]">
              NeuroDigital Support
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-[#0B361F]/15">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-4 text-[15px] text-[#3E5146] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12 xl:px-[88px]">
          <p className="m-0 text-[#3E5146]">© 2026 NeuroDigital Support. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-y-2 text-[#3E5146]">
            {[["Accessibility", "/accessibility/"], ["Privacy Policy", "/privacy-policy/"], ["Terms of Use", "/terms/"]].map(([label, href], i) => (
              <li key={label} className="flex items-center">
                {i > 0 && <span aria-hidden="true" className="mx-4 h-3.5 w-px bg-[#D5E2D8]" />}
                <a href={href} className="hover:text-[#0B361F]">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
