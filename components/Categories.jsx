import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { getCategories } from '@/services'
const Categories = () => {
  const [catg, setCatg]=useState([]);
  useEffect(()=>{
    getCategories()
      .then((newCatg)=>setCatg(newCatg))
  },[]);
  return (
    <div className='categories flex flex-col'>
      <span className='text-white text-center text-2xl mb-1'>Categories</span>
      <div className='catgCont'>
        <Link href="/articles"><div className='catgBox'>
              <span className='text-center'>All Categories</span>
            </div></Link>
        {catg.map((category)=>(
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <div className='catgBox'>
              <span className='text-center'>{category.name}</span>
            </div>
          </Link>
        ))}
      </div>
      <style jsx>
        {`
        .categories{
          position:sticky;
          top:90px;
          margin-left:10px;
          padding:6px;
          background-color:#4a3102;
          background-color:black;
          border-radius:12px;
        }
          .catgBox{
            border-radius:8px;
            font-size:18px;
            padding:8px 10px;
            background-color:#f9fccf;
            width:215px;
            margin:6px 3px 2px 3px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .catgBox:hover{
            background-color:#ffe270;
          }
          @media only screen and (max-width: 650px){
            .categories{
              margin:0px 10px 10px 10px;
              width:auto;
              position:static;
            }
            .catgCont{
              display:grid;
              grid-template-columns: 1fr 1fr;
              column-gap:5px;
              row-gap:5px
            }
            .catgBox{
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size:16px;
              margin:0;
              width:auto;
            }
          }
          @media only screen and (max-width: 398px){
            .categories{
              margin:0px 5px 10px 5px;
            }
          }
          @media only screen and (min-width: 650px)and (max-width: 1024px){
            .categories{
              margin:0px 10px 10px 10px;
              width:auto;
              position:static;
            }
            .catgCont{
              display:grid;
              grid-template-columns: 1fr 1fr 1fr;
              column-gap:8px;
              row-gap:8px
            }
            .catgBox{
              
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size:16px;
              margin:0;
              width:auto;
            }
          }
          @media only screen and (min-width: 768px)and (max-width: 1024px){
            .categories{
              margin:5px 8rem 15px 8rem;
            }
          }
        `
        }
      </style>
    </div>
  )
}

export default Categories