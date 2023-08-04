import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className='sticky'>
      <nav className="w-full bg-[#fff]/50 fixed top-0 left-0 right-0 z-10 backdrop-blur-lg	">
        <div className="justify-around px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex items-center  py-0.5 md:py-1 md:block justify-between">
              <Link href="/" >
                <img src="/official/MHSG_Short.png" width={55} height={55} alt="logo" className='' />
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
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  <li className=" text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#EBF1FF]  border-gray-400  md:hover:text-black-600 md:hover:bg-[#dddddd]  md:hover:rounded-md transition-all">
                      Home
                  </li>
                </Link>
                <Link href="/articles" onClick={() => setNavbar(!navbar)}>
                  <li className=" text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#EBF1FF]  border-gray-400  md:hover:text-black md:hover:bg-[#dddddd]  md:hover:rounded-md transition-all">
                      Articles
                  </li>
                 </Link>
                <Link href="/events" onClick={() => setNavbar(!navbar)}>
                  <li className=" text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#EBF1FF]  border-gray-400  md:hover:text-black md:hover:bg-[#dddddd] md:hover:rounded-md transition-all">
                      Events
                  </li>
                </Link>
                <Link href="/resources" onClick={() => setNavbar(!navbar)}>
                  <li className=" text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#EBF1FF]  border-gray-400  md:hover:text-black md:hover:bg-[#dddddd] md:hover:rounded-md transition-all">
                      Resources
                  </li>
                </Link>
                <Link href="/team" onClick={() => setNavbar(!navbar)}>
                  <li className=" text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#EBF1FF]  border-gray-400  md:hover:text-black md:hover:bg-[#dddddd]  md:hover:rounded-md transition-all">
                      Team
                  </li>
                </Link>
                <li className="text-xl text-black py-2 lg:px-12 md:px-2 md:py-0 text-center    md:border-b-0  hover:gray-200  border-gray-400  md:hover:text-black md:hover:bg-transparent">
                  <div className='flex justify-center'>
                    
                    <a href="https://www.facebook.com/groups/BITS.MHSG" target='_blank' className='mr-3'> <Image src="/icons/logo-facebook.svg" width={28} height={28} alt="logo" /></a>
                    <a href="https://www.instagram.com/bits.mhsg/" target='_blank' className='mr-3'> <Image src="/icons/logo-instagram.svg" width={28} height={28} alt="logo" /></a>
                    <a href="https://www.linkedin.com/company/bits-mental-health-support-group/" target='_blank'> <Image src="/icons/logo-linkedin.svg" width={28} height={28} alt="logo" /></a>
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