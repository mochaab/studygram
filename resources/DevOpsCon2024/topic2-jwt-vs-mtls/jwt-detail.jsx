export default function Diagram() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-jwt1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#fbbf24" />
        </marker>
        <marker id="arr-jwt2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#4ade80" />
        </marker>
      </defs>

      {/* JWT structure label */}
      <text x="160" y="18" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600">Token = Header . Payload . Signature</text>

      {/* Header box */}
      <rect x="10" y="28" width="88" height="56" rx="8" fill="#312e81" stroke="#818cf8" strokeWidth="1.5" />
      <text x="54" y="47" textAnchor="middle" fill="#a5b4fc" fontSize="10" fontWeight="700">Header</text>
      <text x="54" y="62" textAnchor="middle" fill="#818cf8" fontSize="8">alg: HS256</text>
      <text x="54" y="76" textAnchor="middle" fill="#818cf8" fontSize="8">typ: JWT</text>

      {/* Payload box */}
      <rect x="116" y="28" width="88" height="56" rx="8" fill="#1a3a2a" stroke="#4ade80" strokeWidth="1.5" />
      <text x="160" y="47" textAnchor="middle" fill="#86efac" fontSize="10" fontWeight="700">Payload</text>
      <text x="160" y="62" textAnchor="middle" fill="#4ade80" fontSize="8">sub: user123</text>
      <text x="160" y="76" textAnchor="middle" fill="#4ade80" fontSize="8">exp: +1h, role: admin</text>

      {/* Signature box */}
      <rect x="222" y="28" width="88" height="56" rx="8" fill="#4a1d1d" stroke="#f87171" strokeWidth="1.5" />
      <text x="266" y="47" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="700">Signature</text>
      <text x="266" y="62" textAnchor="middle" fill="#f87171" fontSize="8">HMAC of</text>
      <text x="266" y="76" textAnchor="middle" fill="#f87171" fontSize="8">header+payload</text>

      {/* Flow label */}
      <text x="160" y="104" textAnchor="middle" fill="#475569" fontSize="9">── How it flows ──</text>

      {/* Auth Server */}
      <rect x="10" y="112" width="76" height="32" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1" />
      <text x="48" y="132" textAnchor="middle" fill="#94a3b8" fontSize="9">Auth Server</text>

      {/* Client */}
      <rect x="122" y="112" width="56" height="32" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1" />
      <text x="150" y="132" textAnchor="middle" fill="#94a3b8" fontSize="9">Client</text>

      {/* API Service */}
      <rect x="234" y="112" width="76" height="32" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1" />
      <text x="272" y="132" textAnchor="middle" fill="#94a3b8" fontSize="9">API Service</text>

      {/* Arrow: Auth → Client */}
      <path d="M86 128 L122 128" stroke="#fbbf24" strokeWidth="1.5" markerEnd="url(#arr-jwt1)" />
      <text x="104" y="122" textAnchor="middle" fill="#fbbf24" fontSize="7.5">issues</text>

      {/* Arrow: Client → API */}
      <path d="M178 128 L234 128" stroke="#4ade80" strokeWidth="1.5" markerEnd="url(#arr-jwt2)" />
      <text x="206" y="122" textAnchor="middle" fill="#4ade80" fontSize="7.5">sends token</text>

      <text x="160" y="176" textAnchor="middle" fill="#64748b" fontSize="9">API verifies signature locally — no round-trip to auth server</text>
    </svg>
  )
}
