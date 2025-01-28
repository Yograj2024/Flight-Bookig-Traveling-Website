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

    const { country_name, title, description, id,
            hoverContent:{
              image_url:hoverImg,
              guide:guide,
              price:price,
            },
            locations:[
              { image_url:img1, city_name:city1 },
              { image_url:img2, city_name:city2 },
              { image_url:img3, city_name:city3 },
              { image_url:img4, city_name:city4 }
            ]
          } = data;

    return { id, country_name, title, description, 
             img1, img2, img3, img4, city1, city2, city3, city4,
             hoverImg,guide,price }
  }

  const Layout_1 = ( { data } ) => {

    const { id, country_name, title, description,
            hoverImg,guide,price, 
            img1, img2, img3, img4,
            city1, city2, city3, city4 } = getCountryData (data);

    return (
      <div className={`group h-[650px] grid grid-rows-2 gap-y-[5px] w-[95%] md:w-[48%] my-[30px] m-auto rounded-[20px] before:content-[""] relative before:absolute before:w-full before:bg-opacity- before:rounded-[25px] before:animate-down-out hover:before:animate-up-in before:bottom-0`}>
        <div className={`hidden group-hover:block flex-col items-start justify-end absolute w-full rounded-[25px] group-hover:animate-up-in bottom-0 bg-opaciy-50 bg-center bg-cover`} style = { { backgroundImage : `url(${ hoverImg} )`} }>
          <h2 className={`text-[2rem] text-red-600 text-center`}> { country_name } </h2>
          <p>dklfjdiu</p>
          <p></p>
        </div>
        <div className={`bg-slate-40 grid grid-cols-2 gap-x-[5px]`} style={{gridTemplateColumns:"43% 56%"}}>
          <div className={`bg-red-400 rounded-tl-[25px] bg-cover bg-center`} 
               style={{backgroundImage:`url(${img4})`}}> </div>
          <div className={`bg-red-400 rounded-tr-[25px] bg-cover bg-center`} 
               style={{backgroundImage:`url(${img2})`}}></div>
        </div>
        <div className={`bg-slate-40 grid grid-cols-2 gap-[5px]`} 
             style={{gridTemplateColumns:"61% 38%"}}>
          <div className={`bg-slate-100 bg-opacity-50 rounded-bl-[25px] px-[10px] pt-[25px]`}>
            <h2 className={`text-[1.2rem] font-semibold mb-[20px]`}> { title } </h2>
            <p> { description } </p>
          </div>
          <div className={`bg-red-400 rounded-br-[25px] bg-cover bg-center`} 
               style={{backgroundImage:`url(${img3})`}}></div>
        </div>
    </div>
    )
  }

  const Layout_2 = ( { data } ) => {

    const { country_name, title, description, 
            img1, img2, img3, img4,
            hoverImg,guide,price,
            city1, city2, city3, city4 } = getCountryData (data);
    return (
        <div className={`group h-[650px] grid grid-rows-2 gap-y-[5px] w-[95%] md:w-[45%] mx-auto my-[30px] rounded-[25px] before:content-[""] relative before:absolute before:w-full before:bg-blac before:bg-opacity-50 before:rounded-[25px] before:animate-down-out hover:before:animate-up-in before:bottom-0`} style={{gridTemplateRows:"40% 59%"}} onMouseEnter = { () => {  } } >
          <div className={`absolute w-full rounded-[25px] group-hover:animate-up-in bottom-0 bg-opaciy-50 bg-center bg-cover`} style = { { backgroundImage : `url(${ hoverImg} )`} }>
            <h2 > { country_name } </h2>
          </div>
          <div className='bg-slate-400 rounded-t-[25px] bg-cover bg-center' 
               style={{backgroundImage:`url(${img2})`}}></div>

          <div className={`grid grid-cols-2 gap-x-[5px]`} 
               style={{gridTemplateColumns:"57.4% 42%"}}>
            <div className={`bg-slate-40 rounded-br-[25px] px-[10px] pt-[25px]`}>
              <h2 className={`text-[1.2rem] font-semibold mb-[20px]`}> { title } </h2>
              <p> { description } </p>
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
        <div className={`relative h-[350px] md:h-[500px] w-full before:content-[' '] before:h-full before:w-full before:absolute before:z-[-1] before:bg-[url('//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/ed19afe9ba5d52cba632ef09/bnnnbn.jpg')] before:bg-cover md:before:bg-[0%_100%] bg-black bg-opacity-10`}></div>
      </section>

      <section>
        <div className={`max-w-[1440px] mx-auto my-[30px] md:flex flex-wrap`}>
         { bestDealsPage2.map( (data,index) => {   /* aagar aapko only index value chahiye to  _,index (data,index) only one parameater byDefault is array's element */
            return (isNumberInSeries(index) == true) ? 
            ( ( deviceSize > 430 ) ? (<Layout_1 data = {data} key = {data.id}/>) : 
            ("you are in mobile device " + deviceSize)) : (<Layout_2 data={data} key={data.id} />)
          }) }
        </div>
      </section>
    </>
  )
};

export default DealPage;
