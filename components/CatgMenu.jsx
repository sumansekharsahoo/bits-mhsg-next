import React from 'react'
import {useState, useEffect} from "react"
import Link from 'next/link'
import {AiOutlineCaretDown,AiOutlineCaretUp} from 'react-icons/ai'
import { getCategories } from '@/services'


const CatgMenu = () => {
    const [catg, setCatg]=useState([]);
    useEffect(()=>{
        getCategories()
        .then((newCatg)=>setCatg(newCatg))
    },[]);
    const [isOpen, setIsOpen]=useState(true);
  return (
    <div className='mainCatgCont top-[90px] static lg:sticky'>
        <button onClick={()=> setIsOpen((prev)=>!prev)} className='wid text-white bg-black lg:w-[235px] text-[18px] py-[8px] px-[12px] rounded-lg flex items-center justify-between'>
            <span className='catHead'>Categories</span>
            <span>    
            {!isOpen?(
                <AiOutlineCaretDown className='h-8'/>
            ):(
                <AiOutlineCaretUp className='h-8'/>
            )}
            </span>
        </button>
        {isOpen && <div className='wid boxdisp bg-black text-[16px]  py-[8px] px-[8px] border-2  lg:w-[235px] mt-[2px] rounded-lg '>
        <Link href="/articles"><div className='catgBox text-black bg-[#f9fccf] hover:bg-[#ffe270] py-[5px] px-[8px] rounded-md'>
              <span className='text-center'>All Categories</span>
            </div></Link>
        {catg.map((category)=>(
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <div className='catgBox  text-black bg-[#f9fccf] hover:bg-[#ffe270] py-[5px] px-[8px] rounded-md mt-[7px]'>
              <span className='text-center'>{category.name}</span>
            </div>
          </Link>
        ))}
      </div>

    }
    <style jsx>
        {`
        .catgBox{
            white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
        }
        @media only screen and (min-width:1430px) and (max-width:1503px){
            .wid{
                width:200px;
            }
        }
        @media only screen and (max-width:1208px){
            .mainCatgCont{
                display:flex;
                flex-direction:column;
                align-items:center;
            }
            .boxdisp{
                display: grid;
                 grid-template-columns: 1fr 1fr 1fr;
                column-gap:8px;
                row-gap:8px
            }
            .wid{
                width:450px;
            }
            .catHead{
                margin-left:170px;
            }
            .catgBox{
                margin-top:0px;
            }
        }
        @media only screen and (max-width:850px){
            .boxdisp{
                 grid-template-columns: 1fr 1fr;
                column-gap:8px;
                row-gap:8px
            }
        }
        @media only screen and (max-width:600px){
            .boxdisp{
                 grid-template-columns: 1fr;
                column-gap:8px;
                row-gap:8px
            }
            .wid{
                width:300px;
            }
            .catHead{
                margin-left:96px;
            }
        }
        `}
    </style>
    </div>
  )
}

export default CatgMenu