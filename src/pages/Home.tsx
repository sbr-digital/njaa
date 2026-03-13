import { Link } from 'react-router-dom'
import { Heart, PawPrint, Users, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { AnimatedSection } from '@/components/AnimatedSection'
import { StatCard } from '@/components/StatCard'
import { AnimalCard } from '@/components/AnimalCard'
import { animals } from '@/data/animals'
import { transparencyStats } from '@/data/stats'
import { socialLinks } from '@/data/navigation'

export function Home() {
  const featured = animals.filter((a) => a.status === 'disponivel').slice(0, 3)

  return (
    <>
      <SEO
        description="NJAA — Núcleo Jaguarense de Assistência Animal. Resgatamos, cuidamos e encontramos lares amorosos para animais abandonados em Jaguarão, RS."
        keywords="adoção animais, cachorro para adotar, gato para adotar, ONG animais Jaguarão, NJAA"
      />

      {/* Hero */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 overflow-hidden"
        aria-label="Seção principal"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none text-[12rem] leading-none grid grid-cols-4 overflow-hidden">
          {'🐾'.repeat(16)}
        </div>

        <div className="container-custom relative z-10 text-center py-24 px-4">
          <AnimatedSection animation="fade-up">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <PawPrint size={14} /> Jaguarão, RS
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white leading-tight mb-6 text-balance">
              Salvar vidas é<br />
              <span className="text-white/80">nossa missão</span>
            </h1>
            <p className="text-white/80 text-xl max-w-xl mx-auto mb-10">
              O NJAA resgata, cuida e encontra lares amorosos para animais
              abandonados. Cada adoção é uma vida transformada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/adocao" className="btn-primary text-base px-8 py-4">
                <Heart size={18} /> Ver animais para adoção
              </Link>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-8 py-4"
              >
                <Users size={18} /> Seja Sócio
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white" aria-label="Números da ONG">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title mb-3">Nosso impacto em números</h2>
            <p className="section-subtitle mx-auto">
              Cada número representa uma vida cuidada com amor e dedicação.
            </p>
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

      {/* Quem Somos */}
      <section id="quem-somos" className="py-20 bg-light" aria-label="Quem somos">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-1.5 text-primary-600 font-semibold text-sm mb-3">
                <PawPrint size={16} /> Quem somos
              </span>
              <h2 className="section-title mb-5">
                Uma ONG feita de amor pelos animais
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fundado em Jaguarão/RS, o NJAA — Núcleo Jaguarense de Assistência
                Animal é uma organização sem fins lucrativos dedicada ao resgate,
                tratamento e adoção responsável de animais em situação de
                vulnerabilidade.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Acreditamos que todo animal merece um lar seguro, cuidado
                veterinário e, acima de tudo, amor. Contamos com voluntários,
                doadores e sócios que tornam essa missão possível todos os dias.
              </p>
              <Link to="/seja-socio" className="btn-primary">
                <Heart size={16} /> Quero apoiar
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={150} className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🐾', title: 'Resgate', desc: 'Atuamos em casos de maus-tratos e abandono em toda a região.' },
                { emoji: '💉', title: 'Saúde Animal', desc: 'Vacinação, castração e atendimento veterinário para todos.' },
                { emoji: '🏠', title: 'Adoção', desc: 'Processo responsável para garantir o lar certo para cada animal.' },
                { emoji: '❤️', title: 'Voluntariado', desc: 'Mais de 50 voluntários dedicam seu tempo à causa animal.' },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <span className="text-3xl mb-2 block">{item.emoji}</span>
                  <h3 className="font-display font-semibold text-dark mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Animais em Destaque */}
      <section className="py-20 bg-white" aria-label="Animais disponíveis para adoção">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title mb-3">Prontos para te amar</h2>
            <p className="section-subtitle mx-auto">
              Conheça alguns dos animais que aguardam um lar cheio de carinho.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featured.map((animal, i) => (
              <AnimatedSection key={animal.id} delay={i * 100}>
                <AnimalCard animal={animal} />
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center">
            <Link to="/adocao" className="btn-secondary">
              Ver todos os animais <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500" aria-label="Chamada para ação">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Você pode fazer a diferença
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Adote, seja voluntário, doe ração ou torne-se sócio. Qualquer gesto
              de amor salva vidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/adocao" className="btn-secondary">
                <Heart size={16} /> Adotar agora
              </Link>
              <Link to="/seja-socio" className="btn-ghost">
                Ser sócio <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
