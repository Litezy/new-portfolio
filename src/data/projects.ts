import coinsavi from '../assets/projects/coinsavi.png'
import getlinked from '../assets/projects/getlinked.png'
import nextjs from '../assets/projects/nextjs.png'
import blaize from '../assets/projects/blaize.png'
import furniflex from '../assets/projects/furniflex.png'
import nspare from '../assets/projects/nspare.png'
import hng from '../assets/projects/hng.png'
import investcalc from '../assets/projects/investcalc.png'
import landik from '../assets/projects/landik.png'
import mall from '../assets/projects/mall.png'
import mamiwota from '../assets/projects/mamiwota.png'
import netflix from '../assets/projects/netflix.png'
import tango from '../assets/projects/tango.png'
import tasktracker from '../assets/projects/tasktracker.png'
import todo from '../assets/projects/todo.png'
import tictac from '../assets/projects/tictac.png'
import ecom from '../assets/projects/ecom.png'
import excel from '../assets/projects/excel.png'
import moniequest from '../assets/projects/moniequest.png'
import purple from '../assets/projects/purple.png'
import belz from '../assets/projects/belz.png'
import jemi from '../assets/projects/jemi.png'
import multisig from '../assets/projects/multisig.png'


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
  img?: string
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
    id: 'jemi-travels',
    name: 'JemiTravels & Tours',
    category: 'web2',
    img: jemi,
    tag: 'FRONTEND',
    desc: 'Contributed to the frontend development of a full-stack travel platform, implementing responsive pages, booking flows, and UI components.',
    tags: ['React.js', 'TailwindCSS', 'UI', 'Frontend'],
    artClass: 'web2-illustration',
    featured: false,
    actionLabel: 'Visit Site',
    slug: 'jemi-travels',
    liveUrl: 'https://jemi-travels.vercel.app',
    repoUrl: ''
  },
  {
    id: 'excelmind',
    name: 'ExcelMind Education App',
    category: 'web2',
    img: excel,
    tag: 'FRONTEND',
    desc: 'AI-enhanced educational platform allowing students to enroll in courses, submit assignments, and interact with lecturers. Admins manage users and content. Fully dockerized setup with backend and PostgreSQL.',
    tags: ['React.js', 'TailwindCSS', 'Node.js', 'Docker', 'PostgreSQL', 'Education'],
    artClass: 'web2-illustration',
    featured: true,
    actionLabel: 'View App',
    slug: 'excelmind',
    liveUrl: 'https://excelmind-assessment.vercel.app',
    repoUrl: ''
  },
  {
    id: 'moniequest',
    name: 'MonieQuest',
    category: 'web2',
    img: moniequest,
    tag: 'FRONTEND',
    desc: 'Finance platform for trading gift cards, crypto, and digital assets. Handled frontend integration with responsive design, secure forms, and real-time updates.',
    tags: ['React.js', 'TailwindCSS', 'Node.js', 'Sequelize', 'MySQL', 'Finance'],
    artClass: 'web2-illustration',
    featured: true,
    actionLabel: 'Visit App',
    slug: 'moniequest',
    liveUrl: 'https://moniequest.com',
    repoUrl: ''
  },
  {
    id: 'coinsavi',
    name: 'Coinsavi Global',
    category: 'web2',
    img:coinsavi,
    tag: 'FRONTEND',
    desc: 'Online crypto platform enabling peer-to-peer transactions between users. Focused on building responsive UI and seamless crypto transaction flows.',
    tags: ['React.js', 'Redux', 'TailwindCSS', 'Node.js', 'MySQL', 'Crypto'],
    artClass: 'web2-illustration',
    featured: false,
    actionLabel: 'View Repo',
    slug: 'coinsavi',
    liveUrl: '',
    repoUrl: 'https://github.com/Litezy/coinsavi'
  },
  {
    id: 'furniflex',
    name: 'Furniflex',
    category: 'web2',
    img: furniflex,
    tag: 'FRONTEND',
    desc: 'E-commerce marketplace for furniture with optimized checkout and product listing flows. Built responsive UI with modern frontend stack.',
    tags: ['React.js', 'Redux', 'TailwindCSS', 'Node.js', 'E-commerce'],
    artClass: 'web2-illustration',
    featured: false,
    actionLabel: 'Visit Site',
    slug: 'furniflex',
    liveUrl: 'https://master--furniflex-front.netlify.app/',
    repoUrl: ''
  },
  {
    id: 'getlinked',
    name: 'GetLinked Design Hackathon',
    category: 'web2',
    img: getlinked,
    tag: 'FRONTEND',
    desc: 'Landing page UI design created for GetLinked design contest, showcasing responsive layouts and interactive elements.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Frontend', 'UI Design'],
    artClass: 'web2-illustration',
    featured: false,
    actionLabel: 'View Site',
    slug: 'getlinked',
    liveUrl: 'https://litezy.github.io/getLinked-Landingpage/',
    repoUrl: ''
  },
  
  {
  id: 'hng-landing',
  name: 'HNG Landing Page',
  category: 'web2',
  tag: 'FRONTEND',
  img: hng,
  desc: 'Responsive landing page built during HNG internship program, focusing on layout precision and clean UI structure.',
  tags: ['HTML', 'CSS', 'JavaScript'],
  artClass: 'web2-illustration',
  featured: false,
  actionLabel: 'View Project',
  slug: 'hng-landing',
  liveUrl: '',
  repoUrl: 'https://github.com/Litezy/hng-landingpage'
},
{
  id: 'ecommerce-ui',
  name: 'Fastest E-commerce UI',
  category: 'web2',
  tag: 'FRONTEND',
  img: ecom,
  desc: 'High-performance e-commerce UI focused on speed, responsiveness, and clean product browsing experience.',
  tags: ['React.js', 'TailwindCSS', 'E-commerce'],
  artClass: 'web2-illustration',
  featured: false,
  actionLabel: 'Visit Site',
  slug: 'fast-ecommerce-ui',
  liveUrl: 'https://sample-ecoms.netlify.app/',
  repoUrl: ''
},
{
  id: 'investment-calculator',
  name: 'Investment Calculator',
  category: 'web2',
  tag: 'FRONTEND',
  img: investcalc,
  desc: 'Interactive financial calculator for projecting investment growth based on user inputs and compounding logic.',
  tags: ['React.js', 'Finance'],
  artClass: 'web2-illustration',
  featured: false,
  actionLabel: 'View Code',
  slug: 'investment-calculator',
  liveUrl: '',
  repoUrl: 'https://github.com/Litezy/Investment-Calculator'
},
{
  id: 'tictactoe',
  name: 'TicTacToe Game',
  category: 'web2',
  tag: 'FRONTEND',
  img: tictac,
  desc: 'Classic TicTacToe game with interactive UI and game state management using vanilla JavaScript.',
  tags: ['HTML', 'CSS', 'JavaScript', 'Game'],
  artClass: 'web2-illustration',
  featured: false,
  actionLabel: 'View Code',
  slug: 'tictactoe',
  liveUrl: '',
  repoUrl: 'https://github.com/Litezy/Tick-Tac'
},
{
  id: 'todo-app',
  name: 'To-Do List App',
  category: 'web2',
  tag: 'FRONTEND',
  img: todo,
  desc: 'Simple and efficient task management app for tracking daily activities with clean UI.',
  tags: ['React.js', 'CSS'],
  artClass: 'web2-illustration',
  featured: false,
  actionLabel: 'View Code',
  slug: 'todo-app',
  liveUrl: '',
  repoUrl: 'https://github.com/Litezy/To-Do-list_App'
},
  {
    id: 'nextjs-blog',
    name: 'NextJs Blog App',
    category: 'web2',
    img:nextjs,
    tag: 'FRONTEND',
    desc: 'Next.js-based blog frontend implementing content display and responsive layout. Focused on component-based architecture.',
    tags: ['Next.js', 'Jotai', 'TailwindCSS', 'Blog', 'Frontend'],
    artClass: 'web2-illustration',
    featured: false,
    actionLabel: 'View Repo',
    slug: 'nextjs-blog',
    liveUrl: '',
    repoUrl: 'https://github.com/Litezy/Nextjs-project'
  },
  {
    id: 'blaize-finance',
    name: 'Blaize Finance',
    category: 'web2',
    tag: 'FRONTEND',
    img:blaize,
    desc: 'Crypto investment dashboard with responsive UI, real-time updates, and portfolio management features.',
    tags: ['React.js', 'Redux', 'TailwindCSS', 'Node.js', 'Crypto', 'Finance'],
    artClass: 'web2-illustration',
    featured: false,
    actionLabel: 'View Repo',
    slug: 'blaize-finance',
    liveUrl: '',
    repoUrl: 'https://github.com/Litezy/Blaize-finance'
  },
  {
    id: 'purple-collectibles',
    name: 'Purple Collectibles (PCB)',
    category: 'web3',
    tag: 'WEB3',
    img:purple,
    desc: 'A decentralized NFT platform for minting, managing, and trading Purple Collectibles. Integrated smart contracts for secure ownership and transfers.',
    tags: ['Solidity', 'Hardhat', 'Next.js', 'NFT', 'Web3'],
    artClass: 'web3-illustration',
    featured: true,
    actionLabel: 'View dApp',
    slug: 'purple-collectibles',
    liveUrl: 'https://purple-nft.vercel.app',
    repoUrl: ''
  },
  {
    id: 'multisig-wallet',
    name: 'Multisig Wallet Simulation',
    category: 'web3',
    tag: 'WEB3',
    img: multisig,
    desc: 'Simulates a multisignature wallet on Ethereum. Transactions require quorum approval before execution, mimicking mainnet multisig flows. Frontend interacts with smart contracts via Web3.js.',
    tags: ['Solidity', 'Hardhat', 'React.js', 'Web3', 'Multisig'],
    artClass: 'web3-illustration',
    featured: true,
    actionLabel: 'View dApp',
    slug: 'multisig-wallet',
    liveUrl: 'https://multisig-ui-seven.vercel.app/',
    repoUrl: ''
  },
  {
    id: 'belz-token-faucet',
    name: 'Belz ERC20 Token Faucet',
    category: 'web3',
    tag: 'WEB3',
    img:belz,
    desc: 'ERC20 token faucet for the Belz token, allowing users to mint test tokens. Integrated with frontend for token claiming and balance display using Web3.js and smart contracts.',
    tags: ['Solidity', 'Hardhat', 'React.js', 'ERC20', 'Web3'],
    artClass: 'web3-illustration',
    featured: true,
    actionLabel: 'View dApp',
    slug: 'belz-token-faucet',
    liveUrl: 'https://belz-token-faucet.vercel.app',
    repoUrl: ''
  }
]




export const web3Projects = projects.filter(p => p.category === 'web3')
export const web2Projects  = projects.filter(p => p.category === 'web2')

/** Two featured picks per category — used by BentoSection */
export const bentoWeb3 = web3Projects.slice(0, 2)
export const bentoWeb2  = web2Projects.slice(0, 2)

export const getProjectById   = (id: string)   => projects.find(p => p.id   === id)
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug)