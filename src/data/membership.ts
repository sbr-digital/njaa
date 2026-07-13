import type { MembershipPlan } from '@/types'

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'apoiador',
    name: 'Sócio anual',
    price: 300,
    period: 'anual',
    color: 'from-green-400 to-green-600',
    benefits: [
      // 'Certificado digital de sócio',
      // 'Newsletter mensal exclusiva',
      // 'Acesso ao relatório de transparência',
      // 'Nome na lista de apoiadores',
    ],
  },
  {
    id: 'protetor',
    name: 'Sócio mensal',
    price: 30,
    period: 'mensal',
    color: 'from-primary-400 to-primary-600',
    highlighted: true,
    benefits: [
      // 'Tudo do plano Apoiador',
      // 'Menção especial nas redes sociais',
      // 'Kit de boas-vindas digital',
      // 'Acesso a eventos exclusivos da ONG',
      // 'Atualizações dos animais patrocinados',
    ],
  },
  // {
  //   id: 'guardiao',
  //   name: 'Guardião',
  //   price: 0,
  //   period: 'mensal',
  //   color: 'from-purple-400 to-purple-600',
  //   benefits: [
  //     // 'Tudo do plano Protetor',
  //     // 'Visita mensal à ONG (com agendamento)',
  //     // 'Placa comemorativa física',
  //     // 'Participação em decisões da ONG',
  //     // 'Padrinho/madrinha oficial de um animal',
  //   ],
  // },
]
