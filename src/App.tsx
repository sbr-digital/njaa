import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { Adocao } from '@/pages/Adocao'
import { SejaSocio } from '@/pages/SejaSocio'
import { Transparencia } from '@/pages/Transparencia'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a href="#main-content" className="skip-to-content">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adocao" element={<Adocao />} />
          <Route path="/planos" element={<SejaSocio />} />
          <Route path="/transparencia" element={<Transparencia />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
