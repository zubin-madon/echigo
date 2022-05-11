import React from 'react'
import roadmapImg from "../images/roadmap_img.png"
function Roadmap() {
  return (
    <div>
        {/* Launch Section */}
<section className="text-gray-600 body-font text-xl">

<div className="container px-5 py-24 mx-auto flex flex-wrap">
<h1 className='text-3xl text-echigo-pink'>ROADMAP</h1>
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
          <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider ">PRESALE</h2>
          <p className="leading-relaxed">13th May 2022 at 00:13 hrs UTC.</p>
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
          <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">PUBLIC SALE</h2>
          <p className="leading-relaxed">Immediately after presale. Token tradeable on ECHSWAP.</p>
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
          <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">Invest in ShortDAO</h2>
          <p className="leading-relaxed">ECHIGO holders will have a stake in our Ethereum Project ShortDAO. Profits from Echigo sale will be invested in ShortDAO 
          which is a DAO governed treasury used to short during the bear market.</p>
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
          <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">NFTs</h2>
          <p className="leading-relaxed">Invest in the Echelon Ecosystem to launch NFTs. Team up with ECHEGGS which is the first fully on-chain NFT Project on Echelon.
           Free future drops to all ECHIGO holders.</p>
        </div>
      </div>
      <div className="flex relative">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="3"></circle>
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
          </svg>
        </div>
        <div className="flex-grow pl-4">
          <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">Launchpad</h2>
          <p className="leading-relaxed">Build an Echelon Launchpad and provide  airdrops on all future tokens to Echigo holders.</p>
        </div>
      </div>
    </div>
    <img className="lg:w-1/2 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={roadmapImg} alt="Ichigo" />
  </div>
</div>
</section>
    </div>
  )
}

export default Roadmap