import React from "react";

const Hero = () => {
  return (
    <>
    <div className="bg-blue-900">
      <div className="container mx-auto px-2 sm:px-5 py-2 lg:px-10 lg:py-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex flex-wrap w-full">
            <div className="w-full md:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block w-full rounded-lg object-cover object-center m-4"
                src="/Image-1.webp"
              />
              <div className="bg-black w-full md:w-[715px] h-[150px] relative m-4">
                <img
                  src="/Image-6.webp"
                  className="absolute top-10 md:top-0 left-12 md:left-0 translate-x-9  translate-y-8"
                />
                <h1 className="text-white font-regular absolute top-[-15px] md:top-[-10px] left-[160px] md:left-0 text-2xl md:text-xl translate-x-32 translate-y-10">
                  Them Soviet Boys
                </h1>
                <h1 className="text-white font-regular absolute top-[10px] md:top-[15px] left-[160px] md:left-0 text-xl md:text-md translate-x-32 translate-y-10">
                  Teen Titans Go
                </h1>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-wrap">
              <div className="w-full md:w-1/2 h-[50%] p-1 md:p-2 lg:p-4">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center "
                  src="/Image-2.jpeg"
                />
                <div className="bg-black w-full p-20 relative">
                  <img src="/Image-4.webp" className="absolute top-0 left-0 translate-x-10  translate-y-8 " />
                  <h1 className="font-regular absolute top-[-20px] left-20 text-md text-pink-500 md:text-sm lg:text-xs translate-x-12 translate-y-16">
                    Welcome to the Creek Street
                  </h1>
                  <h1 className="font-regular absolute top-0 left-20 text-md text-white translate-x-12   translate-y-6">
                    Craig of the creek
                  </h1>
                </div>
                <div className="bg-black w-full p-20 relative m-1">
                  <h1 className="font-regular absolute top-0 left-20 text-2xl text-white translate-x-12   translate-y-12">
                    Mobile App                  </h1>
                </div>
              </div>
              

                <div className="w-full md:w-1/2 h-[50%] p- md:p-2 lg:p-4 -m-6 translate-y-7">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="/Image-3.webp"
                  />
                <div className="bg-black w-full p-20 relative ">
                  <img src="/Image-5.webp" className="absolute top-0 left-0 translate-x-11   translate-y-6" />
                  <h1 className="font-regular absolute top-[-20px] left-20 text-md text-pink-500 md:text-sm lg:text-xs translate-x-12   translate-y-10">
                    Tho Potion
                  </h1>
                  <h1 className="font-regular absolute top-0 left-20 text-sm text-white translate-x-12   translate-y-12">
                    The Amazing world og Gumball
                  </h1>
                </div>
                <div className="bg-black w-full p-20 relative m-1">
                  <h1 className="font-regular absolute top-0 left-20 text-2xl text-white translate-x-12   translate-y-12">
                    Unlocked
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center -translate-y-12">
      <button className="bg-pink-500 w-[234px] h-[50px] rounded-md text-blue-400 font-semibold">All Video</button>
    </div>
    </div>
    </>
  );
};

export default Hero;
