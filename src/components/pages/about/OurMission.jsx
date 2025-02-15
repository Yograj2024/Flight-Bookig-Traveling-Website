const OurMission = () => {
  return (
    <>
      <section id="our-mission">
        <div className={`flex flex-col lg:flex-row w-[95%] m-auto max-w-[1440px] gap-x-[30px] justify-between`}>
          <div className="lg:w-[40%]">
              <img
                  src="https://kailastoursandtravels.com/assets/img/about.jpg"
                  alt="Airplane wing view"
                  className="rounded-2xl h-full w-full shadow-lg object-cover"/>
          </div>
          <div className="lg:w-[55%] text-gray-700 ">
            <h3 className="text-4xl font-bold">Our <span className="text-orange-600">Mission</span> </h3>
            <p className="font-semibold text-gray-700 text-2xl mt-[20px]">Explore The World With Wispydeals</p>
            <p className="mt-6 text-gray-700 text-lg"> Our goal is to ensure a seamless journey for you by providing efficient flight reservations and easy hotel bookings. </p>
            <p className="mt-4 text-lg"> As a branch of Almar International Limited based in Hong Kong, our team is dedicated to providing exceptional services for individuals who travel frequently, for business or leisure purposes. </p>
            <ul className={`mt-[20px] list-disc `}>
              <li className={`mt-[10px] ml-[30px] pl-[5px]`}>Superior Products and Service: Our company is committed to delivering high-quality products and excellent customer service.</li>
              <li className={`mt-[10px] ml-[30px] pl-[5px]`}>Top-Notch Goods: We prioritize offering only the best products in our inventory.</li>
              <li className={`mt-[10px] ml-[30px] pl-[5px] md:block`}>Exceptional Customer Support: We provide outstanding support to ensure the satisfaction of our valued customers.</li>
              <li className={`mt-[10px] ml-[30px] pl-[5px] md:block`}>Wide Range of Options: Explore a variety of flights and accommodations carefully selected for your needs.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMission;
