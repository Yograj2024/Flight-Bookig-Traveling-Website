import React from 'react';

const ContactPage = () => {
  return (
    <>
      <section className={``}>
        <div className = {`h-[550px] w-full relative bg-black bg-opacity-35 lg:max-w-[1400px] lg:m-auto before:content-[' '] before:h-full before:w-full before:absolute before:z-[-1] before:bg-[url('https://assets.nicepagecdn.com/d2cc3eaa/5380758/images/silhouette-person-standing-top-hill-beautiful-colorful-sky-morning-4.jpg')] before:bg-cover before:bg-[0%_50%] `}></div>
      </section>      

      <section className={`bg-[#E7F0FF] p-[50px_20px]`}>
        <div className = {` h-[700px] lg:flex lg:justify-around`}>
          <div className={`bg-red-400 w-[60%]`}></div>
          <form className={`bg-red-200 lg:w-[35%] rounded-[35px] p-[30px_20px_20px_30px] lg:flex lg:flex-col gap-y-[20px]`}>
            <h2 className={`text-[2rem] font-semibold`}>Get in Touch</h2>
            <h3 className={`text-[1.2rem] pl-[5px] font-semibold`}>You can reach us anytime</h3>
            <div className={`flex justify-between`}>
              <input type="text" className={`h-[50px] w-[48%] rounded-[30px] pl-[20px] focus:outline-none`} placeholder='First name'/>
              <input type="text" className={`h-[50px] w-[48%] rounded-[30px] pl-[20px] focus:outline-none`} placeholder='Last name'/>
            </div>
            <input type="email" className={`h-[50px] w-full rounded-[30px] pl-[20px] focus:outline-none`} placeholder='Your email'/>
            <div className={`flex items-center`}>
              <input className={`h-[50px] w-[70px] rounded-l-[30px] border-r border-r-slate-400 font-bold pl-[15px] focus:outline-none`} value={"+91"}/>
              <input type="number" className={`h-[50px] w-full rounded-r-[30px] pl-[20px] focus:outline-none appearance-none`} placeholder='Phone number'/>
            </div>
            <textarea name="" id="" className={`w-full rounded-[20px]  min-h-[180px] p-[20px] focus:outline-none`} placeholder='Your message'></textarea>
            <button type='submit' className={``}> submit </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;