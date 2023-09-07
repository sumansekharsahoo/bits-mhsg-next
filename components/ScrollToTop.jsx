import React from 'react'
import { useState, useEffect } from 'react'
import {BiSolidChevronUpSquare} from 'react-icons/bi'

const ScrollToTop = () => {
    const [backtopbtn, setbacktopbtn] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >500){
                setbacktopbtn(true);
            }else{
                setbacktopbtn(false);
            }
        })
    },[])

    const scrollup = ()=>{
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })
    }


  return (
    <div>
        {backtopbtn && (<button className='btt' onClick={scrollup}><BiSolidChevronUpSquare className='ricon'/></button> )}
        <style jsx>{`
            .btt{
                position: fixed;
                bottom: 30px;
                right: 30px;
                height: 45px;
                font-size:45px;
            }
            .ricon{
                background-color:blue;
            }
            @media screen and (max-width:600px){
               .btt{
                bottom: 13px;
                right: 13px;
                height:50px;
                font-size:50px;
               } 
            }
        `}</style>
    </div>
  )
}

export default ScrollToTop