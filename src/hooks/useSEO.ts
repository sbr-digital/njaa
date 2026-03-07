import { useEffect } from 'react'

interface SEOOptions {
  title: string
  description: string
  canonical?: string
  keywords?: string
}

export function useSEO({ title, description, canonical, keywords }: SEOOptions) {
  useEffect(() => {
    document.title = title
    setMeta('description', description)
    if (keywords) setMeta('keywords', keywords)
    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonical
    }
  }, [title, description, canonical, keywords])
}

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.name = name
    document.head.appendChild(el)
  }
  el.content = content
}
