const OurMission = () => {
  return (
    <>
      <section id="our-mission" className="bg-white p-10 rounded-2xl shadow-lg w-[95%] m-auto flex items-center justify-between max-w-7xl">
        <div className="flex-1 ">
            <img
                src="https://images.unsplash.com/photo-1617018681623-987895ca1c99?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Airplane wing view"
                className="rounded-2xl h-full w-full shadow-md bg-center bg-cover"/>
        </div>
        <div className="flex-1 pr-[20px] ">
          <p className="text-4xl font-bold">Our <span className="text-orange-600">Mission</span> </p>
          <p className="font-semibold text-gray-700 text-2xl mt-[20px]">Explore The World With Wispydeals</p>
          <p className="mt-6 text-gray-700 text-lg"> Our goal is to ensure a seamless journey for you by providing efficient flight reservations and easy hotel bookings. </p>
          <p className="mt-4 text-gray-700 text-lg"> As a branch of Almar International Limited based in Hong Kong, our team is dedicated to providing exceptional services for individuals who travel frequently, for business or leisure purposes. </p>
          <p className="mt-6 text-gray-700 text-lg"> Our company is dedicated to delivering superior products and excellent customer service. We prioritize offering top-notch goods and exceptional support to our cherished customers. Explore a wide range of flights and accommodations in our carefully selected inventory. Our personalized assistance is crafted to cater to your specific travel requirements, whether for work, leisure, or a combination of both. At Lasthrplan.com, your satisfaction is our goal, but we go above and beyond that by wholeheartedly aiming for your happiness. </p>
        </div>
      </section>
    </>
  );
};

export default OurMission;
