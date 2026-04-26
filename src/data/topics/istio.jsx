import info from '../../../resources/DevOpsCon2024/topic1-istio-service-mesh/information.json'
import IstioNoMesh from '../../../resources/DevOpsCon2024/topic1-istio-service-mesh/istio-no-mesh.jsx'
import IstioAdvantages from '../../../resources/DevOpsCon2024/topic1-istio-service-mesh/istio-advantages.jsx'
import IstioWhatIsClassic from '../../../resources/DevOpsCon2024/topic1-istio-service-mesh/istio-what-is-classic.jsx'
import IstioWhatIsAmbient from '../../../resources/DevOpsCon2024/topic1-istio-service-mesh/istio-what-is-ambient.jsx'
import IstioClassic from '../../../resources/DevOpsCon2024/topic1-istio-service-mesh/istio-classic.jsx'
import IstioAmbient from '../../../resources/DevOpsCon2024/topic1-istio-service-mesh/istio-ambient.jsx'
import IstioZtunnel from '../../../resources/DevOpsCon2024/topic1-istio-service-mesh/istio-ztunnel.jsx'
import IstioComparison from '../../../resources/DevOpsCon2024/topic1-istio-service-mesh/istio-comparison.jsx'

const diagramComponents = {
  'istio-no-mesh': IstioNoMesh,
  'istio-advantages': IstioAdvantages,
  'istio-what-is-classic': IstioWhatIsClassic,
  'istio-what-is-ambient': IstioWhatIsAmbient,
  'istio-classic': IstioClassic,
  'istio-ambient': IstioAmbient,
  'istio-ztunnel': IstioZtunnel,
  'istio-comparison': IstioComparison,
}

export const istioCards = info.cards.map(card => {
  const DiagramComponent = diagramComponents[card.id]
  return { ...card, diagram: <DiagramComponent /> }
})
