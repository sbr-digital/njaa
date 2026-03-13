import { Check, Heart, Star } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { AnimatedSection } from '@/components/AnimatedSection'
import { membershipPlans } from '@/data/membership'
import { socialLinks } from '@/data/navigation'

export function SejaSocio() {
  return (
    <>
      <SEO
        title="Seja Sócio"
        description="Torne-se sócio da NJAA e ajude a salvar mais vidas. Planos a partir de R$ 20/mês com benefícios exclusivos."
        canonical="/seja-socio"
        keywords="sócio ONG animais, apoiar NJAA, doação mensal animais Jaguarão"
      />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary-500 to-primary-600 text-white text-center">
        <div className="container-custom">
          <AnimatedSection>
            <Heart size={40} className="mx-auto mb-4 opacity-80" />
            <h1 className="font-display font-bold text-5xl mb-3">Seja Sócio</h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Sua contribuição mensal garante ração, vacinas, castrações e muito
              mais para os animais sob nossos cuidados.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Planos */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-14">
            <h2 className="section-title mb-3">Escolha seu plano</h2>
            <p className="section-subtitle mx-auto">
              Todo valor é revertido 100% para os animais. Transparência total.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {membershipPlans.map((plan, i) => (
              <AnimatedSection key={plan.id} delay={i * 100}>
                <div
                  className={`card p-8 relative ${
                    plan.highlighted
                      ? 'ring-2 ring-primary-500 shadow-xl scale-105'
                      : ''
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 bg-primary-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                        <Star size={12} /> Mais popular
                      </span>
                    </div>
                  )}

                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-5`}
                  >
                    <Heart size={24} className="text-white" />
                  </div>

                  <h3 className="font-display font-bold text-2xl text-dark mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-4xl font-bold text-primary-600 mb-1">
                    R$ {plan.price}
                    <span className="text-base font-normal text-gray-400">/mês</span>
                  </p>

                  <ul className="space-y-3 my-6">
                    {plan.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`${socialLinks.whatsapp}?text=${encodeURIComponent(
                      `Olá! Quero me tornar sócio ${plan.name} da NJAA (R$ ${plan.price}/mês). 🐾`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full justify-center ${
                      plan.highlighted ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    <Heart size={16} /> Quero este plano
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Outros modos de ajudar */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-10">
            <h2 className="section-title mb-3">Outras formas de ajudar</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { emoji: '🛍️', title: 'Doação de Ração', desc: 'Entregue ração diretamente ou entre em contato para combinar a entrega.' },
              { emoji: '🩺', title: 'Apoio Veterinário', desc: 'Clínicas e profissionais que queiram apoiar com consultas ou procedimentos.' },
              { emoji: '🤝', title: 'Voluntariado', desc: 'Dedique algumas horas por semana ao cuidado e socialização dos animais.' },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <span className="text-4xl mb-3 block">{item.emoji}</span>
                <h3 className="font-display font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
