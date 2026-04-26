import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { suggestions } from '../data/topics/index.js'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const slug = query.trim().toLowerCase().replace(/\s+/g, '-')
    if (slug) navigate(`/feed/${slug}`)
  }

  function handleSuggestion(slug) {
    navigate(`/feed/${slug}`)
  }

  return (
    <div className="flex flex-col h-full">
      <header className="flex-shrink-0 px-4 py-3 border-b border-navy-600 bg-navy-900/80 backdrop-blur md:hidden">
        <span className="text-lg font-bold text-white tracking-tight">
          study<span className="text-accent-teal">gram</span>
        </span>
      </header>

      <div className="flex-1 overflow-y-auto px-4 pt-12 pb-28">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-white mb-1 text-center">What do you want to learn?</h1>
        <p className="text-slate-500 text-sm mb-8 text-center">Search a topic to explore bite-sized lessons</p>

        {/* Search input */}
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="e.g. Istio, Security Basics..."
              className="w-full pl-12 pr-4 py-3.5 bg-navy-700 border border-navy-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-colors text-sm"
            />
          </div>
          <button
            type="submit"
            className="mt-3 w-full py-3 bg-accent-teal text-navy-900 font-semibold rounded-xl hover:bg-teal-400 transition-colors text-sm"
          >
            Search
          </button>
        </form>

        {/* Categories + topic chips */}
        <div className="mt-10 w-full max-w-md mx-auto flex flex-col gap-6">
          {suggestions.map(({ category, items }) => (
            <div key={category}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{category}</span>
                <div className="flex-1 h-px bg-navy-700" />
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map(({ label, slug }) => (
                  <button
                    key={slug}
                    onClick={() => handleSuggestion(slug)}
                    className="px-4 py-2 bg-navy-700 border border-navy-600 rounded-full text-sm text-slate-300 hover:border-accent-teal hover:text-accent-teal transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}