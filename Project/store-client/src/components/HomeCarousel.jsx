// import React from 'react'
// import { Carousel } from 'react-responsive-carousel';

// const HomeCarousel = () => {
//   return (
//     <Carousel>
//                 <div className='w-full flex justify-center items-center '>
//                     <img src="https://cdn.storifyme.com/accounts/cashify-in-0561312/assets/f-best-laptop-medium-74981680898363124.jpeg?t=1680898399000" className='w-fit'/>
//                     <p className="legend">Laptops</p>
//                 </div>
//                 <div className='w-full flex justify-center items-center'>
//                     <img src="https://hips.hearstapps.com/hmg-prod/images/wireless-earbuds-1661183784.jpg" className='w-fit' />
//                     <p className="legend">Earbuds</p>
//                 </div>
//                 <div className='w-full flex justify-center items-center'>
//                     <img src="https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-to-buy-in-2024.jpg" className='w-fit' />
//                     <p className="legend">Mobiles</p>
//                 </div>
//             </Carousel>
//   )
// }

// export default HomeCarousel


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img className="h-[50vh] object-cover" src="https://cdn.storifyme.com/accounts/cashify-in-0561312/assets/f-best-laptop-medium-74981680898363124.jpeg?t=1680898399000" />
          {/* <p className="legend">Mobiles</p> */}

          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-0 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-cyan-600 lg:text-3xl">
                    Mobiles
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-blue-600">
                      40%
                    </span>
                    <span className="text-base font-medium text-cyan-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="h-[50vh] object-cover" src="https://hips.hearstapps.com/hmg-prod/images/wireless-earbuds-1661183784.jpg" />
          {/* <p className="legend">Laptops</p> */}
          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    Laptops
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-blue-600">
                      30%
                    </span>
                    <span className="text-base font-medium text-cyan-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="h-[50vh] object-cover" src="https://www.jagranimages.com/images/newimg/14022024/14_02_2024-best_samsung_smart_watch_price_23653211.jpg" />
          {/* <p className="legend">TV</p> */}
          <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-cyan-600 lg:text-3xl">
                    Smart Watches
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-blue-600">
                      50%
                    </span>
                    <span className="text-base font-medium text-cyan-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>

    </>
  )
}

export default HomeCarousel