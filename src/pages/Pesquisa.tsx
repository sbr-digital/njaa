// src/pages/Pesquisa.tsx
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { SEO } from '@/components/SEO'
import { AnimatedSection } from '@/components/AnimatedSection'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function Pesquisa() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const navigate = useNavigate()
  const [temPets, setTemPets] = useState<'sim' | 'nao'>('nao')
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!formRef.current) return

    const formData = new FormData(formRef.current)
    const newErrors: Record<string, string> = {}

    function required(name: string, label: string) {
      const value = (formData.get(name) || '').toString().trim()
      if (!value) {
        newErrors[name] = `Por favor, informe ${label}.`
      }
    }

    // Campos obrigatórios
    required('nomeCompleto', 'seu nome completo')
    required('rua', 'a rua')
    required('numero', 'o número')
    required('bairro', 'o bairro')
    required('cidade', 'a cidade')
    required('cep', 'o CEP')

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      toast.error('Confira os campos destacados antes de enviar.')
      return
    }

    setErrors({})

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      ) // integração EmailJS + React [web:108][web:120]

      toast.success('Resposta enviada com sucesso! Obrigado por participar 🐾', {
        duration: 4000,
      })

      formRef.current.reset()
      setTemPets('nao')
      navigate('/transparencia')
    } catch (error) {
      console.error('Erro ao enviar e-mail', error)
      toast.error('Ops! Não conseguimos enviar sua resposta. Tente novamente mais tarde.', {
        duration: 5000,
      })
    }
  }

  return (
    <>
      <SEO
        title="Pesquisa com Sócios"
        description="Atualize seu endereço e nos conte sobre seus pets para receber brindes e novidades."
        canonical="/pesquisa"
      />

      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-700 to-primary-500 text-white text-center">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="font-display text-5xl font-bold mb-4">Pesquisa para Sócios</h1>
            <p className="max-w-2xl mx-auto text-lg text-white/80">
              Olá, sócio(a)! Gostaríamos que você nos ajudasse respondendo esta pesquisa.
              Queremos atualizar seu endereço de correspondência para que, quando tivermos
              brindes e novidades, possamos enviar tudo direitinho para você. 💛
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container-custom max-w-3xl">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-8 rounded-[2rem] border border-gray-200 bg-gray-50 p-8 shadow-sm"
          >
            {/* Dados de contato */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark">Dados de contato</h2>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Nome completo</span>
                <input
                  type="text"
                  name="nomeCompleto"
                  className={
                    'mt-2 w-full rounded-2xl border bg-white py-3 px-4 text-sm text-gray-900 shadow-sm outline-none focus:ring-2 ' +
                    (errors.nomeCompleto
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                      : 'border-gray-200 focus:border-primary-400 focus:ring-primary-100')
                  }
                />
                {errors.nomeCompleto && (
                  <p className="mt-1 text-xs text-red-600">{errors.nomeCompleto}</p>
                )}
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Rua</span>
                  <input
                    type="text"
                    name="rua"
                    className={
                      'mt-2 w-full rounded-2xl border bg-white py-3 px-4 text-sm text-gray-900 shadow-sm outline-none focus:ring-2 ' +
                      (errors.rua
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                        : 'border-gray-200 focus:border-primary-400 focus:ring-primary-100')
                    }
                  />
                  {errors.rua && (
                    <p className="mt-1 text-xs text-red-600">{errors.rua}</p>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Número</span>
                  <input
                    type="text"
                    name="numero"
                    className={
                      'mt-2 w-full rounded-2xl border bg-white py-3 px-4 text-sm text-gray-900 shadow-sm outline-none focus:ring-2 ' +
                      (errors.numero
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                        : 'border-gray-200 focus:border-primary-400 focus:ring-primary-100')
                    }
                  />
                  {errors.numero && (
                    <p className="mt-1 text-xs text-red-600">{errors.numero}</p>
                  )}
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Complemento</span>
                <input
                  type="text"
                  name="complemento"
                  placeholder="Apartamento, bloco, ponto de referência (opcional)"
                  className="mt-2 w-full rounded-2xl border border-gray-200 bg-white py-3 px-4 text-sm text-gray-900 shadow-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Bairro</span>
                  <input
                    type="text"
                    name="bairro"
                    className={
                      'mt-2 w-full rounded-2xl border bg-white py-3 px-4 text-sm text-gray-900 shadow-sm outline-none focus:ring-2 ' +
                      (errors.bairro
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                        : 'border-gray-200 focus:border-primary-400 focus:ring-primary-100')
                    }
                  />
                  {errors.bairro && (
                    <p className="mt-1 text-xs text-red-600">{errors.bairro}</p>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Cidade</span>
                  <input
                    type="text"
                    name="cidade"
                    className={
                      'mt-2 w-full rounded-2xl border bg-white py-3 px-4 text-sm text-gray-900 shadow-sm outline-none focus:ring-2 ' +
                      (errors.cidade
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                        : 'border-gray-200 focus:border-primary-400 focus:ring-primary-100')
                    }
                  />
                  {errors.cidade && (
                    <p className="mt-1 text-xs text-red-600">{errors.cidade}</p>
                  )}
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">CEP</span>
                <input
                  type="text"
                  name="cep"
                  className={
                    'mt-2 w-full rounded-2xl border bg-white py-3 px-4 text-sm text-gray-900 shadow-sm outline-none focus:ring-2 ' +
                    (errors.cep
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                      : 'border-gray-200 focus:border-primary-400 focus:ring-primary-100')
                  }
                />
                {errors.cep && (
                  <p className="mt-1 text-xs text-red-600">{errors.cep}</p>
                )}
              </label>
            </div>

            {/* Pets */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark">Sobre seus pets</h2>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Você tem pets?</span>
                <select
                  name="temPets"
                  value={temPets}
                  onChange={(e) => setTemPets(e.target.value as 'sim' | 'nao')}
                  className="mt-2 w-full rounded-2xl border border-gray-200 bg-white py-3 px-4 text-sm text-gray-900 shadow-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                >
                  <option value="nao">Não</option>
                  <option value="sim">Sim</option>
                </select>
              </label>

              {temPets === 'sim' && (
                <>
                  {/* Quantidade por espécie e sexo */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-700">Quantos cães?</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-xs font-medium text-gray-600">Machos</span>
                        <input
                          type="number"
                          min={0}
                          name="quantidadeCaesMacho"
                          className="mt-2 w-full rounded-2xl border border-gray-200 bg-white py-3 px-4 text-sm text-gray-900 shadow-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                        />
                      </label>

                      <label className="block">
                        <span className="text-xs font-medium text-gray-600">Fêmeas</span>
                        <input
                          type="number"
                          min={0}
                          name="quantidadeCaesFemea"
                          className="mt-2 w-full rounded-2xl border border-gray-200 bg-white py-3 px-4 text-sm text-gray-900 shadow-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-700">Quantos gatos?</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-xs font-medium text-gray-600">Machos</span>
                        <input
                          type="number"
                          min={0}
                          name="quantidadeGatosMacho"
                          className="mt-2 w-full rounded-2xl border border-gray-200 bg-white py-3 px-4 text-sm text-gray-900 shadow-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                        />
                      </label>

                      <label className="block">
                        <span className="text-xs font-medium text-gray-600">Fêmeas</span>
                        <input
                          type="number"
                          min={0}
                          name="quantidadeGatosFemea"
                          className="mt-2 w-full rounded-2xl border border-gray-200 bg-white py-3 px-4 text-sm text-gray-900 shadow-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Castrados por espécie e sexo */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-700">Cães castrados</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-xs font-medium text-gray-600">Machos castrados</span>
                        <input
                          type="number"
                          min={0}
                          name="caesMachoCastrados"
                          className="mt-2 w-full rounded-2xl border border-gray-200 bg-white py-3 px-4 text-sm text-gray-900 shadow-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                        />
                      </label>

                      <label className="block">
                        <span className="text-xs font-medium text-gray-600">Fêmeas castradas</span>
                        <input
                          type="number"
                          min={0}
                          name="caesFemeaCastradas"
                          className="mt-2 w-full rounded-2xl border border-gray-200 bg-white py-3 px-4 text-sm text-gray-900 shadow-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-700">Gatos castrados</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-xs font-medium text-gray-600">Machos castrados</span>
                        <input
                          type="number"
                          min={0}
                          name="gatosMachoCastrados"
                          className="mt-2 w-full rounded-2xl border border-gray-200 bg-white py-3 px-4 text-sm text-gray-900 shadow-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                        />
                      </label>

                      <label className="block">
                        <span className="text-xs font-medium text-gray-600">Fêmeas castradas</span>
                        <input
                          type="number"
                          min={0}
                          name="gatosFemeaCastradas"
                          className="mt-2 w-full rounded-2xl border border-gray-200 bg-white py-3 px-4 text-sm text-gray-900 shadow-sm outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                        />
                      </label>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700"
              >
                Enviar respostas
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}