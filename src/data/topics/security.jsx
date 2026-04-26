export const securityCards = [
  {
    id: 'jwt-mtls-intro',
    topic: 'JWT vs mTLS',
    tag: 'Security',
    contributor: 'Charissa',
    title: 'JWT & mTLS: The Big Picture',
    description:
      'JWT and mTLS both deal with trust — but at different layers. mTLS asks "is this machine who it says it is?" at the network level. JWT asks "is this user or client allowed to do this?" at the application level. In a modern system you typically need both: mTLS to secure the pipes between your services, JWT to check that the person on the other end has permission.',
    diagram: (
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
    ),
  },
  {
    id: 'jwt-detail',
    topic: 'JWT vs mTLS',
    tag: 'Security',
    contributor: 'Charissa',
    title: 'JWT: How It Works',
    description:
      'A JWT is like a signed wristband you get at a concert. The venue (auth server) stamps it when you arrive. Every booth inside can read the wristband and trust it without calling the venue again. The token contains three parts: a header describing the algorithm, a payload with your identity and permissions, and a signature that proves nobody tampered with it.',
    diagram: (
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
    ),
  },
  {
    id: 'jwt-usecases',
    topic: 'JWT vs mTLS',
    tag: 'Security',
    contributor: 'Charissa',
    title: 'JWT: Where Do We Use It?',
    description:
      'JWT shines anywhere you need to carry user identity across systems without a database lookup on every request. Common scenarios: a user logs into your web app (the auth server issues a JWT), that JWT is sent with every API call, and each service reads the claims (role, user ID, expiry) directly from the token. It\'s also the backbone of single sign-on (SSO) across multiple services.',
    diagram: (
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
    ),
  },
  {
    id: 'mtls-detail',
    topic: 'JWT vs mTLS',
    tag: 'Security',
    contributor: 'Charissa',
    title: 'mTLS: How It Works',
    description:
      'Normal TLS is one-directional — the server proves its identity (like a website showing its padlock). mTLS (Mutual TLS) goes both ways: the server and the client both show certificates before any data flows. Think of it as two bouncers checking each other\'s IDs at the door. Only after both sides verify does the encrypted connection open.',
    diagram: (
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
    ),
  },
  {
    id: 'mtls-usecases',
    topic: 'JWT vs mTLS',
    tag: 'Security',
    contributor: 'Charissa',
    title: 'mTLS: Where Do We Use It?',
    description:
      'mTLS is the gold standard for securing communication between services inside a cluster. If you\'re running microservices on Kubernetes, Istio can automatically issue certificates to every service and enforce mTLS on every connection — without changing a single line of app code. It\'s also used in zero-trust architectures where nothing inside the network is trusted by default.',
    diagram: (
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
    ),
  },
]
