import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-[#f4f4f4]/80 fixed top-0 left-0 right-0 z-10 backdrop-blur-md	">
        <div className="justify-around px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex items-center justify-between py-0.5 md:py-1 md:block">
              <Link href="/">
                <img src="/official/MHSG_Short.png" width={55} height={55} alt="logo" />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/icons/close-outline.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src='/icons/menu-outline.svg'
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className=" text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-gray-200  border-gray-400  md:hover:text-blue-600 md:hover:bg-gray-200 md:hover:rounded-md transition-all">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className=" text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-200  border-gray-400  md:hover:text-black-600 md:hover:bg-gray-300  md:hover:rounded-md transition-all">
                  <Link href="/articles" onClick={() => setNavbar(!navbar)}>
                    Articles
                  </Link>
                </li>
                <li className=" text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-200  border-gray-400  md:hover:text-blue-600 md:hover:bg-gray-200 md:hover:rounded-md transition-all">
                  <Link href="/events" onClick={() => setNavbar(!navbar)}>
                    Events
                  </Link>
                </li>
                <li className=" text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-200  border-gray-400  md:hover:text-blue-600 md:hover:bg-gray-200 md:hover:rounded-md transition-all">
                  <Link href="/resources" onClick={() => setNavbar(!navbar)}>
                    Resources
                  </Link>
                </li>
                <li className=" text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-200  border-gray-400  md:hover:text-blue-600 md:hover:bg-gray-200  md:hover:rounded-md transition-all">
                  <Link href="/team" onClick={() => setNavbar(!navbar)}>
                    Team
                  </Link>
                </li>
                <li className="text-xl text-black py-2 px-12 text-center   border-b-2 md:border-b-0  hover:gray-200  border-gray-400  md:hover:text-blue-600 md:hover:bg-transparent">
                  <div className='flex'>
                    
                    <a href="https://www.instagram.com/bits.mhsg/" target='_blank' className='mr-3'> <Image src="/icons/logo-facebook.svg" width={28} height={28} alt="logo" /></a>
                    <a href="https://www.instagram.com/bits.mhsg/" target='_blank' className='mr-3'> <Image src="/icons/logo-instagram.svg" width={28} height={28} alt="logo" /></a>
                    <a href="https://www.instagram.com/bits.mhsg/" target='_blank'> <Image src="/icons/logo-linkedin.svg" width={28} height={28} alt="logo" /></a>
                        
                    
                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                        
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </nav>
    </div>
  );
}

export default NavBar;