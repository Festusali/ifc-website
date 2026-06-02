import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'

export interface SeoOptions {
  title?: string
  appendSiteName?: boolean
  description?: string
  keywords?: string[]
  author?: string
  image?: string
  noIndex?: boolean
  canonical?: string
  type?: string
}

const SITE_NAME = 'Immaeby Fashion Closet'
const DEFAULT_DESCRIPTION =
  'Discover premium fashion pieces, shoes, bags and accessories curated for elegance, confidence and timeless everyday style.'
const DEFAULT_KEYWORDS =
  'fashion, unisex fashion, premium fashion, streetwear, bags, shoes, accessories, fashion store, online fashion shop, luxury fashion'
const DEFAULT_IMAGE = '/images/og-image.jpg'
const DEFAULT_TITLE = 'Stylish Unisex Fashion For Every Closet'

export function useSeo(options: MaybeRefOrGetter<SeoOptions> = {}) {
  const route = useRoute()
  const seo = computed(() => toValue(options))
  const origin = import.meta.env.VITE_SITE_URL || 'https://www.immaeby.com'

  useHead(
    computed(() => {
      const current = seo.value
      const currentUrl = current.canonical || `${origin}${route.fullPath}`
      const imageUrl = current.image ? `${origin}${current.image}` : `${origin}${DEFAULT_IMAGE}`
      const title = current.title || DEFAULT_TITLE
      const fullTitle = current.appendSiteName === false ? title : `${title} | ${SITE_NAME}`
      const description = current.description || DEFAULT_DESCRIPTION
      const keywords = current.keywords?.join(', ') || DEFAULT_KEYWORDS
      const author = current.author || 'Festus Ali (contact@festusali.com)'

      return {
        title: fullTitle,

        meta: [
          { name: 'title', content: fullTitle },
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
          { name: 'author', content: author },
          { name: 'robots', content: current.noIndex ? 'noindex, nofollow' : 'index, follow' },
          { name: 'theme-color', content: '#B5522D' },

          // Open Graph
          { property: 'og:type', content: current.type || 'website' },
          { property: 'og:url', content: currentUrl },
          { property: 'og:title', content: fullTitle },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:site_name', content: SITE_NAME },

          // Twitter
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:url', content: currentUrl },
          { name: 'twitter:title', content: fullTitle },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
        ],

        link: [{ rel: 'canonical', href: currentUrl }],

        script: [
          {
            type: 'application/ld+json',
            key: 'ld-json',
            textContent: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': current.type || 'ClothingStore',

              name: SITE_NAME,
              url: origin,
              logo: `${origin}/immaeby-logo.png`,
              image: imageUrl,
              description,

              address: { '@type': 'PostalAddress', addressCountry: 'NG' },
              telephone: '+2348012345678',

              sameAs: [
                'https://instagram.com/immaebyfashion',
                'https://facebook.com/immaebyfashion',
                'https://twitter.com/immaebyfashion',
              ],
            }),
          },
        ],
      }
    }),
  )
}
