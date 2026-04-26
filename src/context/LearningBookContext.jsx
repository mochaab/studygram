import { createContext, useContext, useState, useEffect } from 'react'

const LearningBookContext = createContext(null)

export function LearningBookProvider({ children }) {
  const [saved, setSaved] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('learningBook') || '[]')
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('learningBook', JSON.stringify(saved))
  }, [saved])

  function addCard(card) {
    setSaved(prev => prev.find(c => c.id === card.id) ? prev : [...prev, card])
  }

  function removeCard(id) {
    setSaved(prev => prev.filter(c => c.id !== id))
  }

  function isSaved(id) {
    return saved.some(c => c.id === id)
  }

  return (
    <LearningBookContext.Provider value={{ saved, addCard, removeCard, isSaved }}>
      {children}
    </LearningBookContext.Provider>
  )
}

export function useLearningBook() {
  return useContext(LearningBookContext)
}