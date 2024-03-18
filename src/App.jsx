import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import PageContainer from "./components/PageContainer"
import Services from './pages/Services'
import About from './pages/About'
import Rates from './pages/Rates'
import Employment from './pages/Employment'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ApplicationSubmitted from './pages/ApplicationSubmitted'
import QuoteSubmitted from './pages/QuoteSubmitted'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PageContainer><Home /></PageContainer>} />
        <Route path="/services" element={<PageContainer><Services /></PageContainer>} />
        <Route path="/about" element={<PageContainer><About /></PageContainer>} />
        <Route path="/rates" element={<PageContainer><Rates /></PageContainer>} />
        <Route path="/quote-submitted" element={<PageContainer><QuoteSubmitted /></PageContainer>} />
        <Route path="/employment" element={<PageContainer><Employment /></PageContainer>} />
        <Route path="/application-submitted" element={<PageContainer><ApplicationSubmitted /></PageContainer>} />
        <Route path="/contact" element={<PageContainer><Contact /></PageContainer>} />
        <Route path="*" element={<PageContainer><NotFound /></PageContainer>} />
      </Routes>
    </>
  )
}

export default App
