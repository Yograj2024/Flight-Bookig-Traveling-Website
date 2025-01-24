import {
    bookingForm, dateContainer, dateInput, formBtn,
    formContainer, formInput, heroSection, heroSectionH1,
    inputField, placeInput, up_down
} from "../../utils/css";

const Hero = () => (

    <>
        <section className  = {`${heroSection}`} >
            <div className={`w-[90%] lg:max-w-[1440px] m-[0_auto]`}>
                <h1 className= {`${heroSectionH1}`}>Start Your Journey Here </h1>

                <div className= {`${formContainer}`}>
                    <form action="" className  ={`${bookingForm}`}>
                        <div className ="flex flex-col gap-y-[8px] md:flex-row md:items-center md:w-[90%] md:m-auto md:gap-x-[5px]">
                            <div className = {`${placeInput}`}>
                                <label htmlFor="origin">Origin</label>
                                <input type="text" id="origin" className={`${inputField}`} onChange={(e)=>{
                                    console.log(e.target.value)
                                }}/>
                            </div>

                            <div className={`${up_down}`}></div>

                            <div className = {`${placeInput}`}>
                                <label htmlFor="destination">Destination</label>
                                <input type="text" id="destination" className  ={`${inputField}`} />
                            </div>
                        </div>

                        <div className ={`${dateContainer}`} >
                            <div className ={`${formInput}`}>
                                <label htmlFor="depart">Departure Date</label>
                                <input type="date" className= {`${dateInput}`} />
                            </div>
                            <div className ={`${formInput}`}>
                                <label htmlFor="return">Return Date</label>
                                <input type="date" className ={`${dateInput}`} />
                            </div>
                        </div>

                        <div className  ={`${formInput}`}>
                            <label htmlFor="passengerCoutn">No. of Passengers</label>
                            <input type="number" className ={`${inputField}`} />
                        </div>

                        <button type="submit" className={`${formBtn}`}>Search</button>
                    </form>
                </div>
            </div>
        </section>
    </>
);

export default Hero;