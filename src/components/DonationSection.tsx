import { useState } from 'react'
import { Heart, Copy, Check } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'

export function DonationSection() {
  const [copied, setCopied] = useState(false)
  const pixKey = 'financeiro@njaa.ong.br'

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Erro ao copiar:', err)
    }
  }

  return (
    <section id="doar" className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500" aria-label="Doações PIX">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-1.5 text-white font-semibold text-sm mb-3 opacity-90">
              <Heart size={16} /> Doações
            </span>
            <h2 className="section-title mb-5 text-white">
              Doe via PIX em qualquer valor
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              Sua contribuição, por menor que seja, faz uma grande diferença na vida dos animais que rescatamos. 
              Cada doação é 100% destinada aos cuidados, medicamentos e alimentação dos nossos protegidos.
            </p>
            <p className="text-white/75 text-sm">
              Clique na chave PIX para copiar e cole no seu aplicativo bancário.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <p className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">Chave PIX (E-mail)</p>
              
              <button
                onClick={handleCopyPix}
                className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 p-6 transition-all duration-300 hover:shadow-lg"
                aria-label="Copiar chave PIX"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono font-semibold text-gray-800 text-lg break-all text-left">
                    {pixKey}
                  </span>
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm group-hover:shadow-md transition-all">
                    {copied ? (
                      <Check size={20} className="text-green-500" />
                    ) : (
                      <Copy size={20} className="text-purple-600" />
                    )}
                  </div>
                </div>
              </button>

              <p className="text-center text-sm text-gray-400 mt-5">
                {copied ? '✓ Chave copiada!' : 'Clique para copiar'}
              </p>

              <div className="mt-8 space-y-3">
                <p className="text-gray-600 text-sm font-medium">Como funciona:</p>
                <ol className="text-gray-500 text-sm space-y-2">
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600">1.</span>
                    <span>Copie a chave PIX acima</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600">2.</span>
                    <span>Abra seu banco ou app de pagamento</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600">3.</span>
                    <span>Escolha "Transferência PIX" e cole a chave</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600">4.</span>
                    <span>Defina o valor e confirme</span>
                  </li>
                </ol>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
