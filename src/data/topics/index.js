import istioInfo from '../../../resources/DevOpsCon2024/topic1-istio-service-mesh/information.json'
import securityInfo from '../../../resources/DevOpsCon2024/topic2-jwt-vs-mtls/information.json'
import { istioCards } from './istio.jsx'
import { securityCards } from './security.jsx'

export const topics = {
  [istioInfo.slug]: {
    name: istioInfo.name,
    description: istioInfo.description,
    category: istioInfo.category,
    nextSlug: istioInfo.nextSlug,
    cards: istioCards,
  },
  [securityInfo.slug]: {
    name: securityInfo.name,
    description: securityInfo.description,
    category: securityInfo.category,
    nextSlug: securityInfo.nextSlug,
    cards: securityCards,
  },
}

export const categories = [istioInfo, securityInfo].reduce((acc, info) => {
  if (!acc[info.category]) acc[info.category] = []
  acc[info.category].push(info.slug)
  return acc
}, {})

export const suggestions = Object.entries(categories).map(([cat, slugs]) => ({
  category: cat,
  items: slugs.map(slug => ({ label: topics[slug].name, slug })),
}))

export const homeFeed = [...istioCards, ...securityCards]
