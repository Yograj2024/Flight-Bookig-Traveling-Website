import React from "react";
import { destinationInfo } from "../../utils/data";

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
    <div className="w-full mx-auto flex flex-col gap-y-[20px] bg-white">
       <div className={`max-w-[1440px] relative lg:h-[550px] w-full lg:mx-auto flex 
                    items-center justify-center flex-col h-[300px] bg-black bg-opacity-10
                    before:content-[" "] before:h-full before:w-full before:absolute before:z-[-1] 
                    before:bg-[url('https://assets.nicepagecdn.com/d2cc3eaa/50578/images/landscape-wajag-island-surrounded-by-sea-cloudy-sky-indonesia4.jpg')]
                    before:bg-cover lg:before:bg-[0_66%]`}>
                        <h5 className={`text-[2rem] lg:text-[4.5rem] font-semibold text-white`}>About Us</h5>
                        <h6 className={`text-[1.5rem] text-white lg:text-[3.5rem]`}>Why We Do What We Do</h6>
        </div> 

      <div className={`w-[90%] m-auto pb-[50px] `}>
        <h2 className="p-[10px] font-semibold text-[2rem]  rounded w-[380px]"> {location} </h2>
        <p className="  rounded w-[650px] text-[1.2rem]  flex items-center p-[10px]"> {shortDescription} </p>
        
        <div className={`flex justify-between `}>
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
          <div className={`grid grid-cols-1 gap-y-[30px] mt-[50px]`}>
              {
                topAttraction.map( ( item ) => {
                  return (
                      <>
                          <div className={`sm:flex gap-x-[50px] sm:flex-col `}>
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
    </div>
  );
};

export default DestinationInfo;