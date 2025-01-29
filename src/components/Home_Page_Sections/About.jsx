import { aboutDiv, experience, experienceRight, iconCss } from "../../utils/css";
import { aboutData } from "../../utils/data";

const About = () => {
    
    return (
        <>
            <section className={`${experience}`}>
                <div className={`md:w-full md:h-full md:max-w-[1440px] md:m-auto md:flex md:justify-end md:gap-x-[20px]`}>
                    <div className={`${experienceRight}`}>
                        <div className={`h-[200px] w-[300px] rounded-[18px] border-[10px] border-white bg-[url('https://images.unsplash.com/photo-1735796788550-8fa349e8c59f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover absolute bottom-[-10%] left-[-19%]`}></div>                        
                        <div className={`absolute  right-0 h-[80px] w-[170px] bg-red-300 flex items-center justify-center rounded-bl-[18px]`}>
                            <h1>20 <br/> <span>Years of experience</span></h1>
                        </div>
                    </div>
                    <div className={`md:w-[50%]`}>
                        <div className={`md:pl-[20px] text-center`}>
                            <h6 className={`text-green-600 text-[1.2rem] font-bold bg-gray-100 py-[12px] w-[70%] mx-auto md:mx-0 md:w-[75%] lg:w-[55%] rounded-[12px] mb-[20px]`}>About WispyDeals.com </h6>
                            <h1 className={`text-[1.6rem] md:text-[2rem] font-semibold md:text-left`}> 
                                Making Travel Effortless, <span className={`text-orange-500`}>Memorable, Affordable</span> 
                            </h1> 
                        </div>
                        <div className={``}>
                            {
                                aboutData.map((data, index )=>{
                                    return <div className={`${aboutDiv}`} key={ index + data.id }>
                                                <div className={`${iconCss}`}>
                                                    <img src={data.img} alt="icon" 
                                                            className={`h-full w-full object-cover ${data.rotate ? "rotate-[-20deg] scale-[1.4]" : ""}`}/>
                                                </div>
                                                <div>
                                                    <h5 className={`text-[1.5rem] font-semibold font-[Libre_Baskerville, serif]`}>{data.heading} </h5>
                                                    <p>{data.content} </p>
                                                </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default About;