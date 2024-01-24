import React from 'react'
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <div className='w-full h-[50px] bg-blue-950 text-white  md:flex xs:hidden'>
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
                    <div className=' md:flex xs:hidden capitalize text-sm pl-32 pt-4 text-blue-950'>

                        <a href="http://localhost:3005/home" className=' hover:text-green-600 '>home</a>
                        <a href="http://localhost:3005/about" className='ml-9 text-green-600 border-b-4 border-green-600'>about us</a>
                        <a href="http://localhost:3005/admission" className='ml-9 hover:text-green-600'>admission</a>
                        <a href="http://localhost:3005/academics" className='ml-9 hover:text-green-600'>academics</a>
                        <a href="http://localhost:3005/branches" className='ml-9 hover:text-green-600'>our branches</a>
                        <a href="http://localhost:3005/career" className='ml-9 hover:text-green-600'>career</a>
                        <a href="http://localhost:3005/contactus" className='ml-9 hover:text-green-600'>contact us</a></div>
                </nav>

            </div>
            <div className=' w-full h-96 bg-cover ' style={{ backgroundImage: `url('bg.jpg')` }}>
                 <h2 className='font-extrabold text-2xl md:text-2xl  capitalizem  md:text-green-600
                  font-serif absolute top-28 md:top-96 left-6 md:left-10'>know us better</h2>
                <h1 className='font-extrabold text-5xl md:text-5xl  capitalizem md:text-white
                  font-serif absolute top-36 md:top-[430px] left-6  md:left-10'>about us</h1>
               
            </div>
            <div>
                <div className='p-4'>
                    <ul className='flex pl-7 '>
                        <li className='text-blue-900'>home</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" className='w-6 h-6 pl-3'>
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        </li>
                        <li className=' pl-4 text-green-600'>about us</li>
                    </ul>
                    <div className='md:flex  p-7 justify-center'>
                        <img className='w-96' src="school.jpg" alt="" />
                        <p className=' text-gray-700 text-sm md:pl-20 p-4 md:w-[48%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae aliquid unde, eius facere molestias temporibus ab incidunt quas nisi. Culpa esse ratione eveniet at, harum enim deserunt tenetur eum totam.
                            Dolorem beatae veniam nam facilis, at deleniti autem praesentium repellat, est suscipit in soluta assumenda dignissimos a et porro. Delectus cumque ducimus voluptatum dignissimos modi iusto! Amet quia officiis dolore!
                            Nulla qui dolor consequatur iure mollitia, placeat voluptatum vero magni aliquam, consectetur dolorum itaque quam pariatur alias nihil, soluta cum tempora non illum. Harum repellat itaque, iste quaerat officia debitis.</p>
                    </div>
                </div>
            </div>
            <div className='w-full md:h-[400px] xs:h-full text-lg bg-blue-950 text-white md:flex' >
                <div className='md:pt-40 xs:pt-10 pl-7'>
                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-16 h-16 pb-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                    </div>
                    <h2 className='text-green-600'>our Philosophy</h2>
                    <p className='text-sm pt-3'>
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.</p>

                </div>
                <div className='md:pt-40 xs:pt-10 pl-7'>
                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-16 h-16 pb-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg>
                    </div>
                    <h2 className='text-green-600'>pratibha global'principle </h2>
                    <p className='text-sm pt-3'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.</p>
                </div>
                <div className='md:pt-40 xs:pt-10 xs:pb-10 pl-7'>
                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-16 h-16 pb-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                    </div>
                    <h2 className='text-green-600'>key of success</h2>
                    <p className='text-sm pt-3'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.</p>
                </div>
            </div>
            <div className='md:grid grid-cols-3 pt-10'>
                <div className='p-6 hover:shadow-xl hover:shadow-slate-700'> <img src="/kid.jpg" alt="" /></div>
                <div className='p-6 hover:shadow-xl hover:shadow-slate-700'><img src="san.jpg" alt="" /></div>
                <div className='p-6 hover:shadow-xl hover:shadow-slate-700'><img src="lunch.jpg" alt="" /></div>
                <div className='p-6 hover:shadow-xl hover:shadow-slate-700'><img src="lunch.jpg" alt="" /></div>
                <div className='p-6 hover:shadow-xl hover:shadow-slate-700'><img src="lunch.jpg" alt="" /></div>
                <div className='p-6 hover:shadow-xl hover:shadow-slate-700'><img src="lunch.jpg" alt="" /></div>
                <button className='md:ml-[1000px] md:-mt-6 xs:ml-[45%]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="md:w-7 md:h-7 xs:w-9">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </button>
            </div>
            <div className='md:grid sm:p-5 md:grid-cols-2 xs:h-[600px] md:mt-10 md:h-full  bg-blue-950 '>
                <div>
                    <img src='/lab.JPG' className='sm:w-96 md:w-full   rounded-lg shadow-lg p-10  hover:shadow-2xl hover:shadow-slate-500 '></img>
                </div>
                <div className=' xs:mt-10  pl-5  text-white justify-center'>
                    <h1 className=' text-3xl md:text-3xl mb-9 capitalize'>become a teacher</h1>
                    <p className='md:text-lg mb-8'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <a className='bg-blue-900  hover:bg-blue-800 text-blue-300 rounded-md  ml-3 pl-20 pr-20 md:pl-32 md:pr-32 pt-3 pb-3' href="http://localhost:3005/career">get started now </a>
                </div>
            </div>
            <div className='md:h-36 xs:h-full bg-slate-800 '>
                <ul className='text-white text-3xl  font-bold  md:pt-5 md:flex '>
                    <li className='md:pl-9  xs:p-10 xs:pl-36'>indore</li>
                    <li className='md:pl-10 xs:p-10 xs:pl-36'>gwalior</li>
                    <li className='md:pl-11 xs:p-10 xs:pl-36'>sonkatch</li>
                    <li className='md:pl-12 xs:p-10 xs:pl-36'>bagli</li>
                    <li className='md:pl-14 xs:p-10 xs:pl-36'>dewas</li>
                    <li className='md:pl-10 xs:p-10 xs:pl-36'>ujjain</li>
                </ul>
            </div>
            <div className='w-full xs:h-[1200px] md:h-72 bg-black md:grid grid-cols-4  xs:-mt-2 xs:pt-5 md:m-0'>
                <div className='border-b-2 xs:m-10 xs:pb-3 md:mr-0  border-green-600'>
                    <div><img className='w-44 pl-10 xs:mt-10 md:mt-0' src="pgs-logo-curved.png" alt="" /></div>
                    <p className='md:text-blue-300 xs:text-gray-400 md:text-sm pt-7'>Box 35300
                        1810 Campus Way NE
                        Bothell, WA 98011-8246</p>
                    <h3 className='pl-1 pt-7 text-white xs:text-lg md:text-sm'>+91-46814-95542</h3>
                    <h3 className='pl-1 pt-5 text-white md:text-sm xs:text-lg'>email@gmail.com</h3>

                </div>
                <div className='capitalize  m-2 md:pl-0 md:mr-0 ' >
                    <h3 className='text-white xs:ml-10 md:mt-10 xs:m-10 text-lg  md:pl-0 md:mb-5 md:mr-0 xs:border-b-4 xs:border-green-600  md:border-b-2 md:border-green-800'>academics</h3>
                    <ul className='text-slate-400 pl-10 pt-4 text-sm'>
                        <li className=''>Admission</li>

                        <li className='pt-2'> Accessibility</li>
                        <li className='pt-2'> Returns Policy</li>
                        <li className='pt-2'> Refund Policy</li>
                        <li className='pt-2'> Hiring Statistics</li>

                    </ul>
                </div>
                <div className='capitalize  m-2 md:pl-0 md:mr-0'  >
                    <h3 className='text-white xs:ml-10 md:mt-10 xs:m-10 text-lg  md:pl-0 md:mb-5 md:mr-0 xs:border-b-4 xs:border-green-600 md:border-b-2 md:border-green-800 '>career</h3>
                    <ul className='text-slate-400 pl-10 xs:pt-4   text-sm'>
                        <li className='pt-2'>Carrer</li>
                        <li className='pt-2'> Placement Record</li>
                        <li className='pt-2'>Transpotation</li>
                        <li className='pt-2'> Accounts Review</li>
                    </ul>
                </div>
                <div className='capitalize   md:m-2 xs:pb-10  md:pl-0 md:mr-0' >
                    <h3 className='text-white xs:ml-10 md:mt-10 xs:m-10 text-lg  md:pl-0 md:mb-5 md:mr-0 xs:border-b-4 xs:border-green-600 md:border-b-2 md:border-green-800'>quick links</h3>
                    <ul className='text-slate-400 pl-10 pt-4 text-sm'>
                        <li className='pt-2'> 1on1 Coaching !</li>
                        <li className='pt-2'> Company Review</li>
                        <li className='pt-2'>Accounts Review</li>
                        <li className='pt-2'>HR Consulting</li>
                        <li className='pt-2'>SEO Optimisation</li>
                    </ul>
                </div>
            </div>
            <div className='md:bg-black md:h-14 md:pt-5 md:text-xs xs:p-5 text-slate-400 md:flex xs:bg-zinc-950'>
                <p className='md:pl-2' >© 2024 PGPL. All rights reserved.</p>
                <p className=' xs:pl-4 md:pl-[500px]'>Terms & Conditions</p>
                <p className='xs:pl-4 md:pl-9'> Privacy Policy</p>
                <p className='xs:pl-4 md:pl-9'> Cookies</p>
            </div>
        </div>


    )
}

