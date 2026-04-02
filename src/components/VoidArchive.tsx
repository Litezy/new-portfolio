import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const GITHUB_USERNAME = 'Litezy'

const VoidArchive = () => {
  const [repoCount, setRepoCount] = useState<number | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        const data = await res.json()

        setRepoCount(data.public_repos)
      } catch (err) {
        console.error('Failed to fetch repos', err)
        setRepoCount(null)
      }
    }

    fetchRepos()
  }, [])

  const handleClick = () => {
    window.open(`https://github.com/${GITHUB_USERNAME}`, '_blank')
  }

  return (
    <div
      onClick={handleClick}
      className="bg-[#0d0d0d] hover:bg-[#111] transition-colors duration-200 cursor-pointer p-7 flex items-center justify-between group"
    >
      <div className="flex flex-col gap-1">
        <p className="font-['Bebas_Neue'] text-[clamp(20px,2.2vw,30px)] text-[#f5f5f5] leading-none group-hover:text-aqua transition-colors duration-200">
          THE VOID ARCHIVE
        </p>

        <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#333]">
          {repoCount !== null
            ? `ACCESSING ${repoCount} DISTRIBUTED REPOSITORIES...`
            : 'INITIALIZING REPOSITORY INDEX...'}
        </p>
      </div>

      <div className="w-10 h-10 border border-[#252525] flex items-center justify-center text-[#444] shrink-0 group-hover:border-aqua group-hover:text-aqua transition-all duration-200">
        <ArrowRight size={16} />
      </div>
    </div>
  )
}

export default VoidArchive