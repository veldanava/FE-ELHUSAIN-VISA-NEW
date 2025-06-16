import React from 'react';
import "../carousel.css"

export default function Photo(){
  return(
    <div className="w-full bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-[20px] font-bold md:ml-20">Galeri Foto</h1>
          </div>
        <div>
          <button className="btn btn-warning text-white hidden flex-none lg:block md:mr-20">Lihat Semua</button>
        </div>
        </div> 
       
        <div className="flex justify-center items-center flex-col gap-3 p-4 lg:flex-row lg:items-stretch lg:flex-wrap">
          <div>
        <figure>
    <img
      src="https://i.pinimg.com/736x/46/ae/b6/46aeb6a839c143f4a2d4ee194b9da0b9.jpg"
      alt="Shoes" 
      height={'180px'}
      width={'180px'}/>
  </figure>
      </div>
      <figure>
    <img
      src="https://i.pinimg.com/736x/46/ae/b6/46aeb6a839c143f4a2d4ee194b9da0b9.jpg"
      alt="Shoes" 
      height={'180px'}
      width={'180px'}/>
  </figure>
  <figure>
    <img
      src="https://i.pinimg.com/736x/46/ae/b6/46aeb6a839c143f4a2d4ee194b9da0b9.jpg"
      alt="Shoes" 
      height={'180px'}
      width={'180px'}/>
  </figure>
  <figure>
    <img
      src="https://i.pinimg.com/736x/46/ae/b6/46aeb6a839c143f4a2d4ee194b9da0b9.jpg"
      alt="Shoes" 
      height={'180px'}
      width={'180px'}/>
  </figure>
  <figure>
    <img
      src="https://i.pinimg.com/736x/46/ae/b6/46aeb6a839c143f4a2d4ee194b9da0b9.jpg"
      alt="Shoes" 
      height={'180px'}
      width={'180px'}/>
  </figure>
  </div>
  
  </div>
      </div>
  )
}