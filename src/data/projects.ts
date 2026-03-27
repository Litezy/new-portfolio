export type ProjectCategory = 'web3' | 'web2'

export type ProjectTag =
  | 'WEB3'
  | 'DEFI'
  | 'FRONTEND'
  | 'INFRASTRUCTURE'

export interface Project {
  id: string
  name: string
  category: ProjectCategory
  tag: ProjectTag
  desc: string
  tags: string[]
  artClass: string
  featured: boolean
  actionLabel: string
  /** Route slug — all detail pages live at /:slug */
  slug: string
  liveUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'multisiglabs',
    name: 'MultisigLabs',
    slug: 'multisiglabs',
    category: 'web3',
    tag: 'WEB3',
    desc: 'Enterprise-grade multi-signature wallet infrastructure for DAOs, focusing on gas optimization and permissioned threshold signatures.',
    tags: ['SOLIDITY', 'ETHERS.JS', 'HARDHAT'],
    artClass: 'art-multisig',
    featured: true,
    actionLabel: 'LIVE DEMO',
    liveUrl: 'https://multisiglabs.xyz',
    repoUrl: 'https://github.com/kinetic/multisiglabs',
  },
  {
    id: 'belztoken',
    name: 'BelzToken',
    slug: 'belztoken',
    category: 'web3',
    tag: 'DEFI',
    desc: 'Reflective tokenomics engine with automated liquidity provision and burn mechanisms designed for sustainable ecosystem growth.',
    tags: ['RUST', 'SOLANA'],
    artClass: 'art-belz',
    featured: false,
    actionLabel: 'EXPLORE',
    repoUrl: 'https://github.com/kinetic/belztoken',
  },
  {
    id: 'nexus-oracle',
    name: 'Nexus Oracle',
    slug: 'nexus-oracle',
    category: 'web3',
    tag: 'WEB3',
    desc: 'A decentralized oracle network for fetching cross-chain real-world assets (RWA) data with low latency and high verification.',
    tags: ['GO', 'GRPC'],
    artClass: 'art-nexus',
    featured: false,
    actionLabel: 'READ DOCS',
    repoUrl: 'https://github.com/kinetic/nexus-oracle',
  },
  {
    id: 'kinetic-swap',
    name: 'Kinetic Swap',
    slug: 'kinetic-swap',
    category: 'web3',
    tag: 'DEFI',
    desc: 'Next-gen AMM featuring concentrated liquidity and dynamic fee adjustments based on volatility indexes.',
    tags: ['SOLIDITY', 'FOUNDRY'],
    artClass: 'art-kinetic',
    featured: false,
    actionLabel: 'TRADE NOW',
    liveUrl: 'https://kineticswap.xyz',
    repoUrl: 'https://github.com/kinetic/kinetic-swap',
  },
  {
    id: 'void-dashboard',
    name: 'Void Protocol Dashboard',
    slug: 'void-dashboard',
    category: 'web2',
    tag: 'FRONTEND',
    desc: 'High-fidelity visualization dashboard for real-time mempool monitoring and gas price prediction using Next.js 14 and WebSockets.',
    tags: ['REACT', 'THREE.JS', 'TAILWIND'],
    artClass: 'art-void',
    featured: false,
    actionLabel: 'VIEW LIVE',
    liveUrl: 'https://void-dashboard.xyz',
    repoUrl: 'https://github.com/kinetic/void-dashboard',
  },
  {
    id: 'sentinel-auth',
    name: 'Sentinel Auth',
    slug: 'sentinel-auth',
    category: 'web2',
    tag: 'INFRASTRUCTURE',
    desc: 'Zero-knowledge based identity authentication provider for privacy-preserving dApp interactions.',
    tags: ['CIRCOM', 'SNARKJS'],
    artClass: 'art-sentinel',
    featured: false,
    actionLabel: 'LEARN MORE',
    repoUrl: 'https://github.com/kinetic/sentinel-auth',
  },
]

// ─── Derived helpers (consume these instead of re-filtering everywhere) ───────

export const web3Projects = projects.filter(p => p.category === 'web3')
export const web2Projects  = projects.filter(p => p.category === 'web2')

/** Two featured picks per category — used by BentoSection */
export const bentoWeb3 = web3Projects.slice(0, 2)
export const bentoWeb2  = web2Projects.slice(0, 2)

export const getProjectById   = (id: string)   => projects.find(p => p.id   === id)
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug)