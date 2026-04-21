import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vote from './pages/Vote/Vote'
import Ranking from './pages/Ranking/Ranking'
import Header from './components/Header/Header'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Vote />} />
          <Route path="/ranking" element={<Ranking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)