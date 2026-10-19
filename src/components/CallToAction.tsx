import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'

type CallToActionProps = {
  title: string
  description: string
  buttonLabel?: string
  href?: string
}

export default function CallToAction({
  title,
  description,
  buttonLabel,
  href = '/contact',
}: CallToActionProps) {
  const { content } = useLanguage()
  const displayedButtonLabel = buttonLabel ?? content.cta.button

  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-7 rounded-2xl bg-[#142039] px-6 py-9 text-white sm:px-10 md:flex-row md:items-center md:px-12 md:py-11">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
        </div>
        <Link to={href} className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-ess px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
          {displayedButtonLabel}<ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
