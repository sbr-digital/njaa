import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  image?: string
  type?: string
  keywords?: string
}

const BASE_TITLE = 'NJAA — Núcleo Jaguarense de Assistência Animal'
const BASE_URL = 'https://njaa.ong.br'
const BASE_IMAGE = `${BASE_URL}/og-image.jpg`

export function SEO({
  title,
  description = 'ONG dedicada ao resgate, cuidado e adoção de animais abandonados em Jaguarão, RS.',
  canonical,
  image = BASE_IMAGE,
  type = 'website',
  keywords,
}: SEOProps) {
  const pageTitle = title ? `${title} | NJAA` : BASE_TITLE
  const pageCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={pageCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="NJAA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NGO',
          name: 'Núcleo Jaguarense de Assistência Animal',
          alternateName: 'NJAA',
          url: BASE_URL,
          logo: `${BASE_URL}/favicon.svg`,
          description,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jaguarão',
            addressRegion: 'RS',
            addressCountry: 'BR',
          },
          sameAs: ['https://www.instagram.com/njaa_jag/'],
        })}
      </script>
    </Helmet>
  )
}
