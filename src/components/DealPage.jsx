import React, { useEffect, useState } from 'react';
import { bestDealsPage2 } from '../utils/data';

const DealPage = () => {
  const [deviceSize, setDeviceSize] = useState(window.innerWidth);

  const isNumberInSeries = ( num ) => {
    let current = 0; // Series starts from 0
    let step = 3;    // Step for the first number (3rd after each pair)

    while (current <= num) {
      // Condition 1: Check if the current number is equal to the input number
      if (current === num) {
        return true;
      }
      // After adding the first number, we add the second consecutive number
      current += step; // Increment current by 3 for the first number
      if (current === num) {
        return true;
      }
      current += 1;     // Add the next consecutive number

      // Reset step to 3 for the next iteration
      step = 3;
    }
    return false;  // If number is not found in the series
  };

  function getCountryData ( data ) {
    const { countyr_name, title, description, id,
            locations:[
              { image_url:img1 },
              { image_url:img2 },
              { image_url:img3 },
              { image_url:img4 }
            ] } = data;

    return { id, countyr_name, title, description, img1, img2, img3, img4 }
  }

  const Layout_1 = ( { data } ) => {

    const { id, countyr_name, title, description, img1, img2, img3, img4 } = getCountryData (data);
    return (
      <div className={`h-[650px] grid grid-rows-2 gap-y-[5px] w-[95%] md:w-[48%] my-[30px] m-auto rounded-[20px] before:content-[""] relative before:absolute before:w-full before:bg-black before:bg-opacity-50 before:rounded-[25px] before:animate-down-out hover:before:animate-up-in before:bottom-0`}>
        <div className={`bg-slate-40 grid grid-cols-2 gap-x-[5px]`} style={{gridTemplateColumns:"43% 56%"}}>
          <div className={`bg-red-400 rounded-tl-[25px] bg-cover bg-center`} 
               style={{backgroundImage:`url(${img4})`}}></div>
          <div className={`bg-red-400 rounded-tr-[25px] bg-cover bg-center`} 
               style={{backgroundImage:`url(${img2})`}}></div>
        </div>
        <div className={`bg-slate-40 grid grid-cols-2 gap-[5px]`} 
             style={{gridTemplateColumns:"61% 38%"}}>
          <div className={`bg-slate-100 bg-opacity-50 rounded-bl-[25px] px-[10px] pt-[25px]`}>
            <h2 className={`text-[1.2rem] font-semibold mb-[20px]`}> { title } </h2>
            {/* <p> { description } </p> */}
          </div>
          <div className={`bg-red-400 rounded-br-[25px] bg-cover bg-center`} 
               style={{backgroundImage:`url(${img3})`}}></div>
        </div>
    </div>
    )
  }

  const Layout_2 = ( { data } ) => {

    const { countyr_name, title, description, img1, img2, img3, img4 } = getCountryData (data);
    return (
        <div className={`h-[650px] grid grid-rows-2 gap-y-[5px] w-[95%] md:w-[45%] mx-auto my-[30px] rounded-[25px] before:content-[""] relative before:absolute before:w-full before:bg-black before:bg-opacity-50 before:rounded-[25px] before:animate-down-out hover:before:animate-up-in before:bottom-0`} style={{gridTemplateRows:"40% 59%"}}>

          <div className='bg-slate-400 rounded-t-[25px] bg-cover bg-center' 
               style={{backgroundImage:`url(${img2})`}}></div>

          <div className={`grid grid-cols-2 gap-x-[5px]`} 
               style={{gridTemplateColumns:"57.4% 42%"}}>
            <div className={`bg-slate-40 rounded-br-[25px] px-[10px] pt-[25px]`}>
              <h2 className={`text-[1.2rem] font-semibold mb-[20px]`}> { title } </h2>
              {/* <p> { description } </p> */}
            </div>
            <div className={`grid grid-row-2 gap-y-[5px]`} 
                style={{gridTemplateRows:"50% 49%"}}>
              <div className={`bg-slate-400 bg-center bg-cover`} 
                  style={{backgroundImage:`url(${img4})`}}></div>
              <div className={`bg-slate-400 rounded-br-[25px] bg-cover bg-center`} 
                  style={{backgroundImage:`url(${img3})`}}></div>
            </div>
          </div>
      </div>
    )
  };

  useEffect( ()=>{

    const handleResizeScreen = () => setDeviceSize(window.innerWidth);
    window.addEventListener("resize",handleResizeScreen);

  },[]);

  return (
    <>
      <section>
        <div className={`relative h-[350px] md:h-[500px] w-full before:content-[' '] before:h-full before:w-full before:absolute before:z-[-1] before:bg-[url('https://ld-wp73.template-help.com/wordpress/prod_18709/v4/wp-content/uploads/2017/04/background-39-1920x900-1.jpg')] before:bg-cover before:bg-[18%_0] md:before:bg-[0%_-130px] bg-black bg-opacity-10`}></div>
      </section>

      <section>
        <div className={`max-w-[1440px] mx-auto my-[30px] md:flex flex-wrap`}>
         { bestDealsPage2.map( (data,index) => {   /* aagar aapko only index value chahiye to  _,index (data,index) only one parameater byDefault is array's element */
            return (isNumberInSeries(index) == true) ? 
            ( ( deviceSize > 430 ) ? (<Layout_1 data ={data} key={data.id}/>) : 
            ("you are in mobile device " + deviceSize)) : (<Layout_2 data={data} key={data.id} />)
          }) }
        </div>
      </section>
    </>
  )
};



export default DealPage;
