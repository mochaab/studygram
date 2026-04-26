export default function Diagram() {
  return (
    <svg viewBox="0 0 320 215" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-zt-down" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#94a3b8" />
        </marker>
        <marker id="arr-zt-up" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L6,3 z" fill="#4ade80" />
        </marker>
      </defs>

      {/* Node boundary */}
      <rect x="8" y="12" width="304" height="156" rx="12" fill="#0d1117" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="160" y="6" textAnchor="middle" fill="#818cf8" fontSize="9" fontWeight="600">Kubernetes Node</text>

      {/* Pod row */}
      <rect x="18" y="22" width="62" height="52" rx="7" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="49" y="44" textAnchor="middle" fill="#2dd4bf" fontSize="9" fontWeight="700">Pod A</text>
      <text x="49" y="58" textAnchor="middle" fill="#475569" fontSize="7">no sidecar</text>

      <rect x="90" y="22" width="62" height="52" rx="7" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="121" y="44" textAnchor="middle" fill="#2dd4bf" fontSize="9" fontWeight="700">Pod B</text>
      <text x="121" y="58" textAnchor="middle" fill="#475569" fontSize="7">no sidecar</text>

      <rect x="162" y="22" width="62" height="52" rx="7" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="193" y="44" textAnchor="middle" fill="#2dd4bf" fontSize="9" fontWeight="700">Pod C</text>
      <text x="193" y="58" textAnchor="middle" fill="#475569" fontSize="7">no sidecar</text>

      <rect x="234" y="22" width="68" height="52" rx="7" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="268" y="44" textAnchor="middle" fill="#2dd4bf" fontSize="9" fontWeight="700">Pod D</text>
      <text x="268" y="58" textAnchor="middle" fill="#475569" fontSize="7">no sidecar</text>

      {/* Arrows down to ztunnel */}
      <line x1="49" y1="74" x2="49" y2="108" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="121" y1="74" x2="121" y2="108" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="193" y1="74" x2="193" y2="108" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="268" y1="74" x2="268" y2="108" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />

      {/* ztunnel box */}
      <rect x="18" y="108" width="284" height="52" rx="9" fill="#122a12" stroke="#4ade80" strokeWidth="2" />
      <text x="160" y="128" textAnchor="middle" fill="#4ade80" fontSize="12" fontWeight="700">ztunnel</text>
      <text x="160" y="144" textAnchor="middle" fill="#86efac" fontSize="8">mTLS encryption · L4 policy · telemetry · one agent for all pods</text>

      {/* What ztunnel does — feature pills */}
      <rect x="20" y="174" width="68" height="22" rx="5" fill="#122a12" stroke="#4ade80" strokeWidth="1" />
      <text x="54" y="189" textAnchor="middle" fill="#4ade80" fontSize="8">🔐 mTLS</text>

      <rect x="96" y="174" width="68" height="22" rx="5" fill="#1a1a2e" stroke="#818cf8" strokeWidth="1" />
      <text x="130" y="189" textAnchor="middle" fill="#818cf8" fontSize="8">🛡 L4 policy</text>

      <rect x="172" y="174" width="68" height="22" rx="5" fill="#2a1a0e" stroke="#fbbf24" strokeWidth="1" />
      <text x="206" y="189" textAnchor="middle" fill="#fbbf24" fontSize="8">📊 telemetry</text>

      <rect x="248" y="174" width="60" height="22" rx="5" fill="#0e2a2a" stroke="#2dd4bf" strokeWidth="1" />
      <text x="278" y="189" textAnchor="middle" fill="#2dd4bf" fontSize="8">⚡ L4 only</text>
    </svg>
  )
}
