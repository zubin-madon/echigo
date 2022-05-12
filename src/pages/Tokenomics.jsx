import React from 'react';
import tokenomicsImg from '../images/tokenomics.png'; 

function Tokenomics() {
  return (
    <div>
         {/* Tokenomics Section */}
<section className="text-gray-600 body-font text-xl">

<div className="container px-5 py-24 mx-auto flex flex-wrap">
<h1 className='text-3xl text-echigo-pink'>TOKENOMICS</h1>
  <div className="flex flex-wrap w-full">
    <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
      <div className="flex relative pb-12">

        <div className="flex-grow pl-4">
          <p className="leading-relaxed">
              ECHIGO <i>(contract: 0x930061094ec65f7d91199e30DdBd5B0dDdc98Eb6)</i> is the first reflector token on the ECHELON chain with 10% of sales reflected back to token holders. Approximately 1.5% of the supply will be distributed amongst advisors and dev team.
               The rest will be sold to the ECHELON community via a presale @ 35000ECHIGO/ECH and public sale @10000ECHIGO/ECH. Most of the pre-sale proceeds will be used to provide LP. Rest will be utilized
                to promote and build ECHIGO. <br/><br/> All money raised from ECHIGO will be invested in the ecosystem and ECHIGO holders will directly benefit from our further developments.
                 See the <a href="/Roadmap" className='text-echigo-pink'>ROADMAP</a> for more on that.
          </p>
        </div>
      </div>

    </div>
    <img className="lg:w-1/2 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={tokenomicsImg} alt="Ichigo" />
  </div>
</div>
</section>
    </div>
  )
}

export default Tokenomics