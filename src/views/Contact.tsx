import { type FormEvent } from "react";
import {
  CalendarDays,
  Clock3,
  Headset,
  Mail,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { siteImages } from "../data/siteContent";
import { useLanguage } from "../context/useLanguage";
import { useMailtoSubmission } from "../hooks/useMailtoSubmission";

const advantageIcons = [Zap, MessageCircle, ShieldCheck];

export default function Contact() {
  const { content, contact, language } = useLanguage();
  const page = content.contact;
  const { status, submit } = useMailtoSubmission();
  const contactMethods = [
    {
      icon: Mail,
      label: contact.emailLabel,
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: contact.phoneLabel,
      value: contact.phone,
      href: `tel:${contact.phoneLink}`,
    },
    {
      icon: MessageCircle,
      label: contact.whatsappLabel,
      value: contact.whatsapp,
      href: `https://wa.me/${contact.whatsappLink}`,
    },
  ];

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const body = [
      `${page.name}: ${formData.get("Full name")}`,
      `${page.email}: ${formData.get("Email")}`,
      `${page.company}: ${formData.get("Company")}`,
      `${page.phone}: ${formData.get("Phone")}`,
      `${page.service}: ${formData.get("Service of interest")}`,
      "",
      `${page.message}: ${formData.get("Message")}`,
      "",
      `${language === "es" ? "Consentimiento de privacidad" : "Privacy consent"}: ${formData.get("Privacy consent") ? (language === "es" ? "Sí" : "Yes") : "No"}`,
    ].join("\n");
    const subject = encodeURIComponent(page.howHelp);
    submit(
      `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(body)}`,
    );
  };

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        backgroundImage={siteImages.hero[4]}
      />

      <section
        className="scroll-mt-24 bg-[#f5f7f9] px-5 py-10 sm:px-8 sm:py-14"
        id="initial-section"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[.85fr_1.15fr]">
            <aside className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,.04)] sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ess">
                {page.direct}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                {page.center}
              </h2>
              <p className="mt-2 border-b border-slate-100 pb-5 text-xs leading-5 text-slate-600">
                {page.connect}
              </p>
              <ul className="mt-5 space-y-5">
                {contactMethods.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-ess">
                      <Icon size={17} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                        {label}
                      </span>
                      <a
                        href={href}
                        target={
                          href.startsWith("https://") ? "_blank" : undefined
                        }
                        rel={
                          href.startsWith("https://") ? "noreferrer" : undefined
                        }
                        className="mt-1 block break-all text-xs font-semibold text-slate-800 hover:text-ess"
                      >
                        {value}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-lg border border-slate-100 bg-[#f8fafc] px-4 py-3 text-[10px] leading-5 text-slate-600">
                {page.agreementPrompt}{" "}
                <a
                  href={contact.externalLinks.serviceAgreementDetails}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-ess underline underline-offset-2"
                >
                  {page.agreementLink}
                </a>
              </div>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-ess px-4 py-2 text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-sky-700"
                >
                  <Mail size={14} />
                  {page.emailButton}
                </a>
                <a
                  href={contact.externalLinks.bookingURL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-ess px-4 py-2 text-[10px] font-bold uppercase tracking-wide text-ess transition hover:bg-sky-50"
                >
                  <CalendarDays size={14} />
                  {page.bookCall}
                </a>
              </div>
            </aside>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,.04)] sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ess">
                {page.send}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                {page.howHelp}
              </h2>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                {page.formIntro}
              </p>
              <form onSubmit={handleContactSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-[10px] font-semibold uppercase tracking-wide text-slate-700">
                    {page.name}
                    <input
                      name="Full name"
                      autoComplete="name"
                      required
                      className="mt-1.5 w-full rounded-md border border-slate-200 px-3 py-2.5 text-xs font-normal normal-case tracking-normal outline-none transition focus:border-ess focus:ring-2 focus:ring-sky-100"
                      placeholder={page.namePlaceholder}
                    />
                  </label>
                  <label className="block text-[10px] font-semibold uppercase tracking-wide text-slate-700">
                    {page.email}
                    <input
                      name="Email"
                      type="email"
                      autoComplete="email"
                      required
                      className="mt-1.5 w-full rounded-md border border-slate-200 px-3 py-2.5 text-xs font-normal normal-case tracking-normal outline-none transition focus:border-ess focus:ring-2 focus:ring-sky-100"
                      placeholder={page.emailPlaceholder}
                    />
                  </label>
                  <label className="block text-[10px] font-semibold uppercase tracking-wide text-slate-700">
                    {page.company}
                    <input
                      name="Company"
                      autoComplete="organization"
                      className="mt-1.5 w-full rounded-md border border-slate-200 px-3 py-2.5 text-xs font-normal normal-case tracking-normal outline-none transition focus:border-ess focus:ring-2 focus:ring-sky-100"
                      placeholder={page.companyPlaceholder}
                    />
                  </label>
                  <label className="block text-[10px] font-semibold uppercase tracking-wide text-slate-700">
                    {page.phone}
                    <input
                      name="Phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-1.5 w-full rounded-md border border-slate-200 px-3 py-2.5 text-xs font-normal normal-case tracking-normal outline-none transition focus:border-ess focus:ring-2 focus:ring-sky-100"
                      placeholder={page.phonePlaceholder}
                    />
                  </label>
                </div>
                <label className="block text-[10px] font-semibold uppercase tracking-wide text-slate-700">
                  {page.service}
                  <select
                    name="Service of interest"
                    defaultValue=""
                    required
                    className="mt-1.5 w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs font-normal normal-case tracking-normal text-slate-700 outline-none transition focus:border-ess focus:ring-2 focus:ring-sky-100"
                  >
                    <option value="" disabled>
                      {page.select}
                    </option>
                    {page.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className="block text-[10px] font-semibold uppercase tracking-wide text-slate-700">
                  {page.message}
                  <textarea
                    name="Message"
                    required
                    rows={4}
                    className="mt-1.5 w-full resize-y rounded-md border border-slate-200 px-3 py-2.5 text-xs font-normal normal-case tracking-normal outline-none transition focus:border-ess focus:ring-2 focus:ring-sky-100"
                    placeholder={page.messagePlaceholder}
                  />
                </label>
                <div className="flex items-start gap-2 text-[10px] leading-5 text-slate-500">
                  <input
                    id="contact-consent"
                    name="Privacy consent"
                    type="checkbox"
                    required
                    className="mt-1 shrink-0 accent-[#2388a9]"
                  />
                  <label htmlFor="contact-consent">
                    {page.consentPrefix}{" "}
                    <Link
                      to="/privacy-policy"
                      className="font-semibold text-ess underline underline-offset-2"
                    >
                      {page.privacyLink}
                    </Link>{" "}
                    {page.consentSuffix}
                  </label>
                </div>
                <details
                  id="privacy-notice"
                  className="rounded-lg bg-[#f8fafc] px-4 py-3 text-[10px] leading-5 text-slate-600"
                >
                  <summary className="cursor-pointer font-semibold text-slate-700">
                    {page.privacyDetailsTitle}
                  </summary>
                  <p className="mt-2">{page.privacyNotice}</p>
                </details>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-lg bg-ess px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-sky-700 disabled:cursor-wait disabled:opacity-60"
                >
                  <Send size={14} />{" "}
                  {status === "sending"
                    ? language === "es"
                      ? "Preparando…"
                      : "Preparing…"
                    : page.submit}
                </button>
                {status !== "idle" && (
                  <p
                    role={status === "error" ? "alert" : "status"}
                    aria-live="polite"
                    className={`text-[10px] leading-5 ${status === "error" ? "text-red-600" : "text-slate-500"}`}
                  >
                    {status === "sending"
                      ? language === "es"
                        ? "Preparando un borrador de correo…"
                        : "Preparing an email draft…"
                      : status === "success"
                        ? language === "es"
                          ? "Borrador listo. Revisa y envía el mensaje desde tu aplicación de correo."
                          : "Draft ready. Review and send the message from your email app."
                        : language === "es"
                          ? "No se pudo iniciar el correo. Escríbenos directamente a "
                          : "Could not open your email app. Contact us directly at "}
                    {status === "error" && (
                      <a className="underline" href={`mailto:${contact.email}`}>
                        {contact.email}
                      </a>
                    )}
                  </p>
                )}
                <p className="text-[10px] leading-5 text-slate-500">
                  {page.formNote}
                </p>
              </form>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {page.advantages.map(([title, description], index) => {
              const Icon = advantageIcons[index];
              return (
                <article
                  key={title}
                  className="rounded-xl border border-slate-100 bg-white p-5"
                >
                  <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-ess">
                    <Icon size={16} />
                  </span>
                  <h3 className="text-xs font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-[11px] leading-5 text-slate-600">
                    {description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#1c3b50] px-5 py-10 text-white sm:px-8 sm:py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              {page.ctaTitle}
            </h2>
            <p className="mt-1 text-xs leading-5 text-slate-200">
              {page.ctaDescription}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href={contact.externalLinks.bookingURL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ess px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-sky-700"
            >
              <Clock3 size={14} />
              {page.ctaButton}
            </a>
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent(page.quoteSubject)}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              <Headset size={14} />
              {page.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
