"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/content/site";

/**
 * Technical package request form.
 *
 * Submits to Netlify Forms. The previous implementation called preventDefault()
 * and set a success flag without transmitting anything, so every enquiry was
 * silently discarded while the visitor was told it had been received.
 *
 * Netlify detects forms at build time by scanning the deployed HTML, so ALL of the
 * following must survive into the static export or submissions are lost:
 *   - name + data-netlify on the <form>
 *   - the hidden form-name input, matching the form's name
 *   - a name attribute on every field (the old form had none)
 *   - the bot-field honeypot declared via data-netlify-honeypot
 *
 * Success is set only on a verified 2xx. Any non-2xx or network failure surfaces
 * the error state with a direct contact fallback.
 */

const FORM_NAME = "technical-package-request";

const investorTypes = [
  "Strategic mining company",
  "Mining / natural resources investor",
  "Family office",
  "Advisor",
  "Technical counterparty",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export function TechnicalPackageForm() {
  const [status, setStatus] = useState<Status>("idle");

  const inputClass =
    "w-full rounded-md border border-stone-200 bg-white px-4 py-2.5 text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:border-copper-400 focus:outline-none focus:ring-1 focus:ring-copper-400 transition-colors";
  const labelClass =
    "block mb-1.5 text-xs font-semibold uppercase tracking-wide text-charcoal-600";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return; // guard against double submission

    const form = event.currentTarget;
    setStatus("submitting");

    const data = new FormData(form);
    data.set("form-name", FORM_NAME);
    data.set("submitted-at", new Date().toISOString());
    data.set("source-page", window.location.pathname);
    data.set("referrer", document.referrer || "direct");

    const body = new URLSearchParams(
      Array.from(data.entries()).map(([k, v]) => [k, String(v)]),
    ).toString();

    try {
      const response = await fetch(window.location.pathname || "/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      // Only a genuine 2xx counts as delivered.
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-stone-100 bg-white p-8 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-copper-100 text-xl font-semibold text-copper-600">
          ✓
        </div>
        <h3 className="mt-4 text-lg font-semibold text-charcoal-900">Request received</h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
          Thank you for your interest in Kafwego. We will review your request and respond
          with the appropriate project materials or next diligence step.
        </p>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate={false}
      className="rounded-xl border border-stone-100 bg-white p-6 shadow-sm space-y-5 md:p-8"
    >
      {/* Netlify form identification — required in the static HTML. */}
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <input type="hidden" name="submitted-at" value="" />
      <input type="hidden" name="source-page" value="" />
      <input type="hidden" name="referrer" value="" />

      {/* Honeypot. Positioned off-screen rather than display:none so bots fill it. */}
      <p className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Do not fill this in
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="tp-name" className={labelClass}>
            Name <span className="text-copper-500">*</span>
          </label>
          <input
            id="tp-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="tp-email" className={labelClass}>
            Work email <span className="text-copper-500">*</span>
          </label>
          <input
            id="tp-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@organisation.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="tp-org" className={labelClass}>
            Organisation <span className="text-copper-500">*</span>
          </label>
          <input
            id="tp-org"
            name="organisation"
            type="text"
            required
            autoComplete="organization"
            placeholder="Company / fund / institution"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="tp-role" className={labelClass}>
            Role
          </label>
          <input
            id="tp-role"
            name="role"
            type="text"
            autoComplete="organization-title"
            placeholder="Your role"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="tp-type" className={labelClass}>
          Investor type
        </label>
        <select id="tp-type" name="investor-type" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select one
          </option>
          {investorTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="tp-interest" className={labelClass}>
          What would you like to review?{" "}
          <span className="font-normal normal-case tracking-normal text-charcoal-400">
            (optional)
          </span>
        </label>
        <textarea
          id="tp-interest"
          name="interest"
          rows={3}
          placeholder="Targets, geophysics, drill design, tenure — anything specific."
          className={inputClass}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-charcoal-700">
        <input
          type="checkbox"
          name="request-technical-package"
          value="yes"
          defaultChecked
          className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-stone-300 text-copper-500 focus:ring-copper-400"
        />
        Request the Kafwego Technical Package
      </label>

      {status === "error" && (
        <div role="alert" className="rounded-md border border-copper-200 bg-copper-50 p-4">
          <p className="text-sm font-medium text-copper-700">
            We couldn&rsquo;t submit your request
          </p>
          <p className="mt-1 text-sm leading-relaxed text-charcoal-600">
            Please try again, or contact the project team directly at{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="underline underline-offset-4"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center rounded-md bg-copper-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-copper-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request Access"}
      </button>
    </form>
  );
}
