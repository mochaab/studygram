export default function Diagram() {
  return (
    <svg viewBox="0 0 320 210" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-wia-mtls" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L5,2.5 z" fill="#4ade80" />
        </marker>
      </defs>

      {/* Node boundary */}
      <rect x="8" y="14" width="304" height="152" rx="12" fill="#0d1117" stroke="#6366f1" strokeWidth="2" strokeDasharray="6 3" />
      <text x="160" y="8" textAnchor="middle" fill="#818cf8" fontSize="9" fontWeight="600">Kubernetes Node</text>

      {/* Pod A */}
      <rect x="20" y="26" width="64" height="80" rx="8" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1.5" />
      <text x="52" y="54" textAnchor="middle" fill="#2dd4bf" fontSize="10" fontWeight="700">App A</text>
      <text x="52" y="70" textAnchor="middle" fill="#7dd3fc" fontSize="8">Service</text>
      <text x="52" y="86" textAnchor="middle" fill="#4ade80" fontSize="7.5">✓ no sidecar</text>
      <text x="52" y="98" textAnchor="middle" fill="#475569" fontSize="7">lean pod</text>

      {/* Pod B */}
      <rect x="96" y="26" width="64" height="80" rx="8" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1.5" />
      <text x="128" y="54" textAnchor="middle" fill="#2dd4bf" fontSize="10" fontWeight="700">App B</text>
      <text x="128" y="70" textAnchor="middle" fill="#7dd3fc" fontSize="8">Service</text>
      <text x="128" y="86" textAnchor="middle" fill="#4ade80" fontSize="7.5">✓ no sidecar</text>
      <text x="128" y="98" textAnchor="middle" fill="#475569" fontSize="7">lean pod</text>

      {/* Pod C */}
      <rect x="172" y="26" width="64" height="80" rx="8" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1.5" />
      <text x="204" y="54" textAnchor="middle" fill="#2dd4bf" fontSize="10" fontWeight="700">App C</text>
      <text x="204" y="70" textAnchor="middle" fill="#7dd3fc" fontSize="8">Service</text>
      <text x="204" y="86" textAnchor="middle" fill="#4ade80" fontSize="7.5">✓ no sidecar</text>
      <text x="204" y="98" textAnchor="middle" fill="#475569" fontSize="7">lean pod</text>

      {/* Pod D */}
      <rect x="248" y="26" width="54" height="80" rx="8" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1.5" />
      <text x="275" y="54" textAnchor="middle" fill="#2dd4bf" fontSize="10" fontWeight="700">App D</text>
      <text x="275" y="70" textAnchor="middle" fill="#7dd3fc" fontSize="8">Service</text>
      <text x="275" y="86" textAnchor="middle" fill="#4ade80" fontSize="7.5">✓ no sidecar</text>
      <text x="275" y="98" textAnchor="middle" fill="#475569" fontSize="7">lean pod</text>

      {/* Drop lines from pods to ztunnel */}
      <line x1="52" y1="106" x2="52" y2="130" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="128" y1="106" x2="128" y2="130" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="204" y1="106" x2="204" y2="130" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="275" y1="106" x2="275" y2="130" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />

      {/* ztunnel */}
      <rect x="20" y="130" width="284" height="26" rx="8" fill="#122a12" stroke="#4ade80" strokeWidth="2" />
      <text x="162" y="148" textAnchor="middle" fill="#4ade80" fontSize="11" fontWeight="700">ztunnel — shared security for the whole node</text>

      {/* Bottom labels */}
      <text x="160" y="180" textAnchor="middle" fill="#64748b" fontSize="8.5">ztunnel intercepts all traffic transparently at the kernel level</text>
      <text x="160" y="194" textAnchor="middle" fill="#4ade80" fontSize="8">mTLS, policy, and telemetry — handled by one agent for all pods</text>
    </svg>
  )
}
