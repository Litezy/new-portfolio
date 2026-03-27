import { useState, useCallback } from 'react'

export type PageId = 'home' | 'work' | 'expertise' | 'about' | 'connect' | 'detail'

export function useNavigation() {
  const [currentPage, setCurrentPage] = useState<PageId>('home')

  const navigate = useCallback((page: PageId) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }, [])

  return { currentPage, navigate }
}