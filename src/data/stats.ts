import type { TransparencyStat, FinancialRecord, Expense } from '@/types'

export const transparencyStats: TransparencyStat[] = [
  {
    id: 'animais-castrados',
    icon: '🐾',
    value: 120,
    label: 'Animais Castrados',
    description: 'Desde a fundação da ONG',
    color: 'primary',
  },  
  {
    id: 'socios',
    icon: '❤️',
    value: 75,
    label: 'Sócios Ativos',
    description: 'Pessoas que fazem a diferença',
    color: 'rose',
  },
  {
    id: 'adocoes',
    icon: '🏠',
    value: 15,
    label: 'Adoções Concluídas',
    description: 'Lares amorosos encontrados',
    color: 'blue',
  },
  {
    id: 'dinheiro',
    icon: '💸',
    value: 39576,
    label: 'Valor arrecadado',
    description: 'Recurso arrecadado até o momento',
    color: 'amber',
  },
  
  {
    id: 'pagamento-castroes',
    icon: '📈',
    value: 36410,
    label: 'Pagamento de Castrações',
    description: 'Investimento em saúde animal',
    color: 'secondary',
  },

  {
    id: 'pagamento-administrativo',
    icon: '🏛️',
    value: 3166,
    label: 'Despesas Administrativas',
    description: 'Despesas operacionais da ONG',
    color: 'purple',
  },
]

export const financialRecords: FinancialRecord[] = [
  { year: 2026, quarter: '(jan,fev,mar)', received: 8665, spent: 7284.22, balance: 2274.32 },
  { year: 2026, quarter: '(abr,mai,jun)', received: 10992, spent: 12509.18, balance: 757.14 },
  // { year: 2025, quarter: 'Q3', received: 11600, spent: 10400, balance: 1200 },
  // { year: 2025, quarter: 'Q4', received: 18200, spent: 16500, balance: 1700 },
  { year: 2025, quarter: '(jan,fev,mar)', received: 30,  spent: 0,  balance: 30  },
  { year: 2025, quarter: '(abr,mai,jun)', received: 5040, spent: 4226.68, balance: 813.32 },
  { year: 2025, quarter: '(jul,ago,set)', received: 7524, spent: 7482.46,  balance: 368.29  },
  { year: 2025, quarter: '(out,nov,dez)', received: 7325, spent: 7286.32, balance: 893.54 },
]

export const recentExpenses: Expense[] = [
  { id: '1', category: 'castracao',      amount: 6265,  date: '2026-06-30', description: 'Castração — Junho 2026', beneficiary: '27 animais' },
  { id: '2', category: 'administrativo',          amount: 119.01,  date: '2026-06-30', description: 'Despesas administrativas do mês de Junho 2026', beneficiary: '' },
  { id: '3', category: 'castracao',      amount: 3930,  date: '2026-05-31', description: 'Castração — Maio 2026', beneficiary: '17 animais' },
  { id: '4', category: 'administrativo',          amount: 208.08,  date: '2026-05-31', description: 'Despesas administrativas do mês de Maio 2026', beneficiary: '' },
  { id: '5', category: 'castracao',      amount: 1600,  date: '2026-04-30', description: 'Castração — Abril 2026', beneficiary: '03 animais' },
  { id: '6', category: 'administrativo',          amount: 117.09,  date: '2026-04-30', description: 'Despesas administrativas do mês de Abril 2026', beneficiary: '' },
  { id: '7', category: 'castracao',      amount: 5495,  date: '2026-03-31', description: 'Castração — Março 2026', beneficiary: '19 animais' },
  { id: '8', category: 'administrativo',          amount: 59,  date: '2026-03-28', description: 'Despesas administrativas do mês de Março 2026', beneficiary: '' },  
  { id: '10', category: 'administrativo',          amount: 117.40,  date: '2026-02-28', description: 'Despesas administrativas do mês de Fevereiro 2026', beneficiary: '' },
  { id: '11', category: 'castracao',      amount: 6265,  date: '2026-01-31', description: 'Castração — Janeiro 2026', beneficiary: '4 animais' },
  { id: '12', category: 'administrativo',          amount: 27.82,  date: '2026-01-31', description: 'Despesas administrativas do mês de Janeiro 2026', beneficiary: '' },
]

export const expenseCategoryLabels: Record<Expense['category'], string> = {
  administrativo:   'Administrativo',
  racao:          'Ração e Nutrição',
  cirurgia:       'Cirurgias',
  castracao:      'Castrações',
  vacinas:        'Vacinas',
  infraestrutura: 'Infraestrutura',
  outros:         'Outros',
}

export const expenseCategoryColors: Record<Expense['category'], string> = {
  administrativo: 'bg-blue-100 text-blue-700',
  racao:          'bg-amber-100 text-amber-700',
  cirurgia:       'bg-rose-100 text-rose-700',
  castracao:      'bg-purple-100 text-purple-700',
  vacinas:        'bg-green-100 text-green-700',
  infraestrutura: 'bg-gray-100 text-gray-700',
  outros:         'bg-slate-100 text-slate-700',
}
