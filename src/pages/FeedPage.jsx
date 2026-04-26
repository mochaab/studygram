import { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import LearningCard from '../components/LearningCard.jsx'
import EndCard from '../components/EndCard.jsx'
import { topics } from '../data/topics/index.js'
import { useMastery } from '../context/MasteryContext.jsx'

export default function FeedPage() {
  const { topic } = useParams()
  const feedRef = useRef(null)
  const slug = topic?.toLowerCase()
  const data = topics[slug]
  const { getMastery } = useMastery()

  if (!data) {
    return (
      <div className="flex flex-col h-full items-center justify-center gap-4 px-4">
        <p className="text-2xl">🔍</p>
        <h2 className="text-xl font-bold text-white">Topic not found</h2>
        <p className="text-slate-500 text-sm text-center">
          We don't have <span className="text-accent-teal font-medium">"{topic}"</span> yet. Try "Istio" for now!
        </p>
        <Link
          to="/search"
          className="mt-2 px-5 py-2.5 bg-accent-teal text-navy-900 font-semibold rounded-xl text-sm hover:bg-teal-400 transition-colors"
        >
          Back to Search
        </Link>
      </div>
    )
  }

  const visibleCards = data.cards.filter(card => !getMastery(card.id))
  const allMastered = visibleCards.length === 0

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="flex-shrink-0 px-4 py-3 flex items-center gap-3 border-b border-navy-600 bg-navy-900/80 backdrop-blur">
        <Link to="/search" className="text-slate-400 hover:text-slate-200 transition-colors">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <div className="flex-1">
          <h1 className="text-base font-bold text-white leading-tight">{data.name}</h1>
          <p className="text-xs text-slate-500">
            {allMastered
              ? `All ${data.cards.length} cards mastered`
              : `${visibleCards.length} of ${data.cards.length} cards remaining · ${data.category}`}
          </p>
        </div>
      </header>

      {/* Feed */}
      <div ref={feedRef} className="flex-1 overflow-y-auto scroll-snap-y">
        {allMastered ? (
          <EndCard currentSlug={slug} feedRef={feedRef} allMastered />
        ) : (
          <>
            {visibleCards.map(card => (
              <div key={card.id} className="snap-start py-3">
                <LearningCard card={card} />
              </div>
            ))}
            <EndCard currentSlug={slug} feedRef={feedRef} topicCardIds={data.cards.map(c => c.id)} />
          </>
        )}
      </div>
    </div>
  )
}
