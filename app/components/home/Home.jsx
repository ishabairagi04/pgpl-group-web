import React from 'react'

export default function Home () {
    return (
        <div><div className='w-full h-[50px] bg-blue-950 text-white md:flex xs:hidden  '>
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
                    <div className='md:flex xs:hidden  capitalize text-sm pl-32 pt-4 text-blue-950'>

                        <a href="http://localhost:3000/home" className=' text-green-600 border-b-4 border-green-600  '>home</a>
                        <a href="http://localhost:3000/about" className='ml-9 hover:text-green-600'>about us</a>
                        <a href="http://localhost:3000/admission" className='ml-9 hover:text-green-600'>admission</a>
                        <a href="http://localhost:3000/academics" className='ml-9 hover:text-green-600'>academics</a>
                        <a href="http://localhost:3000/branches" className='ml-9 hover:text-green-600'>our branches</a>
                        <a href="http://localhost:3000/career" className='ml-9 hover:text-green-600'>career</a>
                        <a href="http://localhost:3000/contactus" className='ml-9 hover:text-green-600'>contact us</a></div>
                </nav>

            </div>
            <div className=' w-full h-96 bg-cover ' style={{ backgroundImage: `url('bg.jpg')` }}>
                <h2 className='font-extrabold text-2xl md:left-10 md:text-4xl  capitalizem text-blue-900
                  font-serif absolute top-44 left-6 '>the best school in the state</h2>
                <h1 className='font-extrabold text-4xl md:text-5xl  capitalizem md:text-white
                  font-serif absolute top-56  bg-opacity-70 left-6 md:left-10 bg-blue-900 p-2'>pratibha global's</h1>

            </div>
            <div className='md:h-32 md:flex justify-center p-7'>
                <div className='flex '>
                    <div className=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14  md:w-10 md:h-10 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg>
                    </div>
                    <div className='pl-4 xs:mb-5 '><h5 className=''>school life</h5>
                        <p className='text-gray-600'>overall in here</p>
                    </div>
                </div>
                <div className='flex md:pl-20'>
                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14  md:w-10 md:h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                    </div>
                    <div className='pl-4 xs:mb-5'><h5>higher studies</h5>
                        <p className='text-gray-600'>acedemics</p></div>
                </div>
                <div className='flex md:pl-24'>
                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14  md:w-10 md:h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                    </svg>
                    </div>
                    <div className='pl-4 xs:mb-5'> <h5>athletics</h5>
                        <p className='text-gray-600'>sports club</p></div></div>
                <div className='flex md:pl-28'>
                    <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14  md:w-10 md:h-10">
                        <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                        <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className='pl-4 xs:mb-5'><h5>social life</h5>
                        <p className='text-gray-600'>overall in here</p></div>
                </div>

            </div>
            <div className='' style={{ backgroundImage: `url('bg.jpg')` }}>
                <div className='md:grid grid-cols-2'>
                    <div className=''>
                        <img className=" w-[100%] " src="lab.jpg" alt="" />
                    </div>
                    <div className='text-white text-lg md:p-5 xs:pr-24 xs:pl-7 bg-blue-950 opacity-90 pt-14' >
                        <h2 className='text-2xl pl-9 font-bold'>Apply for Admission</h2>
                        <p className='p-2 pl-9 text-green-600 font-bold'>Fall 2019 applications are now open</p>
                        <p className='pl-9 pt-5 pr-5 md:text-sm'>We don’t just give students an education and experiences that set them up for success in a career. We help them succeed in their career—to discover a field they’re passionate about and dare to lead it.</p>
                        <button className='xs:mt-10 xs:mb-10 bg-green-700 p-3 font-bold ml-9 mt-9 text-sm rounded-sm'>apply now</button>
                    </div>

                </div>
            </div>
            <div className='bg-white md:h-10'></div>
            <div className='md:h-96 xs:h-[900px]' style={{ backgroundImage: `url('bg.jpg')` }}>
                <div className='text-white md:h-96 xs:h-[900px] bg-blue-950 opacity-90 md:grid grid-cols-2 ' >
                    <div><img className='md:w-64 md:pl-20 xs:w-52 xs:pl-10 pt-14 ' src="pgs-logo-curved.png" alt="" />
                        <p className='text-2xl capitalize font-bold md:pl-20 xs:pl-10 pt-5 text-green-600'>about our school</p></div>
                    <div className='md:-ml-36 text-lg xs:pr-24 xs:pl-10'><p className='pb-7 pt-14 text-gray-300'>We are one of the largest, most diverse universities in the USA with over 90,000 students in USA, and a further 30,000 studying across 180 countries for Kingster University.</p>

                        <p>Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Kingster has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector.</p>

                        <div className='mt-5 -ml-11'><button className='text-sm font-bold capitalize '>read more<svg xmlns="http://www.w3.org/2000/svg" stroke="2" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-10 ml-32 -mt-7 ">
                            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                        </button></div>
                    </div>
                </div>
            </div>
            <div className='md:h-80 xs:[900px] bg-blue-950 md:grid grid-cols-4'>

                <div className='p-8 md:pt-10  capitalize'><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="forestgreen" className="w-12 h-12">
                    <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625ZM21 9.375A.375.375 0 0 0 20.625 9h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5ZM10.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5ZM3.375 15h7.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h7.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 10.875 9h-7.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Z" clipRule="evenodd" />
                </svg>
                </div>
                    <h3 className='font-bold text-white pt-3 pb-4'>school life</h3>
                    <p className='text-white text-sm'>
                        Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</p>
                    <button className='text-green-400 text-sm capitalize pt-5'>learn more</button></div>
                <div className='p-8 md:pt-10 capitalize'><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="forestgreen" class="w-14 h-14">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z" clip-rule="evenodd" />
                </svg>
                </div>
                    <h3 className='font-bold text-white pt-3 pb-4'>school life</h3>
                    <p className='text-white text-sm'>
                        Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</p>
                    <button className='text-green-400 text-sm capitalize pt-5'>learn more</button></div>
                <div className='p-8 md:pt-10 capitalize'><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="forestgreen" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                </div>
                    <h3 className='font-bold text-white pt-3 pb-4'>school life</h3>
                    <p className='text-white text-sm'>
                        Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</p>
                    <button className='text-green-400 text-sm capitalize pt-5'>learn more</button></div>
                <div className='p-8 md:pt-10 capitalize'>   <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="forestgreen" className="w-14 h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg></div>
                    <h3 className='font-bold text-white pt-3 pb-4'>school life</h3>
                    <p className='text-white text-sm'>
                        Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</p>
                    <button className='text-green-400 text-sm capitalize pt-5'>learn more</button>
                </div>
            </div>
            <div className='w-full h-full md:flex'>
                <div className='md:w-[75%] md:h-96 xs:h-[1000px] bg-white pl-7'>
                    <div className='pt-16 capitalize'>
                        <h2 className='text-3xl font-bold'>news and updates</h2>
                        <a className='text-green-500 text-sm ' href="">read all news</a> <hr />
                    </div>
                    <div className='md:grid grid-cols-2 h-96 pt-10  mb-5'>
                        <div className='flex flex-col'>
                            <div><img className='rounded-md' src="poster1.jpg" alt="" /></div>
                            <div className='pt-7 xs:p-7'>
                                <a className=' text-gray-400 text-xs font-bold' href="">JUNE 6 , 2016 / ADMISSION , STUDENT</a> <br />
                                <a className='font-bold xs:text-black md:text-gray-600  xs:text-xl md:text-xs hover:text-green-600' href="">   Professor Albert joint research on mobile money in Tanzania</a>
                            </div>
                        </div>
                        <div className='md:-mt-4'>
                            <div className='flex md:pl-3 xs:p-5'>
                                <div><img className='md:w-48 rounded-sm' src="sc.jpg" alt="" />
                                </div>
                                <div className=' pl-4 '>
                                    <a className=' text-gray-400 text-xs  font-bold' href="">JUNE 6, 2016HOT, UPDATES</a> <br />
                                    <a className='font-bold xs:text-black md:text-gray-600 xs:text-lg md:text-xs hover:text-green-600' href="">
                                        A Global MBA for the next generation of business leaders</a>
                                </div>
                            </div>
                            <div className='flex md:pl-3 xs:p-5'>
                                <div><img className='md:w-48 xs:w-72 rounded-sm' src="san.jpg" alt="" />
                                </div>
                                <div className=' pl-4 md:-mt-7 '>
                                    <a className=' text-gray-400 text-xs font-bold' href="">JUNE 6, 2016HOT, UPDATES</a> <br />
                                    <a className='font-bold xs:text-black md:text-gray-600 xs:text-lg md:text-xs hover:text-green-600' href="">
                                        A Global MBA for the next generation of business leaders</a>
                                </div></div>
                            <div className='flex md:pl-3 xs:p-5 '>
                                <div><img className='md:w-48 xs:w-72 rounded-sm' src="sl.jpg" alt="" />
                                </div>
                                <div className=' pl-4 md:-mt-7'>
                                    <a className=' text-gray-400 text-xs font-bold' href="">JUNE 6, 2016HOT, UPDATES</a> <br />
                                    <a className='font-bold xs:text-black md:text-gray-600 xs:text-lg md:text-xs hover:text-green-600' href="">
                                        A Global MBA for the next generation of business leaders</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='md:w-96 xs:w-full h-full' style={{ backgroundImage: `url('bg.jpg')` }}>
                    <div className='md:w-96 xs:w-full h-full bg-blue-950 opacity-85'>
                        <div className=''>
                            <div className='flex pt-10 pl-5'>
                                <div><svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-8 h-8  ml-10 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
                                </div>
                                <div>
                                    <h2 className='text-xl text-white font-bold capitalize  '>quick links</h2>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 p-16 pt-6 capitalize font-bold'>
                                <a className='text-green-400 pt- pb-5' href="http://localhost:3000/about">about us</a><hr />
                                <a className='text-green-400 mt-5 mb-5' href="http://localhost:3000/academics">academics</a><hr />
                                <a className='text-green-400 mt-5 mb-5' href="http://localhost:3000/admission">admission</a><hr />
                                <a className='text-green-400 mt-5 mb-5' href="http://localhost:3000/branches">Our Brances</a><hr />
                                <a className='text-green-400 mt-5 mb-5' href="http://localhost:3000/career">Career</a><hr />
                                <a className='text-green-400 mt-5 mb-5' href="http://localhost:3000/contactus">Contact Us</a><hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:h-24  md:flex bg-gray-300 xs:mb-0'>
                <div className='md:w-[64%] flex md:p-6 xs:p-6 md:pt-0'>
                    <div className='pt-7 pl-5'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="md:darkblue xs:black" class="md:w-4 md:h-4 xs:w-6 xs:h-6 ">
                        <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
                    </svg>
                    </div>
                    <p className=' xs:text-black md:text-blue-950 pl-2 pt-7 xs:text-sm md:text-xs pr-2'>RT @placeitapp: Making a #YouTube banner for your channel is easy with Placeit’s #bannermaker! Make your own in sec…<a className='text-gray-500 ' href=""> https://t.co/0X22tX3wtm</a> <a className='pl-2 font-bold text-gray-400' href="">yesterday</a></p>
                    <div className='md:pr-7 md:pt-4  md:visible  '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="w-7 h-7 xs:hidden md:inline-block">
                        <path fill-rule="evenodd" d="M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                    </svg>
                    </div>
                </div>
                <div className='bg-green-500 xs:text-green-600  xs:w-full md:w-96  md:pl-12 md:pt-5 xs:pl-10 xs:pr-0 flex xs:p-5 '>
                    <div>
                        <img className='md:w-12 xs:w-20' src="pgslogo.png" alt="" />
                    </div>
                    <a className='md:text-xl capitalize md:pl-5 md:pt-2 xs:ml-5 xs:pt-3 xs:text-3xl xs: font-bold text-white'>apply now
                    </a>
                </div>

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
