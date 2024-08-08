import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const Projects = () => {
  return (
    <main>
      <Navbar/>
      <div className="mx-auto w-full max-w-[1980px] flex-col p-8">
        <div className='px-8 pb-10'>   
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-5xl font-bold text-[#699528]'>IMPACT 2024</h1>
                    <h3 className='pt-2 text-2xl text-gray-500'>Frontend Contributor</h3>
                </div>
                <p className='my-auto text-xl text-right'>Contributed in creating the frontend in pages Talkshow and Tutorial.</p>
            </div>
            <div className='flex space-around'>
                <Image
                    src="/impact_tutor.png"
                    width={625}
                    height={1000}
                    alt="Tutor page IMPACT 2024"
                    className='mx-auto pt-10'
                />
                <Image
                    src="/impact_talkshow.png"
                    width={625}
                    height={1000}
                    alt="Talkshow page IMPACT 2024"
                    className='mx-auto pt-10'
                />
            </div>
        </div>
        <hr className="mx-6 border-t border-gray-300 min-w-[960px]" />
        <div className='px-8 p-10'>   
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-5xl font-bold text-[#699528]'>CRUD API</h1>
                    <h3 className='pt-2 text-2xl text-gray-500'>Simple Go CRUD API</h3>
                </div>
                <div>
                    <p className='my-auto text-xl text-right'>Made a simpe API that can do simple CRUD (Create, Update, Read, Delete) on a sample data (.json file)< br/> with Go.</p>
                    <div className='w-full flex justify-end pt-2'>    
                        <a href="https://github.com/koinen/crud-go" className='underline'>View Project...</a>
                    </div>
                </div>
            </div>
            <div className='flex space-around'>
                <Image
                    src="/postman.png"
                    width={1000}
                    height={1000}
                    alt="Postman Go"
                    className='mx-auto pt-10'
                />
            </div>
        </div>
        <hr className="mx-6 border-t border-gray-300 min-w-[960px]" />
      </div>
    </main>
  )
}

export default Projects