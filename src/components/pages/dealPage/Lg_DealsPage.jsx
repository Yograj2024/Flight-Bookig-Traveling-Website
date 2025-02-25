import React from 'react'
import { bestDealsPage2 } from "../../../utils/data"
import { useNavigate } from "react-router-dom";
import handelNavigation from "../../../custumHooks/handalUrl"

const Lg_DealsPage = () => {
  const navigate = useNavigate();
  return (
    <section className="my-10 hidden lg:block">
        <div className="w-full max-w-[1440px] m-auto px-8 py-[20px]">
          <h1 className="text-4xl font-semibold text-red-600 text-center mb-[3.4rem] ">  Destinations near and far, we do it all </h1>

          {
            bestDealsPage2.map( ( item ) => { 
              const {id, country_name,description1,description2,locations:[{image_url:img1},{image_url:img2},{image_url:img3},{image_url:img4}]} = item
                return (
                  <>
                    <div className="mt-6  gap-6 flex flex-col bg-gray-100 py-[35px] px-[30px] rounded-[35px]" key={id}>
                      <div className="flex gap-5 h-[280px]">
                        <div className={`w-[46%]`}>
                          <h2 className="text-[1.5rem] text-center font-semibold mb-[20px] mt-[10px]">{country_name}</h2>
                          <p className="text-center"> {description1} </p>
                        </div>
                        <div className={`w-[32%] h-full`}>
                          <img src= {img1}
                            alt="Beach with a boat"
                            className="rounded-[20px] object-cover w-full h-full" />
                        </div>
                        <div className={`w-[46%] h-full`}>
                            <img src = {img2}
                              alt="Beach with a boat"
                              className="rounded-[20px] object-cover w-full h-full" />
                        </div>
                      </div>
                      <div className="flex gap-5 h-[280px]">
                        <div className={`w-[46%] h-full`}>
                          <img src= {img3}
                            alt="Beach with a boat"
                            className="rounded-[20px] object-cover w-full h-full" />
                        </div>
                        <div className={`w-[32%] h-full`}>
                          <img src= {img4}
                            alt="Beach with a boat"
                            className="rounded-[20px] object-cover w-full h-full" />
                        </div>
                        <div className="w-[46%] px-[10px] mt-[10px] text-left"> 
                          <ul className={`text-slate-800 font-medium`}
                            dangerouslySetInnerHTML={{ __html: description2 }} />
                        </div>
                      </div>
                    <div className="mt-6 text-center">
                      <button id='destinationInfoBtn' className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition" onClick={ (e) => handelNavigation(e,navigate)}> Explore Destinations </button>
                    </div>
                    </div>
                    
                  </>
                )
            })
          } 

          
        </div>
      </section>
  )
}

export default Lg_DealsPage;
