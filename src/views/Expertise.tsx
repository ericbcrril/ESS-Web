import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Globe2,
  Lightbulb,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  UsersRound,
  Workflow,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { siteImages } from '../data/siteContent'
import { useLanguage } from '../context/useLanguage'

const specialtyIcons = [Search, Globe2, UsersRound]
const reasonIcons = [BadgeCheck, Target, Sparkles]
const serviceIcons = [BriefcaseBusiness, Clock3, Workflow]
const engagementIcons = [UsersRound, Zap, Target, TrendingDown, Lightbulb, Workflow, ShieldCheck]
const savingsIcons = [TrendingDown, Clock3, BadgeCheck, UsersRound, Target, ShieldCheck]

export default function Expertise() {
  const { content, contact } = useLanguage()
  const page = content.expertise

  return (
    <>
      <PageHero
        title={page.title}
        description={page.description}
        backgroundImage={siteImages.hero[2]}
      />

      <section className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20" id="initial-section">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading eyebrow={page.eyebrow} title={page.sectionTitle} />
          <div className="grid gap-5 md:grid-cols-3">
            {page.specialties.map(([title, description], index) => {
              const Icon = specialtyIcons[index]
              return <FeatureCard key={title} icon={Icon} title={title} description={description} />
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading eyebrow={page.whyEyebrow} title={page.whyTitle} />
          <div className="grid gap-5 md:grid-cols-3">
            {page.benefits.map(([title, description], index) => {
              const Icon = reasonIcons[index]
              return (
                <article key={title} className="rounded-xl border border-slate-100 bg-white p-6">
                  <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-ess">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow={page.servicesEyebrow}
            title={page.servicesTitle}
            description={page.servicesDescription}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {page.services.map(([title, description], index) => {
              const Icon = serviceIcons[index]
              return (
                <article key={title} className="rounded-xl border border-slate-100 bg-white p-6 shadow-[0_8px_26px_rgba(15,23,42,.045)]">
                  <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-ess">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{description}</p>
                </article>
              )
            })}
          </div>
          <Link to="/contact" className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-lg bg-[#142039] px-5 py-3 text-center text-xs font-semibold text-white transition hover:bg-slate-800">
            {page.servicesCta}<ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <section className="bg-[#f5f7f9] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading eyebrow={page.engagementEyebrow} title={page.engagementTitle} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.engagementBenefits.map(([label, title, description], index) => {
              const Icon = engagementIcons[index]
              return (
                <article key={title} className="rounded-xl border border-slate-100 bg-white p-5">
                  <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-ess">
                    <span className="h-1.5 w-1.5 rounded-full bg-ess" />{label}
                  </p>
                  <h3 className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Icon size={14} className="shrink-0 text-ess" />{title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-5 text-slate-600">{description}</p>
                </article>
              )
            })}
          </div>
          <figure className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-xl border border-slate-100 bg-white">
            <img src="/images/our-expertise/0.webp" alt={page.engagementImageLabel} loading="lazy" className="h-48 w-full object-cover sm:h-64" />
            <figcaption className="px-5 py-3 text-center text-xs text-slate-500">{page.engagementImageCaption}</figcaption>
          </figure>
          <p className="mx-auto mt-5 max-w-3xl rounded-lg border border-slate-100 bg-white px-5 py-4 text-center text-xs leading-5 text-slate-600">
            {page.engagementNote}
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading eyebrow={page.savingsEyebrow} title={page.savingsTitle} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.savingsBenefits.map(([title, description], index) => {
              const Icon = savingsIcons[index]
              return (
                <article key={title} className="rounded-xl border border-slate-100 bg-[#f8fafc] p-5">
                  <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-ess shadow-sm"><Icon size={16} /></span>
                  <h3 className="text-xs font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-[11px] leading-5 text-slate-600">{description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7f9] px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1000px] rounded-2xl border border-slate-100 bg-white p-6 sm:p-10">
          <SectionHeading eyebrow={page.capabilitiesEyebrow} title={page.capabilitiesTitle} />
          <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
            {page.capabilities.map((item) => (
              <li key={item} className="flex items-start gap-3 text-xs leading-5 text-slate-700">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-ess" />{item}
              </li>
            ))}
          </ul>
          <Link to="/outsourcing-solutions" className="mx-auto mt-7 flex w-fit items-center gap-2 rounded-lg bg-ess px-5 py-3 text-xs font-bold text-white transition hover:bg-sky-700">
            {page.capabilitiesCta}<ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <section className="bg-[#142039] px-5 py-12 text-center text-white sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{page.ctaTitle}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">{page.ctaDescription}</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={contact.externalLinks.bookingURL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-ess px-5 py-3 text-xs font-semibold text-white transition hover:bg-sky-700">
              {page.ctaButton}<ArrowRight size={15} />
            </a>
            <Link to="/outsourcing-solutions" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-500 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/10">
              {page.ctaSecondary}<ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
