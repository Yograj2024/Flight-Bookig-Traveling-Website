import React, { useCallback, useState } from 'react';
import { destinetionBtn, packageDiv } from '../../utils/css';
import { descriptionData_Row2, destinationData } from '../../utils/data';

const Destination = () => {
    const [ moveSlide, setMoveSlide ] = useState ( 0 );

    const updateSlides = useCallback ( ( isNext ) => {
        setMoveSlide( ( prevMoveSlide ) => {
            return isNext
                ? prevMoveSlide == 650 ? 0 : prevMoveSlide + 320
                : prevMoveSlide != 0 ? prevMoveSlide - 320 : 0;
        });
    }, []);

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
            <div className={`lg:max-w-[1260px] lg:m-auto relative`}>

                <div className={`sm:grid sm:grid-cols-2 lg:flex lg:overflow-hidden lg:gap-x-[20px] `}>
                    {
                        destinationData.map((data)=>{
                            return (
                                <div className={`${packageDiv} ${(data.mobile) ? ("") : ("hidden md:block")} transition-all ease-in-out duration-[900ms]`}
                                    style={{backgroundImage:`url(${data.bgImg})`, transform:`translateX(-${moveSlide}%)`}}
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

                    <button className = {`${ moveSlide == 650 ? "opacity-0" : "bg-opacity-30 hover:bg-opacity-50"} transition-all ease duration-[900ms] z-[2] h-[170px] w-[30px] absolute top-[42%] rounded-[20px] text-[2rem] bg-slate-800 xl:right-[-35px] text-white font-extra-light`} 
                    onClick = { ( e ) => { 
                        e.preventDefault(); 
                        updateSlides ( true )
                        }}> <i class="fa-solid fa-arrow-right"></i> </button>
                    <button className = {`${ moveSlide == 0 ? "opacity-0" : "bg-opacity-30 hover:bg-opacity-50"} transition-all ease duration-[900ms] z-[2] h-[170px] w-[30px] absolute top-[42%] rounded-[20px] text-[2rem] bg-slate-800 xl:left-[-38px] text-white`} 
                    onClick = { ( e ) => { 
                        e.preventDefault(); 
                        updateSlides (false)
                        }}> <i className = " fa-solid fa-chevron-left " /> </button>
                </div>

                <div className={`sm:grid sm:grid-cols-2 lg:flex lg:overflow-hidden lg:gap-x-[20px]`}>
                    {
                        descriptionData_Row2.map((data)=>{
                            return (
                                <div className={`${packageDiv} ${(data.mobile) ? ("") : ("hidden md:block")} translate-x-[-320%] transition-all ease-in-out duration-[900ms]`}
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
        </div>
          

      </section>
    </>
  );
};

export default Destination;
