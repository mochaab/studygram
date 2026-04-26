export const istioCards = [
  {
    id: 'istio-no-mesh',
    topic: 'Istio Service Mesh',
    tag: 'Security',
    contributor: 'Charissa',
    title: 'Before the Mesh: Life with Nginx',
    description:
      'Without a service mesh, teams typically put Nginx in front of everything. Nginx terminates TLS from the outside world — great! But once traffic gets inside your cluster, services talk to each other over plain HTTP. There\'s no encryption between them, no automatic policy, and no visibility into what\'s happening. You\'re trusting that nothing goes wrong inside.',
    diagram: (
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
    ),
  },
  {
    id: 'istio-advantages',
    topic: 'Istio Service Mesh',
    tag: 'Security',
    contributor: 'Charissa',
    title: 'Why Istio? The Key Benefits',
    description:
      'Istio sits between your services and handles the hard stuff — so your code doesn\'t have to. Drop it into your cluster and you get automatic encryption between every service, smart traffic routing (like canary deployments and retries), and deep observability with zero code changes. Think of it as an invisible operations team embedded in your network.',
    diagram: (
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
    ),
  },
  {
    id: 'istio-what-is-classic',
    topic: 'Istio Service Mesh',
    tag: 'Security',
    contributor: 'Charissa',
    title: 'What is Istio Classic?',
    description:
      'Istio Classic works by giving every service its own personal bodyguard called an Envoy proxy. This bodyguard lives inside the same pod as your app. Every message your service sends or receives goes through the bodyguard first — who handles encryption, checks identity, and logs everything. Your app writes zero security code. The guard does it all, automatically.',
    diagram: (
      <svg viewBox="0 0 320 210" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arr-wic-mtls" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
            <path d="M0,0 L0,5 L5,2.5 z" fill="#4ade80" />
          </marker>
          <marker id="arr-wic-plain" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
            <path d="M0,0 L0,5 L5,2.5 z" fill="#94a3b8" />
          </marker>
        </defs>

        {/* Pod A */}
        <rect x="10" y="30" width="128" height="130" rx="10" fill="#0a1628" stroke="#2dd4bf" strokeWidth="1.5" />
        <text x="74" y="22" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="600">Pod A</text>

        {/* App A */}
        <rect x="18" y="44" width="52" height="104" rx="7" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
        <text x="44" y="82" textAnchor="middle" fill="#2dd4bf" fontSize="11" fontWeight="700">App</text>
        <text x="44" y="98" textAnchor="middle" fill="#7dd3fc" fontSize="9">Service A</text>
        <text x="44" y="120" textAnchor="middle" fill="#475569" fontSize="7.5">writes zero</text>
        <text x="44" y="133" textAnchor="middle" fill="#475569" fontSize="7.5">security code</text>

        {/* Envoy A */}
        <rect x="78" y="38" width="52" height="116" rx="7" fill="#122a12" stroke="#4ade80" strokeWidth="2" />
        <text x="104" y="68" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="700">Envoy</text>
        <text x="104" y="82" textAnchor="middle" fill="#86efac" fontSize="8.5">Sidecar</text>
        <text x="104" y="100" textAnchor="middle" fill="#86efac" fontSize="8">🔐 encrypt</text>
        <text x="104" y="114" textAnchor="middle" fill="#86efac" fontSize="8">🪪 verify ID</text>
        <text x="104" y="128" textAnchor="middle" fill="#86efac" fontSize="8">📊 log</text>
        <text x="104" y="144" textAnchor="middle" fill="#475569" fontSize="7">your bodyguard</text>

        {/* mTLS arrow */}
        <path d="M138 96 L182 96" stroke="#4ade80" strokeWidth="2.5" markerEnd="url(#arr-wic-mtls)" />
        <text x="160" y="84" textAnchor="middle" fill="#4ade80" fontSize="9" fontWeight="700">mTLS</text>
        <text x="160" y="111" textAnchor="middle" fill="#4ade80" fontSize="7.5">encrypted</text>

        {/* Pod B */}
        <rect x="182" y="30" width="128" height="130" rx="10" fill="#0a1628" stroke="#2dd4bf" strokeWidth="1.5" />
        <text x="246" y="22" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="600">Pod B</text>

        {/* Envoy B */}
        <rect x="190" y="38" width="52" height="116" rx="7" fill="#122a12" stroke="#4ade80" strokeWidth="2" />
        <text x="216" y="68" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="700">Envoy</text>
        <text x="216" y="82" textAnchor="middle" fill="#86efac" fontSize="8.5">Sidecar</text>
        <text x="216" y="100" textAnchor="middle" fill="#86efac" fontSize="8">🔓 decrypt</text>
        <text x="216" y="114" textAnchor="middle" fill="#86efac" fontSize="8">🪪 verify ID</text>
        <text x="216" y="128" textAnchor="middle" fill="#86efac" fontSize="8">📊 log</text>
        <text x="216" y="144" textAnchor="middle" fill="#475569" fontSize="7">your bodyguard</text>

        {/* App B */}
        <rect x="250" y="44" width="52" height="104" rx="7" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
        <text x="276" y="82" textAnchor="middle" fill="#2dd4bf" fontSize="11" fontWeight="700">App</text>
        <text x="276" y="98" textAnchor="middle" fill="#7dd3fc" fontSize="9">Service B</text>
        <text x="276" y="120" textAnchor="middle" fill="#475569" fontSize="7.5">gets plain</text>
        <text x="276" y="133" textAnchor="middle" fill="#475569" fontSize="7.5">message</text>

        {/* Bottom note */}
        <text x="160" y="182" textAnchor="middle" fill="#64748b" fontSize="8.5">1 Envoy sidecar per pod — injected automatically by Istio</text>
        <text x="160" y="196" textAnchor="middle" fill="#4ade80" fontSize="8">Apps talk to each other as normal · sidecars handle all security</text>
      </svg>
    ),
  },
  {
    id: 'istio-what-is-ambient',
    topic: 'Istio Service Mesh',
    tag: 'Security',
    contributor: 'Charissa',
    title: 'What is Istio Ambient?',
    description:
      'Istio Ambient ditches the per-pod bodyguard entirely. Instead, picture a security booth at the entrance of each floor of a building — that\'s ztunnel. One ztunnel runs per Kubernetes node and invisibly intercepts all traffic from every pod on that node. Pods stay completely clean with no extra containers. Less overhead, same security, zero app changes.',
    diagram: (
      <svg viewBox="0 0 320 210" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arr-wia-mtls" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
            <path d="M0,0 L0,5 L5,2.5 z" fill="#4ade80" />
          </marker>
        </defs>

        {/* Node boundary */}
        <rect x="8" y="14" width="304" height="152" rx="12" fill="#0d1117" stroke="#6366f1" strokeWidth="2" strokeDasharray="6 3" />
        <text x="160" y="8" textAnchor="middle" fill="#818cf8" fontSize="9" fontWeight="600">Kubernetes Node</text>

        {/* Pod A */}
        <rect x="20" y="26" width="64" height="80" rx="8" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1.5" />
        <text x="52" y="54" textAnchor="middle" fill="#2dd4bf" fontSize="10" fontWeight="700">App A</text>
        <text x="52" y="70" textAnchor="middle" fill="#7dd3fc" fontSize="8">Service</text>
        <text x="52" y="86" textAnchor="middle" fill="#4ade80" fontSize="7.5">✓ no sidecar</text>
        <text x="52" y="98" textAnchor="middle" fill="#475569" fontSize="7">lean pod</text>

        {/* Pod B */}
        <rect x="96" y="26" width="64" height="80" rx="8" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1.5" />
        <text x="128" y="54" textAnchor="middle" fill="#2dd4bf" fontSize="10" fontWeight="700">App B</text>
        <text x="128" y="70" textAnchor="middle" fill="#7dd3fc" fontSize="8">Service</text>
        <text x="128" y="86" textAnchor="middle" fill="#4ade80" fontSize="7.5">✓ no sidecar</text>
        <text x="128" y="98" textAnchor="middle" fill="#475569" fontSize="7">lean pod</text>

        {/* Pod C */}
        <rect x="172" y="26" width="64" height="80" rx="8" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1.5" />
        <text x="204" y="54" textAnchor="middle" fill="#2dd4bf" fontSize="10" fontWeight="700">App C</text>
        <text x="204" y="70" textAnchor="middle" fill="#7dd3fc" fontSize="8">Service</text>
        <text x="204" y="86" textAnchor="middle" fill="#4ade80" fontSize="7.5">✓ no sidecar</text>
        <text x="204" y="98" textAnchor="middle" fill="#475569" fontSize="7">lean pod</text>

        {/* Pod D */}
        <rect x="248" y="26" width="54" height="80" rx="8" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1.5" />
        <text x="275" y="54" textAnchor="middle" fill="#2dd4bf" fontSize="10" fontWeight="700">App D</text>
        <text x="275" y="70" textAnchor="middle" fill="#7dd3fc" fontSize="8">Service</text>
        <text x="275" y="86" textAnchor="middle" fill="#4ade80" fontSize="7.5">✓ no sidecar</text>
        <text x="275" y="98" textAnchor="middle" fill="#475569" fontSize="7">lean pod</text>

        {/* Drop lines from pods to ztunnel */}
        <line x1="52" y1="106" x2="52" y2="130" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="128" y1="106" x2="128" y2="130" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="204" y1="106" x2="204" y2="130" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="275" y1="106" x2="275" y2="130" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />

        {/* ztunnel */}
        <rect x="20" y="130" width="284" height="26" rx="8" fill="#122a12" stroke="#4ade80" strokeWidth="2" />
        <text x="162" y="148" textAnchor="middle" fill="#4ade80" fontSize="11" fontWeight="700">ztunnel — shared security for the whole node</text>

        {/* Bottom labels */}
        <text x="160" y="180" textAnchor="middle" fill="#64748b" fontSize="8.5">ztunnel intercepts all traffic transparently at the kernel level</text>
        <text x="160" y="194" textAnchor="middle" fill="#4ade80" fontSize="8">mTLS, policy, and telemetry — handled by one agent for all pods</text>
      </svg>
    ),
  },
  {
    id: 'istio-classic',
    topic: 'Istio Service Mesh',
    tag: 'Security',
    contributor: 'Charissa',
    title: 'Istio Classic: Architecture',
    description:
      'In Classic mode, every pod gets an Envoy sidecar injected automatically. The control plane (Istiod) pushes config to each sidecar. When services talk, the traffic goes sidecar-to-sidecar over mTLS — your app containers never see the encryption. The cost: one extra container running inside every pod, all the time.',
    diagram: (
      <svg viewBox="0 0 320 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arr-cls-cfg" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
            <path d="M0,0 L0,5 L5,2.5 z" fill="#fbbf24" />
          </marker>
          <marker id="arr-cls-mtls" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
            <path d="M0,0 L0,5 L5,2.5 z" fill="#4ade80" />
          </marker>
        </defs>

        {/* Istiod — control plane */}
        <rect x="110" y="6" width="100" height="36" rx="8" fill="#2a1a06" stroke="#fbbf24" strokeWidth="1.5" />
        <text x="160" y="22" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">Istiod</text>
        <text x="160" y="35" textAnchor="middle" fill="#fde68a" fontSize="7.5">Control Plane</text>

        {/* Config arrows: Istiod → each Envoy (dashed) */}
        <line x1="140" y1="42" x2="76" y2="64" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" markerEnd="url(#arr-cls-cfg)" />
        <line x1="160" y1="42" x2="183" y2="64" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" markerEnd="url(#arr-cls-cfg)" />
        <line x1="180" y1="42" x2="289" y2="64" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" markerEnd="url(#arr-cls-cfg)" />
        <text x="78" y="57" textAnchor="middle" fill="#fbbf24" fontSize="6.5" opacity="0.8">config</text>

        {/* Pod 1 */}
        <rect x="8" y="58" width="90" height="90" rx="8" fill="#0a1628" stroke="#2dd4bf" strokeWidth="1.5" />
        <text x="53" y="51" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontWeight="600">Pod 1</text>
        <rect x="14" y="68" width="32" height="68" rx="5" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
        <text x="30" y="99" textAnchor="middle" fill="#2dd4bf" fontSize="8" fontWeight="700">App</text>
        <text x="30" y="111" textAnchor="middle" fill="#7dd3fc" fontSize="7">A</text>
        <rect x="52" y="64" width="38" height="76" rx="5" fill="#122a12" stroke="#4ade80" strokeWidth="1.5" />
        <text x="71" y="90" textAnchor="middle" fill="#4ade80" fontSize="8" fontWeight="700">Envoy</text>
        <text x="71" y="103" textAnchor="middle" fill="#86efac" fontSize="7">Sidecar</text>
        <text x="71" y="115" textAnchor="middle" fill="#475569" fontSize="6.5">🛡 guard</text>
        <text x="71" y="127" textAnchor="middle" fill="#475569" fontSize="6.5">mTLS</text>

        {/* mTLS arrow: Envoy A → Envoy B */}
        <path d="M90 103 L115 103" stroke="#4ade80" strokeWidth="2" markerEnd="url(#arr-cls-mtls)" />
        <text x="102" y="97" textAnchor="middle" fill="#4ade80" fontSize="6.5">mTLS</text>

        {/* Pod 2 */}
        <rect x="115" y="58" width="90" height="90" rx="8" fill="#0a1628" stroke="#2dd4bf" strokeWidth="1.5" />
        <text x="160" y="51" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontWeight="600">Pod 2</text>
        <rect x="121" y="68" width="32" height="68" rx="5" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
        <text x="137" y="99" textAnchor="middle" fill="#2dd4bf" fontSize="8" fontWeight="700">App</text>
        <text x="137" y="111" textAnchor="middle" fill="#7dd3fc" fontSize="7">B</text>
        <rect x="159" y="64" width="38" height="76" rx="5" fill="#122a12" stroke="#4ade80" strokeWidth="1.5" />
        <text x="178" y="90" textAnchor="middle" fill="#4ade80" fontSize="8" fontWeight="700">Envoy</text>
        <text x="178" y="103" textAnchor="middle" fill="#86efac" fontSize="7">Sidecar</text>
        <text x="178" y="115" textAnchor="middle" fill="#475569" fontSize="6.5">🛡 guard</text>
        <text x="178" y="127" textAnchor="middle" fill="#475569" fontSize="6.5">mTLS</text>

        {/* mTLS arrow: Envoy B → Envoy C */}
        <path d="M197 103 L222 103" stroke="#4ade80" strokeWidth="2" markerEnd="url(#arr-cls-mtls)" />
        <text x="209" y="97" textAnchor="middle" fill="#4ade80" fontSize="6.5">mTLS</text>

        {/* Pod 3 */}
        <rect x="222" y="58" width="90" height="90" rx="8" fill="#0a1628" stroke="#2dd4bf" strokeWidth="1.5" />
        <text x="267" y="51" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontWeight="600">Pod 3</text>
        <rect x="228" y="68" width="32" height="68" rx="5" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
        <text x="244" y="99" textAnchor="middle" fill="#2dd4bf" fontSize="8" fontWeight="700">App</text>
        <text x="244" y="111" textAnchor="middle" fill="#7dd3fc" fontSize="7">C</text>
        <rect x="266" y="64" width="38" height="76" rx="5" fill="#122a12" stroke="#4ade80" strokeWidth="1.5" />
        <text x="285" y="90" textAnchor="middle" fill="#4ade80" fontSize="8" fontWeight="700">Envoy</text>
        <text x="285" y="103" textAnchor="middle" fill="#86efac" fontSize="7">Sidecar</text>
        <text x="285" y="115" textAnchor="middle" fill="#475569" fontSize="6.5">🛡 guard</text>
        <text x="285" y="127" textAnchor="middle" fill="#475569" fontSize="6.5">mTLS</text>

        {/* Bottom labels */}
        <text x="160" y="170" textAnchor="middle" fill="#64748b" fontSize="8">Every pod runs its own Envoy — Istiod pushes config to each one</text>
        <text x="160" y="184" textAnchor="middle" fill="#4ade80" fontSize="8">Traffic travels sidecar-to-sidecar over mTLS · apps never see encryption</text>
      </svg>
    ),
  },
  {
    id: 'istio-ambient',
    topic: 'Istio Service Mesh',
    tag: 'Security',
    contributor: 'Charissa',
    title: 'Istio Ambient: Architecture',
    description:
      'In Ambient mode, pods are completely clean — no sidecar injected. Instead, Istiod programs a ztunnel agent that runs once per Kubernetes node (as a DaemonSet). All pod traffic on that node flows through ztunnel automatically at the kernel level. ztunnels on different nodes talk to each other over mTLS. Pods never know security is happening.',
    diagram: (
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
    ),
  },
  {
    id: 'istio-ztunnel',
    topic: 'Istio Service Mesh',
    tag: 'Security',
    contributor: 'Charissa',
    title: 'ztunnel: The Ambient Security Desk',
    description:
      'ztunnel is the engine behind Ambient mode. Picture a hotel: in Classic mode, every guest carries their own ID scanner. In Ambient mode, there\'s one security desk in the lobby — the ztunnel. It sits at the Linux kernel level on each node, intercepts all pod traffic transparently, enforces mTLS, applies L4 policies, and emits telemetry. Pods don\'t know it exists.',
    diagram: (
      <svg viewBox="0 0 320 215" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arr-zt-down" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#94a3b8" />
          </marker>
          <marker id="arr-zt-up" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L6,3 z" fill="#4ade80" />
          </marker>
        </defs>

        {/* Node boundary */}
        <rect x="8" y="12" width="304" height="156" rx="12" fill="#0d1117" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="5 3" />
        <text x="160" y="6" textAnchor="middle" fill="#818cf8" fontSize="9" fontWeight="600">Kubernetes Node</text>

        {/* Pod row */}
        <rect x="18" y="22" width="62" height="52" rx="7" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
        <text x="49" y="44" textAnchor="middle" fill="#2dd4bf" fontSize="9" fontWeight="700">Pod A</text>
        <text x="49" y="58" textAnchor="middle" fill="#475569" fontSize="7">no sidecar</text>

        <rect x="90" y="22" width="62" height="52" rx="7" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
        <text x="121" y="44" textAnchor="middle" fill="#2dd4bf" fontSize="9" fontWeight="700">Pod B</text>
        <text x="121" y="58" textAnchor="middle" fill="#475569" fontSize="7">no sidecar</text>

        <rect x="162" y="22" width="62" height="52" rx="7" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
        <text x="193" y="44" textAnchor="middle" fill="#2dd4bf" fontSize="9" fontWeight="700">Pod C</text>
        <text x="193" y="58" textAnchor="middle" fill="#475569" fontSize="7">no sidecar</text>

        <rect x="234" y="22" width="68" height="52" rx="7" fill="#0e3a4f" stroke="#2dd4bf" strokeWidth="1" />
        <text x="268" y="44" textAnchor="middle" fill="#2dd4bf" fontSize="9" fontWeight="700">Pod D</text>
        <text x="268" y="58" textAnchor="middle" fill="#475569" fontSize="7">no sidecar</text>

        {/* Arrows down to ztunnel */}
        <line x1="49" y1="74" x2="49" y2="108" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="121" y1="74" x2="121" y2="108" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="193" y1="74" x2="193" y2="108" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="268" y1="74" x2="268" y2="108" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />

        {/* ztunnel box */}
        <rect x="18" y="108" width="284" height="52" rx="9" fill="#122a12" stroke="#4ade80" strokeWidth="2" />
        <text x="160" y="128" textAnchor="middle" fill="#4ade80" fontSize="12" fontWeight="700">ztunnel</text>
        <text x="160" y="144" textAnchor="middle" fill="#86efac" fontSize="8">mTLS encryption · L4 policy · telemetry · one agent for all pods</text>

        {/* What ztunnel does — feature pills */}
        <rect x="20" y="174" width="68" height="22" rx="5" fill="#122a12" stroke="#4ade80" strokeWidth="1" />
        <text x="54" y="189" textAnchor="middle" fill="#4ade80" fontSize="8">🔐 mTLS</text>

        <rect x="96" y="174" width="68" height="22" rx="5" fill="#1a1a2e" stroke="#818cf8" strokeWidth="1" />
        <text x="130" y="189" textAnchor="middle" fill="#818cf8" fontSize="8">🛡 L4 policy</text>

        <rect x="172" y="174" width="68" height="22" rx="5" fill="#2a1a0e" stroke="#fbbf24" strokeWidth="1" />
        <text x="206" y="189" textAnchor="middle" fill="#fbbf24" fontSize="8">📊 telemetry</text>

        <rect x="248" y="174" width="60" height="22" rx="5" fill="#0e2a2a" stroke="#2dd4bf" strokeWidth="1" />
        <text x="278" y="189" textAnchor="middle" fill="#2dd4bf" fontSize="8">⚡ L4 only</text>
      </svg>
    ),
  },
  {
    id: 'istio-comparison',
    topic: 'Istio Service Mesh',
    tag: 'Security',
    contributor: 'Charissa',
    title: 'Classic vs Ambient: Which One?',
    description:
      'Classic mode gives you deep per-service control — great for complex routing, advanced policies, and L7 visibility. But it costs memory and CPU per pod. Ambient mode is lighter, simpler to operate, and perfect for teams who just want automatic mTLS and basic policies without the operational overhead. When in doubt, start with Ambient.',
    diagram: (
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
    ),
  },
]