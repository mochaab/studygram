export default function Diagram() {
  return (
    <svg viewBox="0 0 320 210" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-nginx" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#94a3b8" />
        </marker>
        <marker id="arr-warn" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#f87171" />
        </marker>
      </defs>

      {/* Client */}
      <rect x="10" y="80" width="60" height="40" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
      <text x="40" y="97" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Client</text>
      <text x="40" y="111" textAnchor="middle" fill="#64748b" fontSize="8">Browser</text>

      {/* Arrow: Client → Nginx */}
      <path d="M70 100 L100 100" stroke="#4ade80" strokeWidth="1.5" markerEnd="url(#arr-nginx)" />
      <text x="85" y="93" textAnchor="middle" fill="#4ade80" fontSize="8">HTTPS</text>

      {/* Nginx */}
      <rect x="100" y="68" width="70" height="64" rx="8" fill="#1a3a2a" stroke="#4ade80" strokeWidth="1.5" />
      <text x="135" y="90" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="700">Nginx</text>
      <text x="135" y="104" textAnchor="middle" fill="#86efac" fontSize="8">TLS</text>
      <text x="135" y="116" textAnchor="middle" fill="#86efac" fontSize="8">Terminates</text>
      <text x="135" y="128" textAnchor="middle" fill="#86efac" fontSize="8">here ✓</text>

      {/* Arrow: Nginx → Service A */}
      <path d="M170 88 L215 72" stroke="#f87171" strokeWidth="1.5" markerEnd="url(#arr-warn)" />
      <text x="200" y="74" textAnchor="middle" fill="#f87171" fontSize="8">HTTP</text>

      {/* Arrow: Nginx → Service B */}
      <path d="M170 112 L215 128" stroke="#f87171" strokeWidth="1.5" markerEnd="url(#arr-warn)" />
      <text x="200" y="127" textAnchor="middle" fill="#f87171" fontSize="8">HTTP</text>

      {/* Service A */}
      <rect x="215" y="50" width="90" height="38" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="1" />
      <text x="260" y="67" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Service A</text>
      <text x="260" y="81" textAnchor="middle" fill="#64748b" fontSize="8">:8080</text>

      {/* Service B */}
      <rect x="215" y="112" width="90" height="38" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="1" />
      <text x="260" y="129" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600">Service B</text>
      <text x="260" y="143" textAnchor="middle" fill="#64748b" fontSize="8">:8080</text>

      {/* Warning box */}
      <rect x="10" y="162" width="300" height="36" rx="6" fill="#3b0d0d" stroke="#f87171" strokeWidth="1" />
      <text x="160" y="177" textAnchor="middle" fill="#f87171" fontSize="9" fontWeight="600">⚠ Inside the cluster: no encryption, no policy, no visibility</text>
      <text x="160" y="191" textAnchor="middle" fill="#f87171" fontSize="8">Services trust each other blindly — anyone inside can talk to anyone</text>
    </svg>
  )
}
