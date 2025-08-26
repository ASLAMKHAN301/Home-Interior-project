import { useState } from 'react'
import { Header } from './components/Header/Header'
import './App.css'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
