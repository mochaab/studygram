import { createContext, useContext, useState, useEffect } from 'react'

const MasteryContext = createContext(null)

export function MasteryProvider({ children }) {
  const [mastered, setMastered] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('mastery') || '{}')
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem('mastery', JSON.stringify(mastered))
  }, [mastered])

  function markCard(id, level) {
    setMastered(prev => ({ ...prev, [id]: level }))
  }

  function resetCards(ids) {
    setMastered(prev => {
      const next = { ...prev }
      ids.forEach(id => delete next[id])
      return next
    })
  }

  function resetAll() {
    setMastered({})
  }

  function getMastery(id) {
    return mastered[id] || null
  }

  return (
    <MasteryContext.Provider value={{ mastered, markCard, resetCards, resetAll, getMastery }}>
      {children}
    </MasteryContext.Provider>
  )
}

export function useMastery() {
  return useContext(MasteryContext)
}