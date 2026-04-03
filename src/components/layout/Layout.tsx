import React from 'react'
import Footer from '../Footer'
import Nav from './ui/Nav'


interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className=''>
            {/* <Cursor/> */}
            <Nav />

            <div className='mt-28 lg:mt-32   w-11/12 mx-auto'>
                {children}
            </div>

            <Footer showNode />

        </div>
    )
}