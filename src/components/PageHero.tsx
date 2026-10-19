import { ArrowRight, Building2, BriefcaseBusiness } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { useNavigationFilter } from '../context/NavigationFilterContext'

type PageHeroProps = {
  eyebrow?: string
  title: string
  description: string
  primaryAction?: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
  backgroundImage?: string
}

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
}: PageHeroProps) {
  const { content } = useLanguage()
  const { setCareerLinksOnly } = useNavigationFilter()
  const navigate = useNavigate()
  const displayedEyebrow = eyebrow ?? content.hero.eyebrow
  const displayedPrimaryAction = primaryAction ?? { label: content.hero.primary, href: '#initial-section' }
  const displayedSecondaryAction = secondaryAction ?? { label: content.hero.secondary, href: '/outsourcing-solutions' }

  const scrollToHash = (href: string) => {
    if (!href.startsWith('#')) return
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#111a2c] pb-14 pt-28 text-white sm:min-h-[700px] lg:min-h-[670px] lg:pb-16"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(10, 20, 37, .94) 0%, rgba(10, 20, 37, .78) 48%, rgba(10, 20, 37, .58) 100%), url("${backgroundImage}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#101a2c]/15 via-transparent to-[#101a2c]/40" />
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:gap-14">
        <div className="max-w-[670px]">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sky-300">{displayedEyebrow}</p>
          <h1 className="max-w-[680px] text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[58px]">
            {title}
          </h1>
          <p className="mt-5 max-w-[590px] text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to={displayedPrimaryAction.href} onClick={() => scrollToHash(displayedPrimaryAction.href)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#1e7898] transition hover:bg-sky-50">
              {displayedPrimaryAction.label}<ArrowRight size={16} />
            </Link>
            <Link to={displayedSecondaryAction.href} onClick={() => scrollToHash(displayedSecondaryAction.href)} className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              {displayedSecondaryAction.label}
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[430px] rounded-2xl bg-white p-6 text-center text-slate-900 shadow-[0_24px_70px_rgba(0,0,0,.32)] sm:p-8">
          <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-ess">
            <Building2 size={22} />
          </span>
          <h2 className="text-2xl font-bold tracking-tight">{content.hero.welcome}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {content.hero.welcomeText}
          </p>
          <Link to="/contact" className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-ess px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
            <Building2 size={17} /> {content.hero.company}
          </Link>
          <button type="button" onClick={() => {
            setCareerLinksOnly(true)
            navigate('/careers#candidate-application')
          }} className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50">
            <BriefcaseBusiness size={17} /> {content.hero.job}
          </button>
        </div>
      </div>
    </section>
  )
}
