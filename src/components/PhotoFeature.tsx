type PhotoFeatureProps = {
  image: string
  imageAlt: string
  title: string
  description: string
  reverse?: boolean
  index?: number
}

export default function PhotoFeature({
  image,
  imageAlt,
  title,
  description,
  reverse = false,
  index,
}: PhotoFeatureProps) {
  return (
    <article className={`grid items-center gap-6 rounded-2xl bg-white p-4 shadow-[0_8px_26px_rgba(15,23,42,.05)] sm:p-6 md:grid-cols-2 md:gap-10 ${reverse ? 'md:[&>img]:order-2' : ''}`}>
      <img src={image} alt={imageAlt} loading="lazy" className="h-52 w-full rounded-xl object-cover sm:h-64" />
      <div className="px-1 py-2 sm:px-3">
        {typeof index === 'number' && (
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-ess">0{index + 1}</p>
        )}
        <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      </div>
    </article>
  )
}
