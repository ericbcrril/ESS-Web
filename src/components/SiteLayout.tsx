import { useEffect, useState, lazy, Suspense } from 'react'
import { Link, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { BriefcaseBusiness, Building2, House, Info, Lightbulb, Mail, Menu, X } from 'lucide-react'
import SiteFooter from './SiteFooter'
import { useLanguage } from '../context/useLanguage'
import { NavigationFilterContext, useNavigationFilter } from '../context/NavigationFilterContext'
import { ErrorBoundary } from './ErrorBoundary'

const AboutUs = lazy(() => import('../views/AboutUs'))
const Careers = lazy(() => import('../views/Careers'))
const Contact = lazy(() => import('../views/Contact'))
const Expertise = lazy(() => import('../views/Expertise'))
const Home = lazy(() => import('../views/Home'))
const OutsourcingSolutions = lazy(() => import('../views/OutsourcingSolutions'))
const PartnerProgram = lazy(() => import('../views/PartnerProgram'))
const PrivacyPolicy = lazy(() => import('../views/PrivacyPolicy'))
const TermsConditions = lazy(() => import('../views/TermsConditions'))
const navigationPaths = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about-us' },
  { key: 'expertise', href: '/our-expertise' },
  { key: 'outsourcing', href: '/outsourcing-solutions' },
  { key: 'contact', href: '/contact' },
  { key: 'careers', href: '/careers' },
] as const
const careerNavigationPaths = [navigationPaths[5], navigationPaths[4], navigationPaths[1]]
const navigationIcons = {
  home: House,
  about: Info,
  expertise: Lightbulb,
  outsourcing: Building2,
  contact: Mail,
  careers: BriefcaseBusiness,
}

function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { content, contact, language, setLanguage } = useLanguage()
  const { careerLinksOnly, setCareerLinksOnly } = useNavigationFilter()
  const links = (careerLinksOnly ? careerNavigationPaths : navigationPaths)
    .map(({ key, href }) => ({ label: content.navigation[key], href, Icon: navigationIcons[key] }))

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `whitespace-nowrap rounded-full px-3 py-2 text-[13px] transition-colors ${
      isActive ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/10 hover:text-white'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111a2c]/95 text-white shadow-lg shadow-slate-950/10 backdrop-blur-lg">
      <nav aria-label={content.navigation.main} className="mx-auto flex min-h-[72px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Elite Special Solutions home" className="flex shrink-0 items-center gap-2.5">
          <img
            src="https://elitespecialsolutions.com/minLogo.png"
            alt=""
            className="h-9 w-9 rounded-lg object-cover"
          />
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-[0.14em]">ELITE</span>
            <span className="block text-[10px] text-slate-300">Special Solutions</span>
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 rounded-full bg-[#293249] p-1 lg:flex">
          {links.map(({ label, href, Icon }) => (
            <NavLink key={href} to={href} end={href === '/'} className={linkClasses}>
              {({ isActive }) => (
                <span className="inline-flex items-center gap-1.5">
                  {isActive && <Icon size={14} aria-hidden="true" />}
                  {label}
                </span>
              )}
            </NavLink>
          ))}
          {careerLinksOnly && (
            <button type="button" onClick={() => setCareerLinksOnly(false)} className="ml-1 whitespace-nowrap rounded-full px-3 py-2 text-xs text-sky-300 transition hover:bg-white/10 hover:text-white">
              {content.navigation.showAll}
            </button>
          )}
          <label className="ml-1">
            <span className="sr-only">{content.navigation.language}</span>
            <select value={language} onChange={(event) => setLanguage(event.target.value === 'es' ? 'es' : 'en')} className="cursor-pointer rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-900 outline-none">
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </label>
        </div>

        {!careerLinksOnly && <a
        
          href={contact.externalLinks.bookingURL}
          target="_blank"
          rel="noreferrer"
          className="hidden shrink-0 rounded-full bg-ess px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-sky-700 lg:inline-flex"
        >
          {content.navigation.bookCall}
        </a>}

        <button
          type="button"
          aria-label={menuOpen ? content.navigation.closeMenu : content.navigation.openMenu}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#111a2c] px-4 pb-5 pt-3 shadow-xl lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1">
            {links.map(({ label, href, Icon }) => (
              <NavLink
                key={href}
                to={href}
                end={href === '/'}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm transition ${
                    isActive ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/10'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="inline-flex items-center gap-2">
                    {isActive && <Icon size={16} aria-hidden="true" />}
                    {label}
                  </span>
                )}
              </NavLink>
            ))}
            {careerLinksOnly && (
              <button type="button" onClick={() => setCareerLinksOnly(false)} className="rounded-xl px-4 py-3 text-left text-sm text-sky-300 hover:bg-white/10">
                {content.navigation.showAll}
              </button>
            )}
            <div className="mt-2 flex gap-3">
              <select value={language} onChange={(event) => setLanguage(event.target.value === 'es' ? 'es' : 'en')} aria-label={content.navigation.language} className="min-w-0 flex-1 rounded-xl bg-white px-4 py-3 text-sm text-slate-900">
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
              {!careerLinksOnly && (
                <a href={contact.externalLinks.bookingURL} target="_blank" rel="noreferrer" className="flex-1 rounded-xl bg-ess px-4 py-3 text-center text-sm font-semibold text-white">
                  {content.navigation.bookCall}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function AnimatedOutlet() {
  const location = useLocation()

  return (
    <Suspense fallback={<div className="flex min-h-[60vh] items-center justify-center bg-[#111a2c] text-white">Loading...</div>}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-expertise" element={<Expertise />} />
        <Route path="/outsourcing-solutions" element={<OutsourcingSolutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/partner-program" element={<PartnerProgram />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default function SiteLayout() {
  const { pathname, hash } = useLocation()
  const [careerLinksOnly, setCareerLinksOnly] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    })
    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])

  return (
    <NavigationFilterContext.Provider value={{ careerLinksOnly, setCareerLinksOnly }}>
      <SiteNavbar key={pathname} />
      <main>
        <ErrorBoundary>
          <AnimatedOutlet />
        </ErrorBoundary>
      </main>
      <SiteFooter />
    </NavigationFilterContext.Provider>
  )
}

