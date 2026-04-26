import { Link } from 'react-router-dom'

export default function BookmarksPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex-shrink-0 px-4 py-3 border-b border-navy-600 bg-navy-900/80 backdrop-blur md:hidden">
        <span className="text-lg font-bold text-white tracking-tight">
          study<span className="text-accent-teal">gram</span>
        </span>
      </header>
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-4">
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-navy-600" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
        <h2 className="text-xl font-bold text-white">No saved cards yet</h2>
        <p className="text-slate-500 text-sm text-center">Bookmark cards while scrolling to save them here</p>
        <Link
          to="/"
          className="mt-2 px-5 py-2.5 bg-accent-teal text-navy-900 font-semibold rounded-xl text-sm hover:bg-teal-400 transition-colors"
        >
          Start Learning
        </Link>
      </div>
    </div>
  )
}