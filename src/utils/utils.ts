import type { JSX } from "react"
import { ArtBelz, ArtKinetic, ArtMultisig, ArtNexus, ArtSentinel, ArtVoid } from "../components/ProjectArt"
import type { Project } from "../data/projects"

export interface CatMeta {
  color: string
  bg: string
}


export type FilterValue = '' | 'web3' | 'web2'

export interface FilterTab {
  label: string
  value: FilterValue
  icon: string
}

export interface ProjectCardProps {
  project: Project
}




export const FILTER_TABS: FilterTab[] = [
  { label: 'ALL WORKS', value: '',     icon: '⬡' },
  { label: 'WEB3',     value: 'web3', icon: '◈' },
  { label: 'WEB2',     value: 'web2', icon: '⬢' },
]


export const CAT_META: Record<string, CatMeta> = {
  web3: { color: '#00ffff', bg: 'rgba(127,255,212,0.08)' }, // soft aqua
  web2: { color: '#6b5cff', bg: 'rgba(107,92,255,0.08)' }
}

export const getCatMeta = (cat: string): CatMeta =>
  CAT_META[cat] ?? { color: '#00ffff', bg: 'rgba(127,255,212,0.08)' 
    
  }



  // Map art class to component
export const artMap: Record<string, () => JSX.Element> = {
  'art-multisig': ArtMultisig,
  'art-belz': ArtBelz,
  'art-void': ArtVoid,
  'art-kinetic': ArtKinetic,
  'art-nexus': ArtNexus,
  'art-sentinel': ArtSentinel,
}

// Background gradient per art
export const artBgMap: Record<string, string> = {
  'art-multisig': 'radial-gradient(ellipse at 30% 60%, #1a2a1a 0%, #0d0d0d 70%)',
  'art-belz': 'radial-gradient(ellipse at 70% 40%, #1a1020 0%, #0d0d0d 70%)',
  'art-void': 'radial-gradient(ellipse at 50% 80%, #0f1a1a 0%, #0d0d0d 70%)',
  'art-nexus': 'radial-gradient(ellipse at 20% 30%, #1a1508 0%, #0d0d0d 70%)',
  'art-kinetic': 'radial-gradient(ellipse at 80% 70%, #1a0f0f 0%, #0d0d0d 70%)',
  'art-sentinel': 'radial-gradient(ellipse at 40% 20%, #0f0f1a 0%, #0d0d0d 70%)',
}