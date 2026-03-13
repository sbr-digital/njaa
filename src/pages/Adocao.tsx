import { useState } from 'react'
import { Heart, PawPrint, SlidersHorizontal } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { AnimatedSection } from '@/components/AnimatedSection'
import { AnimalCard } from '@/components/AnimalCard'
import { animals } from '@/data/animals'
import type { Animal, AnimalSpecies, AnimalStatus } from '@/types'
import { socialLinks } from '@/data/navigation'

type FilterSpecies = AnimalSpecies | 'todos'
type FilterStatus = AnimalStatus | 'todos'

export function Adocao() {
  const [species, setSpecies] = useState<FilterSpecies>('todos')
  const [status, setStatus] = useState<FilterStatus>('disponivel')
  const [selected, setSelected] = useState<Animal | null>(null)

  const filtered = animals.filter((a) => {
    const matchSpecies = species === 'todos' || a.species === species
    const matchStatus = status === 'todos' || a.status === status
    return matchSpecies && matchStatus
  })

  const handleAdopt = (animal: Animal) => setSelected(animal)

  const adoptMsg = selected
    ? `Olá! Vi o(a) ${selected.name} no site da NJAA e quero saber mais sobre a adoção. 🐾`
    : ''

  return (
    <>
      <SEO
        title="Adoção"
        description="Conheça os animais disponíveis para adoção no NJAA. Cães e gatos castrados, vacinados e prontos para um lar cheio de amor em Jaguarão, RS."
        canonical="/adocao"
        keywords="adoção cachorro gato Jaguarão RS, adotar animal NJAA"
      />

      {/* Header da página */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-500 to-primary-700 text-white text-center">
        <div className="container-custom">
          <AnimatedSection>
            <PawPrint size={40} className="mx-auto mb-4 opacity-80" />
            <h1 className="font-display font-bold text-5xl mb-3">Adote um amigo</h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Todos os animais são castrados, vacinados e passam por avaliação
              comportamental antes da adoção.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <span className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <SlidersHorizontal size={16} /> Filtrar:
            </span>
            <div className="flex flex-wrap gap-2">
              {(['todos', 'cao', 'gato'] as FilterSpecies[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setSpecies(s)}
                  className={`badge px-4 py-1.5 cursor-pointer transition-colors ${
                    species === s
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {s === 'todos' ? 'Todos' : s === 'cao' ? '🐕 Cães' : '🐱 Gatos'}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 sm:ml-auto">
              {(['todos', 'disponivel', 'reservado', 'adotado'] as FilterStatus[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`badge px-4 py-1.5 cursor-pointer transition-colors ${
                    status === s
                      ? 'bg-dark text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {s === 'todos' ? 'Todos status' : s === 'disponivel' ? 'Disponível' : s === 'reservado' ? 'Reservado' : 'Adotado'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <PawPrint size={48} className="mx-auto mb-4 opacity-40" />
              <p className="text-lg">Nenhum animal encontrado com esses filtros.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((animal, i) => (
                <AnimatedSection key={animal.id} delay={i * 60}>
                  <AnimalCard animal={animal} onAdopt={handleAdopt} />
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal de adoção */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Adotar ${selected.name}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-display font-bold text-2xl text-dark mb-2">
              Adotar {selected.name} 🐾
            </h2>
            <p className="text-gray-500 mb-6">
              Ótima escolha! Entre em contato conosco pelo WhatsApp para iniciar
              o processo de adoção responsável.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`${socialLinks.whatsapp}?text=${encodeURIComponent(adoptMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                <Heart size={16} /> Falar no WhatsApp
              </a>
              <button
                onClick={() => setSelected(null)}
                className="btn-secondary justify-center"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
