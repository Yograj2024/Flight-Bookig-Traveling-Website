
const Hero = () => (

    <>
        <section className  = {`relative h-[600px] flex m-[0px_0px_0px] before:content-[''] flex-col md:w-full before:h-full before:w-full justify-center before:bg-[url('https://images.unsplash.com/photo-1710330759524-c89e93b4217f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  before:bg-no-repeat before:bg-cover before:bg-[0%_0%] before:absolute before:z-[-1] bg-black bg-opacity-40`} >
            <div className={`w-[90%] lg:max-w-[1440px] m-[0_auto]`}>
                <h1 className= {`text-center text-[1.5rem] md:text-[2.5rem] mt-[18px] text-transparent bg-clip-text  bg-gradient-to-r from-red-500  via-orange-500 to-pink-500  font-bold tracking-[0.05rem] `}>Start Your Journey Here </h1>

                <div className= {`relative before:content-[' '] before:h-full before:w-full before:absolute w-[95%] h-[75%] before:bg-slate-400 before:bg-opacity-25  m-[30px_auto_0px] before:rounded-[20px]  items-center`}>
                    <form action="" className  ={`flex flex-col relative text-[0.9rem] w-full gap-y-[30px] pt-[30px]`}>
                        <div className ="flex flex-col gap-y-[8px] md:flex-row md:items-center md:w-[90%] md:m-auto md:gap-x-[5px]">
                            <div className = {`flex flex-col w-[90%] m-auto gap-[5px] text-white`}>
                                <label htmlFor="origin">Origin</label>
                                <input type="text" id="origin" className={`h-[50px] W-[20px] rounded-[8px] outline-none p-2 bg-transparent border`} onChange={(e)=>{
                                    console.log(e.target.value)
                                }}/>
                            </div>

                            <div className={`w-[80%] m-[0px_auto_10px] relative md:w-[0%] before:content-[''] md:before:bg-white md:before:rounded-[50%] before:bg-[url('https://cdn-icons-png.flaticon.com/512/12221/12221004.png')]  before:bg-center before:bg-cover md:before:border-8  md:before:border-white before:absolute md:before:p-[18px] before:h-[35px] before:w-[35px] before:right-0 md:before:rotate-[90deg] md:before:h-[30px] md:before:w-[30px]`}></div>

                            <div className = {`flex flex-col w-[90%] m-auto gap-[5px] text-white`}>
                                <label htmlFor="destination">Destination</label>
                                <input type="text" id="destination" className  ={`h-[50px] W-[20px] rounded-[8px] outline-none p-2 bg-transparent border `} />
                            </div>
                        </div>

                        <div className ={`flex w-[90%] m-auto gap-[10px]`} >
                            <div className ={` flex flex-col w-[90%] m-auto gap-[5px] text-white`}>
                                <label htmlFor="depart">Departure Date</label>
                                <input type="date" className= {` h-[40px] w-[100%] p-2 rounded-[8px] outline-none bg-transparent border`} />
                            </div>
                            <div className ={`flex flex-col w-[90%] m-auto gap-[5px] text-white`}>
                                <label htmlFor="return">Return Date</label>
                                <input type="date" className ={`h-[40px] w-[100%] p-2 rounded-[8px] outline-none bg-transparent border`} />
                            </div>
                        </div>

                        <div className  ={`flex flex-col w-[90%] m-auto gap-[5px] text-white`}>
                            <label htmlFor="passengerCoutn">No. of Passengers</label>
                            <input type="number" className ={` h-[50px] W-[20px] rounded-[8px] outline-none p-2 bg-transparent border`} />
                        </div>

                        <button type="submit" className={` h-[2.8rem] w-[10rem] text-black text-[1.2rem]  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-200 font-medium m-auto rounded-[30px] flex items-center justify-center`}>Search</button>
                    </form>
                </div>
            </div>
        </section>
    </>
);

export default Hero;