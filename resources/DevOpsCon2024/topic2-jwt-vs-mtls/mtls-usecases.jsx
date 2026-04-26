export default function Diagram() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Cluster boundary */}
      <rect x="10" y="10" width="300" height="145" rx="12" fill="#0b1120" stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="160" y="28" textAnchor="middle" fill="#2dd4bf" fontSize="10" fontWeight="600">Kubernetes Cluster (mTLS everywhere)</text>

      {/* Service boxes with lock icons */}
      <rect x="28" y="40" width="76" height="40" rx="8" fill="#1e3a5f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="66" y="58" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="600">API Gateway</text>
      <text x="66" y="73" textAnchor="middle" fill="#2dd4bf" fontSize="10">🔐</text>

      <rect x="122" y="40" width="76" height="40" rx="8" fill="#1e3a5f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="160" y="58" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="600">Auth Service</text>
      <text x="160" y="73" textAnchor="middle" fill="#2dd4bf" fontSize="10">🔐</text>

      <rect x="216" y="40" width="76" height="40" rx="8" fill="#1e3a5f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="254" y="58" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="600">User Service</text>
      <text x="254" y="73" textAnchor="middle" fill="#2dd4bf" fontSize="10">🔐</text>

      <rect x="75" y="100" width="76" height="40" rx="8" fill="#1e3a5f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="113" y="118" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="600">Order Service</text>
      <text x="113" y="133" textAnchor="middle" fill="#2dd4bf" fontSize="10">🔐</text>

      <rect x="169" y="100" width="76" height="40" rx="8" fill="#1e3a5f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="207" y="118" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="600">DB Proxy</text>
      <text x="207" y="133" textAnchor="middle" fill="#2dd4bf" fontSize="10">🔐</text>

      {/* Bottom note */}
      <text x="160" y="174" textAnchor="middle" fill="#64748b" fontSize="9">Use cases: microservices · zero-trust networks · regulated industries</text>
      <text x="160" y="188" textAnchor="middle" fill="#4ade80" fontSize="8">mTLS ≠ JWT — it secures the pipe, not the permission</text>
    </svg>
  )
}
