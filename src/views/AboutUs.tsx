import {
  ArrowRight,
  BadgeCheck,
  ExternalLink,
  HeartHandshake,
  Play,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/useLanguage";
import { siteImages } from '../data/siteContent'

const valueTags = [
  ["Cohesive collaboration", "Dedicated mentorship"],
  ["Professional ethics", "Strategic guidance"],
  ["Creative empowerment", "Talent evolution"],
  ["Complete transparency", "Enduring rapport"],
  ["High-standard deliverables", "Elite quality assurance"],
];

export default function AboutUs() {
  const { content, contact } = useLanguage();
  const page = content.about;

  return (
    <>
      <PageHero
        title={page.title}
        description={page.description}
        backgroundImage={siteImages.hero[1]}
        primaryAction={{ label: page.primaryAction, href: "#initial-section" }}
        secondaryAction={{
          label: page.secondaryAction,
          href: "/outsourcing-solutions",
        }}
      />

      <section
        className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-16"
        id="initial-section"
      >
        <div className="mx-auto grid max-w-[1100px] items-start gap-6 md:grid-cols-2">
          <article
            id="vision"
            className="scroll-mt-24 relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-[#f8fbfd] to-[#f1f7fa] p-6 sm:p-8"
          >
            <span className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-sky-100/50" />
            <span className="relative mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-ess">
              <Target size={19} />
            </span>
            <p className="relative text-[10px] font-bold uppercase tracking-[0.14em] text-ess">
              {page.visionEyebrow}
            </p>
            <h2 className="relative mt-1 text-2xl font-bold text-slate-900">
              {page.visionTitle}
            </h2>
            <p className="relative mt-3 text-sm italic leading-6 text-slate-600">
              {page.vision}
            </p>
            <p className="relative mt-4 border-t border-slate-200 pt-3 text-[10px] font-semibold text-slate-500">
              <span className="mr-2 text-ess">●</span>
              {page.visionFooter}
            </p>
          </article>
          <article
            id="mission"
            className="scroll-mt-24 relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-[#f8fbfd] to-[#f1f7fa] p-6 sm:p-8 md:mt-8"
          >
            <span className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-sky-100/50" />
            <span className="relative mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-ess">
              <HeartHandshake size={19} />
            </span>
            <p className="relative text-[10px] font-bold uppercase tracking-[0.14em] text-ess">
              {page.missionEyebrow}
            </p>
            <h2 className="relative mt-1 text-2xl font-bold text-slate-900">
              {page.missionTitle}
            </h2>
            <p className="relative mt-3 text-sm italic leading-6 text-slate-600">
              {page.mission}
            </p>
            <p className="relative mt-4 border-t border-slate-200 pt-3 text-[10px] font-semibold text-slate-500">
              <span className="mr-2 text-ess">●</span>
              {page.missionFooter}
            </p>
          </article>
        </div>
      </section>

      <section
        id="our-story"
        className="scroll-mt-24 bg-[#f5f7f9] px-5 py-14 sm:px-8 sm:py-16"
      >
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading
            eyebrow={page.storyEyebrow}
            title={page.storyTitle}
          />
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900">
                {page.storySubtitle}
              </h3>
              {page.storyParagraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm leading-7 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900">
                {page.turningPointTitle}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {page.turningPointDescription}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {page.turningPointApproach}
              </p>
              <ul className="mt-5 space-y-3">
                {page.turningPointOutcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ess"
                    />
                    {outcome}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm font-semibold leading-6 text-slate-800">
                {page.turningPointVision}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="core-values"
        className="scroll-mt-24 bg-[#f5f7f9] px-5 py-14 sm:px-8 sm:py-16"
      >
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading
            eyebrow={page.valuesEyebrow}
            title={page.valuesTitle}
            description={page.valuesDescription}
          />
          <div className="space-y-5">
            {page.values.map(([title, description], index) => {
              const tags = valueTags[index];
              const imageFirst = index % 2 === 0;
              const visual = (
                <figure>
                  <img
                    src={`/images/about-us/${index}.webp`}
                    alt={page.valueVisualLabels[index]}
                    loading="lazy"
                    className="h-44 w-full object-cover sm:h-52"
                    style={{ objectPosition: "center 40%" }}
                  />
                  <figcaption className="px-5 py-3 text-center text-[9px] font-medium uppercase tracking-wide text-slate-500">
                    {page.valueVisualLabels[index]}
                  </figcaption>
                </figure>
              );

              return (
                <article
                  key={title}
                  className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-2"
                >
                  {imageFirst && visual}
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <h3 className="flex items-center gap-2 text-base font-bold text-slate-900">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-sky-50 text-xs font-bold text-ess">
                        {title.charAt(0)}
                      </span>
                      {title}
                    </h3>
                    <p className="mt-3 text-xs leading-5 text-slate-600">
                      {description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full bg-[#f1f6fa] px-2.5 py-1 text-[9px] font-medium text-slate-600"
                        >
                          <BadgeCheck size={11} className="text-ess" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {!imageFirst && visual}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="founder"
        className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-16"
      >
        <div className="mx-auto grid max-w-[1100px] items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ess">
              {page.founderEyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {page.founderTitle}
            </h2>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-ess">
              {page.founderRole}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              {page.founderDescription}
            </p>
            <blockquote className="mt-5 border-l-2 border-ess pl-4 text-sm italic leading-7 text-slate-600">
              {page.founderQuote}
              <footer className="mt-2 text-xs font-semibold not-italic text-slate-800">
                {page.founderQuoteAttribution}
              </footer>
            </blockquote>
          </div>
          <figure className="aspect-[4/3] min-h-64 overflow-hidden rounded-2xl bg-slate-100">
            <img
              src="/images/about-us/founder.jpeg"
              alt={page.founderTitle}
              loading="lazy"
              className="h-full min-h-64 w-full object-cover object-[center_30%]"
            />
          </figure>
        </div>
      </section>

      <section
        id="our-mission"
        className="scroll-mt-24 bg-[#142039] px-5 py-14 text-white sm:px-8 sm:py-16"
      >
        <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-sky-300">
              {page.storyMissionEyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {page.storyMissionTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {page.storyMissionDescription}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {page.storyMissionApproach}
            </p>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-sky-300">
              {page.storyMissionPromiseEyebrow}
            </p>
            <h3 className="mt-3 text-xl font-bold text-white">
              {page.storyMissionPromiseTitle}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {page.storyMissionPromise}
            </p>
          </div>
        </div>
      </section>

      <section
        id="core-focus-areas"
        className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-16"
      >
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading
            eyebrow={page.focusEyebrow}
            title={page.focusTitle}
            description={page.focusDescription}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {page.focusAreas.map(([title, description], index) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-xs font-bold text-ess">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-xs font-bold uppercase tracking-[0.12em] text-ess">
            {page.focusClosing}
          </p>
        </div>
      </section>

      <section
        id="partnership-video"
        className="scroll-mt-24 bg-[#f5f7f9] px-5 py-14 sm:px-8 sm:py-16"
      >
        <div className="mx-auto grid max-w-[1100px] items-center gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-12">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ess">
              {page.partnershipEyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {page.partnershipTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {page.partnershipDescription}
            </p>
          </div>
          <div>
            <a
              href="https://app.heygen.com/videos/how-elite-special-solutions-works-25bf5e2639a0469ea09c65b13c5e8807"
              target="_blank"
              rel="noreferrer"
              aria-label={`${page.partnershipWatch}: ${page.partnershipTitle}`}
              className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#142039] via-[#1c3548] to-[#2388a9] text-white shadow-lg transition hover:shadow-xl"
            >
              <span
                aria-hidden="true"
                className="absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/10"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full border border-white/10"
              />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-ess transition group-hover:scale-105">
                <Play size={22} fill="currentColor" className="ml-1" />
              </span>
              <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-left">
                <span className="text-xs font-semibold sm:text-sm">
                  {page.partnershipTitle}
                </span>
                <ExternalLink size={16} className="shrink-0" />
              </span>
            </a>
            <p className="mt-3 text-xs text-slate-500">
              {page.partnershipOpenNote}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1c3548] px-5 py-12 text-center text-white sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {page.ctaTitle}
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {page.ctaDescription}
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/our-expertise"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ess px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-sky-700"
            >
              {page.ctaPrimary}
              <ArrowRight size={14} />
            </Link>
            <a
              href={contact.externalLinks.bookingURL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/10"
            >
              {page.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
