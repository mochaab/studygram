import { Link } from 'react-router-dom'
import { topics, categories } from '../data/topics/index.js'

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export default function HomePage() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex-shrink-0 px-4 py-3 border-b border-navy-600 bg-navy-900/80 backdrop-blur">
        <div className="md:hidden mb-0.5">
          <span className="text-lg font-bold text-white tracking-tight">
            study<span className="text-accent-teal">gram</span>
          </span>
        </div>
        <p className="text-sm text-slate-500">What do you want to learn today?</p>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-5 pb-28 space-y-8">
        {Object.entries(categories).map(([categoryName, slugs]) => (
          <div key={categoryName}>
            {/* Category header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{categoryName}</span>
              <div className="flex-1 h-px bg-navy-700" />
            </div>

            {/* Topic cards */}
            <div className="space-y-4">
              {slugs.map((slug, index) => {
                const topic = topics[slug]
                return (
                  <Link
                    key={slug}
                    to={`/feed/${slug}`}
                    className="flex items-start gap-4 bg-navy-800 rounded-2xl p-5 border border-navy-600 hover:border-accent-teal/50 transition-all group block"
                  >
                    {/* Order number */}
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-navy-700 border border-navy-600 flex items-center justify-center group-hover:border-accent-teal/40 transition-colors">
                      <span className="text-sm font-bold text-slate-400 group-hover:text-accent-teal transition-colors">
                        {index + 1}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-navy-700 text-accent-teal border border-accent-teal/30">
                          {topic.category}
                        </span>
                        <span className="text-xs text-slate-600">{topic.cards.length} cards</span>
                      </div>
                      <h2 className="text-base font-bold text-white mb-1 group-hover:text-accent-teal transition-colors leading-snug">
                        {topic.name}
                      </h2>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {topic.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 text-slate-600 group-hover:text-accent-teal transition-colors mt-1">
                      <ChevronRightIcon />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}