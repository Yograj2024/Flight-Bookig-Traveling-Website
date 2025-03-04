import { bestDealsPage2 } from "../../../utils/data"
import React from 'react'
import { useNavigate } from "react-router-dom";
import handelNavigation from "../../../custumHooks/handalUrl"

const Mob_DealPage = () => {
  const navigate = useNavigate();
  return (
    <section className="lg:hidden ">
      <h2 className="text-center text-red-600 font-semibold text-[2rem] mb-[50px] ">  Destinations near and far, we do it all   </h2>
      {
        bestDealsPage2.map ((item) => {
          const {id, country_name,description1,description2,locations:[{image_url:img1},{image_url:img2}]} = item
          return (
          <div key= {id} className="grid grid-cols-1 gap-6 w-[90%] m-auto mb-[20px]">
            <div className=" grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-center text-red-600 font-semibold text-lg mb-4">{country_name}</h3>
                <p className="text-gray-700 mt-2 text-[0.7rem]"> {description1} </p>
              </div>
              <div className = "h-[180px] sm:h-[220px] md:h-[280px]">
                <img src= {img1}
                  alt="Nature"
                  className="w-full h-full  object-cover rounded-lg" />
              </div>
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className = "h-[180px] md:h-[280px] sm:h-[220px]">
                <img
                  src={img2}
                  alt="Cultural Festival"
                  className="w-full h-full  object-cover rounded-lg"/>  
              </div>
              <ul className={`text-slate-800 font-medium`}
                dangerouslySetInnerHTML={{ __html: description2 }} />
            </div>

            <div className="mt-4 text-center mb-[20px]">
              <button id="destinationInfoBtn" className="bg-blue-500 text-white px-6 py-[5px] rounded-[30px] hover:bg-blue-600 transition" 
              onClick= {(e) => handelNavigation(e,navigate)} >Explore </button>
            </div>
          </div>
          )
        })
      }
    </section>
  )
}

export default Mob_DealPage;
