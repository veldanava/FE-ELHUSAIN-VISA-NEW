import "../carousel.css"

export default function Carousel(){
  return(
    <div className="bg-base-200">
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
  )
}