import React from 'react';
import { destinetionBtn, packageDiv } from '../../utils/css';
import { destinationData } from '../../utils/data';

const Destination = () => {
  return (
    <>
      <section>
        <div className={`max-w-[1440px] md:m-auto`}>
            <div className={``}> 
                <h6 className={`text-green-600 text-[1.2rem] font-bold bg-gray-100 py-[12px] w-[80%] mx-auto my-[20px] md:w-[25%] text-center rounded-[12px]`}>Discover Dream Destinations </h6>
                <h1 className={`text-[1.6rem] md:text-[2.5rem] font-semibold text-center`}> 
                    Explore the <span className={`text-orange-500`}>World's Top</span> Travel Destinations
                </h1> 
            </div>
            <div className={`sm:grid sm:grid-cols-2 lg:grid-cols-4`}>
                
            {
                    destinationData.map((data)=>{
                        return (
                            <div className={`${packageDiv} ${(data.mobile) ? ("") : ("hidden md:block")}`}
                                style={{backgroundImage:`url(${data.bgImg})`}}
                                key={data.id}>
                                <div className={`p-[20px] flex flex-col h-full w-full justify-between relative z-[4]`}> 
                                    <div className={`flex items-center justify-end`}>
                                        <h6 className={`bg-orange-500 p-[3px_12px] rounded-[10px] text-white font-semibold`}>{data.tours} TOURS</h6>
                                    </div>
                                    <div className={`flex justify-between items-end`}>
                                        <div>
                                            <h6 className={`text-[#ffaa1d] font-semibold text-[1.5rem]`}>{data.country} </h6>
                                            <h5 className={`text-white text-[1.2rem]`}><a href="">{data.city}</a></h5>
                                        </div>
                                        <button className={`${destinetionBtn}`}>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
          

      </section>
    </>
  );
};

export default Destination;