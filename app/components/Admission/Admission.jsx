import React from 'react'

export default function () {
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
                    <div className='md:flex xs:hidden capitalize text-sm pl-32 pt-4 text-blue-950'>

                        <a href="http://localhost:3005/home" className=' hover:text-green-600 '>home</a>
                        <a href="http://localhost:3005/about" className='ml-9 hover:text-green-600   '>about us</a>
                        <a href="http://localhost:3005/admission" className='ml-9 text-green-600 border-b-4 border-green-600'>admission</a>
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
                        <li className=' pl-4 text-green-600'>admission</li>
                    </ul>
                    <h2 className='font-bold text-2xl pl-10 pt-7'>Detail About How To Apply</h2>
                    <div className='md:flex p-7 justify-center'>
                        <p className=' text-gray-700 p-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat harum, expedita itaque doloribus corporis consectetur, reiciendis hic perspiciatis distinctio quia praesentium, alias maxime asperiores. maiores provident, ipsam, dignissimos error saepe mkftyfgh jbygkb buygjbj jbyu eaque nobis laboriosam praesentium, ad eum.</p>
                        <p className=' p-8 text-gray-700 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae aliquid unde, eius facere molestias temporibus ab incidunt quas nisi. Culpa esse ratione eveniet at, harum enim deserunt tenetur eum totam.
                            . Delectus cumque ducimus voluptatum dignissimos modi iusto! Amet quia officiis .</p>
                    </div>
                </div>
            </div>
            <div className='md:h-80 xs:h-full bg-blue-950 md:grid grid-cols-4'>

                <div className='p-8 pt-10 capitalize'><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="forestgreen" className="w-12 h-12">
                    <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625ZM21 9.375A.375.375 0 0 0 20.625 9h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5ZM10.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5ZM3.375 15h7.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h7.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 10.875 9h-7.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Z" clipRule="evenodd" />
                </svg>
                </div>
                    <h3 className='font-bold text-white pt-3 pb-4'>school life</h3>
                    <p className='text-white text-sm'>
                        Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</p>
                    <button className='text-green-400 text-sm capitalize pt-5'>learn more</button></div>
                <div className='p-8 pt-10 capitalize'><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="forestgreen" class="w-14 h-14">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z" clip-rule="evenodd" />
                </svg>
                </div>
                    <h3 className='font-bold text-white pt-3 pb-4'>school life</h3>
                    <p className='text-white text-sm'>
                        Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</p>
                    <button className='text-green-400 text-sm capitalize pt-5'>learn more</button></div>
                <div className='p-8 pt-10 capitalize'><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="forestgreen" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                </div>
                    <h3 className='font-bold text-white pt-3 pb-4'>school life</h3>
                    <p className='text-white text-sm'>
                        Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</p>
                    <button className='text-green-400 text-sm capitalize pt-5'>learn more</button></div> <div className='p-8 pt-10 capitalize'>   <div className=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="forestgreen" className="w-14 h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg></div>
                    <h3 className='font-bold text-white pt-3 pb-4'>school life</h3>
                    <p className='text-white text-sm'>
                        Kingster University was established by John Smith in 1920 for the public benefit and it is recognized.</p>
                    <button className='text-green-400 text-sm capitalize pt-5'>learn more</button>
                </div>
            </div>
            <div className='pt-5 m-7 border-b-4 border-green-500'>
                <h2 className='font-bold text-2xl pl-10 pt-7'>The Application Process</h2>
                <div className='md:grid grid-cols-3 gap-10 p-12'>
                    <div>
                        <div className='flex'><div className='text-4xl -ml-8 font-bold text-green-500'>1
                        </div><p className='text-sm font-bold pb-4 pl-4'>Start Online Submission</p></div>
                        <p className='text-sm text-gray-600'> A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.
                        </p>
                    </div>
                    <div>
                        <div className='flex'><div className='text-4xl -ml-8 font-bold text-green-500'>2
                        </div><p className='text-sm font-bold pb-4 pl-4'>Start Online Submission</p></div>
                        <p className='text-sm text-gray-600'> A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.
                        </p>
                    </div>
                    <div>
                        <div className='flex'><div className='text-4xl -ml-8 font-bold text-green-500'>3
                        </div><p className='text-sm font-bold pb-4 pl-4'>Start Online Submission</p>
                        </div>
                        <p className='text-sm text-gray-600'> A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.
                        </p>
                    </div>
                    <div>
                        <div className='flex'><div className='text-4xl -ml-8 font-bold text-green-500'>4
                        </div>
                            <p className='text-sm font-bold pb-4 pl-4'>Start Online Submission</p>
                        </div>
                        <p className='text-sm text-gray-600'> A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.
                        </p>
                    </div>
                    <div> <div className='flex'><div className='text-4xl -ml-8 font-bold text-green-500'>5
                    </div><p className='text-sm font-bold pb-4 pl-4'>Start Online Submission</p>
                    </div>
                        <p className='text-sm text-gray-600'> A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.
                        </p>
                    </div>
                    <div> <div className='flex'><div className='text-4xl -ml-8 font-bold text-green-500'>6
                    </div><p className='text-sm font-bold pb-4 pl-4'>Start Online Submission</p>
                    </div>
                        <p className='text-sm text-gray-600'> A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.
                        </p>
                    </div>

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
