import React from 'react'
import {NavBar} from './index'
import {Footer} from './index'
const Layout = ({children}) => {
  return (
    <>
    <NavBar/>
    <div className='navMargin'></div>
    {children}
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