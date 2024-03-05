import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import PageContainer from "./components/PageContainer"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PageContainer><Home /></PageContainer>} />
      </Routes>
    </>
  )
}

export default App
