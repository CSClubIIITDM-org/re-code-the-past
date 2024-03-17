import React from "react";

const Games = () => {
  return (
    <div className="bg-green-600">
      <div className="container mx-auto px-2 sm:px-5 py-2 lg:px-10 lg:py-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex flex-wrap w-full">
            <div className="w-full md:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block w-full rounded-lg object-cover object-center m-4"
                src="/Image-7.webp"
              />
              <div className="bg-black w-full md:w-[715px] h-[150px] relative m-4">
                <img
                  src="/Image-4.webp"
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
              <div className="w-full md:w-1/2 p-1 md:p-2 lg:p-4">
                <img
                  alt="gallery"
                  className="block w-full rounded-lg object-cover object-center"
                  src="/Image-9.webp"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-1 md:p-2 lg:p-4">
                <img
                  alt="gallery"
                  className="block w-full rounded-lg object-cover object-center"
                  src="/Image-10.webp"
                />
              </div>

              <div className="w-full md:w-1/2 p-1 md:p-2 lg:p-4">
                <img
                  alt="gallery"
                  className="block w-full rounded-lg object-cover object-center"
                  src="/Image-11.webp"
                />
              </div>

              <div className="w-full md:w-1/2 p-1 md:p-2 lg:p-4">
                <img
                  alt="gallery"
                  className="block w-full rounded-lg object-cover object-center"
                  src="/Image-3.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center -translate-y-12">
        <button className="bg-black w-[234px] h-[50px] rounded-md text-white font-semibold">All Games</button>
      </div>
    </div>
  );
};

export default Games;
