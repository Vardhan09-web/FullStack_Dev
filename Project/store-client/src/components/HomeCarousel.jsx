import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = () => {
  return (
    <Carousel>
                <div className='w-full flex justify-center items-center '>
                    <img src="https://cdn.storifyme.com/accounts/cashify-in-0561312/assets/f-best-laptop-medium-74981680898363124.jpeg?t=1680898399000" className='w-fit'/>
                    <p className="legend">Laptops</p>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/wireless-earbuds-1661183784.jpg" className='w-fit' />
                    <p className="legend">Earbuds</p>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <img src="https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-to-buy-in-2024.jpg" className='w-fit' />
                    <p className="legend">Mobiles</p>
                </div>
            </Carousel>
  )
}

export default HomeCarousel