import { Link } from 'react-router-dom'
import { Instagram, Mail, Phone, Heart } from 'lucide-react'
import { navLinks, socialLinks } from '@/data/navigation'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white" role="contentinfo">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3" aria-label="NJAA Home">
              <span className="text-3xl">🐾</span>
              <span className="font-display font-bold text-2xl text-primary-400">NJAA</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Núcleo Jaguarense de Assistência Animal. Salvando vidas, um animal de cada vez.
            </p>
            <p className="text-gray-500 text-xs mt-3">
              CNPJ: 12.028.813/0001-79
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Páginas</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 text-sm transition-colors"
                  aria-label="Instagram da NJAA"
                >
                  <Instagram size={16} />
                  @njaa_jag
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 text-sm transition-colors"
                  aria-label="E-mail da NJAA"
                >
                  <Mail size={16} />
                  {socialLinks.email}
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-primary-400 text-sm transition-colors"
                  aria-label="WhatsApp da NJAA"
                >
                  <Phone size={16} />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>&copy; {year} NJAA — Núcleo Jaguarense de Assistência Animal. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart size={12} className="text-primary-400" aria-hidden /> em Jaguarão, RS
          </p>
        </div>
      </div>
    </footer>
  )
}
