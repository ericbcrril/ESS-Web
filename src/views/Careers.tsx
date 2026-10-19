import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Globe2,
  Send,
  TrendingUp,
  UploadCloud,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/useLanguage";
import { siteImages } from "../data/siteContent";

const benefitIcons = [Globe2, BookOpen, Clock3, TrendingUp];

export default function Careers() {
  const { content, contact, language } = useLanguage();
  const page = content.careers;
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"
  const [resumeName, setResumeName] = useState("");

  const handleApplicationSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {

      const response = await fetch(
        `https://formsubmit.co/ajax/${contact.email}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      );

      if (response.ok) {
        setStatus("success");
        form.reset(); // Limpia los campos del formulario
        setResumeName("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error al enviar la postulación:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        title={page.title}
        description={page.description}
        backgroundImage={siteImages.hero[5]}
        primaryAction={{ label: page.primary, href: "#candidate-application" }}
        secondaryAction={{
          label: page.processLink,
          href: "#recruitment-process",
        }}
      />

      <section
        id="recruitment-process"
        className="scroll-mt-24 bg-[#f5f7f9] px-5 py-14 sm:px-8 sm:py-16"
      >
        <div
          className="mx-auto max-w-[1100px] scroll-mt-24"
          id="initial-section"
        >
          <SectionHeading
            eyebrow={page.eyebrow}
            title={page.processTitle}
            description={page.processDescription}
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.steps.map((step, index) => (
              <li
                key={step}
                className={`rounded-xl border p-5 ${index === page.steps.length - 1 ? "border-ess bg-ess text-white sm:col-span-2 lg:col-span-3" : "border-slate-100 bg-white text-slate-900"}`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-md text-xs font-bold ${index === page.steps.length - 1 ? "bg-white/15 text-white" : "bg-sky-100 text-ess"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`rounded-sm px-2 py-1 text-[9px] font-bold uppercase tracking-wide ${index === page.steps.length - 1 ? "bg-white/15 text-white" : "bg-slate-100 text-slate-500"}`}
                  >
                    {page.stepLabels[index]}
                  </span>
                  {index === 0 && (
                    <span className="ml-auto text-[9px] font-bold uppercase tracking-wide text-ess">
                      {page.firstStepLabel}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-sm font-bold">{step}</h3>
                <p
                  className={`mt-2 text-xs leading-5 ${index === page.steps.length - 1 ? "text-sky-50" : "text-slate-600"}`}
                >
                  {page.stepDescriptions[index]}
                </p>
                <p
                  className={`mt-3 border-t pt-3 text-[10px] leading-4 ${index === page.steps.length - 1 ? "border-white/20 text-sky-100" : "border-slate-100 text-ess"}`}
                >
                  {page.stepFooters[index]}
                </p>
                {index === page.steps.length - 1 && (
                  <a
                    href="#candidate-application"
                    className="mt-4 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-wide text-ess"
                  >
                    {page.apply}
                    <ArrowRight size={13} />
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading
            eyebrow={page.growEyebrow}
            title={page.growTitle}
            description={page.growDescription}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.benefits.map(([title, description], index) => {
              const Icon = benefitIcons[index];
              return (
                <article
                  key={title}
                  className="rounded-xl border border-slate-100 bg-[#f8fafc] p-5 text-center"
                >
                  <span className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-ess">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-xs font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-[10px] leading-5 text-slate-600">
                    {description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="candidate-application"
        className="scroll-mt-24 bg-[#f5f7f9] px-5 py-14 sm:px-8 sm:py-16"
      >
        <div className="mx-auto max-w-[1000px]">
          <SectionHeading
            title={page.jobTitle}
            description={page.jobDescription}
          />
          <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#application-form"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ess px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-sky-700"
            >
              {page.applyNow}
              <ArrowRight size={14} />
            </a>
            <a
              href="#application-form"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-slate-700 transition hover:border-ess hover:text-ess"
            >
              {page.viewPositions}
            </a>
          </div>

          <div
            id="application-form"
            className="mx-auto max-w-[760px] scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,.04)] sm:p-8"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ess">
              {page.applicationEyebrow}
            </p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              {page.applicationTitle}
            </h3>
            <p className="mt-1 border-b border-slate-100 pb-4 text-xs leading-5 text-slate-600">
              {page.applicationDescription}
            </p>

            <form onSubmit={handleApplicationSubmit} className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-[10px] font-semibold uppercase tracking-wide text-slate-700">
                  {page.fullName}
                  <input
                    name="Full name"
                    autoComplete="name"
                    required
                    className="mt-1.5 w-full rounded-md border border-slate-200 px-3 py-2.5 text-xs font-normal normal-case tracking-normal outline-none transition focus:border-ess focus:ring-2 focus:ring-sky-100"
                    placeholder={page.fullNamePlaceholder}
                  />
                </label>
                <label className="block text-[10px] font-semibold uppercase tracking-wide text-slate-700">
                  {page.personalEmail}
                  <input
                    name="Email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-1.5 w-full rounded-md border border-slate-200 px-3 py-2.5 text-xs font-normal normal-case tracking-normal outline-none transition focus:border-ess focus:ring-2 focus:ring-sky-100"
                    placeholder={page.personalEmailPlaceholder}
                  />
                </label>
                <label className="block text-[10px] font-semibold uppercase tracking-wide text-slate-700">
                  {page.phoneWhatsapp}
                  <input
                    name="Phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="mt-1.5 w-full rounded-md border border-slate-200 px-3 py-2.5 text-xs font-normal normal-case tracking-normal outline-none transition focus:border-ess focus:ring-2 focus:ring-sky-100"
                    placeholder={page.phonePlaceholder}
                  />
                </label>
                <label className="block text-[10px] font-semibold uppercase tracking-wide text-slate-700">
                  {page.desiredPosition}
                  <select
                    name="Position"
                    defaultValue=""
                    required
                    className="mt-1.5 w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs font-normal normal-case tracking-normal text-slate-700 outline-none transition focus:border-ess focus:ring-2 focus:ring-sky-100"
                  >
                    <option value="" disabled>
                      {page.selectPosition}
                    </option>
                    {page.positionOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="block text-[10px] font-semibold uppercase tracking-wide text-slate-700">
                {page.qualifications}
                <textarea
                  name="Experience"
                  required
                  rows={4}
                  className="mt-1.5 w-full resize-y rounded-md border border-slate-200 px-3 py-2.5 text-xs font-normal normal-case tracking-normal outline-none transition focus:border-ess focus:ring-2 focus:ring-sky-100"
                  placeholder={page.qualificationsPlaceholder}
                />
              </label>
              <div>
                <label
                  htmlFor="resume-upload"
                  className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide text-slate-700"
                >
                  {page.resumeLabel}
                </label>
                <label
                  htmlFor="resume-upload"
                  className="flex min-h-24 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-[#f8fafc] px-4 py-5 text-center transition hover:border-ess hover:bg-sky-50"
                >
                  <UploadCloud size={20} className="mb-2 text-ess" />
                  <span className="text-xs font-semibold text-ess">
                    {resumeName || page.uploadPrompt}
                  </span>
                  <span className="mt-1 text-[10px] text-slate-500">
                    {page.fileTypes}
                  </span>
                  <input
                    id="resume-upload"
                    name="Resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="sr-only"
                    onChange={(event) => {
                      const file = event.currentTarget.files?.[0];
                      setResumeName(file?.name ?? "");
                      event.currentTarget.setCustomValidity(
                        file && file.size > 10 * 1024 * 1024
                          ? page.fileTooLarge
                          : "",
                      );
                    }}
                  />
                </label>
                <p className="mt-2 text-[10px] leading-4 text-slate-500">
                  {page.resumeNote}
                </p>
              </div>
              <div className="flex items-start gap-2 text-[10px] leading-5 text-slate-500">
                <input
                  id="career-consent"
                  name="Privacy consent"
                  type="checkbox"
                  required
                  className="mt-1 shrink-0 accent-[#2388a9]"
                />
                <label htmlFor="career-consent">
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
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ess px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-sky-700 disabled:cursor-wait disabled:opacity-60"
              >
                <Send size={14} />
                {status === "sending"
                  ? language === "es"
                    ? "Enviando solicitud…"
                    : "Sending application…"
                  : page.submitApplication}
              </button>
              {status !== "idle" && (
                <p
                  role={status === "error" ? "alert" : "status"}
                  aria-live="polite"
                  className={`text-[10px] leading-5 ${status === "error" ? "text-red-600" : "text-emerald-600"}`}
                >
                  {status === "sending"
                    ? language === "es"
                      ? "Enviando solicitud y procesando archivo…"
                      : "Sending application and processing file…"
                    : status === "success"
                      ? language === "es"
                        ? "¡Solicitud enviada con éxito! Revisaremos tu perfil pronto."
                        : "Application submitted successfully! We will review your profile soon."
                      : language === "es"
                        ? "Ocurrió un error al enviar. Inténtalo nuevamente o escríbenos a "
                        : "Could not send application. Please try again or contact us at "}
                  {status === "error" && (
                    <a className="underline" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  )}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#111a2c] px-5 py-10 text-white sm:px-8 sm:py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h2 className="max-w-xl text-xl font-bold tracking-tight sm:text-2xl">
              {page.ctaTitle}
            </h2>
            <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-300">
              {page.ctaDescription}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href="#candidate-application"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ess px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-sky-700"
            >
              {page.ctaButton}
              <ArrowRight size={14} />
            </a>
            <a
              href={contact.externalLinks.bookingURL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              {page.talentCall}
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
