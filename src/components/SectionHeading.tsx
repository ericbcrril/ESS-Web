type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-ess">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] text-[#172033] sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{description}</p>}
    </div>
  )
}
