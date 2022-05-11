import React from 'react';
import metamaskImg from '../images/metamask_img.png'; 
function Metamask() {
  return (
    <div>
                 {/* Tokenomics Section */}
<section className="text-gray-600 body-font text-xl">

<div className="container px-5 py-24 mx-auto flex flex-wrap">
<h1 className='text-3xl text-echigo-pink'>SETUP ECHELON ON METAMASK</h1>
  <div className="flex flex-wrap w-full">
    <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
      <div className="flex relative pb-12">

        <div className="flex-grow pl-4">
          <p className="leading-relaxed">
          Open Metamask. Click on the network and go to 'Add Network'. <br/>
            Network Name: ECHELON<br/>            
            RPC URL: https://rpc.ech.network/ or https://evm.ech.network/<br/>
            Chain ID: 3000<br/>
            Symbol: ECH<br/>
            Explorer: https://scout.ech.network/<br/>
          </p>
        </div>
      </div>

    </div>
    <img className="lg:w-1/3 md:w-1/4 object-center rounded-lg md:mt-0 mt-12" src={metamaskImg} alt="Ichigo" />
  </div>
</div>
</section>
    </div>
  )
}

export default Metamask