const OurStory = () => {
  return (
    <>
      <section id="our-story" className="bg-white p-10 rounded-2xl shadow-lg w-[95%] m-auto flex items-center justify-between max-w-7xl">
        <div className="w-3/5 pr-[20px]">
            <p className="text-4xl font-bold"> Our <span className="text-orange-600">Story</span> </p>
            <p className="mt-6 text-gray-700 text-lg"> Our story: Founded in 2005, Wispydeals.com was created with the goal of offering innovative travel solutions to our clients. Since then, we have steadily expanded and become a prominent leader in the travel industry. </p>
            <p className="mt-4 text-gray-700 text-lg"> Our emphasis lies in providing convenient, budget-friendly, and dependable services that cater to the ever-changing demands of travelers. Whether you're embarking on an impromptu trip or a meticulously planned vacation, our aim is to ensure that every journey is as enjoyable as possible. </p>
            <ul className="list-disc pl-6 text-gray-700 text-lg">
                <li> Almar International Limited is the name of our company</li>
                <li> The registered address is located at Unit-S, 1/F Mau Lam Commercial Building on Mau Lam Street in Jordan, Kowloon, Hong Kong-999077. </li>
                <li> The company's registration number is 469105.</li>
                <li> {" "} The registration certificate for our business is 53855321.{" "} </li>
                <li> D-U-N-S Number: 66-339-1625</li>
                <li> Check out wispydeals.com to explore all the exciting airport locations! </li>
            </ul>
        </div>

        <div className="w-2/5 flex justify-center"><img src="https://images.unsplash.com/photo-1617018681623-987895ca1c99?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Airplane wing view" className="rounded-2xl h-[400px] w-[380px] p shadow-md bg-center bg-cover" />
        </div>
      </section>
    </>
  );
};
export default OurStory;
