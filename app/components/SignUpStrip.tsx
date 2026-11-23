"use client";

import { useState, type FormEvent } from "react";

/**
 * Newsletter sign-up for the light sections (contact, blog).
 * No provider is wired up yet: a valid address shows a confirmation.
 * Replace the TODO with the provider's API when it is available.
 */
export default function SignUpStrip({ heading, text }: { heading: string; text: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("error");
      return;
    }
    // TODO: send `email` to the newsletter provider.
    setStatus("done");
    setEmail("");
  }

  return (
    <div className="flex flex-col gap-6 rounded-[6px] border border-[#D5E2D8] bg-white p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
      <div className="flex items-start gap-4">
        <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#BDEED7] text-[#0B361F]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 6.5L12 13l8.5-6.5" /></svg>
        </span>
        <div>
          <h2 className="text-[26px] font-bold tracking-[-0.02em] text-[#0B361F] sm:text-[30px]">{heading}</h2>
          <p className="mt-1.5 text-[19px] leading-[1.5] text-[#2F4538]">{text}</p>
        </div>
      </div>

      {status === "done" ? (
        <p
          role="status"
          className="flex items-center gap-3 rounded-full bg-[#EDF7F1] px-6 py-4 text-[17px] font-semibold text-[#0B361F] lg:shrink-0"
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#367050" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
          Thanks! You&apos;re on the list.
        </p>
      ) : (
        <form noValidate onSubmit={onSubmit} className="w-full lg:w-auto lg:shrink-0">
          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <label htmlFor="signup-email" className="sr-only">Your email address</label>
            <input
              id="signup-email"
              name="email"
              type="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              aria-invalid={status === "error"}
              aria-describedby={status === "error" ? "signup-error" : undefined}
              placeholder="Email address"
              className={`min-w-0 flex-1 rounded-full border bg-[#F6F3EC] px-5 py-3.5 text-[17px] text-[#0B361F] outline-none placeholder:text-[#7D8F84] focus:border-[#367050] lg:w-[300px] ${
                status === "error" ? "border-[#A33A2B]" : "border-[#D5E2D8]"
              }`}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0B361F] px-7 py-3.5 text-[17px] font-semibold text-white transition-colors hover:bg-[#367050]"
            >
              Subscribe
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </div>
          {status === "error" && (
            <p id="signup-error" className="mt-2 pl-5 text-[16px] font-semibold text-[#A33A2B]">
              Please enter a valid email address.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
