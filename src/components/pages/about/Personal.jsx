import React from 'react';
import { personalData } from '../../../utils/data';

const Personal = () => {
  return (
    <>
      <section className="bg-gray-100 px-[50px] py-[70px] mt-[70px]">
        <div className= "flex gap-y-[30px] flex-col lg:justify-between lg:flex-row  lg:items-center max-w-[1440px] m-auto">

            {
                personalData.map((data) => {
                    const {id,number,heading,icon} = data 
                    return <div key={id} className="bg-white shadow-lg flex flex-col justify-between items-center rounded-lg p-6 text-center lg:w-[200px] h-[200px] lg:h-[250px]">
                            <div className="bg-green-200 p-4 rounded-full">
                                <div className="w-8 h-8 text-green-600" fill="currentColor">
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