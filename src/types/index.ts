// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavLink {
  label: string
  href: string
  isExternal?: boolean
}

// ─── Transparency / Stats ─────────────────────────────────────────────────────
export interface TransparencyStat {
  id: string
  icon: string
  value: number
  suffix?: string
  prefix?: string
  label: string
  description?: string
  color: 'primary' | 'secondary' | 'blue' | 'purple' | 'rose' | 'amber'
}

export interface FinancialRecord {
  year: number
  quarter?: string
  received: number
  spent: number
  balance: number
  description?: string
}

export interface Donation {
  id: string
  donor?: string
  amount: number
  date: string
  category: 'pix' | 'transferencia' | 'evento' | 'socio' | 'especie'
  description?: string
}

export interface Expense {
  id: string
  category: 'medicamentos' | 'racao' | 'cirurgia' | 'castracao' | 'vacinas' | 'infraestrutura' | 'outros'
  amount: number
  date: string
  description: string
  beneficiary?: string
}

// ─── Animals ──────────────────────────────────────────────────────────────────
export type AnimalSpecies = 'cao' | 'gato'
export type AnimalGender = 'macho' | 'femea'
export type AnimalSize = 'pequeno' | 'medio' | 'grande'
export type AnimalStatus = 'disponivel' | 'reservado' | 'adotado'

export interface Animal {
  id: string
  name: string
  species: AnimalSpecies
  gender: AnimalGender
  age: string
  size?: AnimalSize
  breed?: string
  description: string
  status: AnimalStatus
  vaccinated: boolean
  neutered: boolean
  image: string
  rescuedAt?: string
}

// ─── Membership ───────────────────────────────────────────────────────────────
export interface MembershipPlan {
  id: string
  name: string
  price: number
  period: 'mensal' | 'anual'
  benefits: string[]
  highlighted?: boolean
  color: string
}

// ─── Team ─────────────────────────────────────────────────────────────────────
export interface TeamMember {
  id: string
  name: string
  role: string
  image?: string
  bio?: string
}

// ─── SEO ──────────────────────────────────────────────────────────────────────
export interface SEOMeta {
  title: string
  description: string
  canonical?: string
  image?: string
  type?: string
  keywords?: string
}
