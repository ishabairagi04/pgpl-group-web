import React from 'react'

export default function Contactus () {
    return (
        <div> <div className='w-full h-[50px] bg-blue-950 text-white md:flex xs:hidden'>
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
                    <div className='md:flex xs:hidden capitalize text-sm pl-32 pt-4 text-blue-950'>

                        <a href="http://localhost:3005/home" className=' hover:text-green-600 '>home</a>
                        <a href="http://localhost:3005/about" className='ml-9 hover:text-green-600'>about us</a>
                        <a href="http://localhost:3005/admission" className='ml-9 hover:text-green-600'>admission</a>
                        <a href="http://localhost:3005/academics" className='ml-9 hover:text-green-600'>academics</a>
                        <a href="http://localhost:3005/branches" className='ml-9 hover:text-green-600'>our branches</a>
                        <a href="http://localhost:3005/career" className='ml-9 hover:text-green-600'>career</a>
                        <a href="http://localhost:3005/contactus" className='ml-9 text-green-600 border-b-4 border-green-600'>contact us</a></div>
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

                </div>
            </div>
            <div className='w-full h-full md:flex'>

                <div className='w-96 h-full' style={{ backgroundImage: `url('bg.jpg')` }}>
                    <div className='w-96 h-full bg-blue-950 opacity-85'>
                        <div className='h-full'>
                            <div className='flex pt-10 pl-5'>

                                <div className='grid grid-cols-1 h-full text-white text-sm pr-16'> <p className='text-white font-bold p-10'>Department Contact Info</p>
                                    <p className='text-green-500 pb-5 pl-10'>career</p>

                                    <p className='pb-7 pl-10'>1810 Campus Way NE
                                        Bothell, WA 98011-8246</p>

                                    <p className='pb-7 pl-10'>+1-2345-5432-45
                                        bsba@kuuniver.edu</p>

                                    <p className='pb-7 text-green-500 pl-10'> Mon – Fri 9:00A.M. – 5:00P.M.</p>

                                    <p className='pb-5 pl-10 font-bold text-2xl'>Social Info</p>
                                    <div className='flex h-24'>
                                        <svg className='ml-10  ' xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#33e63f" d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z" /></svg>

                                        <svg className='ml-3' xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#33e63f" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
                                        <svg className='ml-3' xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="#33e63f" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                        <svg className='ml-3 ' xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="#33e63f" d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z" /></svg>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='md:w-[75%] h-full bg-white md:pl-7'>
                    <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
                        <div className="container mx-auto p-4">
                            <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                                <h1 className="text-3xl font-semibold mb-4 text-blue-900 dark:text-gray-100">contact</h1>
                                <p className="text-blue-600 dark:text-gray-300 mb-6 font-bold">Mail your quiries at :<span className='text-yellow-700'>admission@lnct.com</span> </p>
                                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label for="name" className="text-gray-700 dark:text-gray-300 block mb-1">name</label>
                                        <input type="text" id="name" placeholder="name" className="border p-2 rounded w-full"></input>
                                    </div>
                                    <div>
                                        <label for="email" className="text-gray-700 dark:text-gray-300 block mb-1">Email</label>
                                        <input type="text" id="email" placeholder="email" className="border p-2 rounded w-full"></input>
                                    </div>
                                    <div>
                                        <label for="subject" className="text-gray-700 dark:text-gray-300 block mb-1">subject</label>
                                        <input type="text" id="subject" placeholder="subject" className="border p-2 rounded w-full"></input>
                                    </div>
                                    <div>
                                        <label for="dob" className="text-gray-700 dark:text-gray-300 block mb-1">Date of Birth</label>
                                        <input type="date" id="dob" placeholder="DD/MM/YYYY" className="border p-2 rounded w-full"></input>
                                    </div>
                                    <div >
                                        <label for="message" className="text-gray-700 dark:text-gray-300 block mb-1">Contact No.</label>
                                        <select class="border p-2 rounded w-full">
                                            <option>United States</option>
                                            <option> india</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="message" className="text-gray-700 dark:text-gray-300 block mb-1">Contact No.</label>
                                        <input type="number" id="message" placeholder="Number" className="border p-2 rounded w-full"></input>
                                    </div>
                                    <div>
                                        <label for="message" className="text-gray-700 dark:text-gray-300 block mb-1">message</label>
                                        <input type="text" id="message" placeholder="type here" className="border p-2 h-16 rounded w-full"></input>
                                    </div>
                                    <button className='bg-blue-700 text-white rounded-sm text-sm font-bold hover:bg-blue-900 w-24 h-10 md:-ml-72 md:mt-36'>Send</button>


                                </form>
                            </div>
                        </div>
                    </div>



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
