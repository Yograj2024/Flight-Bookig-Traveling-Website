const WhyUs = () => {
    return (
        <>
            <section id="why-choose-us" className={`scroll-container`}>
                <div className="show bg-white px-[10px] rounded-2xl w-[98%] m-auto flex flex-col-reverse lg:flex-row items-center max-w-[1440px] my-[70px] gap-x-[20px] ">
                    <div className="md:w-[53%] px-[10px]">
                        <h3 className="text-4xl font-bold mt-[30px]"> Why Choose <span className="text-orange-600">Us</span> </h3>
                        <p className="mt-3 text-gray-700 text-2xl font-semibold">Your Perfect Travel Partner</p>
                        <p className="mt-6 text-gray-700 text-lg"> Here at Wispydeals.com, we are dedicated to making every trip enjoyable instead of overwhelming. Our platform is designed with efficiency and user-friendliness in mind, allowing you to effortlessly search, compare, and book from a wide selection of flights and accommodations at budget-friendly rates. So what makes us stand out? Our one-stop-shop for reserving both flights and accommodations, our competitive prices sourced from trusted partners worldwide, personalized recommendations based on your preferences, and 24/7 customer support that goes above and beyond throughout your entire journey </p>

                    </div>

                    <div className="md:w-[45%] shadow-xl">
                        <img src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15855.jpg?semt=ais_hybrid" alt="Airplane wing view" className="rounded-2xl shadow-md w-full" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default WhyUs;