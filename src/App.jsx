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
import ContactSubmitted from './pages/ContactSubmitted'
import Events from './pages/Events'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    axios.get('https://taa-logistics-server.onrender.com/events.json')
      .then((response) => setEvents(response.data))
      .catch((error) => console.log(error))
  }, [])

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
        <Route path="/contact-submitted" element={<PageContainer><ContactSubmitted /></PageContainer>} />
        <Route path="/events" element={<PageContainer><Events events={events}/></PageContainer>} />
        <Route path="*" element={<PageContainer><NotFound /></PageContainer>} />
      </Routes>
    </>
  )
}

export default App
