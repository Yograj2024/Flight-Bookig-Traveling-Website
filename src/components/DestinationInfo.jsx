import React from "react";
import { destinationInfo } from "../utils/data";

const DestinationInfo = () => {

 const [
    { 
      location,
      shortDescription,
      travelAdvice,
      topAttraction,
      gallery:[img1,img2,img3,img4],
    }
  ] = destinationInfo;

  return (
    <div className="w-[95%] mx-auto p-4 flex flex-col gap-y-[20px] bg-white">
      <div className="h-[600px] rounded-lg relative  before:content-[' '] before:h-full before:w-full before:absolute before:z-[1] before:bg-[url('https://cdn.sanity.io/images/ocl5w36p/prod2/02d5266ba2e7a05097c8aa5c6f5533095f8b50fc-3840x1860.jpg')] before:rounded-[30px] before:bg-cover before:bg-[0%_0%]">
      </div>
      
      <h2 className="p-[10px] font-semibold text-[2rem]  rounded w-[380px]"> {location} </h2>
      <p className="  rounded w-[650px] text-[1.2rem]  flex items-center p-[10px]"> {shortDescription} </p>
      
      <div className={`flex justify-between`}>
        {
          travelAdvice.map( ( item ) => {
            return (
                <>
                    <div className="h-[80px]  rounded w-[300px] flex items-center justify-around border border-red-300">
                      <div className={`h-[50px] aspect-square`}>
                        <img src={item.icon} alt="" /> 
                      </div>
                      <div className={''}>
                        <p> {item.title} </p>
                      </div>
                    </div>
                </>
              )
          })
        }
      </div>
      <div className="w-20 h-8 bg-blue-500 text-white flex items-center justify-center rounded shadow-md mr-0 ml-auto">Button</div>
      
      <div className="w-[85%] m-auto h-[600px] grid grid-rows-2  gap-4">
        <div className="grid grid-cols-2 gap-4" style={{gridTemplateColumns:"61% 38%"}}> 
          <div className={`bg-red-300 rounded-[20px] bg-cover bg-center`} style={{backgroundImage:`url(${img1})`}}></div>
          <div className={`bg-red-300 rounded-[20px] bg-center bg-cover`} style={{backgroundImage:`url(${img2})`}}></div>
        </div>
        <div className="grid grid-cols-2 gap-4" style={{gridTemplateColumns:"38% 61%"}}> 
          <div className={`bg-red-300 rounded-[20px] bg-cover bg-center`} style={{backgroundImage:`url(${img3})`}}></div>
          <div className={`bg-red-300 rounded-[20px] bg-center bg-cover`} style={{backgroundImage:`url(${img4})`}}></div>
        </div>
      </div>
      
      <div className="mt-[50px]">
        <h2 className={` font-semibold text-[2rem]`}>Top Attraction</h2>
        <div className={`grid grid-cols-2 gap-y-[30px] mt-[50px]`}>
            {
              topAttraction.map( ( item ) => {
                return (
                    <>
                        <div className={`flex gap-x-[50px]`}>
                          <div className={`h-[150px] aspect-square rounded-[20px] bg-slate-300`}> 
                            <img src={item.placeImg} className={`h-full w-full object-cover rounded-[20px]`} alt="" />
                          </div>
                          <div>
                            <h3 className={`font-semibold text-[1.5rem]`}>{item.placeName} </h3>
                            <p> {item.description} </p>
                          </div>
                        </div>
                    </>
                  )
              })
            }
        </div>
      </div>
    </div>
  );
};

export default DestinationInfo;