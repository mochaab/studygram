export default function Diagram() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-mtls1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#4ade80" />
        </marker>
        <marker id="arr-mtls2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#fbbf24" />
        </marker>
        <marker id="arr-mtls3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#2dd4bf" />
        </marker>
      </defs>

      {/* Service A */}
      <rect x="10" y="60" width="100" height="70" rx="10" fill="#1e3a5f" stroke="#2dd4bf" strokeWidth="1.5" />
      <text x="60" y="83" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontWeight="600">Service A</text>
      <text x="60" y="99" textAnchor="middle" fill="#2dd4bf" fontSize="9">holds cert 🪪</text>
      <text x="60" y="115" textAnchor="middle" fill="#64748b" fontSize="8">signed by CA</text>
      <text x="60" y="127" textAnchor="middle" fill="#64748b" fontSize="8">e.g. Istio CA</text>

      {/* Service B */}
      <rect x="210" y="60" width="100" height="70" rx="10" fill="#1e3a5f" stroke="#2dd4bf" strokeWidth="1.5" />
      <text x="260" y="83" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontWeight="600">Service B</text>
      <text x="260" y="99" textAnchor="middle" fill="#2dd4bf" fontSize="9">holds cert 🪪</text>
      <text x="260" y="115" textAnchor="middle" fill="#64748b" fontSize="8">signed by CA</text>
      <text x="260" y="127" textAnchor="middle" fill="#64748b" fontSize="8">e.g. Istio CA</text>

      {/* Step 1: A sends cert to B */}
      <path d="M110 82 L210 82" stroke="#4ade80" strokeWidth="1.5" markerEnd="url(#arr-mtls1)" />
      <text x="160" y="75" textAnchor="middle" fill="#4ade80" fontSize="8">① "Here's my cert"</text>

      {/* Step 2: B sends cert back */}
      <path d="M210 108 L110 108" stroke="#fbbf24" strokeWidth="1.5" markerEnd="url(#arr-mtls2)" />
      <text x="160" y="122" textAnchor="middle" fill="#fbbf24" fontSize="8">② "Here's my cert"</text>

      {/* Step 3: Tunnel opens */}
      <path d="M110 148 L210 148" stroke="#2dd4bf" strokeWidth="2.5" markerEnd="url(#arr-mtls3)" />
      <text x="160" y="143" textAnchor="middle" fill="#2dd4bf" fontSize="8">③ Both verified</text>
      <text x="160" y="162" textAnchor="middle" fill="#2dd4bf" fontSize="9" fontWeight="600">🔐 Encrypted tunnel opens</text>

      <text x="160" y="184" textAnchor="middle" fill="#64748b" fontSize="9">Neither side can fake their identity — certs are signed by a trusted CA</text>
    </svg>
  )
}
