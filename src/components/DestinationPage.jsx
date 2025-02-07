import { destinationPageData } from "../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DestinationPage = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
            <section className={``}>
                <div className={`max-w-[1440px] lg:m-auto h-[400px] md:h-[460px] bg-black bg-opacity-25 relative
                    before:content-[''] before:h-full before:w-full before:absolute before:z-[-1] flex gap-y-[10px]
                    before:bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                    before:bg-cover before:bg-[0%_45%] flex-col items-start justify-center text-white`}>
                        <h4 className={`text-[2rem] lg:text-[3rem] font-semibold pl-[50px]`}> Wander the World </h4>
                        <h5 className={`text-[1.8rem] lg:text-[2.2rem] pl-[50px]`}> Explore the Beauty of the world with us  &nbsp; : ) </h5>
                        <p className={`text-[1.1rem] pl-[50px] hidden sm:block`}>if you like to travel, this is your place! <br/> Here you con travel without hassle and enjoy it</p>
                </div> 
            </section>

            <section className={`bg-[#F8FAFC] lg:py-[50px]`}>
                <h1 className={`max-w-[1340px]  lg:pl-[50px] m-auto lg:text-[2rem] font-semibold `}>Discover the destination that sparks your sense of inspiration.</h1>
                <div className={`grid gap-y-[50px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:max-w-[90%] xl:max-w-[1240px] mx-auto md:gap-x-[20px] lg:gap-x-[20px] mt-[50px] lg:gap-y-[50px]`}>
                    {/* <Slider {...settings} > */}
                        {
                            destinationPageData.map( (data, index) => {

                                return <>
                                    <div className={`w-[90%]  lg:w-full mx-auto md:h-[450px] p-[10px] md:p-[0px] rounded-[30px] transition-transform duration-400 ease-in-out hover:scale-90 bg-slate-200 bg-opacity-50 hover:border hover:border-orange-500 hover:p-[10px_10px_20px]`} key = {data.id+index}>
                                        <div className={`h-[300px] md:h-[250px] `}>
                                            <img src={data.imgURL} alt=""  className={`h-full w-full object-cover rounded-[20px]  hover:rounded-[20px]`}/>
                                        </div>
                                        <div className={`p-[30px_20px] flex flex-col gap-y-[8px] justify-start `}>
                                            <div className={`flex text-slate-800 gap-x-[10px] opacity-40`}>
                                                <i className={`fa-solid fa-location-dot text-[1.1rem] `}></i>
                                                <h2 className={`font-bold text-[0.9rem]`}> {data.city}, {data.country} </h2>
                                            </div>
                                            <div className={``}>
                                                <p className={`text-black font-semibold mb-[12px] font-systemUI`}> {data.aboutThis} </p>
                                                <div className={`flex justify-between pr-[20px] items-center border-t border-t-slate-800 pt-[10px] border-opacity-40`}>
                                                    <span> ${data.price}/person </span>
                                                    <button className={`h-[30px] w-[30px] bg-orange-500 flex items-center justify-center rounded-[50%]`}><i className="fa-solid fa-arrow-right text-white text-[0.9rem] "></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            })
                        }
                    {/* </Slider> */}
                </div>
            </section>
        </>
    )
};

export default DestinationPage;