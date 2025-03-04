import About from "../../sections/About";
import Testimonial from "../../sections/Testimonial";
import OurMission from "./OurMission";
import OurStory from "./OurStory";
import Personal from "./Personal";
import WhyUs from "./WhyUs";

const AboutPage = () => {
    return (
        <>
            <section className={`scroll-container`}>
                <div className={`show max-w-[1440px] relative lg:h-[550px] w-full lg:mx-auto flex 
                    items-center justify-center flex-col h-[300px] bg-black bg-opacity-25
                    before:content-[" "] before:h-full before:w-full before:absolute before:z-[-1] 
                    before:bg-[url('https://assets.nicepagecdn.com/d2cc3eaa/50578/images/landscape-wajag-island-surrounded-by-sea-cloudy-sky-indonesia4.jpg')]
                    before:bg-cover lg:before:bg-[0_66%]`}>
                        <h5 className={`text-[2rem] lg:text-[4.5rem] font-semibold text-white`}>About Us</h5>
                        <h6 className={`text-[1.5rem] text-white lg:text-[3.5rem]`}>Why We Do What We Do</h6>
                </div>                  
            </section>

            <section className={``}>
                <div className={`md:flex max-w-[1440px] lg:mx-auto md:p-[20px_30px] md:gap-x-[30px]`}>
                    <div className={`enter-left  mb-[50px] md:mb-0 md:flex-[50%] text-center px-[20px]`}>
                        <h1 className={`text-[1.8rem] lg:text-[2.5rem] font-semibold p-[25px_20px]`}>Welcome to <span className={`text-orange-500`}>Wispydeals.com</span> </h1>

                        <p className={`md:text-[1.2rem] `}>We are here to provide you with a smooth traveling experience by offering efficient flight reservations and hassle-free hotel bookings.</p>
                        <br/>
                        <p className={`md:text-[1.2rem] `}>Our team, operating under Almar International Limited from Hong Kong, takes pride in delivering top-quality services catered to frequent flyers, business travelers, and vacationers alike.</p>
                    </div>
                    <div className={`enter-right h-[300px] md:h-[380px] w-[95%] md:w-[40%] mx-auto rounded-[20px] 
                        bg-[url('https://images.unsplash.com/photo-1534994820022-ec2b00d8cd42?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                        bg-cover bg-[0%_65%]`}></div>
                </div>
            </section>
            <About/>
            <Personal/>
            <OurStory/>
            <OurMission/>
            <WhyUs/>
            <Testimonial/>
        </>
    )
};

export default AboutPage;