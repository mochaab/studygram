import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLearningBook } from '../context/LearningBookContext.jsx'
import { useMastery } from '../context/MasteryContext.jsx'
import { topics } from '../data/topics/index.js'

function groupByCategory(cards) {
  const groups = {}
  for (const card of cards) {
    const cat = card.tag || 'General'
    if (!groups[cat]) groups[cat] = []
    groups[cat].push(card)
  }
  return groups
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  )
}

export default function LearningBookPage() {
  const { saved, removeCard } = useLearningBook()
  const { mastered, resetAll } = useMastery()
  const [confirmReset, setConfirmReset] = useState(false)
  const groups = groupByCategory(saved)
  const isEmpty = saved.length === 0
  const masteredCount = Object.keys(mastered).length

  function handleResetAll() {
    if (confirmReset) {
      resetAll()
      setConfirmReset(false)
    } else {
      setConfirmReset(true)
    }
  }

  return (
    <div className="flex flex-col h-full">
      <header className="flex-shrink-0 px-4 py-3 border-b border-navy-600 bg-navy-900/80 backdrop-blur">
        <div className="md:hidden mb-0.5">
          <span className="text-lg font-bold text-white tracking-tight">
            study<span className="text-accent-teal">gram</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-base font-bold text-white">Learning Book</h1>
          {!isEmpty && (
            <span className="text-xs text-slate-500">{saved.length} card{saved.length !== 1 ? 's' : ''} saved</span>
          )}
        </div>
      </header>

      {isEmpty ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-4 px-4">
          <svg viewBox="0 0 24 24" className="w-12 h-12 text-navy-600" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <line x1="12" y1="7" x2="12" y2="13" />
            <line x1="9" y1="10" x2="15" y2="10" />
          </svg>
          <h2 className="text-xl font-bold text-white">Your Learning Book is empty</h2>
          <p className="text-slate-500 text-sm text-center">
            Hit <span className="text-accent-teal font-medium">"Add to Learning Book"</span> on any card while scrolling
          </p>
          <Link
            to="/"
            className="mt-2 px-5 py-2.5 bg-accent-teal text-navy-900 font-semibold rounded-xl text-sm hover:bg-teal-400 transition-colors"
          >
            Start Learning
          </Link>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-4 py-4 pb-24 space-y-6">
          {Object.entries(groups).map(([category, cards]) => (
            <div key={category}>
              {/* Category header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{category}</span>
                <div className="flex-1 h-px bg-navy-700" />
                <span className="text-xs text-slate-600">{cards.length}</span>
              </div>

              {/* Cards */}
              <div className="space-y-3">
                {cards.map(card => {
                  const topicSlug = Object.keys(topics).find(k => topics[k].cards.some(c => c.id === card.id))
                  return (
                    <div
                      key={card.id}
                      className="flex items-start gap-3 bg-navy-800 rounded-xl p-3 border border-navy-600"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs font-medium text-accent-teal">{card.topic}</span>
                        </div>
                        <p className="text-sm font-semibold text-white truncate">{card.title}</p>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">{card.description}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        {topicSlug && (
                          <Link
                            to={`/feed/${topicSlug}`}
                            className="text-xs text-accent-teal hover:text-teal-300 transition-colors font-medium"
                          >
                            View
                          </Link>
                        )}
                        <button
                          onClick={() => removeCard(card.id)}
                          className="text-slate-600 hover:text-rose-400 transition-colors"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}