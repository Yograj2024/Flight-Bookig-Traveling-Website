import React, { useCallback, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { descriptionData_Row2, destinationData } from '../../utils/data';

const Destination = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:true
            }
          }
        ]
      };
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

                <div className={` `}>
                    <Slider {...settings}>
                        {
                            destinationData.map((data)=>{
                                return (
                                    <div className={`h-[365px] w-[92%] sm:w-[300px] lg:w-[300px] lg:h-[400px] flex-shrink-0 relative m-[30px_auto_0] rounded-[20px] bg-cover bg-center before:content-[''] before:h-full before:w-full before:absolute  before:z-[1] before:rounded-[20px] before:bg-black before:bg-opacity-30 `}
                                        key={data.id}>
                                            <img src={data.bgImg} alt="" className={`h-full w-full object-cover z-[-1] absolute rounded-[20px]`}/>
                                        <div className={`p-[20px] flex flex-col h-full w-full justify-between relative z-[4]`}> 
                                            <div className={`flex items-center justify-end`}>
                                                <h6 className={`bg-orange-500 p-[3px_12px] rounded-[10px] text-white font-semibold`}>{data.tours} TOURS</h6>
                                            </div>
                                            <div className={`flex justify-between items-end`}>
                                                <div>
                                                    <h6 className={`text-[#ffaa1d] font-semibold text-[1.5rem]`}>{data.country} </h6>
                                                    <h5 className={`text-white text-[1.2rem]`}><a href="">{data.city}</a></h5>
                                                </div>
                                                <button className={`text-white bg-gradient-to-r  from-purple-500 to-pink-500  hover:bg-gradient-to-l focus:ring-4  focus:outline-none focus:ring-purple-200  dark:focus:ring-purple-800 font-medium  rounded-[18px] text-sm px-[18px] md:px-[14px] py-[8px] md:py-[6px] text-center`}>Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>

                    {
                    /* 
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

                        */
                    }
                </div>

                <div className={``}>
                    <Slider {...settings}>
                        {
                            descriptionData_Row2.map((data)=>{
                                return (
                                    <div className={`h-[365px] w-[92%] sm:w-[300px] lg:w-[300px] lg:h-[400px] flex-shrink-0 relative m-[30px_auto_0] rounded-[20px] bg-cover bg-center before:content-[''] before:h-full before:w-full before:absolute  before:z-[1] before:rounded-[20px] before:bg-black before:bg-opacity-30`}
                                        key={data.id}>
                                            <img src={data.bgImg} alt="" className={`h-full w-full object-cover z-[-1] absolute rounded-[20px]`}/>

                                        <div className={`p-[20px] flex flex-col h-full w-full justify-between relative z-[4]`}> 
                                            <div className={`flex items-center justify-end`}>
                                                <h6 className={`bg-orange-500 p-[3px_12px] rounded-[10px] text-white font-semibold`}>{data.tours} TOURS</h6>
                                            </div>
                                            <div className={`flex justify-between items-end`}>
                                                <div>
                                                    <h6 className={`text-[#ffaa1d] font-semibold text-[1.5rem]`}>{data.country} </h6>
                                                    <h5 className={`text-white text-[1.2rem]`}><a href="">{data.city}</a></h5>
                                                </div>
                                                <button className={`text-white bg-gradient-to-r  from-purple-500 to-pink-500  hover:bg-gradient-to-l focus:ring-4  focus:outline-none focus:ring-purple-200  dark:focus:ring-purple-800 font-medium  rounded-[18px] text-sm px-[18px] md:px-[14px] py-[8px] md:py-[6px] text-center`}>Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        } 
                    </Slider>
                </div>
            </div>
        </div>
          

      </section>
    </>
  );
};

export default Destination;
