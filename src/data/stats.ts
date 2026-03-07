import type { TransparencyStat, FinancialRecord, Expense } from '@/types'

export const transparencyStats: TransparencyStat[] = [
  {
    id: 'animais-resgatados',
    icon: '🐾',
    value: 1240,
    label: 'Animais Resgatados',
    description: 'Desde a fundação da ONG',
    color: 'primary',
  },
  {
    id: 'castracoes',
    icon: '✂️',
    value: 834,
    label: 'Castrações Realizadas',
    description: 'Controle populacional responsável',
    color: 'secondary',
  },
  {
    id: 'adocoes',
    icon: '🏠',
    value: 978,
    label: 'Adoções Concluídas',
    description: 'Lares amorosos encontrados',
    color: 'blue',
  },
  {
    id: 'vacinacoes',
    icon: '💉',
    value: 1560,
    label: 'Vacinações Aplicadas',
    description: 'Proteção e saúde animal',
    color: 'purple',
  },
  {
    id: 'socios',
    icon: '❤️',
    value: 215,
    label: 'Sócios Ativos',
    description: 'Pessoas que fazem a diferença',
    color: 'rose',
  },
  {
    id: 'cirurgias',
    icon: '🏥',
    value: 142,
    label: 'Cirurgias Realizadas',
    description: 'Procedimentos médico-veterinários',
    color: 'amber',
  },
]

export const financialRecords: FinancialRecord[] = [
  { year: 2025, quarter: 'Q1', received: 12400, spent: 10980, balance: 1420 },
  { year: 2025, quarter: 'Q2', received: 14800, spent: 13200, balance: 1600 },
  { year: 2025, quarter: 'Q3', received: 11600, spent: 10400, balance: 1200 },
  { year: 2025, quarter: 'Q4', received: 18200, spent: 16500, balance: 1700 },
  { year: 2024, quarter: 'Q1', received: 9800,  spent: 8900,  balance: 900  },
  { year: 2024, quarter: 'Q2', received: 11200, spent: 10100, balance: 1100 },
  { year: 2024, quarter: 'Q3', received: 10400, spent: 9600,  balance: 800  },
  { year: 2024, quarter: 'Q4', received: 15600, spent: 14200, balance: 1400 },
]

export const recentExpenses: Expense[] = [
  { id: '1', category: 'castracao',      amount: 3200,  date: '2025-12-10', description: 'Campanha de Castração — Dezembro 2025', beneficiary: '28 animais' },
  { id: '2', category: 'racao',          amount: 1840,  date: '2025-12-05', description: 'Ração e suplementos mensais', beneficiary: 'Todos os animais em acolhimento' },
  { id: '3', category: 'medicamentos',   amount: 920,   date: '2025-11-28', description: 'Medicamentos antiparasitários e antibióticos' },
  { id: '4', category: 'vacinas',        amount: 1350,  date: '2025-11-20', description: 'Campanha de Vacinação — Novembro 2025', beneficiary: '45 animais' },
  { id: '5', category: 'cirurgia',       amount: 2100,  date: '2025-11-15', description: 'Cirurgia ortopédica — cão resgatado atropelado' },
  { id: '6', category: 'infraestrutura', amount: 680,   date: '2025-11-10', description: 'Manutenção do espaço de acolhimento' },
]

export const expenseCategoryLabels: Record<Expense['category'], string> = {
  medicamentos:   'Medicamentos',
  racao:          'Ração e Nutrição',
  cirurgia:       'Cirurgias',
  castracao:      'Castrações',
  vacinas:        'Vacinas',
  infraestrutura: 'Infraestrutura',
  outros:         'Outros',
}

export const expenseCategoryColors: Record<Expense['category'], string> = {
  medicamentos:   'bg-blue-100 text-blue-700',
  racao:          'bg-amber-100 text-amber-700',
  cirurgia:       'bg-rose-100 text-rose-700',
  castracao:      'bg-purple-100 text-purple-700',
  vacinas:        'bg-green-100 text-green-700',
  infraestrutura: 'bg-gray-100 text-gray-700',
  outros:         'bg-slate-100 text-slate-700',
}
