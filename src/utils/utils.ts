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