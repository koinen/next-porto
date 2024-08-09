import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const About = () => {
  return (
    <main>
      <Navbar/>
      <div className="mx-auto w-full max-w-[1980px] flex flex-col lg:flex-row p-8 justify-around gap-10">
        <div className='px-8 pb-10 w-full'>   
            <div className='justify-center align-middle gap-8'>
                <Image
                    src="/spartan.png"
                    height={350}
                    width={350}
                    alt="photo of me"
                    className='rounded-full mx-auto'
                />
                <div>
                    <h1 className='text-center py-6 text-2xl font-semibold'>David Bakti Lodianto</h1>
                    <h3 className='text-center mt-2 text-lg'>13523083 <br /> IF - Ganesha <br /> david.lodianto@gmail.com</h3>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-3 w-full'>
            <div className="flex gap-2 h-fit">
                <div>
                    <div className='rounded-full h-1.5 w-1.5 bg-[#699528] mt-2.5'></div>
                    <div className='h-full bg-[#699528] w-px mx-auto'></div>
                </div>
                <div>
                    <h1 className='pb-3 text-xl font-semibold text-[#699528]'>EDUCATION</h1>
                    <ul>
                        <li className='font-light text-sm'>August 2023 - Now
                            <p className='font-semibold text-base'>Computer Science</p> 
                            <p className='font-medium text-base'>Institut Teknologi Bandung</p>
                        </li>
                        <li className='font-light text-sm pt-4'>July 2020 - April 2023
                            <p className='font-semibold text-base'>High School</p> 
                            <p className='font-medium text-base'>SMAK St. Louis 1 Surabaya</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-2 h-fit">
                <div>
                    <div className='rounded-full h-1.5 w-1.5 bg-[#699528] mt-2.5'></div>
                    <div className='h-full bg-[#699528] w-px mx-auto'></div>
                </div>
                <div>
                    <h1 className='pb-3 text-xl font-semibold text-[#699528]'>CERTIFICATES</h1>
                    <ul>
                        <li className='font-light text-sm'>2022
                            <p className='font-semibold text-base'>Participant in OSP Informatika 2022</p> 
                            <p className='font-medium text-base'>Provinsi Jawa Timur</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-2 h-fit">
                <div>
                    <div className='rounded-full h-1.5 w-1.5 bg-[#699528] mt-2.5'></div>
                    <div className='h-full bg-[#699528] w-px mx-auto'></div>
                </div>
                <div>
                    <h1 className='pb-3 text-xl font-semibold text-[#699528]'>SKILLS</h1>
                    <ul>
                        <li className='font-light text-sm pb-2'>Frameworks 
                            <div className='flex gap-2'>
                                <Image
                                    src="/next.png"
                                    width={40}
                                    height={40}
                                    alt="next"
                                />
                                <Image
                                    src="/express.png"
                                    height={40}
                                    width={40}
                                    alt="express"
                                />
                                <Image
                                    src="/react.png"
                                    height={40}
                                    width={40}
                                    alt="react"
                                />
                            </div>
                        </li>
                        <li className='font-light text-sm pt-4 pb-2'>Languages 
                        <div className='flex flex-wrap gap-2'>
                                <Image
                                    src="/cpp.png"
                                    height={30}
                                    width={40}
                                    alt="cpp"
                                />
                                <Image
                                    src="/python.png"
                                    height={30}
                                    width={40}
                                    alt="python"
                                />
                                <Image
                                    src="/js.png"
                                    height={30}
                                    width={40}
                                    alt="js"
                                />
                                <Image
                                    src="/go.png"
                                    height={30}
                                    width={50}
                                    alt="js"
                                />
                                <Image
                                    src="/haskell.png"
                                    height={30}
                                    width={50}
                                    alt="js"
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-2 h-fit">
                <div>
                    <div className='rounded-full h-1.5 w-1.5 bg-[#699528] mt-2.5'></div>
                    <div className='h-full bg-[#699528] w-px mx-auto'></div>
                </div>
                <div>
                    <h1 className='pb-3 text-xl font-semibold text-[#699528]'>HOBBIES AND INTERESTS</h1>
                    <ul>
                        <li className='font-light text-sm'> Interests
                            <p className='font-semibold text-base'>Competitive Programming <br />Web Development (Backend)</p>
                        </li>
                        <li className='font-light text-sm pt-4'> Hobbies
                            <p className='font-semibold text-base'>Digital Illustration</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default About