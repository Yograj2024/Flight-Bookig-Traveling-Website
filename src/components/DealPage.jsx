import React, { useEffect, useState } from 'react';
import { bestDealsPage2 } from '../utils/data';
import { Layout_1, Layout_2 } from '../custumHooks/Layouts';
import isNumberInSeries from '../custumHooks/isNumberInSeries';

const DealPage = () => {

  const [deviceSize, setDeviceSize] = useState(window.innerWidth);

  useEffect( ()=>{

    const handleResizeScreen = () => setDeviceSize( window.innerWidth );
    window.addEventListener( "resize", handleResizeScreen );
    
  }, [] );

  return <>  
    <section >
      <div className={`relative h-[350px] md:h-[500px] flex flex-col justify-center w-full before:content-[' '] before:h-full before:w-full before:absolute before:z-[-1] before:bg-[url('//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/ed19afe9ba5d52cba632ef09/bnnnbn.jpg')] before:bg-cover md:before:bg-[0%_100%] bg-black bg-opacity-10`}>
      <h2 className={`pl-[50px] text-white text-[3rem]`}>  Ultimate Adventure Awaits</h2>
      <p className={`pl-[50px] text-[1.2rem] text-white`}>Unlock the best travel deals with us, offering unbeatable prices on flights,<br/> hotels, and holiday packages.Explore the world affordably and create unforgettable memories</p>
      </div>
    </section>

    <section>
      <div>
        <h1 className={`text-[2rem] font-semibold pl-[40px] pt-[30px]`}> Exclusive Offers: Explore the World for Less </h1>
      </div>
      <div className={`max-w-[1440px] mx-auto my-[30px] md:flex flex-wrap`}>
        {/* aagar aapko only index value chahiye to  _,index (data,index) only one parameater byDefault is array's element */}
        {
          bestDealsPage2.map((data, index) => {

            const isInSeries = isNumberInSeries(index);
  
            if ( isInSeries ) {
              if ( deviceSize > 430 ) {
                return <Layout_1 data={data} key={data.id} />;
              } else {
                return `You are in mobile device: ${deviceSize}`;
              }
            }
            return <Layout_2 data={data} key={data.id} />;
          })
        }
      </div>
    </section>
  </>
};

export default DealPage;