import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { Adocao } from '@/pages/Adocao'
import { SejaSocio } from '@/pages/SejaSocio'
import { Transparencia } from '@/pages/Transparencia'

function ScrollHandler() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Se tem hash, scrolla para o elemento
    if (hash) {
      const id = hash.replace('#', '')
      
      // setTimeout garante que o DOM foi renderizado
      const timer = setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
      
      return () => clearTimeout(timer)
    } else {
      // Sem hash, scrolla para o topo
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
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
