"use client";

import { useId, useState, type ReactNode } from "react";

type Props = { items: { q: string; a: ReactNode }[] };

/** Two-column FAQ accordion with a smooth height (grid-rows) slide. */
export default function FaqAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const uid = useId();

  return (
    <div className="grid content-start items-start gap-x-6 gap-y-3 md:grid-cols-2">
      {items.map(({ q: question, a: answer }, i) => {
        const isOpen = open === i;
        const btnId = `${uid}-q${i}`;
        const panelId = `${uid}-a${i}`;
        return (
          <div
            key={question}
            className={`overflow-hidden rounded-[12px] border bg-white transition-[border-color,box-shadow] duration-300 ${
              isOpen
                ? "border-[#B9CFBF] shadow-[0_6px_18px_rgba(11,54,31,0.08)]"
                : "border-[#DCE5DC] hover:border-[#B9CFBF] hover:shadow-[0_4px_14px_rgba(11,54,31,0.06)]"
            }`}
          >
            <h3 className="m-0 text-[15px]">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex min-h-[76px] w-full items-center justify-between gap-4 rounded-[12px] px-5 py-3.5 text-left font-semibold text-[#0B361F] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2E7D50]"
              >
                {question}
                <span
                  aria-hidden="true"
                  className={`relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    isOpen ? "bg-[#0B361F] text-white" : "text-[#0B361F] group-hover:bg-[#EEF5EF]"
                  }`}
                >
                  <span className="absolute h-[1.8px] w-3 rounded-full bg-current" />
                  <span
                    className={`absolute h-3 w-[1.8px] rounded-full bg-current transition-transform duration-300 ${isOpen ? "scale-y-0" : "scale-y-100"}`}
                  />
                </span>
              </button>
            </h3>

            {/* grid-rows 0fr -> 1fr animates to the content's natural height */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="m-0 border-t border-[#E3EDE5] bg-[#F3F8F4] px-5 pb-4 pt-3.5 text-[14.5px] leading-[1.6] text-[#3E5146]">
                  {answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
