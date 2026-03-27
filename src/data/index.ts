export const projects = [
  {
    id: 'multisiglabs',
    name: 'MultisigLabs',
    slug: 'detail',
    tag: 'WEB3',
    desc: 'Enterprise-grade multi-signature wallet infrastructure for DAOs, focusing on gas optimization and permissioned threshold signatures.',
    tags: ['SOLIDITY', 'ETHERS.JS', 'HARDHAT'],
    artClass: 'art-multisig',
    featured: true,
    actionLabel: 'LIVE DEMO',
  },
  {
    id: 'belztoken',
    name: 'BelzToken',
    tag: 'DEFI',
    desc: 'Reflective tokenomics engine with automated liquidity provision and burn mechanisms designed for sustainable ecosystem growth.',
    tags: ['RUST', 'SOLANA'],
    artClass: 'art-belz',
    featured: false,
    category:'web3',
    actionLabel: 'EXPLORE',
  },
  {
    id: 'void-dashboard',
    name: 'Void Protocol Dashboard',
    tag: 'FRONTEND',
    desc: 'High-fidelity visualization dashboard for real-time mempool monitoring and gas price prediction using Next.js 14 and WebSockets.',
    tags: ['REACT', 'THREE.JS', 'TAILWIND'],
    artClass: 'art-void',
    category:'web2',
    featured: false,
    actionLabel: 'VIEW LIVE',
  },
  {
    id: 'nexus-oracle',
    name: 'Nexus Oracle',
    tag: 'WEB3',
    desc: 'A decentralized oracle network for fetching cross-chain real-world assets (RWA) data with low latency and high verification.',
    tags: ['GO', 'GRPC'],
    artClass: 'art-nexus',
    category:'web3',
    featured: false,
    actionLabel: 'READ DOCS',
  },
  {
    id: 'kinetic-swap',
    name: 'Kinetic Swap',
    tag: 'DEFI',
    desc: "Next-gen AMM featuring concentrated liquidity and dynamic fee adjustments based on volatility indexes.",
    tags: ['SOLIDITY', 'FOUNDRY'],
    artClass: 'art-kinetic',
    featured: false,
    category:"web3",
    actionLabel: 'TRADE NOW',
  },
  {
    id: 'sentinel-auth',
    name: 'Sentinel Auth',
    category:'web2',
    tag: 'INFRASTRUCTURE',
    desc: 'Zero-knowledge based identity authentication provider for privacy-preserving dApp interactions.',
    tags: ['CIRCOM', 'SNARKJS'],
    artClass: 'art-sentinel',
    featured: false,
    actionLabel: 'LEARN MORE',
  },
]

export const expertiseAreas = [
  {
    num: '01',
    icon: '⬡',
    title: 'Smart Contract Architecture',
    desc: 'Designing protocol-level Solidity systems with formal security models, gas profiles optimized to the opcode level, and upgrade patterns that don\'t compromise immutability guarantees.',
    skills: [
      { name: 'Solidity', pct: 95 },
      { name: 'Foundry / Hardhat', pct: 90 },
      { name: 'EVM Internals', pct: 88 },
      { name: 'ZK / Circom', pct: 72 },
    ],
  },
  {
    num: '02',
    icon: '⬢',
    title: 'Frontend Systems',
    desc: 'Building visceral UIs that perform at 60fps on WebGL, real-time WebSocket feeds, and complex state machines. The interface is the protocol\'s face — it must be flawless.',
    skills: [
      { name: 'React / Next.js', pct: 97 },
      { name: 'TypeScript', pct: 94 },
      { name: 'Three.js / WebGL', pct: 80 },
      { name: 'Animation / Motion', pct: 90 },
    ],
  },
  {
    num: '03',
    icon: '⬟',
    title: 'Protocol Infrastructure',
    desc: 'Node operations, cross-chain messaging, oracle design, and distributed system patterns. Infrastructure that sustains protocol uptime at the 99.99% threshold.',
    skills: [
      { name: 'Node / GraphQL', pct: 92 },
      { name: 'Rust / WASM', pct: 75 },
      { name: 'Kubernetes', pct: 70 },
      { name: 'System Design', pct: 88 },
    ],
  },
  {
    num: '04',
    icon: '◈',
    title: 'Security & Auditing',
    desc: 'Threat modeling, invariant testing with Echidna/Medusa, static analysis, and formal verification for mission-critical DeFi protocols with nine-figure TVL exposure.',
    skills: [
      { name: 'Slither / Mythril', pct: 85 },
      { name: 'Fuzz Testing', pct: 82 },
      { name: 'Formal Verification', pct: 65 },
      { name: 'Threat Modeling', pct: 90 },
    ],
  },
]

export const processSteps = [
  { num: '01', title: 'ARCHITECTURE', desc: 'System design, threat modeling, and protocol specification before a single line of code.' },
  { num: '02', title: 'ENGINEERING', desc: 'Surgical implementation with comprehensive test suites, gas benchmarks, and code review gates.' },
  { num: '03', title: 'AUDIT', desc: 'Internal security review, fuzz testing, and optional third-party audit coordination.' },
  { num: '04', title: 'DEPLOYMENT', desc: 'Staged mainnet deployment, monitoring setup, and post-launch incident response protocols.' },
]

export const arsenalChips = [
  'REACT / NEXT.JS',
  'SOLIDITY',
  'NODE / GRAPHQL',
  'RUST / WASM',
  'KUBERNETES',
  'SYSTEM DESIGN',
]

export const techStack = [
  { key: 'Framework', val: 'React / Next.js' },
  { key: 'Language', val: 'TypeScript / Solidity' },
  { key: 'Protocols', val: 'EVM / Safe Core' },
  { key: 'State Mgmt', val: 'Zustand' },
  { key: 'Testing', val: 'Foundry / Vitest' },
  { key: 'Deploy', val: 'Vercel / IPFS' },
]

export const projectFeatures = [
  {
    icon: '◈',
    name: 'Threshold Dynamics',
    desc: 'Adaptive signature requirements based on transaction volume and risk scoring protocols.',
  },
  {
    icon: '⬡',
    name: 'Gas Optimization',
    desc: 'Custom gas relayers reducing costs for batch signatures by up to 40% compared to standard Gnosis safes.',
  },
  {
    icon: '✶',
    name: 'Modular Hook System',
    desc: 'Developer-first architecture allowing for custom pre-transaction check logic via external API hooks.',
  },
]