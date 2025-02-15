import { aboutData } from "../../utils/data";

const About = () => {
    
    return (
        <>
            <section id="about" className={`w-[98%] m-[50px_auto] flex relative flex-col items-end justify-end rounded-[18px]`}>
                <div className={`md:w-full md:h-full md:max-w-[1440px] md:m-auto md:flex md:justify-end md:gap-x-[20px]`}>
                    <div className={`relative hidden md:block md:w-[43%] lg:w-[40%] before:content-[''] before:h-full before:w-full before:bg-[url('https://plus.unsplash.com/premium_photo-1661935781384-b27f5faa9197?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] before:bg-center before:bg-cover before:absolute before:z-[-1]`}>
                        <div className={`h-[200px] w-[300px] rounded-[18px] border-[10px] border-white bg-[url('https://images.unsplash.com/photo-1735796788550-8fa349e8c59f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover absolute bottom-[-10%] left-[-19%]`}></div>                        
                        <div className={`absolute  right-0 h-[80px] w-[170px] bg-red-300 flex items-center justify-center rounded-bl-[18px]`}>
                            <h1>20 <br/> <span>Years of experience</span></h1>
                        </div>
                    </div>
                    <div className={`md:w-[50%]`}>
                        <div className={`md:pl-[20px] text-center`}>
                            <h6 className={`text-green-600 text-[1.2rem] font-bold bg-gray-100 py-[12px] w-[70%] mx-auto md:mx-0 md:w-[75%] lg:w-[55%] rounded-[12px] mb-[20px]`}>About WispyDeals.com </h6>
                            <h1 className={`text-[1.6rem] md:text-[2rem] font-semibold md:text-left`}> 
                            Effortlessly travel with ease, <span className={`text-orange-500`}>Unforgettable, within your budget.</span> 
                            </h1> 
                        </div>
                        <div className={``}>
                            {
                                aboutData.map((data, index )=>{
                                    return <div className={`w-[95%] rounded-[30px] flex flex-col items-center justify-center md:bg-opacity-0 gap-y-[10px] bg-gray-200 md:flex-row text-center md:text-start bg-opacity-30 md:justify-start m-[10px_auto] p-[25px_0px_30px] md:py-[10px]`} key={ index + data.id }>
                                                <div className={` h-[60px] aspect-square m-[0px_0_20px] bg-gray-300 p-[15px] flex items-center justify-center bg-opacity-40 rounded-[50%] md:m-[0_20px_0_10px]`}>
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