import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth, googleProvider} from "../config/firebase"
import {signInWithPopup, signOut} from "firebase/auth"
import { FaUser } from "react-icons/fa";
import {admins} from "@/components/index"


function NavBar({signoutAlert}) {
  const [navbar, setNavbar] = useState(false);
  const [loginStatus, setLoginStatus]=useState(false);
  const [username, setUsername]= useState("")
  const [disp, setDisp]= useState(false);
  const [adperm, setAdminperm]=useState(false);
  // const auth_= getAuth();
  const auth = getAuth();
  const user = auth.currentUser;
  let email;

  useEffect(()=>{
    auth.onAuthStateChanged(
      async(user)=>{
        if(user){
          setLoginStatus(true);
          let disname = user.displayName;
          email = user.email;
          admins.includes(email)?setAdminperm(true):setAdminperm(false)
          let ct=0;
          for(ct=0;ct<disname.length;ct++){
            if(disname[ct]===' '){
              disname= disname.slice(0,ct);
            }
          }
          setUsername(disname);
        }
        else{
          setLoginStatus(false);
        }
      }
    )
  },[])

  const signIn = async () => {
      try {
      await signInWithPopup(auth, googleProvider);
      setLoginStatus(true);
      } catch (err) {
      console.error(err);
      }
  };
  const logOut = async () => {
      try {
      await signOut(auth);
      setLoginStatus(false);
      signoutAlert();
      setDisp(false)
      } catch (err) {
      console.error(err);
      }
  };


  return (
    <div className='sticky z-50'>
      <nav className="w-[100vw] bg-[#fff]/50 fixed top-0 left-0 right-0 z-10 backdrop-blur-lg	">
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
                  <li className=" text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#EBF1FF]  border-gray-400  md:hover:text-black-600 md:hover:bg-[#dddddd]  md:hover:rounded-md transition-all ipadair">
                      Home
                  </li>
                </Link>
                <Link href="/articles" onClick={() => setNavbar(!navbar)}>
                  <li className=" text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#EBF1FF]  border-gray-400  md:hover:text-black md:hover:bg-[#dddddd]  md:hover:rounded-md transition-all ipadair">
                      Articles
                  </li>
                 </Link>
                <Link href="/events" onClick={() => setNavbar(!navbar)}>
                  <li className=" text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#EBF1FF]  border-gray-400  md:hover:text-black md:hover:bg-[#dddddd] md:hover:rounded-md transition-all ipadair">
                      Events
                  </li>
                </Link>
                <Link href="/resources" onClick={() => setNavbar(!navbar)}>
                  <li className=" text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#EBF1FF]  border-gray-400  md:hover:text-black md:hover:bg-[#dddddd] md:hover:rounded-md transition-all ipadair">
                      Resources
                  </li>
                </Link>
                <Link href="/team" onClick={() => setNavbar(!navbar)}>
                  <li className=" text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#EBF1FF]  border-gray-400  md:hover:text-black md:hover:bg-[#dddddd]  md:hover:rounded-md transition-all ipadair">
                      Team
                  </li>
                </Link>
                <div className='signContainer relative'>
                  {loginStatus?<button onClick={()=>setDisp(!disp)} className="signout-Button signin-signout-Button flex align-middle"><FaUser className='mr-[7px] mt-[3px]'/><span>{username}</span></button>:<button onClick={signIn} className="signin-Button signin-signout-Button">Sign In</button>}
                  {disp?<div style={{disp}} className='w-[140px] absolute top-[42px] bg-[white] text-[19px] px-[5px] py-[4px] border-[2px] border-[#b0b0b0] rounded-xl adminSpl'>{adperm?<a className='block w-[100%] text-center border-[white] hover:bg-[#dcdbdb] transition-colors rounded-md mb-[2px]' href='/seekhelp'>Admin</a>:<></>}<a href='/account' className='block w-[100%] text-center border-[white] hover:bg-[#dcdbdb] transition-colors rounded-md mb-[2px]'>Account</a><button className='block w-[100%] hover:bg-[#e35752] hover:text-[white] text-[#e35752] transition-colors rounded-md' onClick={logOut}>Log out</button></div>:<></>}
                </div>
                <li className="text-xl text-black py-2 lg:px-12 md:px-2 md:py-0 text-center    md:border-b-0  hover:gray-200  border-gray-400  md:hover:text-black md:hover:bg-transparent">
                  <div className='flex justify-center'>
                    
                    <a href="https://www.facebook.com/groups/BITS.MHSG" target='_blank' className='mr-3'> <Image src="/icons/logo-facebook.svg" width={28} height={28} alt="logo" /></a>
                    <a href="https://instagram.com/bits.mhsg?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_blank' className='mr-3'> <Image src="/icons/logo-instagram.svg" width={28} height={28} alt="logo" /></a>
                    <a href="https://www.linkedin.com/company/bits-mental-health-support-group/" target='_blank'> <Image src="/icons/logo-linkedin.svg" width={28} height={28} alt="logo" /></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <style jsx>{`
            .signin-signout-Button{
              color:white;
              padding:8px 16px;
              font-size:18px;
              border-radius:6px;
              margin-left:12px
            }

            .signin-Button{
              background-color:#099476;
            }
            .signin-Button:hover{
              background-color:#077a62;
              transition: all .2s ease-out;
            }
            .signout-Button{
              background-color:#707070;
            }
            .signout-Button:hover{
              background-color:#5c5c5c;
              transition: .2s ease-out;
              
            }
            

            @media only screen and (min-width:750px) and (max-width:900px){
              .signin-signout-Button{
                padding:7px 14px;
                font-size:18px;
              }
              .ipadair{
                padding:7px 14px;
                font-size:18px;
              }
            }
            @media only screen and (max-width:750px){
              .signContainer{
                display: flex;
                justify-content: center;
                align-items: center;
                margin:12px 0px;
              }
              .signin-signout-Button{
                margin-left:0px;
              }
            }

          `}</style>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;