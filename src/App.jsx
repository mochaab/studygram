import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LearningBookProvider } from './context/LearningBookContext.jsx'
import { MasteryProvider } from './context/MasteryContext.jsx'
import SideNav from './components/SideNav.jsx'
import BottomNav from './components/BottomNav.jsx'
import HomePage from './pages/HomePage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import FeedPage from './pages/FeedPage.jsx'
import LearningBookPage from './pages/LearningBookPage.jsx'

export default function App() {
  return (
    <MasteryProvider>
    <LearningBookProvider>
      <BrowserRouter>
        <div className="flex h-screen bg-navy-900 overflow-hidden">
          <SideNav />
          <main className="flex-1 flex flex-col min-h-0 md:ml-56">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/feed/:topic" element={<FeedPage />} />
              <Route path="/learning-book" element={<LearningBookPage />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
      </BrowserRouter>
    </LearningBookProvider>
    </MasteryProvider>
  )
}