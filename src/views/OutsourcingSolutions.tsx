import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/useLanguage";
import { siteImages } from "../data/siteContent";

type ServiceDetail = [
  category: string,
  title: string,
  description: string,
  responsibilities: string[],
  visualLabel: string,
  visualCaption: string,
];

export default function OutsourcingSolutions() {
  const { content, contact } = useLanguage();
  const page = content.outsourcing;
  const serviceDetails = page.serviceDetails as ServiceDetail[];

  return (
    <>
      <PageHero
        title={page.title}
        description={page.description}
        backgroundImage={siteImages.hero[3]}
      />

      <section
        className="scroll-mt-24 bg-white px-5 py-12 sm:px-8 sm:py-16"
        id="initial-section"
      >
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow={page.eyebrow}
            title={page.sectionTitle}
            description={page.sectionDescription}
          />
          <div className="space-y-5">
            {serviceDetails.map(
              (
                [
                  category,
                  title,
                  description,
                  responsibilities,
                  visualLabel,
                  visualCaption,
                ],
                index,
              ) => {
                const visual = (
                  <figure className="overflow-hidden rounded-xl border border-slate-100 bg-[#f8fbfd]">
                    <img
                      src={`/images/outsourcing-solutions/${index}.webp`}
                      alt={`${visualLabel}: ${visualCaption}`}
                      loading="lazy"
                      className=" w-full object-cover"
                    />
                  </figure>
                );

                return (
                  <article
                    key={title}
                    className="grid items-center gap-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_26px_rgba(15,23,42,.045)] sm:p-6 md:grid-cols-2 md:gap-8"
                  >
                    {index % 2 === 0 ? (
                      visual
                    ) : (
                      <div className="px-1 py-2 md:order-2">{visual}</div>
                    )}
                    <div
                      className={`px-1 py-2 sm:px-2 ${index % 2 === 1 ? "md:order-1" : ""}`}
                    >
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-ess">
                        {page.serviceLabel} {String(index + 1).padStart(2, "0")}{" "}
                        · {category}
                      </p>
                      <h2 className="text-lg font-bold tracking-tight text-slate-900">
                        {title}
                      </h2>
                      <p className="mt-2 text-xs leading-5 text-slate-600">
                        <strong className="text-slate-800">
                          {page.descriptionLabel}:
                        </strong>{" "}
                        {description}
                      </p>
                      <div className="mt-3 rounded-lg bg-[#f8fafc] p-4">
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-700">
                          {page.responsibilitiesLabel}
                        </p>
                        <ul className="space-y-1.5">
                          {responsibilities.map((responsibility) => (
                            <li
                              key={responsibility}
                              className="flex items-start gap-2 text-[10px] leading-4 text-slate-600"
                            >
                              <CheckCircle2
                                size={12}
                                className="mt-0.5 shrink-0 text-ess"
                              />
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#101a30] px-5 py-12 text-center text-white sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            {page.ctaTitle}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {page.ctaDescription}
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={contact.externalLinks.bookingURL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ess px-5 py-3 text-xs font-semibold text-white transition hover:bg-sky-700"
            >
              {page.ctaButton}
              <ArrowRight size={15} />
            </a>
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent(page.ctaSecondary)}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-500 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/10"
            >
              {page.ctaSecondary}
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
