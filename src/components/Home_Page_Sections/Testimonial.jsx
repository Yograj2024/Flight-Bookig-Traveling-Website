import React from 'react';
import { comma } from '../../utils/links';
import { reviewsData } from '../../utils/data';
import Slider from 'react-slick';

const Testimonial = () => {

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaspeed: 1000,
    cssEase:"linear",
    arrows:false
  };

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

            <div className={`h-[420px] sm:w-[55%] relative  md:h-[410px]`}>
              <Slider {...settings}>
                  {
                      reviewsData.map((data)=>{
                          return (
                              <div key={data.id} className={`rounded-[15px] p-[25px_0px_30px_20px] md:p-[50px_50px_20px_50px] border-t-4 border-b-4 border-b-red-800 border-t-red-800 md:border-t-0  bg-white`}>
                                  <span className={`inline-block h-[40px] w-[40px] mb-[20px]`}>
                                    <img src={`${comma}`} alt="" className={`h-full w-full object-cover`}/>
                                  </span> <br/>
                                  <span className={`inline-block mb-[20px]`}>{ starLine() }</span>
                                  <p className={`mb-[30px]`}>{data.review}</p>
                                  <div className={`flex items-center gap-x-[40px]`}>
                                      <div className={`h-[80px] aspect-square rounded-[50%]`}>
                                          <img src={data.personImg} alt="" className={`h-full w-full object-cover rounded-[50%]`}/>
                                      </div>
                                      <span><b>{data.name}</b></span>
                                  </div>
                              </div>
                          )
                      })    
                    }
              </Slider>             
            </div>
        </div>
    </section>
  </>
  );
};

export default Testimonial;