import { useNavigate } from 'react-router-dom'
import { topics } from '../data/topics/index.js'
import { useMastery } from '../context/MasteryContext.jsx'

function TopIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="17 11 12 6 7 11" />
      <polyline points="17 18 12 13 7 18" />
    </svg>
  )
}

function NextIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function ResetIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 .49-4.95" />
    </svg>
  )
}

export default function EndCard({ currentSlug, feedRef, topicCardIds = [], allMastered = false }) {
  const navigate = useNavigate()
  const { resetCards } = useMastery()
  const current = topics[currentSlug]
  const nextSlug = current?.nextSlug
  const next = nextSlug ? topics[nextSlug] : null

  function scrollToTop() {
    feedRef?.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleReset() {
    const ids = topicCardIds.length ? topicCardIds : current?.cards.map(c => c.id) ?? []
    resetCards(ids)
    feedRef?.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="snap-start flex-shrink-0 w-full h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col items-center gap-5 bg-navy-800 rounded-2xl p-8 border border-navy-600 shadow-2xl text-center animate-fadeup">

        {/* Icon */}
        <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
          allMastered
            ? 'bg-emerald-500/10 border border-emerald-500/30'
            : 'bg-accent-teal/10 border border-accent-teal/30'
        }`}>
          {allMastered ? (
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-accent-teal" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>

        {/* Message */}
        <div>
          <h2 className="text-xl font-bold text-white mb-1">
            {allMastered ? 'All cards mastered!' : "You've finished this lesson!"}
          </h2>
          <p className="text-sm text-slate-500">
            {allMastered
              ? `You've marked all ${current?.cards.length} cards as understood`
              : `${current?.cards.length} cards completed · ${current?.category}`}
          </p>
        </div>

        <div className="flex flex-col w-full gap-3">
          {/* Back to top — only when there are visible cards */}
          {!allMastered && (
            <button
              onClick={scrollToTop}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-navy-600 text-slate-300 hover:bg-navy-700 hover:text-white transition-colors text-sm font-medium"
            >
              <TopIcon />
              Back to Top
            </button>
          )}

          {/* Next lesson */}
          {next ? (
            <button
              onClick={() => navigate(`/feed/${nextSlug}`)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent-teal text-navy-900 font-semibold hover:bg-teal-400 transition-colors text-sm"
            >
              Next Lesson: {next.name}
              <NextIcon />
            </button>
          ) : (
            <button
              onClick={() => navigate('/search')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent-teal text-navy-900 font-semibold hover:bg-teal-400 transition-colors text-sm"
            >
              Explore More Topics
              <NextIcon />
            </button>
          )}

          {/* Reset this lesson */}
          <button
            onClick={handleReset}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-navy-600 text-slate-500 hover:text-slate-300 hover:border-slate-500 transition-colors text-xs font-medium"
          >
            <ResetIcon />
            Reset this lesson
          </button>
        </div>
      </div>
    </div>
  )
}
