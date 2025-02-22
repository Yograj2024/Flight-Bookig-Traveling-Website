import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import handelNavigation from "../../custumHooks/handalUrl";
import { setScreenSize } from "../../store/features/storeDevidce-width/resizeSlice";
import { packageData } from "../../utils/data";

const Package = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    customPaging: (i) => (
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: '#000',
          margin: '0 5px',
          opacity: 0.5,
        }}
      ></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: '-30px',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <ul style={{ display: 'flex', justifyContent: 'center', margin: 0 }}>
          {dots.slice(0, 3)} {/* Limit to 3 dots */}
        </ul>
      </div>
    ),
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
  
  useEffect( () => {
    const handleResize = () => {
      dispatch( setScreenSize ( window.innerWidth))
    }
    window.addEventListener( 'resize', handleResize)
  },[] );

  return <>
    <section className={`md:mt-[80px]`}>
        <div className={`max-w-[1440px] md:m-auto relative`}>
            <div className={`md:mt-[150px]`}>
                <h6 className={`text-green-600 text-[1.2rem] font-bold bg-gray-100 w-[50%] m-auto mb-[20px] py-[12px] md:w-[21%] md:mb-[20px] text-center rounded-[12px]`}>Best Packages</h6>
                <h1 className={`text-[1.6rem] md:text-[2.5rem] font-semibold text-center md:px-[10px]`}> 
                Unbeatable Deals  <span className={`text-orange-500`}>for Your </span>Perfect Journey 
                </h1> 
            </div>
            <div className={``} >
                <Slider {...settings}>
                    { 
                      packageData.map((data)=>{
                        return <>
                          <div className={`element h-[365px] w-[92%] sm:w-[300px] lg:w-[300px] lg:h-[400px] flex-shrink-0 relative m-[30px_auto_0] rounded-[20px] bg-cover bg-center before:content-[''] before:h-full before:w-full before:absolute  before:z-[1] before:rounded-[20px] before:bg-black before:bg-opacity-30`}
                            key={`${data.id}`} onClick={ (e) => handelNavigation(e, navigate)} >
                            <img src={data.bgImg} alt="" className={`h-full w-full object-cover absolute z-[-1] rounded-[20px] hover:scale-110`} />
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
                                    <button type="button" id="fillFormBtn" className={`text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4  focus:outline-none focus:ring-lime-200 d ark:focus:ring-teal-700 font-medium rounded-[18px] md:rounded-[16px] text-sm px-[18px] md:px-[12px] py-[8px] md:py-[6px] text-center  z-[2]`}>Book now</button>
                                </div>
                            </div>
                          </div>
                        </>
                      })}
                </Slider>
            </div>
        </div>
    </section>
  </>
};

export default Package;