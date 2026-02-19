import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'

// import pages
import Gevcu from './pages/Gevcu.jsx'
import Bms from './pages/Bms.jsx'
import AiDiagnostics from './pages/AiDiagnostics.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='gevcu' element={<Gevcu />} />
          <Route path='bms' element={<Bms />} />
          <Route path='aidiagnostics' element={<AiDiagnostics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
