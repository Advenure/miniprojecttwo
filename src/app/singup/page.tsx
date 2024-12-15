import Image from "next/image"
export default function Signup(){
    return(
 
   <div className="w-full h-[1340px]">
  <div className="w-full h-[50px] mt-4">
  <h1 className="text-3xl items-center px-2 font-bold">New ceramics</h1>
  </div>
  <div className="min-w-full h-[600px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 max-xl:gap-4 gap-6">
    {/* one */}
    <div className="[460px] items-center   rounded-md px-2 py-2 overflow-hidden cursor-pointer hover:-translate-y-2 transition-all relative">
    <Image className="place-items-center" src={"/Photo.png"} width={305} height={216} alt="logo" ></Image>
    <div>
              
       <p className="text-gray-900 text-xl mt-2">The Dandy chair </p>
       <h4 className="text-lg text-gray-800 font-bold mt-2">£155</h4>
        </div>
    </div>
  
  {/* two */}
  <div className="[460px] items-center   rounded-md px-2 py-2 overflow-hidden cursor-pointer hover:-translate-y-2 transition-all relative">
    <Image className="place-items-center" src={"/Parent.png"} width={305} height={305} alt="logo" ></Image>
    <div>
              
       <p className="text-gray-900 text-xl mt-2">The Dandy chair </p>
       <h4 className="text-lg text-gray-800 font-bold mt-2">£155</h4>
        </div>
    </div>
    {/* three  */}
    <div className="[460px] items-center   rounded-md px-2 py-2 overflow-hidden cursor-pointer hover:-translate-y-2 transition-all relative">
    <Image className="place-items-center" src={"/Parent (2).png"} width={305} height={305} alt="logo" ></Image>
    <div>
              
       <p className="text-gray-900 text-xl mt-2">The Dandy chair </p>
       <h4 className="text-lg text-gray-800 font-bold mt-2">£155</h4>
        </div>
    </div>
    {/* four  */}
    <div className="[460px] items-center   rounded-md px-2 py-2 overflow-hidden cursor-pointer hover:-translate-y-2 transition-all relative">
    <Image className="place-items-center" src={"/Parent (1).png"} width={305} height={305} alt="logo" ></Image>
    <div>
              
       <p className="text-gray-900 text-xl mt-2">The Dandy chair </p>
       <h4 className="text-lg text-gray-800 font-bold mt-2">£155</h4>
        </div>
    </div>
  </div>
  {/* two */}
   <div className="w-full h-[50px]">
  <div className="w-full h-[50px] ">
  
  </div>
  <div className="min-w-full h-[600px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 max-xl:gap-4 gap-6">
    {/* one */}
    <div className="[460px] items-center   rounded-md px-2 py-2 overflow-hidden cursor-pointer hover:-translate-y-2 transition-all relative">
    <Image className="place-items-center" src={"/Photo.png"} width={305} height={216} alt="logo" ></Image>
    <div>
              
       <p className="text-gray-900 text-xl mt-2">The Dandy chair </p>
       <h4 className="text-lg text-gray-800 font-bold mt-2">£155</h4>
        </div>
    </div>
  
  {/* two */}
  <div className="[460px] items-center   rounded-md px-2 py-2 overflow-hidden cursor-pointer hover:-translate-y-2 transition-all relative">
    <Image className="place-items-center" src={"/Parent.png"} width={305} height={305} alt="logo" ></Image>
    <div>
              
       <p className="text-gray-900 text-xl mt-2">The Dandy chair </p>
       <h4 className="text-lg text-gray-800 font-bold mt-2">£155</h4>
        </div>
    </div>
    {/* three  */}
    <div className="[460px] items-center   rounded-md px-2 py-2 overflow-hidden cursor-pointer hover:-translate-y-2 transition-all relative">
    <Image className="place-items-center" src={"/Parent (2).png"} width={305} height={305} alt="logo" ></Image>
    <div>
              
       <p className="text-gray-900 text-xl mt-2">The Dandy chair </p>
       <h4 className="text-lg text-gray-800 font-bold mt-2">£155</h4>
        </div>
    </div>
    {/* four  */}
    <div className="[460px] items-center   rounded-md px-2 py-2 overflow-hidden cursor-pointer hover:-translate-y-2 transition-all relative">
    <Image className="place-items-center" src={"/Parent (1).png"} width={305} height={305} alt="logo" ></Image>
    <div>
              
       <p className="text-gray-900 text-xl mt-2">The Dandy chair </p>
       <h4 className="text-lg text-gray-800 font-bold mt-2">£155</h4>
        </div>
    </div>
  </div>
      </div>
      </div>

    
    )
}