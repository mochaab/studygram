export default function Diagram() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Center: Istio */}
      <circle cx="160" cy="100" r="32" fill="#0e2a2a" stroke="#2dd4bf" strokeWidth="2" />
      <text x="160" y="96" textAnchor="middle" fill="#2dd4bf" fontSize="11" fontWeight="700">Istio</text>
      <text x="160" y="110" textAnchor="middle" fill="#99f6e4" fontSize="8">Control Plane</text>

      {/* Benefit 1: Security */}
      <rect x="10" y="16" width="100" height="52" rx="10" fill="#0e2a2a" stroke="#4ade80" strokeWidth="1.5" />
      <text x="60" y="35" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="700">🔐 Security</text>
      <text x="60" y="50" textAnchor="middle" fill="#86efac" fontSize="8">Auto mTLS between</text>
      <text x="60" y="62" textAnchor="middle" fill="#86efac" fontSize="8">every service pod</text>
      <line x1="110" y1="42" x2="128" y2="90" stroke="#4ade80" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />

      {/* Benefit 2: Traffic */}
      <rect x="10" y="132" width="100" height="52" rx="10" fill="#1a1a2e" stroke="#818cf8" strokeWidth="1.5" />
      <text x="60" y="151" textAnchor="middle" fill="#818cf8" fontSize="10" fontWeight="700">🔀 Traffic</text>
      <text x="60" y="166" textAnchor="middle" fill="#a5b4fc" fontSize="8">Canary, retries,</text>
      <text x="60" y="178" textAnchor="middle" fill="#a5b4fc" fontSize="8">circuit breaker</text>
      <line x1="110" y1="158" x2="128" y2="110" stroke="#818cf8" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />

      {/* Benefit 3: Observability */}
      <rect x="210" y="16" width="100" height="52" rx="10" fill="#2a1a0e" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="260" y="32" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="700">📊 Visibility</text>
      <text x="260" y="47" textAnchor="middle" fill="#fde68a" fontSize="8">Metrics, tracing,</text>
      <text x="260" y="59" textAnchor="middle" fill="#fde68a" fontSize="8">logs — automatic</text>
      <line x1="210" y1="42" x2="192" y2="90" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />

      {/* Benefit 4: Policy */}
      <rect x="210" y="132" width="100" height="52" rx="10" fill="#2a0e1a" stroke="#f472b6" strokeWidth="1.5" />
      <text x="260" y="151" textAnchor="middle" fill="#f472b6" fontSize="10" fontWeight="700">📋 Policy</text>
      <text x="260" y="166" textAnchor="middle" fill="#f9a8d4" fontSize="8">AuthZ rules, rate</text>
      <text x="260" y="178" textAnchor="middle" fill="#f9a8d4" fontSize="8">limits, JWT verify</text>
      <line x1="210" y1="158" x2="192" y2="110" stroke="#f472b6" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
    </svg>
  )
}
