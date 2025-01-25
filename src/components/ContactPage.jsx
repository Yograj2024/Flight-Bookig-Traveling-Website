import React, { useState } from 'react';

const ContactPage = () => {
  const [ countryCode, setCountryCode ] = useState(91);
  return (
    <>
      <section className={``}>
        <div className = {`h-[550px] w-full relative bg-black bg-opacity-35 lg:max-w-[1400px] lg:m-auto before:content-[' '] before:h-full before:w-full before:absolute before:z-[-1] before:bg-[url('https://assets.nicepagecdn.com/d2cc3eaa/5380758/images/silhouette-person-standing-top-hill-beautiful-colorful-sky-morning-4.jpg')] before:bg-cover before:bg-[0%_50%] `}></div>
      </section>      

      <section className={`bg-[#E0FFFF] p-[50px_20px]`}>
        <div className={`lg:max-w-[1400px] lg:m-auto`}>
          {/* contact ingo and form */}
          <div className = {` h-[700px] lg:flex lg:justify-between`}>
            <div className={`w-[63%] p-[60px_20px_20px_30px]`}>
              <div className={` h-[42%] w-full lg:flex lg:flex-col gap-y-[15px]`}>
                <h2 className={`text-[3rem] font-semibold`}>Contact Us</h2>
                <p>Email, call, or complete the form to learn how <br />Snappy can solve your messaging problem</p>
                <strong>xyx@gmail.com</strong>
                <p>+91 6349854470</p>
                <b>Thansk for visit our site</b>
              </div>
              <div className={` h-[50%] w-full lg:grid lg:grid-cols-3 mt-[50px] gap-x-[35px]`}>
                <div>
                  <h3 className={`text-[1.2rem] font-semibold`}>Customer Support</h3>
                  <p className={`mt-[20px]`}>Our support team is available around the clock to address any concerns or queries you may have. </p>
                </div>
                <div>
                  <h3 className={`text-[1.2rem] font-semibold`}>Feedback and Suggestions</h3>
                  <p className={`mt-[20px]`}>We value your feedback and are continuously working to improve Snappy. Your input is crucial in shaping the future of Snappy.</p>
                </div>
                <div>
                  <h3 className={`text-[1.2rem] font-semibold`}>Media Inquries</h3>
                  <p className={`mt-[20px]`}>For media-related question o rpress inquiries, please contact us at media@Snappy.com</p>
                </div>
              </div>
            </div>

            {/* contact form */}
            <div className={`bg-[#87CEFA] bg-opacity-20 lg:w-[35%] rounded-[35px]`}>
              <form className={` p-[30px_20px_20px_30px] lg:flex lg:flex-col gap-y-[20px]`}>
                <h2 className={`text-[2rem] font-semibold`}>Get in Touch</h2>
                <h3 className={`text-[1.2rem] pl-[5px] font-semibold`}>You can reach us anytime</h3>
                <div className={`flex justify-between`}>
                  <input type="text" className={`h-[50px] w-[48%] rounded-[30px] pl-[20px] focus:outline-none`} placeholder='First name'/>
                  <input type="text" className={`h-[50px] w-[48%] rounded-[30px] pl-[20px] focus:outline-none`} placeholder='Last name'/>
                </div>
                <input type="email" className={`h-[50px] w-full rounded-[30px] pl-[20px] focus:outline-none`} placeholder='Your email'/>
                <div className={`flex items-center`}>
                  <input className={`h-[50px] w-[75px] rounded-l-[30px] border-r border-r-slate-400 font-bold pl-[15px] focus:outline-none`} value={countryCode} onChange={ (e) => setCountryCode(e.target.value) }/>
                  <input type="number" className={`h-[50px] w-full rounded-r-[30px] pl-[20px] focus:outline-none appearance-none`} placeholder='Phone number'/>
                </div>
                <textarea name="" id="" className={`w-full rounded-[20px]  min-h-[180px] p-[20px] focus:outline-none`} placeholder='Your message'></textarea>
                <button type='submit' className={``}> submit </button>
              </form>
            </div>
          </div>

          {/* map */}
          <div className={`mt-[120px] flex justify-between`}>
            <div className={`h-[500px] w-[50%]`}>
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1229.0215628263354!2d79.12322580379391!3d29.39376552517714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a139d4332809b%3A0x1a0fcc5855dfbca2!2sFitness%20point%20the%20gym!5e0!3m2!1sen!2sin!4v1737780632096!5m2!1sen!2sin" 
              className={`h-full w-full`}
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade" />
            </div>

            <div className={`w-[45%] flex flex-col justify-center`}>
              <h3 className={`text-[1.5rem]`}>Our Location</h3>
              <h2 className={`text-[2.5rem]`}>Connecting Near and Far</h2>
              <address className={`mt-[20px]`}>
                <h3 className={`text-[1.5rem] font-semibold mb-[20px]`}>Headquarters</h3>
                <p className={`text-[1.2rem] leading-[2rem]`}>
                  Snappy Inc. <br />
                  San Francisco, USA <br />
                  123 Tech Boulevard, Suite 456 <br />
                  San Franciso, CA 123A5 <br />
                  United States
                </p>
              </address>
            </div>
          </div> 
        </div>
      </section>

      {/* FAQ  */}
      <section>
        <div className = {`  `}>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;