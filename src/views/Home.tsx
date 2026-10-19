import {
  Activity,
  BadgeCheck,
  BarChart3,
  BookOpen,
  MessagesSquare,
  Sparkles,
  Target,
  UsersRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { siteImages } from '../data/siteContent'
import { useLanguage } from '../context/useLanguage'

const programIcons = [UsersRound, BadgeCheck, MessagesSquare, BarChart3, Target, Activity, Sparkles, BookOpen]

export default function Home() {
  const { content, language } = useLanguage()
  const page = content.home

  return (
    <>
      <PageHero
        title={page.title}
        description={page.description}
        backgroundImage={siteImages.hero[0]}
      />

      <section className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-16" id="initial-section">
        <div className="mx-auto grid max-w-[1200px] items-center gap-9 md:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading
              eyebrow={page.welcomeEyebrow}
              title={page.welcomeTitle}
              description={page.welcomeDescription}
              align="left"
            />
            <p className="-mt-2 max-w-xl text-sm leading-6 text-slate-600">
              {page.welcomeExtra}
            </p>
            <Link to="/about-us" className="mt-5 inline-flex items-center gap-2 rounded-lg border border-ess px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-ess transition hover:bg-sky-50">
              {page.learnMore}<span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl bg-[#edf4f8] p-6 text-center sm:min-h-72">
            <img src={siteImages.home[0]} alt={page.imageAlts[0]} loading="lazy" className="h-48 w-full rounded-xl object-cover sm:h-64" />
            <p className="sr-only">{page.workforceImageLabel}</p>
          </div>
        </div>
      </section>

      <section id="custom-program" className="scroll-mt-24 bg-[#f5f7f9] px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1040px]">
          <SectionHeading eyebrow={page.programEyebrow} title={page.programTitle} description={page.programDescription} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.programFeatures.map(([title, description], index) => {
              const Icon = programIcons[index]
              return (
                <article key={title} className={`min-h-28 rounded-xl border p-5 transition hover:-translate-y-0.5 hover:shadow-md ${index === 4 ? 'border-ess bg-ess text-white' : 'border-slate-100 bg-white text-slate-900'}`}>
                  <span className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg ${index === 4 ? 'bg-white/15 text-white' : 'bg-sky-50 text-ess'}`}><Icon size={17} /></span>
                  <h3 className="text-xs font-bold">{title}</h3>
                  <p className={`mt-1.5 text-[10px] leading-4 ${index === 4 ? 'text-sky-50' : 'text-slate-600'}`}>{description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12" aria-label={page.galleryLabel}>
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
          <img src={siteImages.home[1]} alt={page.imageAlts[4]} loading="lazy" className="col-span-2 row-span-2 h-full min-h-[260px] w-full rounded-xl object-cover md:min-h-[380px]" />
          <img src={siteImages.home[2]} alt={page.imageAlts[1]} loading="lazy" className="col-span-2 h-40 w-full rounded-xl object-cover sm:h-52" />
          <img src={siteImages.home[3]} alt={page.imageAlts[2]} loading="lazy" className="h-32 w-full rounded-xl object-cover sm:h-40" />
          <img src={siteImages.home[4]} alt={page.imageAlts[3]} loading="lazy" className="h-32 w-full rounded-xl object-cover sm:h-40" />
        </div>
      </section>

      <section id="client-stories" className="scroll-mt-24 bg-[#f1f3f5] px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 max-w-2xl">
            <SectionHeading eyebrow={page.storiesEyebrow} title={page.storiesTitle} description={page.storiesDescription} align="left" />
            <p className="text-sm leading-6 text-slate-600">{page.storiesExtra}</p>
          </div>
          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 lg:grid lg:grid-cols-3 lg:overflow-visible"
            aria-label={page.storiesTitle}
            aria-roledescription="carousel"
          >
            {[
              { quote: page.quote, attribution: page.quoteAttribution, isExample: false },
              { quote: page.quote2, attribution: page.quoteAttribution2, isExample: false },
              { quote: page.quote3, attribution: page.quoteAttribution3, isExample: false },
              
            ].map(({ quote, attribution, isExample }, index) => (
              <blockquote
                key={index}
                className="flex min-w-[88%] snap-start flex-col rounded-2xl bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,.08)] sm:min-w-[calc(50%-0.5rem)] lg:min-w-0"
                aria-roledescription="slide"
              >
                {isExample ? (
                  <p className="mb-3 text-center text-[10px] font-bold uppercase tracking-wide text-amber-700">
                    {language === 'es' ? 'Reseña de ejemplo — reemplazar antes de publicar' : 'Example review — replace before publishing'}
                  </p>
                ) : (
                  <div aria-label={page.ratingLabel} className="mb-3 text-center tracking-[0.2em] text-amber-400">★★★★★</div>
                )}
                <p className="flex-1 text-center text-sm italic leading-7 text-slate-700">{quote}</p>
                <footer className="mt-5 border-t border-slate-100 pt-4 text-center text-xs font-bold text-slate-900">{attribution}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
