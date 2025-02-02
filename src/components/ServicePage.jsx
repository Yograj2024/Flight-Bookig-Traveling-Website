import { serviceData, serviceData_Row2 } from "../utils/data";
import AirLines from "./Home_Page_Sections/AirLInes";

const ServicePage = () => {
    return ( 
        <>
            <section className={``}>
                <div className={`w-full max-w-[1440px] lg:mx-auto before:content-[''] before:w-full before:h-full before:bg-[#F5F5F5]
                    relative before:absolute before:z-[-1] `}>
                    <div className={`w-full m-[0px_0_0] h-[300px] lg:h-[530px] px-[20px] rounded-[0px]
                         before:content-[""] before:h-full before:w-full relative before:absolute before:z-[-1] 
                         md:before:bg-[url('http://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=2150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                         lg:before:bg-[0%_60%] before:rounded-[0px] before:bg-cover before:bg-[0%_0%]
                         before:bg-[url('https://images.unsplash.com/photo-1527912373-c4602d8ff771?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                         before:bg-no-repeat lg:bg-opacity-25  
                         before:left-1/2 before:-translate-x-1/2 flex flex-col justify-center items-start `}>
                            <h2 className={` text-[1.6rem] lg:text-[3rem] text-white pl-[50px] leading-[3rem]`}>Comprehensive Travel Services  </h2>
                            <p className={`text-[2rem] text-white pl-[50px] pt-[30px] mb-[100px]`}>From Flights and Hotels <br/> to Tour Packages and More</p>
                    </div>
                    <div className={` text-left mt-[50px]`}>

                        <h1 className={`lg:text-[2rem] pl-[35px]`}>Our Exceptional Services: Tailored for Your Needs</h1>

                        <div className={`sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[50px]`}>
                            {
                                serviceData.map( ( data, index ) => (
                                    <div className={`w-[75%] sm:w-[80%] m-[70px_auto_20px] p-[65px_25px_20px]  
                                    flex flex-col items-center justify-center gap-y-[20px] rounded-[20px] relative 
                                    shadow-[inset_8px_10px_10px_0px_rgba(0,0,0,0.1)]`} key={ `service-${index + 1}`}>
                                        <div className={`h-[80px] lg:h-[90px] aspect-square p-[18px] bg-stone-100
                                             rounded-[50%] absolute top-[-2.4rem] lg:border-[0px] border-[#f2f0e]
                                              shadow-[inset_-3px_0px_4px_4px_rgba(0,0,0,0.1)]`}>
                                            <img src={data.iconLink} alt="" className={`h-full w-full object-cover`}/>
                                        </div>
                                        <h5 className={`text-[1.2rem] font-semibold`}> {data.heading} </h5>
                                        <p className={`text-center`}> {data.content} </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>              
                <div className={`flex justify-around`}>
                    {
                        serviceData_Row2.map( (services) => {

                            const { title, description, iconLink, service} = services;

                            return (
                                    <div class="h-[400px] w-[300px] bg-yellow-200 flex flex-col items-center ">
                                        <div class="h-[140px] w-[140px] bg-white rounded-full mt-[30px]">
                                            <div class="bg-orange-500 h-[40px] w-[40px] rounded-full">
                                                            0{service}
                                            </div>
                                            <div class="h-[70px] w-[70px] bg-yellow-400 ml-[35px]">
                                                            <img src={iconLink}></img>
                                            </div>
                                        </div>
                                        <div  class="bg-white flex flex-col gap-y-[12px] items-center justify-center mt-[30px] px-[10px]">
                                            <h1 class="text-2xl font-semibold">{title}</h1>
                                            <p class="text-center font-semibold ">{description} </p>
                                        </div>
                                    </div>
                            )
                        } )
                    }
                </div>

                <AirLines/>
            </section>
        </>
    );
}

export default ServicePage;