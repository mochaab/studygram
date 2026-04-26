export default function Diagram() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Classic column */}
      <rect x="10" y="16" width="140" height="172" rx="10" fill="#0e2a2a" stroke="#2dd4bf" strokeWidth="1.5" />
      <text x="80" y="38" textAnchor="middle" fill="#2dd4bf" fontSize="12" fontWeight="700">Classic</text>
      <line x1="20" y1="46" x2="140" y2="46" stroke="#2dd4bf" strokeWidth="0.5" opacity="0.4" />
      <text x="80" y="64" textAnchor="middle" fill="#94a3b8" fontSize="8.5">🧑‍✈️ Envoy per pod</text>
      <text x="80" y="80" textAnchor="middle" fill="#94a3b8" fontSize="8.5">🔬 L7 traffic control</text>
      <text x="80" y="96" textAnchor="middle" fill="#94a3b8" fontSize="8.5">📊 Deep observability</text>
      <text x="80" y="112" textAnchor="middle" fill="#94a3b8" fontSize="8.5">⚙️ Complex policies</text>
      <line x1="20" y1="124" x2="140" y2="124" stroke="#2dd4bf" strokeWidth="0.5" opacity="0.3" />
      <text x="80" y="140" textAnchor="middle" fill="#64748b" fontSize="8" fontStyle="italic">Best for:</text>
      <text x="80" y="155" textAnchor="middle" fill="#64748b" fontSize="8" fontStyle="italic">Advanced traffic shaping,</text>
      <text x="80" y="168" textAnchor="middle" fill="#64748b" fontSize="8" fontStyle="italic">fine-grained authz</text>
      <text x="80" y="181" textAnchor="middle" fill="#64748b" fontSize="8" fontStyle="italic">per-service control</text>

      {/* Ambient column */}
      <rect x="170" y="16" width="140" height="172" rx="10" fill="#1a1a0e" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="240" y="38" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="700">Ambient</text>
      <line x1="180" y1="46" x2="300" y2="46" stroke="#fbbf24" strokeWidth="0.5" opacity="0.4" />
      <text x="240" y="64" textAnchor="middle" fill="#94a3b8" fontSize="8.5">🪶 No sidecar overhead</text>
      <text x="240" y="80" textAnchor="middle" fill="#94a3b8" fontSize="8.5">⚡ Lower resource cost</text>
      <text x="240" y="96" textAnchor="middle" fill="#94a3b8" fontSize="8.5">🔐 Auto mTLS included</text>
      <text x="240" y="112" textAnchor="middle" fill="#94a3b8" fontSize="8.5">🛠 Easier to operate</text>
      <line x1="180" y1="124" x2="300" y2="124" stroke="#fbbf24" strokeWidth="0.5" opacity="0.3" />
      <text x="240" y="140" textAnchor="middle" fill="#64748b" fontSize="8" fontStyle="italic">Best for:</text>
      <text x="240" y="155" textAnchor="middle" fill="#64748b" fontSize="8" fontStyle="italic">Most teams starting out,</text>
      <text x="240" y="168" textAnchor="middle" fill="#64748b" fontSize="8" fontStyle="italic">simple mTLS + policy,</text>
      <text x="240" y="181" textAnchor="middle" fill="#64748b" fontSize="8" fontStyle="italic">resource-constrained clusters</text>
    </svg>
  )
}
