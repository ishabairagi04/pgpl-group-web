import React from 'react'

export default function Academics() {
    return (
        <div><div className='w-full h-[50px] bg-blue-950 text-white flex'>
            <ul className='flex  text-lg pl-9'>
                <ll><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="lightblue" className='w-6 h-6 pt-2'>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                </ll>
                <li className='pl-1 pt-2 text-blue-300 text-sm'>email@gmail.com</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="lightblue" className='w-6 h-6 pt-2 pl-2'>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                </li>
                <li className='pl-1 pt-2 text-blue-300 text-sm'> +91-95589-59255</li>
                <li className=' pl-[470px] pt-2 text-blue-300 text-sm'>alumini</li>
                <li className=' pl-4 pt-2 text-blue-300 text-sm'>calander</li>
                <li className='pl-4 pt-2 text-blue-300 text-sm'>portal</li>
            </ul>
        </div>

            <div className='w-full h-[70px]  bg-white flex'>
                <img className='pl-4 w-56 h-14 pt-2' src="pgs-logo-curved.png" alt="" />
                <nav>
                    <div className='flex capitalize text-sm pl-32 pt-4 text-blue-950'>

                        <a href="http://localhost:3005/home" className=' hover:text-green-600 '>home</a>
                        <a href="http://localhost:3005/about" className='ml-9 hover:text-green-600   '>about us</a>
                        <a href="http://localhost:3005/admission" className='ml-9 hover:text-green-600'>admission</a>
                        <a href="http://localhost:3005/academics" className='ml-9  text-green-600 border-b-4 border-green-600'>academics</a>
                        <a href="http://localhost:3005/branches" className='ml-9 hover:text-green-600'>our branches</a>
                        <a href="http://localhost:3005/career" className='ml-9 hover:text-green-600'>career</a>
                        <a href="http://localhost:3005/contactus" className='ml-9 hover:text-green-600'>contact us</a></div>
                </nav>

            </div>
            <div className=' w-full h-96 bg-cover ' style={{ backgroundImage: `url('bg.jpg')` }}>
                <h2 className='font-extrabold text-2xl md:text-2xl  capitalizem  md:text-green-600
                  font-serif absolute top-28 md:top-96 left-6 md:left-10'>admission</h2>
                <h1 className='font-extrabold text-5xl md:text-4xl  capitalizem md:text-white
                  font-serif absolute top-28 md:top-[430px] left-6 md:left-10'>apply to pratibha global</h1>

            </div></div>
    )
}
