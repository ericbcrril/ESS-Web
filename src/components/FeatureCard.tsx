import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

export default function FeatureCard({ icon: Icon, title, description, href }: FeatureCardProps) {
  const content = (
    <>
      <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-ess">
        <Icon size={21} strokeWidth={1.8} />
      </span>
      <h3 className="text-base font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      {href && <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ess">Learn more <ArrowRight size={15} /></span>}
    </>
  )

  return href ? (
    <Link to={href} className="group rounded-xl border border-slate-100 bg-white p-6 shadow-[0_8px_26px_rgba(15,23,42,.045)] transition hover:-translate-y-1 hover:border-sky-100 hover:shadow-[0_16px_34px_rgba(15,23,42,.09)]">
      {content}
    </Link>
  ) : (
    <article className="rounded-xl border border-slate-100 bg-white p-6 shadow-[0_8px_26px_rgba(15,23,42,.045)]">
      {content}
    </article>
  )
}
