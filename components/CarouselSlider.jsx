import React from 'react'

const CarouselSlider = ({children}) => {
  return (
    <div className='overflow-hidden relative'>
        <div className='flex'>{slides}</div>
        <div className='absolute inset-0 flex items-center justify-between'></div>
    </div>
  )
}

export default CarouselSlider