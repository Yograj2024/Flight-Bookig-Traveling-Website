import React from 'react';
import { personalData } from '../../../utils/data';

const Personal = () => {
  return (
    <>
      <section className="bg-gray-100 px-[50px] py-[50px] scroll-container">
        <h2 className="font-semibold text-center text-4xl mb-[3.8rem]"> Our Experience and Expertise</h2>
        <div className= "show gap-y-[30px] flex-col grid grid-cols-2 lg:flex lg:justify-between lg:flex-row  lg:items-center max-w-[1440px] m-auto">
            {
              personalData.map((data) => {
                  const {id,number,heading,icon,css} = data 
                  return <div key={id} className="show bg-white shadow-lg flex flex-col sm:w-[80%] sm:m-auto justify-between items-center rounded-lg p-6 text-center lg:w-[200px] h-[200px] lg:h-[250px]">
                          <div className="bg-green-20 rounded-full">
                              <div className={`${css} bg-slate-200 rounded-full box-content p-4  shadow-[inset_8px_10px_10px_0px_rgba(0,0,0,0.1)]`}>
                                <img src={icon} alt="" className={`h-full w-full object-cover`}/>
                              </div>
                          </div>
                          <div>
                              <h2 className="text-2xl font-bold">{number}<sup className={`text-[1.5rem] font-extrabold`}>+</sup></h2>
                              <p className="text-gray-600">{heading}</p>
                          </div>
                      </div>
              })
            }
        </div>
    </section>
    </>
  );
};

export default Personal;