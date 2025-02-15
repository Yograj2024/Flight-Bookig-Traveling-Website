import React from 'react';

const Disclaimer = () => {
  return <>
            <section >
                <div className={`p-[20px_10px_28px_20px] border-2 border-orange-600 rounded-[30px] text-white m-[0px_15px] w-[85%]  md:max-w-[1440px] mx-auto`}>
                    <h2 className={`text-[1.5rem] font-semibold text-orange-600 mb-[20px]`}>Disclaimer</h2>
                    <p className={`text-[0.8rem]`}>Please be advised that the information found on our website, courtesy of Lasthrplan.com, is meant for general informational purposes only. While we strive for accuracy, we cannot guarantee the completeness, reliability, or appropriateness of the information. Please bear in mind that details related to travel, such as pricing, availability, and itineraries, are subject to change without prior notice. We strongly recommend verifying all information before finalizing travel plans. Furthermore, please note that Lasthrplan.com is not liable for any errors or omissions in the content or any consequences resulting from relying on the information provided on our website. For specific inquiries, kindly reach out to us directly.</p>
                </div>
            </section>
        </>
  
};

export default Disclaimer;
