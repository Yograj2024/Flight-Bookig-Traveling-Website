import React from 'react';
import { airlineList } from '../../utils/data';

const AirLines = () => {
  return (
    <>
       <section className={`m-[30px_0px]`}>
            <div className={`md:max-w-[1440px] md:m-auto`}>
              <h2 className={`text-[1.8rem] text-center font-semibold tracking-[0.05rem] text-orange-600 mb-[30px]`}>Airline List</h2>

              <ul className='pl-[15px] grid grid-cols-1 ex-s:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:pl-[60px]'>
                  {
                      airlineList.map(airline => <li className={`m-[8px_0px] text-orange-400 font-medium`} key={airline}> 
                      <i className="fa-sharp fa-solid fa-plane rotate-[-45deg] mr-[10px]" />
                      { airline } </li>)
                  }
              </ul>
            </div>
       </section>
    </>
  );
};

export default AirLines; 