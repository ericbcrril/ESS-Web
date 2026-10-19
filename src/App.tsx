import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import { LanguageProvider } from './context/LanguageContext.tsx'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<SiteLayout />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
