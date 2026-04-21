"use client";

import { useState } from "react";

type InquiryType = "investor" | "technical" | "media";

const inquiryOptions: { value: InquiryType; label: string }[] = [
  { value: "investor", label: "Investor / Strategic Partner Inquiry" },
  { value: "technical", label: "Technical / Project Inquiry" },
  { value: "media", label: "Media / General Inquiry" },
];

export function ContactForm({ defaultType }: { defaultType?: InquiryType }) {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>(defaultType ?? "investor");

  const inputClass =
    "w-full rounded-md border border-stone-200 bg-white px-4 py-2.5 text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:border-copper-400 focus:outline-none focus:ring-1 focus:ring-copper-400 transition-colors";
  const labelClass = "block mb-1.5 text-xs font-semibold uppercase tracking-wide text-charcoal-600";

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-xl border border-stone-100 bg-white p-8 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-copper-100 text-copper-600 text-xl font-semibold">
          ✓
        </div>
        <div>
          <h3 className="text-lg font-semibold text-charcoal-900">Inquiry received</h3>
          <p className="mt-2 text-sm text-charcoal-600 leading-relaxed">
            Thank you for your interest in the Kafwego Project. A member of the team will respond
            to your inquiry within two business days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      className="rounded-xl border border-stone-100 bg-white p-6 shadow-sm space-y-5 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div>
        <label className={labelClass}>Inquiry type</label>
        <div className="flex flex-col gap-2 sm:flex-row">
          {inquiryOptions.map((opt) => (
            <label
              key={opt.value}
              className={`flex flex-1 cursor-pointer items-center gap-2.5 rounded-md border px-4 py-3 text-sm transition-colors ${
                inquiryType === opt.value
                  ? "border-copper-400 bg-copper-50 text-copper-700 font-medium"
                  : "border-stone-200 text-charcoal-600 hover:border-stone-300"
              }`}
            >
              <input
                type="radio"
                name="inquiry-type"
                value={opt.value}
                checked={inquiryType === opt.value}
                onChange={() => setInquiryType(opt.value)}
                className="sr-only"
              />
              <span
                className={`h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 ${
                  inquiryType === opt.value ? "border-copper-500 bg-copper-500" : "border-stone-300"
                }`}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>Name</label>
          <input id="contact-name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-org" className={labelClass}>Organization</label>
          <input id="contact-org" type="text" placeholder="Company / Fund / Institution" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>Email address</label>
        <input id="contact-email" type="email" required placeholder="your@email.com" className={inputClass} />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>Message</label>
        <textarea
          id="contact-message"
          rows={5}
          required
          placeholder="Please describe your request, area of interest, or question."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center rounded-md bg-copper-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-copper-600 transition-colors"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
