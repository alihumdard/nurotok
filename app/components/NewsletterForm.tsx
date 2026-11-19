"use client";

import { useState, type FormEvent } from "react";

/**
 * Newsletter sign-up. No backend is wired yet: on a valid submit it shows a
 * confirmation. Hook the TODO up to your email provider's API when ready.
 */
export default function NewsletterForm() {
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

  if (status === "done") {
    return (
      <p role="status" className="flex w-full items-center gap-3 rounded-full bg-white/10 px-6 py-4 text-[15px] font-semibold text-white ring-1 ring-white/25 xl:max-w-[500px]">
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94E7BC" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
        Thanks! You&apos;re on the list.
      </p>
    );
  }

  return (
    <form data-light onSubmit={onSubmit} noValidate className="w-full xl:max-w-[500px]">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <div className={`flex flex-col gap-2.5 transition sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:bg-white sm:p-1.5 sm:pl-5 sm:shadow-[0_8px_24px_rgba(0,0,0,0.18)] sm:ring-2 sm:focus-within:ring-[#94E7BC] ${status === "error" ? "sm:ring-[#F2A7A7]" : "sm:ring-white/0"}`}>
      <div
        className={`flex flex-1 items-center gap-2 rounded-full bg-white px-5 shadow-[0_8px_24px_rgba(0,0,0,0.18)] ring-2 transition focus-within:ring-[#94E7BC] sm:rounded-none sm:bg-transparent sm:px-0 sm:shadow-none sm:ring-0 sm:focus-within:ring-0 ${status === "error" ? "ring-[#F2A7A7]" : "ring-white/0"}`}
      >
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7F73" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 6.5L12 13l8.5-6.5" /></svg>
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={e => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? "newsletter-error" : undefined}
          placeholder="Enter your email address"
          className="min-w-0 flex-1 bg-transparent py-3.5 text-[15px] text-[#0B361F] outline-none placeholder:text-[#7D8F84] sm:py-2.5"
        />
      </div>
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#2E7D50] px-5 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#0B361F] focus-visible:outline-offset-2 sm:px-6 sm:py-3"
        >
          Subscribe
          <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </button>
      </div>
      {status === "error" && (
        <p id="newsletter-error" className="mt-2 pl-5 text-[13px] font-medium text-[#FFD2D2]">Please enter a valid email address.</p>
      )}
    </form>
  );
}
