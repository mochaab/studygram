export default function Diagram() {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-cls-cfg" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L5,2.5 z" fill="#fbbf24" />
        </marker>
        <marker id="arr-cls-mtls" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L5,2.5 z" fill="#4ade80" />
        </marker>
      </defs>

      {/* Istiod — control plane */}
      <rect x="110" y="6" width="100" height="36" rx="8" fill="#2a1a06" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="160" y="22" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">Istiod</text>
      <text x="160" y="35" textAnchor="middle" fill="#fde68a" fontSize="7.5">Control Plane</text>

      {/* Config arrows: Istiod → each Envoy (dashed) */}
      <line x1="140" y1="42" x2="76" y2="64" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" markerEnd="url(#arr-cls-cfg)" />
      <line x1="160" y1="42" x2="183" y2="64" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" markerEnd="url(#arr-cls-cfg)" />
      <line x1="180" y1="42" x2="289" y2="64" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" markerEnd="url(#arr-cls-cfg)" />
      <text x="78" y="57" textAnchor="middle" fill="#fbbf24" fontSize="6.5" opacity="0.8">config</text>

      {/* Pod 1 */}
      <rect x="8" y="58" width="90" height="90" rx="8" fill="#0a1628" stroke="#2dd4bf" strokeWidth="1.5" />
      <text x="53" y="51" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontWeight="600">Pod 1</text>
      <rect x="14" y="68" width="32" height="68" rx="5" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="30" y="99" textAnchor="middle" fill="#2dd4bf" fontSize="8" fontWeight="700">App</text>
      <text x="30" y="111" textAnchor="middle" fill="#7dd3fc" fontSize="7">A</text>
      <rect x="52" y="64" width="38" height="76" rx="5" fill="#122a12" stroke="#4ade80" strokeWidth="1.5" />
      <text x="71" y="90" textAnchor="middle" fill="#4ade80" fontSize="8" fontWeight="700">Envoy</text>
      <text x="71" y="103" textAnchor="middle" fill="#86efac" fontSize="7">Sidecar</text>
      <text x="71" y="115" textAnchor="middle" fill="#475569" fontSize="6.5">🛡 guard</text>
      <text x="71" y="127" textAnchor="middle" fill="#475569" fontSize="6.5">mTLS</text>

      {/* mTLS arrow: Envoy A → Envoy B */}
      <path d="M90 103 L115 103" stroke="#4ade80" strokeWidth="2" markerEnd="url(#arr-cls-mtls)" />
      <text x="102" y="97" textAnchor="middle" fill="#4ade80" fontSize="6.5">mTLS</text>

      {/* Pod 2 */}
      <rect x="115" y="58" width="90" height="90" rx="8" fill="#0a1628" stroke="#2dd4bf" strokeWidth="1.5" />
      <text x="160" y="51" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontWeight="600">Pod 2</text>
      <rect x="121" y="68" width="32" height="68" rx="5" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="137" y="99" textAnchor="middle" fill="#2dd4bf" fontSize="8" fontWeight="700">App</text>
      <text x="137" y="111" textAnchor="middle" fill="#7dd3fc" fontSize="7">B</text>
      <rect x="159" y="64" width="38" height="76" rx="5" fill="#122a12" stroke="#4ade80" strokeWidth="1.5" />
      <text x="178" y="90" textAnchor="middle" fill="#4ade80" fontSize="8" fontWeight="700">Envoy</text>
      <text x="178" y="103" textAnchor="middle" fill="#86efac" fontSize="7">Sidecar</text>
      <text x="178" y="115" textAnchor="middle" fill="#475569" fontSize="6.5">🛡 guard</text>
      <text x="178" y="127" textAnchor="middle" fill="#475569" fontSize="6.5">mTLS</text>

      {/* mTLS arrow: Envoy B → Envoy C */}
      <path d="M197 103 L222 103" stroke="#4ade80" strokeWidth="2" markerEnd="url(#arr-cls-mtls)" />
      <text x="209" y="97" textAnchor="middle" fill="#4ade80" fontSize="6.5">mTLS</text>

      {/* Pod 3 */}
      <rect x="222" y="58" width="90" height="90" rx="8" fill="#0a1628" stroke="#2dd4bf" strokeWidth="1.5" />
      <text x="267" y="51" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontWeight="600">Pod 3</text>
      <rect x="228" y="68" width="32" height="68" rx="5" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="244" y="99" textAnchor="middle" fill="#2dd4bf" fontSize="8" fontWeight="700">App</text>
      <text x="244" y="111" textAnchor="middle" fill="#7dd3fc" fontSize="7">C</text>
      <rect x="266" y="64" width="38" height="76" rx="5" fill="#122a12" stroke="#4ade80" strokeWidth="1.5" />
      <text x="285" y="90" textAnchor="middle" fill="#4ade80" fontSize="8" fontWeight="700">Envoy</text>
      <text x="285" y="103" textAnchor="middle" fill="#86efac" fontSize="7">Sidecar</text>
      <text x="285" y="115" textAnchor="middle" fill="#475569" fontSize="6.5">🛡 guard</text>
      <text x="285" y="127" textAnchor="middle" fill="#475569" fontSize="6.5">mTLS</text>

      {/* Bottom labels */}
      <text x="160" y="170" textAnchor="middle" fill="#64748b" fontSize="8">Every pod runs its own Envoy — Istiod pushes config to each one</text>
      <text x="160" y="184" textAnchor="middle" fill="#4ade80" fontSize="8">Traffic travels sidecar-to-sidecar over mTLS · apps never see encryption</text>
    </svg>
  )
}
