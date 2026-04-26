import info from '../../../resources/DevOpsCon2024/topic2-jwt-vs-mtls/information.json'
import JwtMtlsIntro from '../../../resources/DevOpsCon2024/topic2-jwt-vs-mtls/jwt-mtls-intro.jsx'
import JwtDetail from '../../../resources/DevOpsCon2024/topic2-jwt-vs-mtls/jwt-detail.jsx'
import JwtUsecases from '../../../resources/DevOpsCon2024/topic2-jwt-vs-mtls/jwt-usecases.jsx'
import MtlsDetail from '../../../resources/DevOpsCon2024/topic2-jwt-vs-mtls/mtls-detail.jsx'
import MtlsUsecases from '../../../resources/DevOpsCon2024/topic2-jwt-vs-mtls/mtls-usecases.jsx'

const diagramComponents = {
  'jwt-mtls-intro': JwtMtlsIntro,
  'jwt-detail': JwtDetail,
  'jwt-usecases': JwtUsecases,
  'mtls-detail': MtlsDetail,
  'mtls-usecases': MtlsUsecases,
}

export const securityCards = info.cards.map(card => {
  const DiagramComponent = diagramComponents[card.id]
  return { ...card, diagram: <DiagramComponent /> }
})
