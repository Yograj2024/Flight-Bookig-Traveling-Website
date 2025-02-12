import React from 'react';
import { ExclusiveOffersData } from '../../utils/data';

const ExclusiveOffers = () => {
   return (
    <>
      <section className={`w-full relative before:content-[''] m-[30px_0] before:absolute before:h-full before:w-full before:bg-[url('https://images.unsplash.com/photo-1570420118092-5b96e28ff4cb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  before:bg-cover before:bg-center before:z-[-1]`}>
        <div className={`max-w-[1440px] md:m-auto md:flex md:justify-around p-[20px_0] md:py-[50px]`}>
            <div className={`md:w-[45%] lg:w-[50%]`}>
                <h6 className={`text-green-600 text-[1.2rem] font-bold bg-gray-50 py-[12px] w-[50%] my-[20px] mx-auto md:m-0 md:w-[50%] text-center rounded-[12px]`}>Last Hour Plan</h6>
                <h1 className={`text-[1.6rem] text-center md:text-left md:text-[2.5rem] font-semibold`}> 
                Exclusive Offers <span className={`text-orange-500`}> Tailored for</span> Every Traveler.
                </h1> 
                <p className={`w-[88%] text-center mx-auto md:mx-0 md:text-left mt-6 mb-10 text-white`}>Last Hour Plan delivers seamless travel solutions by combining easy flight reservations and hassle-free hotel bookings. Catering to frequent flyers, business professionals, and vacationers, we offer personalized, budget-friendly services. Our user-friendly platform ensures effortless planning, allowing travelers to focus on enjoying memorable journeys while we handle the details with reliability and care.</p>

                <button className={`m-[60px_auto] md:mx-0 h-[2.8rem] w-[10rem] text-black text-[1.2rem]  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-200 font-medium  rounded-[30px] flex items-center justify-center`}>Call now</button>
            </div>

            <div className={`sm:w-[90%] sm:mx-auto sm:mt-[50px] sm:grid sm:grid-cols-2 sm:gap-x-[50px] md:w-[45%] md:m-0 md:gap-x-[20px]`}>
                {
                   ExclusiveOffersData.map((data)=>{
                        return ( 
                            <div key={data.id} 
                                className = {`h-[170px] sm:h-[190px] w-[60%] sm:w-full m-[30px_auto] sm:mt-0 bg-gray-300 bg-opacity-15 flex flex-col md:m-[10px_auto] items-center justify-center gap-y-[10px]  rounded-[18px]`}>
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

export default ExclusiveOffers;