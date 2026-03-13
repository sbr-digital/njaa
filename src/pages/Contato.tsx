import { useState, type FormEvent } from 'react'
import { Mail, Phone, Instagram, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { AnimatedSection } from '@/components/AnimatedSection'
import { socialLinks } from '@/data/navigation'

export function Contato() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulação de envio — integrar com backend/email service quando disponível
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1200)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <SEO
        title="Contato"
        description="Entre em contato com o NJAA. Tire dúvidas sobre adoção, doações, voluntariado ou parcerias."
        canonical="/contato"
      />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white text-center">
        <div className="container-custom">
          <AnimatedSection>
            <Mail size={40} className="mx-auto mb-4 opacity-80" />
            <h1 className="font-display font-bold text-5xl mb-3">Fale Conosco</h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Tem dúvidas sobre adoção, quer ser voluntário ou fazer uma doação?
              Estamos aqui para ajudar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <AnimatedSection>
              <div className="card p-8">
                {sent ? (
                  <div className="text-center py-8">
                    <CheckCircle2 size={56} className="mx-auto text-green-500 mb-4" />
                    <h2 className="font-display font-bold text-2xl text-dark mb-2">
                      Mensagem enviada!
                    </h2>
                    <p className="text-gray-500">
                      Em breve nossa equipe entrará em contato. Obrigado! 🐾
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                      className="mt-6 btn-secondary"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <h2 className="font-display font-bold text-2xl text-dark mb-1">
                      Envie uma mensagem
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Nome *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          E-mail *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition bg-white"
                      >
                        <option value="">Selecione...</option>
                        <option value="adocao">Adoção de animal</option>
                        <option value="doacao">Doação</option>
                        <option value="voluntario">Voluntariado</option>
                        <option value="parceria">Parceria</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Escreva sua mensagem..."
                        className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center"
                    >
                      {loading ? (
                        <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      ) : (
                        <Send size={16} />
                      )}
                      {loading ? 'Enviando...' : 'Enviar mensagem'}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Info de contato */}
            <AnimatedSection delay={150} className="space-y-6">
              <div>
                <h2 className="font-display font-bold text-2xl text-dark mb-6">
                  Outras formas de contato
                </h2>
                {[
                  {
                    icon: Phone,
                    label: 'WhatsApp',
                    value: '+55 53 9 9999-9999',
                    href: socialLinks.whatsapp,
                    external: true,
                  },
                  {
                    icon: Mail,
                    label: 'E-mail',
                    value: socialLinks.email,
                    href: `mailto:${socialLinks.email}`,
                    external: false,
                  },
                  {
                    icon: Instagram,
                    label: 'Instagram',
                    value: '@njaa_jag',
                    href: socialLinks.instagram,
                    external: true,
                  },
                  {
                    icon: MapPin,
                    label: 'Localização',
                    value: 'Jaguarão, Rio Grande do Sul, Brasil',
                    href: 'https://maps.google.com/?q=Jaguarão,RS',
                    external: true,
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="card flex items-center gap-4 p-5 hover:border-primary-200 transition-colors group mb-3"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors shrink-0">
                      <item.icon size={20} className="text-primary-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                      <p className="text-dark font-medium text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="card p-6 bg-primary-50 border-primary-100">
                <h3 className="font-display font-semibold text-dark mb-2">Horário de atendimento</h3>
                <p className="text-gray-600 text-sm">
                  Segunda a sexta: 9h às 17h<br />
                  Sábados: 9h às 12h<br />
                  <span className="text-gray-400">Atendimento emergencial via WhatsApp</span>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
