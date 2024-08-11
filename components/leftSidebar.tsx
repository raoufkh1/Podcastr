"use client"
import { sidebarLinks } from '@/constants'
import { HomeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LeftSidebar = () => {
    const pathname = usePathname()
  return (
    <section className='left_sidebar'>
        <nav className='flex flex-col gap-6'>
            <Link href={"/"} className='flex items-center gap-4'>
                <Image src={"/icons/logo.svg"} alt='Home' width={25} height={23} />
                <h1 className='text-2xl'>Podcastr</h1>
            </Link>
            {sidebarLinks.map((route, index) => {
                const isActive = pathname == route.route || pathname.startsWith(`${route}/`)
                return(
                    <Link key={index} href={route.route} className={`flex ${isActive ? "bg-nav-focus border-r-4 border-orange-1" : ""} gap-2 items-center py-4`}>
                        <Image src={route.imgURL} alt={route.label} width={24} height={24} />
                        <p>{route.label}</p>
                    </Link>
                )
            })}
        </nav>
    </section>
  )
}

export default LeftSidebar