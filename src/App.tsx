import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { Adocao } from '@/pages/Adocao'
import { SejaSocio } from '@/pages/SejaSocio'
import { Transparencia } from '@/pages/Transparencia'
import { Contato } from '@/pages/Contato'

export function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-to-content">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adocao" element={<Adocao />} />
          <Route path="/seja-socio" element={<SejaSocio />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
