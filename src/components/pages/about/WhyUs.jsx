const WhyUs = () => {
    return (
        <>
            <section id="why-choose-us" className="bg-white p-10 rounded-2xl shadow-lg w-[95%] m-auto flex items-center justify-between max-w-7xl">

                <div className="w-3/5 pr-[20px]">
                    <p className="text-4xl font-bold"> Why  <span className="text-orange-600">Us</span> </p>
                    <p className="mt-6 text-gray-700 text-2xl font-semibold">Your Perfect Travel Partner</p>
                    <p className="mt-6 text-gray-700 text-lg"> Here at Wispydeals.com, we are dedicated to making every trip enjoyable instead of overwhelming. Our platform is designed with efficiency and user-friendliness in mind, allowing you to effortlessly search, compare, and book from a wide selection of flights and accommodations at budget-friendly rates. So what makes us stand out? Our one-stop-shop for reserving both flights and accommodations, our competitive prices sourced from trusted partners worldwide, personalized recommendations based on your preferences, and 24/7 customer support that goes above and beyond throughout your entire journey </p>

                </div>

                <div className="w-2/5 flex justify-center">
                    <img src="https://images.unsplash.com/photo-1617018681623-987895ca1c99?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Airplane wing view" className="rounded-2xl h-[400px] w-[380px] p shadow-md bg-center bg-cover" />
                </div>
            </section>
        </>
    )
}
export default WhyUs;