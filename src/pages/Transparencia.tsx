import { BarChart2, TrendingUp, FileText } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { AnimatedSection } from '@/components/AnimatedSection'
import { StatCard } from '@/components/StatCard'
import {
  transparencyStats,
  financialRecords,
  recentExpenses,
  expenseCategoryLabels,
  expenseCategoryColors,
} from '@/data/stats'
import { formatCurrency } from '@/utils/format'

export function Transparencia() {
  const byYear = financialRecords.reduce<Record<number, typeof financialRecords>>((acc, rec) => {
    acc[rec.year] = [...(acc[rec.year] ?? []), rec]
    return acc
  }, {})

  return (
    <>
      <SEO
        title="Transparência"
        description="Veja os dados financeiros e o impacto do NJAA. Acreditamos na transparência total com nossos sócios e doadores."
        canonical="/transparencia"
        keywords="transparência ONG, relatório financeiro NJAA, prestação de contas animais"
      />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white text-center">
        <div className="container-custom">
          <AnimatedSection>
            <BarChart2 size={40} className="mx-auto mb-4 opacity-80" />
            <h1 className="font-display font-bold text-5xl mb-3">Transparência</h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Cada centavo doado é aplicado diretamente no bem-estar animal.
              Confira nossas contas abertas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title mb-3">Impacto acumulado</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {transparencyStats.map((stat, i) => (
              <AnimatedSection key={stat.id} delay={i * 80}>
                <StatCard stat={stat} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Registros financeiros */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <AnimatedSection className="mb-10">
            <h2 className="section-title flex items-center gap-2 mb-1">
              <TrendingUp size={28} className="text-primary-500" /> Registros Financeiros
            </h2>
            <p className="text-gray-500">Entradas, saídas e saldo por trimestre.</p>
          </AnimatedSection>

          {Object.entries(byYear)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, records]) => (
              <AnimatedSection key={year} className="mb-8">
                <h3 className="font-display font-semibold text-xl text-dark mb-3">{year}</h3>
                <div className="overflow-x-auto rounded-2xl border border-gray-100">
                  <table className="w-full text-sm bg-white" aria-label={`Registros ${year}`}>
                    <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
                      <tr>
                        <th className="text-left px-5 py-3">Período</th>
                        <th className="text-right px-5 py-3">Recebido</th>
                        <th className="text-right px-5 py-3">Gasto</th>
                        <th className="text-right px-5 py-3">Saldo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {records.map((rec) => (
                        <tr key={`${rec.year}-${rec.quarter}`} className="hover:bg-gray-50 transition-colors">
                          <td className="px-5 py-3.5 font-medium text-dark">{rec.quarter} {rec.year}</td>
                          <td className="px-5 py-3.5 text-right text-green-600 font-medium">{formatCurrency(rec.received)}</td>
                          <td className="px-5 py-3.5 text-right text-red-500 font-medium">{formatCurrency(rec.spent)}</td>
                          <td className="px-5 py-3.5 text-right font-semibold text-primary-600">{formatCurrency(rec.balance)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AnimatedSection>
            ))}
        </div>
      </section>

      {/* Despesas recentes */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection className="mb-10">
            <h2 className="section-title flex items-center gap-2 mb-1">
              <FileText size={28} className="text-primary-500" /> Despesas Recentes
            </h2>
            <p className="text-gray-500">Últimas movimentações de saída registradas.</p>
          </AnimatedSection>
          <div className="space-y-3">
            {recentExpenses.map((expense, i) => (
              <AnimatedSection key={expense.id} delay={i * 60}>
                <div className="card p-5 flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className={`badge ${expenseCategoryColors[expense.category]} shrink-0`}>
                    {expenseCategoryLabels[expense.category]}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-dark font-medium text-sm">{expense.description}</p>
                    {expense.beneficiary && (
                      <p className="text-gray-400 text-xs mt-0.5">Beneficiário: {expense.beneficiary}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-xs text-gray-400">
                      {new Date(expense.date).toLocaleDateString('pt-BR')}
                    </span>
                    <span className="font-bold text-dark">{formatCurrency(expense.amount)}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
