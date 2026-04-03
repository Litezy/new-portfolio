import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../Footer'
import Nav from './ui/Nav'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }) // or 'smooth'
  }, [location.pathname])

  return (
    <div>
      <Nav />

      <div className='mt-28 lg:mt-32 w-11/12 mx-auto'>
        {children}
      </div>

      <Footer showNode />
    </div>
  )
}