import React from 'react'
import {NavBar} from './index'
import {Footer} from './index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children}) => {
  const signOutHandler=()=>{
    toast.info("Signed Out",{
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }
  return (
    <>
    <NavBar signoutAlert={signOutHandler}/>
    <div className='navMargin'></div>
    {children}
    <ToastContainer
      position="bottom-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"/>
    <Footer/>
    <style jsx>
      {`
        .navMargin{
          width:98vw;
          height:59px;
        }

      `}
      
      
    </style>
    </>
  )
}

export default Layout