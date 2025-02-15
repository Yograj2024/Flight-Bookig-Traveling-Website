const WhyUs = () => {
    return (
        <>
            <section id="why-choose-us">
                <div className="bg-white p-10 rounded-2xl w-[95%] m-auto flex items-center max-w-[1440px] my-[100px] gap-x-[20px] ">
                    <div className="w-[53%] pr-[20px]">
                        <h3 className="text-4xl font-bold"> Why Choose <span className="text-orange-600">Us</span> </h3>
                        <p className="mt-6 text-gray-700 text-2xl font-semibold">Your Perfect Travel Partner</p>
                        <p className="mt-6 text-gray-700 text-lg"> Here at Wispydeals.com, we are dedicated to making every trip enjoyable instead of overwhelming. Our platform is designed with efficiency and user-friendliness in mind, allowing you to effortlessly search, compare, and book from a wide selection of flights and accommodations at budget-friendly rates. So what makes us stand out? Our one-stop-shop for reserving both flights and accommodations, our competitive prices sourced from trusted partners worldwide, personalized recommendations based on your preferences, and 24/7 customer support that goes above and beyond throughout your entire journey </p>

                    </div>

                    <div className="w-[45%] shadow-xl">
                        <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Airplane wing view" className="rounded-2xl shadow-md" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default WhyUs;