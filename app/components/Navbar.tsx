import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import About from '../About/page'

const Navbar = () => {
  return (
    <>
        <div className = "bg-white flex justify-between px-10 py-7 w-full">
            <Link href="/">
                <Image 
                    src="/favicon.ico"
                    width={40}
                    height={100}
                    alt="Logo"
                    className='hidden md:block'
                />
            </Link>
            <div className="bg-white min-h-[10%] md:min-h-fit md:min-w-fit w-full flex justify-center md:justify-end items-center px-5 mx-auto">
                <ul className='flex md:flex-row flex-col justify-center items-center gap-3 my-auto text-center'> 
                    <li>
                        <Link href="/" className='text-xl font-semibold opacity-50 hover:opacity-100 transition-opacity duration-300'> Home </Link>
                    </li>
                    <li>
                        <Link href="/Projects" className='text-xl font-semibold opacity-50 hover:opacity-100 transition-opacity duration-300'> Projects </Link>
                    </li>
                    <li>
                        <Link href="/About" className='text-xl font-semibold opacity-50 hover:opacity-100 transition-opacity duration-300'> About Me </Link>
                    </li>
                </ul>
            </div>
        </div>
        <hr className="mx-auto border-t border-gray-300 w-[95%]" />
    </>
  )
}

export default Navbar