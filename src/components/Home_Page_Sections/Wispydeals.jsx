import React from 'react';
import { formBtn, wispydealsCss } from '../../utils/css';
import { wispydealsData } from '../../utils/data';

const Wispydeals = () => {
   return (
    <>
      <section className={`${wispydealsCss}`}>
        <div className={`max-w-[1440px] md:m-auto md:flex md:justify-around p-[20px_0] md:py-[50px]`}>
            <div className={`md:w-[45%] lg:w-[50%]`}>
                <h6 className={`text-green-600 text-[1.2rem] font-bold bg-gray-50 py-[12px] w-[50%] my-[20px] mx-auto md:m-0 md:w-[50%] text-center rounded-[12px]`}>Last Hour Plan</h6>
                <h1 className={`text-[1.6rem] text-center md:text-left md:text-[2.5rem] font-semibold`}> 
                Exclusive Offers <span className={`text-orange-500`}> Tailored for</span> Every Traveler.
                </h1> 
                <p className={`w-[88%] text-center mx-auto md:mx-0 md:text-left mt-6 mb-10 text-white`}>Last Hour Plan delivers seamless travel solutions by combining easy flight reservations and hassle-free hotel bookings. Catering to frequent flyers, business professionals, and vacationers, we offer personalized, budget-friendly services. Our user-friendly platform ensures effortless planning, allowing travelers to focus on enjoying memorable journeys while we handle the details with reliability and care.</p>

                <button className={`${formBtn} m-[60px_auto] md:mx-0`}>Call now</button>
            </div>

            <div className={`sm:w-[90%] sm:mx-auto sm:mt-[50px] sm:grid sm:grid-cols-2 sm:gap-x-[50px] md:w-[45%] md:m-0 md:gap-x-[20px]`}>
                {
                    wispydealsData.map((data)=>{
                        return ( 
                            <div key={data.id} 
                                className = {`h-[170px] sm:h-[190px] w-[60%] sm:w-full m-[30px_auto] sm:mt-0
                                            bg-gray-300 bg-opacity-15 flex flex-col md:m-[10px_auto]
                                            items-center justify-center gap-y-[10px] 
                                            rounded-[18px]`}>
                                <span className={`h-[60px] aspect-square`}>
                                    <img src={data.iconImg} alt="" className={`h-full w-full object-cover`}/>
                                </span>

                                <h5 className={`text-[1.4rem] text-white font-semibold tracking-[0.05rem] text-center`}>{data.heading}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </section>
    </>)
};

export default Wispydeals;