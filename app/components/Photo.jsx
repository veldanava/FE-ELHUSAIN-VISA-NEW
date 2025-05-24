import React from 'react';
import "../carousel.css"

export default function Photo(){
  return(
    <div className="w-full bg-base-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-[20px] md:ml-20">Galeri Foto</h1>
          </div>
        <div>
          <button className="btn btn-success text-white hidden flex-none lg:block md:mr-20">Lihat Semua</button>
        </div>
        </div> 
        <div className='relative'>
          <swiper-container class="mySwiper" slides-per-view="auto" autoplay="true" loop="true"
            centered-slides="true">
            <swiper-slide><img className="h-75 w-85" src="https://i.pinimg.com/736x/ec/90/06/ec9006a3c56757ade17e14ec4eed68a5.jpg" alt="" /></swiper-slide>
            <swiper-slide><img className="h-75 w-85" src="https://i.pinimg.com/736x/ec/90/06/ec9006a3c56757ade17e14ec4eed68a5.jpg" alt="" /></swiper-slide>
            <swiper-slide><img className="h-75 w-85" src="https://i.pinimg.com/736x/ec/90/06/ec9006a3c56757ade17e14ec4eed68a5.jpg" alt="" /></swiper-slide>
            <swiper-slide><img className="h-75 w-85" src="https://i.pinimg.com/736x/ec/90/06/ec9006a3c56757ade17e14ec4eed68a5.jpg" alt="" /></swiper-slide>
            <swiper-slide><img className="h-75 w-85" src="https://i.pinimg.com/736x/ec/90/06/ec9006a3c56757ade17e14ec4eed68a5.jpg" alt="" /></swiper-slide>
            <swiper-slide><img className="h-75 w-85" src="https://i.pinimg.com/736x/ec/90/06/ec9006a3c56757ade17e14ec4eed68a5.jpg" alt="" /></swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
  )
}