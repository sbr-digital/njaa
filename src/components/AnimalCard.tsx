import type { Animal } from '@/types'
import { Heart, CheckCircle2, Clock } from 'lucide-react'

const statusConfig = {
  disponivel: { label: 'Disponível',  className: 'bg-green-100 text-green-700',   icon: CheckCircle2 },
  reservado:  { label: 'Reservado',   className: 'bg-amber-100 text-amber-700',   icon: Clock },
  adotado:    { label: 'Adotado ❤️', className: 'bg-gray-100  text-gray-500',    icon: Heart },
}

const genderLabel = { macho: 'Macho', femea: 'Fêmea' }
const speciesLabel = { cao: 'Cão', gato: 'Gato' }

interface AnimalCardProps {
  animal: Animal
  onAdopt?: (animal: Animal) => void
}

export function AnimalCard({ animal, onAdopt }: AnimalCardProps) {
  const status = statusConfig[animal.status]
  const StatusIcon = status.icon

  return (
    <article className="card group" aria-label={`Animal ${animal.name}`}>
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
        <img
          src={animal.image}
          alt={`Foto de ${animal.name}, ${speciesLabel[animal.species]} para adoção`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          width={400}
          height={300}
          onError={(e) => {
            ;(e.target as HTMLImageElement).src = `https://placehold.co/400x300/f0850f/ffffff?text=${animal.name}`
          }}
        />
        <div className="absolute top-3 right-3">
          <span className={`badge ${status.className} shadow-sm`}>
            <StatusIcon size={12} />
            {status.label}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display font-bold text-xl text-dark">{animal.name}</h3>
          <span className="text-xs text-gray-400 font-medium">{animal.age}</span>
        </div>

        <div className="flex gap-2 mb-3 flex-wrap">
          <span className="badge bg-gray-100 text-gray-600">{speciesLabel[animal.species]}</span>
          <span className="badge bg-gray-100 text-gray-600">{genderLabel[animal.gender]}</span>
          {animal.neutered && <span className="badge bg-green-50 text-green-600">✂️ Castrado</span>}
          {animal.vaccinated && <span className="badge bg-blue-50 text-blue-600">💉 Vacinado</span>}
        </div>

        <p className="text-gray-500 text-sm line-clamp-2 mb-4">{animal.description}</p>

        {animal.status === 'disponivel' && onAdopt && (
          <button
            onClick={() => onAdopt(animal)}
            className="btn-primary w-full justify-center text-sm py-2.5"
            aria-label={`Quero adotar ${animal.name}`}
          >
            <Heart size={15} />
            Quero Adotar
          </button>
        )}
      </div>
    </article>
  )
}
