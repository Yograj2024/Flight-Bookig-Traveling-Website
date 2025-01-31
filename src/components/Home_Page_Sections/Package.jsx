import { useCallback, useState } from "react";
import { packageBtn, packageDiv } from "../../utils/css";
import { packageData } from "../../utils/data";

export const Package = () => {

    const [ moveSlide, setMoveSlide ] = useState ( 0 );

    const updateSlides = useCallback ( ( isNext ) => {
        
        setMoveSlide( ( prevMoveSlide ) => {
            return isNext
                ? prevMoveSlide == 975 ? 0 :  prevMoveSlide + 325
                : prevMoveSlide != 0 ?  prevMoveSlide - 325 : 0;
        });
    }, []);

    return <>
    <section className={`md:mt-[80px]`}>
        <div className={`max-w-[1440px] md:m-auto relative`}>
            <div className={`md:mt-[150px]`}>
                <h6 className={`text-green-600 text-[1.2rem] font-bold bg-gray-100 w-[50%] m-auto mb-[20px] py-[12px] md:w-[21%] md:mb-[20px] text-center rounded-[12px]`}>Best Packages</h6>
                <h1 className={`text-[1.6rem] md:text-[2.5rem] font-semibold text-center md:px-[10px]`}> 
                Unbeatable Deals  <span className={`text-orange-500`}>for Your </span>Perfect Journey 
                </h1> 
            </div>
            <div className={`sm:grid sm:grid-cols-2 md:p-[0_20px] md:gap-x-[20px] lg:gap-x-0 lg:flex lg:justify-around  lg:p-0 overflow-hidden lg:max-w-[1280px] lg:m-auto`} >
                {
                    packageData.map((data)=>{
                        return  <div className={`${packageDiv} transition-all ease duration-[1500ms] lg:mr-[25px]`}
                                style={{backgroundImage:`url(${data.bgImg})`, transform: `translateX(-${moveSlide}%)`}}
                                key={`${data.id}`}>
                                    { console.log(moveSlide) }
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
                <button className = {`${ moveSlide == 650 ? "hidden" : "block bg-opacity-30 hover:bg-opacity-50"} transition-all ease duration-[900ms] z-[2] h-[170px] w-[30px] absolute top-[50%] rounded-[20px] text-[2rem] bg-slate-800 xl:right-[40px] text-white font-extra-light`} 
                onClick = { ( e ) => { 
                    e.preventDefault(); 
                    updateSlides ( true )
                    }}> <i className = " fa-solid fa-chevron-right" /> </button>
                <button className = {`${ moveSlide == 0 ? "hidden" : "block bg-opacity-30 hover:bg-opacity-50"} transition-all ease duration-[900ms] z-[2] h-[170px] w-[30px] absolute top-[50%] rounded-[20px] text-[2rem] bg-slate-800 xl:left-[35px] text-white`} 
                onClick = { ( e ) => { 
                    e.preventDefault(); 
                    updateSlides (false)
                    }}> <i className = " fa-solid fa-chevron-left " /> </button>
            </div>
        </div>
    </section>
    </>
};

export default Package;