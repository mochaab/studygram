export default function Diagram() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-uc1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#818cf8" />
        </marker>
      </defs>

      {/* Use case boxes */}
      {/* 1: User Login */}
      <rect x="10" y="16" width="92" height="60" rx="8" fill="#1a1a2e" stroke="#818cf8" strokeWidth="1.5" />
      <text x="56" y="35" textAnchor="middle" fill="#a5b4fc" fontSize="9" fontWeight="700">🔑 User Login</text>
      <text x="56" y="51" textAnchor="middle" fill="#818cf8" fontSize="8">User logs in, gets</text>
      <text x="56" y="63" textAnchor="middle" fill="#818cf8" fontSize="8">a JWT back</text>
      <text x="56" y="75" textAnchor="middle" fill="#4ade80" fontSize="8">✓ Web / mobile apps</text>

      {/* 2: API Auth */}
      <rect x="114" y="16" width="92" height="60" rx="8" fill="#1a1a2e" stroke="#818cf8" strokeWidth="1.5" />
      <text x="160" y="35" textAnchor="middle" fill="#a5b4fc" fontSize="9" fontWeight="700">🌐 API Access</text>
      <text x="160" y="51" textAnchor="middle" fill="#818cf8" fontSize="8">Send JWT in header</text>
      <text x="160" y="63" textAnchor="middle" fill="#818cf8" fontSize="8">with every request</text>
      <text x="160" y="75" textAnchor="middle" fill="#4ade80" fontSize="8">✓ REST / GraphQL APIs</text>

      {/* 3: SSO */}
      <rect x="218" y="16" width="92" height="60" rx="8" fill="#1a1a2e" stroke="#818cf8" strokeWidth="1.5" />
      <text x="264" y="35" textAnchor="middle" fill="#a5b4fc" fontSize="9" fontWeight="700">🔗 SSO</text>
      <text x="264" y="51" textAnchor="middle" fill="#818cf8" fontSize="8">One login works</text>
      <text x="264" y="63" textAnchor="middle" fill="#818cf8" fontSize="8">across all services</text>
      <text x="264" y="75" textAnchor="middle" fill="#4ade80" fontSize="8">✓ Google, GitHub OAuth</text>

      {/* What JWT is NOT for */}
      <rect x="10" y="100" width="300" height="52" rx="8" fill="#1a0e0e" stroke="#f87171" strokeWidth="1" />
      <text x="160" y="118" textAnchor="middle" fill="#f87171" fontSize="9" fontWeight="700">⚠ When NOT to use JWT alone</text>
      <text x="160" y="133" textAnchor="middle" fill="#f87171" fontSize="8">JWT doesn't encrypt the payload — anyone can decode it (base64).</text>
      <text x="160" y="146" textAnchor="middle" fill="#f87171" fontSize="8">Never store secrets inside a JWT. Always use HTTPS to transmit it.</text>

      {/* Typical claim examples */}
      <text x="160" y="175" textAnchor="middle" fill="#64748b" fontSize="9">Common claims: sub (user ID) · exp (expiry) · role · iss (issuer)</text>
    </svg>
  )
}
