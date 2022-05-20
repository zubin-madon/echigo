import React from 'react'
import zubin from "../images/zubin.jpeg"
import tdrowe from "../images/tdrowe.jpg"
import jewbacca from "../images/jewbacca.jpg"
function Team() {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-echigo-pink">Team</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
    </div>
    <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={zubin}/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium"><a href="https://twitter.com/Zmadon" alt="Twitter">Zubin Madon</a></h2>
            <p class="text-gray-500">Co-Founder | Blockchain Developer</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={tdrowe} />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium"><a href="https://twitter.com/RealHipHopUnlsh" alt="Twitter">SGT. Bera</a></h2>
            <p class="text-gray-500">Founder & Conceptualization</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={jewbacca} />
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium"><a href="https://twitter.com/KevinWeiner" alt="Twitter">Kevin W. aka Jewbacca</a></h2>
            <p class="text-gray-500">Advisor | 20 yrs experience in gaming & digital marketing</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Team
