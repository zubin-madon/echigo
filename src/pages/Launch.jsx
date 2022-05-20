import React from 'react';
import ichigo from '../images/launch-img.jpg'; 
function Launch() {
  return (
    <div>
        {/* Launch Section */}
<section className="text-gray-600 body-font text-xl">

  <div className="container px-5 py-24 mx-auto flex flex-wrap">
  <h1 className='text-3xl text-echigo-pink'>LAUNCH</h1>
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider ">WHEN PRESALE?</h2>
            <p className="leading-relaxed">Presale starts 22nd May 2022 at 00:13 hrs UTC. Approximately 40% of the supply will be sold via Tokenfuel.io. The Presale will aim to raise 70,000(soft cap) to 100,000(hard cap) ECHELON tokens.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">NUMBERS</h2>
            <p className="leading-relaxed">The presale is capped at a minimum buy of 100 ECH and a maximum buy of 1500 ECH per wallet. Presale price: 35000ECHIGO = 1ECH.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">WHAT THEN?</h2>
            <p className="leading-relaxed">70% of liquidity raised through presale will be locked as LP. 30% will be used for marketing within the ECH community.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">PUBLIC LISTING?</h2>
            <p className="leading-relaxed">Public sale will be at 3.5x the pre-sale price, i.e. 10000ECHIGO = 1ECH.</p>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">WHERE?</h2>
            <p className="leading-relaxed">Token will be available for trade on EchSwap. <b>Token Contract:</b> <i>0x3827F25c24e11E8B7C0fc354c073BcEc5B94774e</i></p>
          </div>
        </div>
      </div>
      <img className="lg:w-1/2 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={ichigo} alt="Ichigo" />
    </div>
  </div>
</section>
    </div>
  )
}

export default Launch