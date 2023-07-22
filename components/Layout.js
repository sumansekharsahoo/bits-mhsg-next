import React from 'react'
import {NavBar} from './index'
const Layout = ({children}) => {
  return (
    <>
    <NavBar/>
    <div className='m-full h-16 bg-transparent'></div>
    {children}
    </>
  )
}

export default Layout