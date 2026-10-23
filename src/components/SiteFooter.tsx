import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import { useMailtoSubmission } from '../hooks/useMailtoSubmission'

export default function SiteFooter() {
  const { content, contact, language } = useLanguage()
  const footer = content.footer
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const { status, submit } = useMailtoSubmission()
  const socialLinks = [
    { label: 'Facebook', url: contact.socialMedia.facebook, icon: FaFacebookF },
    { label: 'Instagram', url: contact.socialMedia.instagram, icon: FaInstagram },
    { label: 'YouTube', url: contact.socialMedia.youtube, icon: FaYoutube },
    { label: 'LinkedIn', url: contact.socialMedia.linkedin, icon: FaLinkedinIn },
    { label: contact.whatsappLabel, url: contact.socialMedia.whatsApp0, icon: FaWhatsapp },
  ]

  const linkGroups = [
    {
      title: footer.homeTitle,
      links: [
        { label: footer.welcomeLink, to: '/#initial-section' },
        { label: footer.reviewsLink, to: '/#client-stories' },
        { label: footer.programLink, to: '/#custom-program' },
      ],
    },
    {
      title: footer.aboutTitle,
      links: [
        { label: footer.visionLink, to: '/about-us#vision' },
        { label: footer.missionLink, to: '/about-us#mission' },
        { label: footer.valuesLink, to: '/about-us#core-values' },
      ],
    },
    {
      title: footer.careersTitle,
      links: [
        { label: footer.jobLink, to: '/careers#candidate-application' },
        { label: footer.processLink, to: '/careers#recruitment-process' },
      ],
    },
  ]

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    const subject = encodeURIComponent(footer.newsletterSubject)
    const body = encodeURIComponent(`${footer.newsletterEmailLabel}: ${newsletterEmail}`)
    submit(`mailto:${contact.email}?subject=${subject}&body=${body}`)
  }

  const legalLinks = [
    { label: footer.termsLink, to: '/terms-and-conditions' },
    { label: footer.privacyLink, to: '/privacy-policy' },
    { label: footer.referralLink, href: contact.externalLinks.referralURL },
    { label: footer.partnerLink, to: '/partner-program' },
  ]

  return (
    <footer className="bg-white text-slate-700">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1.7fr_.7fr_.8fr_.8fr] lg:gap-12">
        <div>
          <Link to="/" className="mb-4 inline-flex items-center gap-2.5 text-slate-900">
            <img src="https://elitespecialsolutions.com/minLogo.png" alt="" className="h-9 w-9 rounded-md object-cover" />
            <span className="text-xs font-bold tracking-tight text-[15px]">Elite Special Solutions</span>
          </Link>
          <p className="max-w-sm text-[15px] leading-5 text-slate-500">{footer.description}</p>
          <form onSubmit={handleNewsletterSubmit} className="mt-4 flex max-w-md gap-2">
            <label htmlFor="footer-newsletter-email" className="sr-only">{footer.newsletterLabel}</label>
            <input
              id="footer-newsletter-email"
              type="email"
              autoComplete="email"
              required
              value={newsletterEmail}
              onChange={(event) => setNewsletterEmail(event.currentTarget.value)}
              placeholder={footer.newsletterPlaceholder}
              className="min-w-0 flex-1 rounded-md border border-slate-200 px-3 py-2 text-[15px] text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-ess focus:ring-2 focus:ring-sky-100"
            />
            <button type="submit" disabled={status === 'sending'} className="inline-flex items-center gap-1.5 rounded-md bg-ess px-4 py-2 text-[15px] font-semibold text-white transition hover:bg-sky-700 disabled:cursor-wait disabled:opacity-60">
              {status === 'sending' ? (language === 'es' ? 'Preparando…' : 'Preparing…') : footer.newsletterButton}<Send size={11} />
            </button>
          </form>
          {status !== 'idle' && (
            <p role={status === 'error' ? 'alert' : 'status'} aria-live="polite" className={`mt-2 text-[15px] leading-4 ${status === 'error' ? 'text-red-600' : 'text-slate-500'}`}>
              {status === 'sending'
                ? (language === 'es' ? 'Preparando un borrador de correo…' : 'Preparing an email draft…')
                : status === 'success'
                  ? (language === 'es' ? 'Borrador listo. Completa el envío desde tu aplicación de correo.' : 'Draft ready. Complete sending from your email app.')
                  : (language === 'es' ? 'No se pudo iniciar el correo. Escríbenos directamente a ' : 'Could not open your email app. Contact us directly at ')}
              {status === 'error' && <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a>}
            </p>
          )}
          <div className="mt-4 flex gap-2" aria-label={footer.socialLabel}>
            {socialLinks.map(({ label, url, icon: Icon }) => (
              <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label} className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-sky-100 hover:text-ess">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {linkGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="mb-3 text-[15px] font-bold uppercase tracking-wide text-slate-900">{group.title}</h2>
            <ul className="space-y-2">
              {group.links.map(({ label, to }) => (
                <li key={label}>
                  <Link className="text-[15px] text-slate-500 transition hover:text-ess" to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mx-auto max-w-[1200px] border-t border-slate-100 px-5 py-4 sm:px-8">
        <div className="flex flex-col justify-between gap-3 text-[15px] text-slate-500 sm:flex-row sm:items-center">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map(({ label, href, to }) => (
              <li key={label}>
                {to ? (
                  <Link to={to} className="transition hover:text-ess">{label}</Link>
                ) : (
                  <a href={href} target="_blank" rel="noreferrer" className="transition hover:text-ess">{label}</a>
                )}
              </li>
            ))}
          </ul>
          <p>© {new Date().getFullYear()} Elite Special Solutions. {footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
