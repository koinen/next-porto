import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import About from '../About/page'

const Navbar = () => {
  return (
    <>
        <div className = "bg-white flex px-10 py-7 w-full min-w-[960px] justify-between">
            <Link href="/">
                <Image 
                    src="/favicon.ico"
                    width={40}
                    height={100}
                    alt="Logo"
                />
            </Link>
            <div className='w-1/4 flex justify-between gap-3 my-auto'>
                <Link href="/" className='text-xl font-semibold'> Home </Link>
                <Link href="/Projects" className='text-xl font-semibold'> Projects </Link>
                <Link href="/About" className='text-xl font-semibold'> About Me </Link>
            </div>
        </div>
        <hr className="mx-6 border-t border-gray-300 min-w-[960px]" />
    </>
  )
}

export default Navbar