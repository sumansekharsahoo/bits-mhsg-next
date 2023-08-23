import React from 'react'
import Head from 'next/head'
const credits = () => {
  return (
    <div className=''>
        <Head>
            <title>Credits & Attributions</title>
        </Head>
        <div className='bg-[#dff2e9] h-[280px] w-full flex py-[10px] px-[40px] items-center hero'>
            <img src="/official/MHSG_Short.png" alt="MHSGshort" className='image'/>
            <div className='text-5xl heading text-[#51b39c] font-semibold'>Credits & Attributions</div>
        </div>
        <div className='px-[40px] text-xl mt-5 mb-10 fontSz'>
            <p className='mb-1'>At BITS MHSG, we strive to maintain good ethics and best practices even when it comes to giving credits or attributions.</p>
            <ul className='list-disc ml-5'>
                <li className=''>
                While shortlisting the icons, we found FLATICON to be a good resource. The icons and stickers on Carousel of our homepage, resources page are from FLATICON (<a href="https://www.flaticon.com/" target="_blank" className='text-[#cc8306] underline'>Flaticon</a>)</li>

                <li className='mt-1'>For images in articles page, we made use of stock images and vectors from FREEPIK ( <a href="https://www.freepik.com/"  target="_blank"  className='text-[#cc8306] underline'>Freepik</a> )
                </li>
                <li  className='mt-1'>The Quotes are being fetched from ZenQuotes API ( <a href="https://zenquotes.io/"  target="_blank" className='text-[#cc8306] underline'>zenquotes.io</a> ). New quote is generated at midnight server time (00:00 CST)</li>
            </ul>
        </div>
        <style jsx>{`
            .image{
                height: 180px;
                object-cover:fit;
                margin-right:60px;
            }
            @media only screen and (max-width: 650px){
                .image{
                    height:120px;
                    margin-right:32px;
                }
                .heading{
                    font-size:30px;
                }
                .hero{
                    height:150px;
                }
                .fontSz{
                    font-size:16px;
                }
            }
        `}</style>
    </div>
  )
}

export default credits