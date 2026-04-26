export default function Diagram() {
  return (
    <svg viewBox="0 0 320 210" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-wic-mtls" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L5,2.5 z" fill="#4ade80" />
        </marker>
        <marker id="arr-wic-plain" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L5,2.5 z" fill="#94a3b8" />
        </marker>
      </defs>

      {/* Pod A */}
      <rect x="10" y="30" width="128" height="130" rx="10" fill="#0a1628" stroke="#2dd4bf" strokeWidth="1.5" />
      <text x="74" y="22" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="600">Pod A</text>

      {/* App A */}
      <rect x="18" y="44" width="52" height="104" rx="7" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="44" y="82" textAnchor="middle" fill="#2dd4bf" fontSize="11" fontWeight="700">App</text>
      <text x="44" y="98" textAnchor="middle" fill="#7dd3fc" fontSize="9">Service A</text>
      <text x="44" y="120" textAnchor="middle" fill="#475569" fontSize="7.5">writes zero</text>
      <text x="44" y="133" textAnchor="middle" fill="#475569" fontSize="7.5">security code</text>

      {/* Envoy A */}
      <rect x="78" y="38" width="52" height="116" rx="7" fill="#122a12" stroke="#4ade80" strokeWidth="2" />
      <text x="104" y="68" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="700">Envoy</text>
      <text x="104" y="82" textAnchor="middle" fill="#86efac" fontSize="8.5">Sidecar</text>
      <text x="104" y="100" textAnchor="middle" fill="#86efac" fontSize="8">🔐 encrypt</text>
      <text x="104" y="114" textAnchor="middle" fill="#86efac" fontSize="8">🪪 verify ID</text>
      <text x="104" y="128" textAnchor="middle" fill="#86efac" fontSize="8">📊 log</text>
      <text x="104" y="144" textAnchor="middle" fill="#475569" fontSize="7">your bodyguard</text>

      {/* mTLS arrow */}
      <path d="M138 96 L182 96" stroke="#4ade80" strokeWidth="2.5" markerEnd="url(#arr-wic-mtls)" />
      <text x="160" y="84" textAnchor="middle" fill="#4ade80" fontSize="9" fontWeight="700">mTLS</text>
      <text x="160" y="111" textAnchor="middle" fill="#4ade80" fontSize="7.5">encrypted</text>

      {/* Pod B */}
      <rect x="182" y="30" width="128" height="130" rx="10" fill="#0a1628" stroke="#2dd4bf" strokeWidth="1.5" />
      <text x="246" y="22" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="600">Pod B</text>

      {/* Envoy B */}
      <rect x="190" y="38" width="52" height="116" rx="7" fill="#122a12" stroke="#4ade80" strokeWidth="2" />
      <text x="216" y="68" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="700">Envoy</text>
      <text x="216" y="82" textAnchor="middle" fill="#86efac" fontSize="8.5">Sidecar</text>
      <text x="216" y="100" textAnchor="middle" fill="#86efac" fontSize="8">🔓 decrypt</text>
      <text x="216" y="114" textAnchor="middle" fill="#86efac" fontSize="8">🪪 verify ID</text>
      <text x="216" y="128" textAnchor="middle" fill="#86efac" fontSize="8">📊 log</text>
      <text x="216" y="144" textAnchor="middle" fill="#475569" fontSize="7">your bodyguard</text>

      {/* App B */}
      <rect x="250" y="44" width="52" height="104" rx="7" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="276" y="82" textAnchor="middle" fill="#2dd4bf" fontSize="11" fontWeight="700">App</text>
      <text x="276" y="98" textAnchor="middle" fill="#7dd3fc" fontSize="9">Service B</text>
      <text x="276" y="120" textAnchor="middle" fill="#475569" fontSize="7.5">gets plain</text>
      <text x="276" y="133" textAnchor="middle" fill="#475569" fontSize="7.5">message</text>

      {/* Bottom note */}
      <text x="160" y="182" textAnchor="middle" fill="#64748b" fontSize="8.5">1 Envoy sidecar per pod — injected automatically by Istio</text>
      <text x="160" y="196" textAnchor="middle" fill="#4ade80" fontSize="8">Apps talk to each other as normal · sidecars handle all security</text>
    </svg>
  )
}
