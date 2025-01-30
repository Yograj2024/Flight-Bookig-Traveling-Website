import { packageBtn, packageDiv } from "../../utils/css";
import { packageData } from "../../utils/data";
import { useState } from "react"

export const Package = () => {

    const [ moveSlide, setMoveSlide ] = useState ( 0 );

    function updateSlides ( isNext ) {
        setMoveSlide ( ( prevMoveSlide ) => { 
           return ( isNext ? 
                    prevMoveSlide == 700 ? 0 : prevMoveSlide + 350 :
                    prevMoveSlide != 0 ? prevMoveSlide - 350 : 0   
                )});
    }

    return <>
    <section className={`md:mt-[80px]`}>
        <div className={`max-w-[1440px] md:m-auto`}>
            <div className={`md:mt-[150px]`}>
                <h6 className={`text-green-600 text-[1.2rem] font-bold bg-gray-100 w-[50%] m-auto mb-[20px] py-[12px] md:w-[21%] md:mb-[20px] text-center rounded-[12px]`}>Best Packages</h6>
                <h1 className={`text-[1.6rem] md:text-[2.5rem] font-semibold text-center md:px-[10px]`}> 
                Unbeatable Deals  <span className={`text-orange-500`}>for Your </span>Perfect Journey 
                </h1> 
            </div>
            <div className={`relative sm:grid sm:grid-cols-2 md:p-[0_20px] lg:pl-[50px] md:gap-x-[15px] lg:flex lg:gap-x-[50px] overflow-hidden`} >
                {
                    packageData.map((data)=>{
                        return  <div className={`${packageDiv} translate-x-[-${moveSlide}%] transition-all ease duration-[1500ms]`}
                                style={{backgroundImage:`url(${data.bgImg})`}}
                                key={`${data.id}`}>
                                <div className={`relative p-[20px] flex flex-col h-full w-full justify-between z-[2]`}> 
                                    <div className={`flex items-center justify-between`}>
                                        <h6 className={`bg-green-400 rounded-[12px] md:rounded-[8px] px-[18px] md:px-[8px] py-[6px] md:py-[0px] text-red-500 font-semibold tracking-[0.05rem] md:tracking-[0] `}>FEATURED</h6>
                                        <span className={`inline-block h-[35px] md:h-[30px] aspect-square`}>
                                            <img src="https://cdn-icons-png.flaticon.com/512/15883/15883620.png " 
                                                alt="hearticon" 
                                                className={`h-full w-full object-cover m-auto`}/>
                                        </span>
                                    </div>
                                    <div className={`flex justify-between items-center`}>
                                        <div className={`text-white`}>
                                            <h5 className={`font-bold text-[1.35rem] md:text-[1.25rem] tracking-[0.05rem]`}><a href="">{data.city}</a></h5>
                                            <h6 className={`text-[1.18rem] md:text-[1.15rem] font-PtSans`}>{data.country} </h6>
                                            <h6><span className={`text-[1.08rem] md:text-[1rem] font-bold text-orange-500`}>${data.price}</span>/person </h6>
                                        </div>
                                        <button type="button" className={`${packageBtn}`}>Book now</button>
                                    </div>
                                </div>
                            </div>
                    })
                }
                <button className={`absolute top-[50%] text-[1rem] bg-red-600 rounded-[50%] right-[0%]`} onClick = { () => updateSlides ( true )}> <i className = " fa-solid fa-chevron-right " /> </button>
                <button className={`absolute top-[50%] text-[1rem] bg-red-600 rounded-[50%] left-[1%]`} onClick = { () => updateSlides ( false )}> <i className = " fa-solid fa-chevron-left " /> </button>
            </div>
        </div>
    </section>
    </>
};

export default Package;