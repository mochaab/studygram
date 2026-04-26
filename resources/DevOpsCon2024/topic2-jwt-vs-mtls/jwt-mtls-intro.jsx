export default function Diagram() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* JWT lane */}
      <rect x="10" y="16" width="140" height="165" rx="10" fill="#1a1a2e" stroke="#818cf8" strokeWidth="1.5" />
      <text x="80" y="38" textAnchor="middle" fill="#818cf8" fontSize="12" fontWeight="700">JWT</text>
      <line x1="20" y1="46" x2="140" y2="46" stroke="#818cf8" strokeWidth="0.5" opacity="0.4" />
      <text x="80" y="64" textAnchor="middle" fill="#94a3b8" fontSize="9">📦 Application layer</text>
      <text x="80" y="82" textAnchor="middle" fill="#94a3b8" fontSize="9">👤 Who is this user?</text>
      <text x="80" y="100" textAnchor="middle" fill="#94a3b8" fontSize="9">🗝 Token-based</text>
      <text x="80" y="118" textAnchor="middle" fill="#94a3b8" fontSize="9">⏱ Short-lived</text>
      <rect x="22" y="134" width="106" height="36" rx="6" fill="#0f0f1a" stroke="#818cf8" strokeWidth="0.8" />
      <text x="75" y="150" textAnchor="middle" fill="#64748b" fontSize="8">e.g. user logs in →</text>
      <text x="75" y="163" textAnchor="middle" fill="#64748b" fontSize="8">gets a token → calls API</text>

      {/* mTLS lane */}
      <rect x="170" y="16" width="140" height="165" rx="10" fill="#0e2a2a" stroke="#2dd4bf" strokeWidth="1.5" />
      <text x="240" y="38" textAnchor="middle" fill="#2dd4bf" fontSize="12" fontWeight="700">mTLS</text>
      <line x1="180" y1="46" x2="300" y2="46" stroke="#2dd4bf" strokeWidth="0.5" opacity="0.4" />
      <text x="240" y="64" textAnchor="middle" fill="#94a3b8" fontSize="9">🔌 Transport layer</text>
      <text x="240" y="82" textAnchor="middle" fill="#94a3b8" fontSize="9">🖥 Is this machine trusted?</text>
      <text x="240" y="100" textAnchor="middle" fill="#94a3b8" fontSize="9">🪪 Certificate-based</text>
      <text x="240" y="118" textAnchor="middle" fill="#94a3b8" fontSize="9">♾ Long-lived identity</text>
      <rect x="182" y="134" width="106" height="36" rx="6" fill="#071a1a" stroke="#2dd4bf" strokeWidth="0.8" />
      <text x="235" y="150" textAnchor="middle" fill="#64748b" fontSize="8">e.g. Service A talks</text>
      <text x="235" y="163" textAnchor="middle" fill="#64748b" fontSize="8">to Service B in cluster</text>
    </svg>
  )
}
