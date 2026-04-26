export default function Diagram() {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-amb-cfg" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L5,2.5 z" fill="#fbbf24" />
        </marker>
        <marker id="arr-amb-mtls" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L5,2.5 z" fill="#4ade80" />
        </marker>
      </defs>

      {/* Istiod — control plane */}
      <rect x="110" y="6" width="100" height="36" rx="8" fill="#2a1a06" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="160" y="22" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">Istiod</text>
      <text x="160" y="35" textAnchor="middle" fill="#fde68a" fontSize="7.5">Control Plane</text>

      {/* Config arrows: Istiod → ztunnel 1 & 2 (dashed) */}
      <line x1="130" y1="42" x2="76" y2="138" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" markerEnd="url(#arr-amb-cfg)" />
      <line x1="190" y1="42" x2="244" y2="138" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" markerEnd="url(#arr-amb-cfg)" />
      <text x="93" y="96" textAnchor="middle" fill="#fbbf24" fontSize="6.5" opacity="0.8">config</text>
      <text x="227" y="96" textAnchor="middle" fill="#fbbf24" fontSize="6.5" opacity="0.8">config</text>

      {/* Node 1 boundary */}
      <rect x="8" y="54" width="144" height="138" rx="10" fill="#0d1117" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="80" y="48" textAnchor="middle" fill="#818cf8" fontSize="8.5" fontWeight="600">Node 1</text>

      {/* Pod A — no sidecar */}
      <rect x="16" y="64" width="58" height="52" rx="6" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="45" y="86" textAnchor="middle" fill="#2dd4bf" fontSize="9" fontWeight="700">App A</text>
      <text x="45" y="100" textAnchor="middle" fill="#4ade80" fontSize="7">✓ no sidecar</text>

      {/* Pod B — no sidecar */}
      <rect x="84" y="64" width="58" height="52" rx="6" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="113" y="86" textAnchor="middle" fill="#2dd4bf" fontSize="9" fontWeight="700">App B</text>
      <text x="113" y="100" textAnchor="middle" fill="#4ade80" fontSize="7">✓ no sidecar</text>

      {/* Arrows down from pods to ztunnel 1 */}
      <line x1="45" y1="116" x2="45" y2="140" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="113" y1="116" x2="113" y2="140" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />

      {/* ztunnel 1 */}
      <rect x="16" y="140" width="128" height="42" rx="7" fill="#122a12" stroke="#4ade80" strokeWidth="2" />
      <text x="80" y="158" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="700">ztunnel</text>
      <text x="80" y="174" textAnchor="middle" fill="#86efac" fontSize="7.5">DaemonSet · 1 per node</text>

      {/* mTLS arrow between ztunnels */}
      <path d="M144 161 L176 161" stroke="#4ade80" strokeWidth="2.5" markerEnd="url(#arr-amb-mtls)" />
      <text x="160" y="153" textAnchor="middle" fill="#4ade80" fontSize="7.5" fontWeight="700">mTLS</text>

      {/* Node 2 boundary */}
      <rect x="168" y="54" width="144" height="138" rx="10" fill="#0d1117" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="240" y="48" textAnchor="middle" fill="#818cf8" fontSize="8.5" fontWeight="600">Node 2</text>

      {/* Pod C — no sidecar */}
      <rect x="176" y="64" width="58" height="52" rx="6" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="205" y="86" textAnchor="middle" fill="#2dd4bf" fontSize="9" fontWeight="700">App C</text>
      <text x="205" y="100" textAnchor="middle" fill="#4ade80" fontSize="7">✓ no sidecar</text>

      {/* Pod D — no sidecar */}
      <rect x="244" y="64" width="58" height="52" rx="6" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
      <text x="273" y="86" textAnchor="middle" fill="#2dd4bf" fontSize="9" fontWeight="700">App D</text>
      <text x="273" y="100" textAnchor="middle" fill="#4ade80" fontSize="7">✓ no sidecar</text>

      {/* Arrows down from pods to ztunnel 2 */}
      <line x1="205" y1="116" x2="205" y2="140" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="273" y1="116" x2="273" y2="140" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />

      {/* ztunnel 2 */}
      <rect x="176" y="140" width="128" height="42" rx="7" fill="#122a12" stroke="#4ade80" strokeWidth="2" />
      <text x="240" y="158" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="700">ztunnel</text>
      <text x="240" y="174" textAnchor="middle" fill="#86efac" fontSize="7.5">DaemonSet · 1 per node</text>

      {/* Bottom label */}
      <text x="160" y="207" textAnchor="middle" fill="#64748b" fontSize="8">Clean pods + shared ztunnel per node · Istiod configures ztunnels, not pods</text>
    </svg>
  )
}
