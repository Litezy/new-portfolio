import React from 'react'
import Footer from './ui/Footer'
import Nav from './ui/Nav'
import Cursor from './ui/Cursor'


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