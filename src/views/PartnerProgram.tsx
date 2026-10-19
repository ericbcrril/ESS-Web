import { ArrowRight, FileText, Handshake } from 'lucide-react'
import { Link } from 'react-router-dom'
import partnerProgramContent from '../data/partnerProgram.json'
import { useLanguage } from '../context/useLanguage'

export default function PartnerProgram() {
  const { language, contact } = useLanguage()
  const page = partnerProgramContent[language]

  return (
    <>
      <header id="partner-top" className="bg-[#142039] px-5 pb-12 pt-32 text-white sm:px-8 sm:pb-16">
        <div className="mx-auto max-w-[1100px]">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-sky-300 transition hover:text-white">
            <ArrowRight size={14} className="rotate-180" />{page.backHome}
          </Link>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sky-300"><Handshake size={23} /></span>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">{page.eyebrow}</p>
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{page.title}</h1>
          <p className="mt-3 text-sm text-slate-300">{page.lastUpdatedLabel}: {page.lastUpdated}</p>
        </div>
      </header>

      <div className="bg-[#f5f7f9] px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto grid max-w-[1100px] gap-6 lg:grid-cols-[250px_1fr]">
          <nav aria-label={page.title} className="h-fit rounded-2xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-wide text-slate-500">{page.onThisPage}</p>
            <ol className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-1">
              {page.sections.map((section, index) => (
                <li key={section.title}>
                  <a href={`#partner-section-${index + 1}`} className="flex gap-2 rounded-md px-2 py-1.5 text-xs leading-5 text-slate-600 transition hover:bg-sky-50 hover:text-ess">
                    <span className="shrink-0 text-[10px] font-bold text-ess">{String(index + 1).padStart(2, '0')}</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div>
            <div className="mb-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
              <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-ess"><FileText size={18} /></span>
              <p className="text-sm leading-7 text-slate-700">{page.introduction}</p>
            </div>

            <div className="space-y-4">
              {page.sections.map((section, index) => (
                <section id={`partner-section-${index + 1}`} key={section.title} className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
                  <h2 className="flex items-start gap-3 text-lg font-bold text-[#172033]">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sky-50 text-[10px] font-bold text-ess">{String(index + 1).padStart(2, '0')}</span>
                    {section.title}
                  </h2>
                  {section.intro.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-7 text-slate-600">{paragraph}</p>)}
                  {section.items.length > 0 && (
                    <ul className="mt-4 space-y-2.5">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ess" />
                          <span>
                            {item.includes('@elitespecialsolutions.com') ? <a href={`mailto:${item}`} className="font-semibold text-ess underline underline-offset-2">{item}</a>
                              : item === 'www.elitespecialsolutions.com' ? <a href="https://elitespecialsolutions.com" target="_blank" rel="noreferrer" className="font-semibold text-ess underline underline-offset-2">{item}</a>
                                : item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.closing.map((paragraph) => <p key={paragraph} className="mt-4 rounded-lg bg-[#f8fafc] px-4 py-3 text-sm leading-6 text-slate-600">{paragraph}</p>)}
                </section>
              ))}
            </div>

            <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#142039] p-6 text-white sm:flex-row sm:items-center sm:px-8">
              <p className="text-sm font-semibold">{page.backToContact}</p>
              <a href={contact.externalLinks.bookingURL} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-ess px-5 py-3 text-xs font-semibold text-white transition hover:bg-sky-700">
                {page.contactButton}<ArrowRight size={14} />
              </a>
            </div>
            <a href="#partner-top" className="mt-5 inline-block text-xs font-semibold text-ess hover:underline">{page.backToTop}</a>
          </div>
        </div>
      </div>
    </>
  )
}
