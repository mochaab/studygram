import { useState } from 'react'
import { useLearningBook } from '../context/LearningBookContext.jsx'
import { useMastery } from '../context/MasteryContext.jsx'

function HeartIcon({ filled }) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill={filled ? '#f43f5e' : 'none'} stroke={filled ? '#f43f5e' : 'currentColor'} strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function BookPlusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="12" y1="7" x2="12" y2="13" />
      <line x1="9" y1="10" x2="15" y2="10" />
    </svg>
  )
}

function CheckIcon({ small } = {}) {
  const cls = small ? 'w-3 h-3' : 'w-4 h-4'
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ChevronIcon({ up }) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
      {up
        ? <polyline points="18 15 12 9 6 15" />
        : <polyline points="6 9 12 15 18 9" />}
    </svg>
  )
}

const LEVELS = [
  { key: 'understand', label: 'I can understand it', color: 'text-sky-400 border-sky-500/50 bg-sky-500/10 hover:bg-sky-500/20' },
  { key: 'explain', label: 'I can explain it in my own words', color: 'text-emerald-400 border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/20' },
]

const MASTERY_BADGE = {
  understand: { label: 'Understood', cls: 'text-sky-400 bg-sky-500/10 border-sky-500/30' },
  explain: { label: 'Mastered', cls: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
}

export default function LearningCard({ card }) {
  const [liked, setLiked] = useState(false)
  const [likeCount] = useState(Math.floor(Math.random() * 800) + 100)
  const [collapsed, setCollapsed] = useState(false)
  const { isSaved, addCard, removeCard } = useLearningBook()
  const { getMastery, markCard } = useMastery()

  const saved = isSaved(card.id)
  const mastery = getMastery(card.id)
  const badge = mastery ? MASTERY_BADGE[mastery] : null

  function handleBook() {
    saved ? removeCard(card.id) : addCard(card)
  }

  return (
    <div className="snap-start flex-shrink-0 w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-md h-full max-h-[calc(100vh-8rem)] flex flex-col bg-navy-800 rounded-2xl overflow-hidden shadow-2xl border border-navy-600 animate-fadeup">

        {/* Topic tag + mastery badge + collapse toggle */}
        <div className="px-4 pt-4 pb-2 flex items-center gap-2">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-navy-700 text-accent-teal border border-accent-teal/30">
            {card.tag}
          </span>
          <span className="text-xs text-slate-500">{card.topic}</span>
          {badge && (
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border flex items-center gap-1 ${badge.cls}`}>
              <CheckIcon small />
              {badge.label}
            </span>
          )}
          <button
            onClick={() => setCollapsed(c => !c)}
            className="ml-auto text-slate-500 hover:text-slate-300 transition-colors"
            aria-label={collapsed ? 'Expand card' : 'Collapse card'}
          >
            <ChevronIcon up={!collapsed} />
          </button>
        </div>

        {/* Title */}
        <h2 className="px-4 pb-3 text-lg font-bold text-white leading-snug">{card.title}</h2>

        {/* Collapsible body */}
        {!collapsed && (
          <>
            {/* Diagram */}
            <div className="flex-1 mx-4 mb-3 bg-navy-900 rounded-xl overflow-hidden flex items-center justify-center min-h-0">
              {card.diagram}
            </div>

            {/* Description */}
            <p className="px-4 pb-3 text-sm text-slate-300 leading-relaxed line-clamp-3">
              {card.description}
            </p>

            {/* Evaluation */}
            <div className="px-4 pb-3">
              {mastery ? (
                <p className="text-xs text-slate-600 text-center">
                  This card won't appear in future sessions · it'll be hidden from your feed
                </p>
              ) : (
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-slate-500 font-medium">How well do you know this?</p>
                  <div className="flex gap-2">
                    {LEVELS.map(({ key, label, color }) => (
                      <button
                        key={key}
                        onClick={() => markCard(card.id, key)}
                        className={`flex-1 text-xs font-medium py-2 px-2 rounded-lg border transition-all ${color}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* Contributor */}
        <div className="px-4 pb-2 mt-auto">
          <span className="text-xs text-slate-600">Note by <span className="text-slate-500 font-medium">{card.contributor ?? 'Charissa'}</span></span>
        </div>

        {/* Action bar */}
        <div className="px-4 pb-4 flex items-center gap-4 border-t border-navy-700 pt-3">
          <button
            onClick={() => setLiked(p => !p)}
            className="flex items-center gap-1.5 text-slate-400 hover:text-rose-400 transition-colors"
          >
            <HeartIcon filled={liked} />
            <span className="text-xs font-medium">{(likeCount + (liked ? 1 : 0)).toLocaleString()}</span>
          </button>

          <button
            onClick={handleBook}
            className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all ${
              saved
                ? 'bg-accent-teal/10 border-accent-teal text-accent-teal'
                : 'border-navy-600 text-slate-400 hover:border-accent-teal/50 hover:text-accent-teal'
            }`}
          >
            {saved ? <CheckIcon /> : <BookPlusIcon />}
            {saved ? 'In Learning Book' : 'Add to Learning Book'}
          </button>
        </div>
      </div>
    </div>
  )
}
