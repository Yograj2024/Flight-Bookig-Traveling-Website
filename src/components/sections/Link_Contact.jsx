import React from 'react';
import { Link } from 'react-router-dom';
import contactList from '../../custumHooks/contactList';
import { contact, qLinks, usefulLinks } from '../../utils/data';

const LinksSection = ({ title, links, customStyle }) => {
  return (
    <div className={`m-[20px_0px] md:flex-[1%] md:p-[0_0_0_${customStyle.padding}]`}>
      <h5 className={`text-[1.8rem] text-white font-semibold sm:text-left mb-[20px] mt-[40px]`}>
        {title}
      </h5>
      <div className={`grid grid-cols-1 sm:grid-cols-[150px_150px] ex-s:grid-cols-[185px_1fr] md:grid-cols-1`}>
        {links.map((item, index) => {
          let formattedUrl = item.toLowerCase().replace(/ /g, "-");

          if (formattedUrl.includes("?")) {
            formattedUrl = formattedUrl.replace("?", "");
          }
          
          if (formattedUrl === "our-story" || formattedUrl === "our-mission" || formattedUrl === "why-choose-us") {
            formattedUrl = `about-us#${formattedUrl}`;
          }
        
          return (
            <h5 className={`m-[5px_0px] text-slate-300`} key={`${index}_${item}`}>
              <i className="fa-solid fa-hand-point-right mr-[8px] text-slate-400" />
              <Link to={`/${formattedUrl}`}>{item}</Link>
            </h5>
          );
        })}
      </div>
    </div>
  );
};

const Link_Contact = () => {
  return (
    <>
      <section className="">
        <div className={`p-[0px_20px_0px] md:pt-[70px] md:flex md:flex-col lg:flex-row md:max-w-[1440px] md:m-auto`}>
          <div className={`m-[50px_0] md:m-0 md:p-[30px_0_0] md:w-ful lg:w-[380px] border-t-2 border-t-slate-700 p-[50px_0px_0px] md:border-none`}>
            <div className={`h-[80px] w-[300px]  m-[0px_0px_30px] bg-red-600`}></div>
            <p className={`text-slate-400`}>
              Lasthrplan, a part of Almar International Limited, specializes in seamless flight bookings and hotel
              reservations. We offer personalized, budget-friendly travel solutions, ensuring an effortless and memorable
              journey for business and leisure travelers.
            </p>
          </div>

          <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 md:mt-[30px] lg:mt-0'>
            <LinksSection title="Quick Links" links={qLinks} customStyle={{ padding: "20px" }} />
            <LinksSection title="Useful Links" links={usefulLinks} customStyle={{ padding: "10px" }} />

            <div className={`m-[20px_0px] md:flex-[6%]`}>
              <h5 className={`text-[1.8rem] text-white font-semibold sm:text-left mb-[30px]  md:pl-[70px]`}>Contact Info</h5>
              {
                contact.map((obj, index) => contactList(Object.keys(obj), Object.values(obj), obj.id || index))
              }
            </div>
          </div>
        </div>

        <div className={`h-[60px] bg-black text-slate-700 flex items-center text-[1rem] p-[10px_20px]`}>
          <p>Copyright <i className="fa-regular fa-copyright text-[15px]" /> 2025 Wispydeals.com. All Rights Reserved</p>
        </div>
      </section>
    </>
  );
};

export default Link_Contact;
