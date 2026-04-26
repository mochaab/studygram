import { istioCards } from './istio.jsx'
import { securityCards } from './security.jsx'

export const topics = {
  istio: {
    name: 'Istio Service Mesh',
    description: 'How Istio brings automatic security, traffic control, and observability to your microservices — without touching your app code.',
    category: 'Security',
    nextSlug: 'jwt-mtls',
    cards: istioCards,
  },
  'jwt-mtls': {
    name: 'JWT vs mTLS',
    description: 'Two pillars of modern security — one proves who the user is, the other proves which machine is talking.',
    category: 'Security',
    nextSlug: null,
    cards: securityCards,
  },
}

export const categories = {
  Security: ['istio', 'jwt-mtls'],
}

export const suggestions = Object.entries(categories).map(([cat, slugs]) => ({
  category: cat,
  items: slugs.map(slug => ({ label: topics[slug].name, slug })),
}))

export const homeFeed = [...istioCards, ...securityCards]
