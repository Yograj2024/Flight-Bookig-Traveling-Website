import React from 'react';
import { comma, randomPeople } from '../../utils/links';

const Testimonial = () => {

  const starLine = () => {

    const star=[];
    for(let i=0; i<5; i++){
      star.push("⭐");
    }
    return star;  
  }

  return ( <>
    <section className={`m-[50px_0px_0px] bg-slate-50 pt-[20px]`}>
      <div className={`px-[15px] md:px-[30px] pb-[10px] w-full sm:flex sm:justify-between md:max-w-[1440px] md:m-auto`}>
            <div className='sm:w-[40%] md:flex md:flex-col md:justify-start '>
              <div className={``}>
                  <h6 className={`text-green-600 text-[1.2rem] font-bold bg-gray-100 py-[12px] w-[60%] mx-auto my-[20px] md:mx-0 md:w-[70%] text-center rounded-[12px]`}>Our Testimonials</h6>
                  <h1 className={`text-[1.6rem] md:text-[1.8rem] lg:text-[2.5rem] font-semibold text-center md:text-left`}> 
                  Trusted by Travelers, Loved by All
                  </h1> 
              </div>
              <p className={`m-[30px_auto] text-left`}>Our clients trust us for seamless travel experiences. With personalized service, reliable bookings, and unmatched customer support, we’ve earned the love and loyalty of travelers worldwide.</p>
            </div>

            <div className={`h-[420px] sm:w-[55%] relative overflow-hidden md:h-[410px]`}>
                
                <div className={`flex flex-1 flex-col gap-y-[20px] rounded-[15px] p-[25px_0px_30px_20px] md:p-[50px_50px_20px_50px] border-t-4 border-b-4 border-b-red-800 border-t-red-800 md:border-t-0 absolute translate-x-[0%] transition-all duration-900 ease-linear bg-white`}>
                    <span className={`inline-block h-[40px] w-[40px] `}>
                      <img src={`${comma}`} alt="" className={`h-full w-full object-cover`}/>
                    </span>
                    <span>{ starLine() }</span>
                    <p>I’ve used several travel agencies, but Last Hour Plan stands out. Their prices are unbeatable, and the booking process was straightforward. The team provided excellent support, and I had an amazing trip. I’ll definitely be booking with them !</p>
                    <div className={`flex items-center gap-x-[40px]`}>
                        <div className={`h-[80px] aspect-square rounded-[50%]`}>
                            <img src={`${randomPeople}`} alt="" className={`h-full w-full object-cover rounded-[50%]`}/>
                        </div>
                        <span><b>hello Kumar</b></span>
                    </div>
                </div>

                <div className={`flex flex-1 flex-col gap-y-[20px] border-t-4 border-t-red-700 rounded-[15px] p-[50px_0px_20px_20px] border-b-4 border-b-red-800  absolute translate-x-[102%] transition-all duration-900 ease-linear`}>
                    <span className={`inline-block h-[40px] w-[40px] `}>
                      <img src={`${comma}`} alt="" className={`h-full w-full object-cover`}/>
                    </span>
                    <span>{ starLine() }</span>
                    <p>I’ve used several travel agencies, but Last Hour Plan stands out. Their prices are unbeatable, and the booking process was straightforward. The team provided excellent support, and I had an amazing trip. I’ll definitely be booking with them !</p>
                    <div className={`flex items-center gap-x-[40px]`}>
                        <div className={`h-[80px] aspect-square rounded-[50%]`}>
                            <img src={`${randomPeople}`} alt="" className={`h-full w-full object-cover rounded-[50%]`}/>
                        </div>
                        <span><b>hello Kumar</b></span>
                    </div>
                </div>

                <div className={`flex flex-1 flex-col gap-y-[20px] border-t-4 border-t-red-700 rounded-[15px] p-[50px_0px_20px_20px] border-b-4 border-b-red-800  absolute translate-x-[202%] transition-all duration-900 ease-linear`}>
                    <span className={`inline-block h-[40px] w-[40px] `}>
                      <img src={`${comma}`} alt="" className={`h-full w-full object-cover`}/>
                    </span>
                    <span>{ starLine() }</span>
                    <p>I’ve used several travel agencies, but Last Hour Plan stands out. Their prices are unbeatable, and the booking process was straightforward. The team provided excellent support, and I had an amazing trip. I’ll definitely be booking with them again!</p>
                    <div className={`flex items-center gap-x-[40px]`}>
                        <div className={`h-[80px] aspect-square rounded-[50%]`}>
                            <img src={`${randomPeople}`} alt="" className={`h-full w-full object-cover rounded-[50%]`}/>
                        </div>
                        <span><b>Rahul 3 Kumar</b></span>
                    </div>
                </div>
                
                <div className={`flex flex-1 flex-col gap-y-[20px] border-t-4 border-t-red-700 rounded-[15px] p-[50px_0px_20px_20px] border-b-4 border-b-red-800  absolute translate-x-[302%] transition-all duration-900 ease-linear`}>
                    <span className={`inline-block h-[40px] w-[40px] `}>
                      <img src={`${comma}`} alt="" className={`h-full w-full object-cover`}/>
                    </span>
                    <span>{ starLine() }</span>
                    <p>I’ve used several travel agencies, but Last Hour Plan stands out. Their prices are unbeatable, and the booking process was straightforward. The team provided excellent support, and I had an amazing trip. I’ll definitely be booking with them again!</p>
                    <div className={`flex items-center gap-x-[40px]`}>
                        <div className={`h-[80px] aspect-square rounded-[50%]`}>
                            <img src={`${randomPeople}`} alt="" className={`h-full w-full object-cover rounded-[50%]`}/>
                        </div>
                        <span><b>Rahul 4 Kumar</b></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
  );
};

export default Testimonial;