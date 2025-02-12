import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout_1, Layout_2 } from '../../custumHooks/Layouts';
import isNumberInSeries from '../../custumHooks/isNumberInSeries';
import { setScreenSize } from '../../store/features/storeDevidce-width/resizeSlice';
import { bestDealsPage2 } from '../../utils/data';

const DealPage = () => {
  const screenSize = useSelector( ( state ) => state.screenSize.screenSize );
  const dispatch = useDispatch();

  useEffect( () => {                            
    
    const handleResize = () => {
      dispatch( setScreenSize ( window.innerWidth))
    }

    window.addEventListener( 'resize', handleResize)
  }, [] );

  return <>  
    <section >
      <div className={`relative h-[350px] md:h-[500px] flex flex-col justify-center w-full before:content-[' '] before:h-full before:w-full before:absolute before:z-[-1] before:bg-[url('https://images.unsplash.com/photo-1509825826883-62284c8c7ea5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjB3YXRlcmZhbGx8ZW58MHx8MHx8fDA%3D')] before:bg-cover md:before:bg-[0%_70%] bg-black bg-opacity-10`}>
      <h2 className={`pl-[50px] text-white text-[2rem] lg:text-[3rem]`}>  An unparalleled journey is on the horizon.</h2>
      <p className={`pl-[50px] text-[1.2rem] text-white`}>Discover unbeatable flight prices and unlock the best travel deals with us ,<br/> <span className={`hidden md:block`}>Discover the world without breaking the bank and make lasting memories with affordable options such as hotels and holiday packages </span> </p>
      </div>
    </section>

    <section>
      <div>
        <h1 className={`text-[2rem] font-semibold pl-[40px] pt-[30px]`}> Uncover the Top Bargains for Enhanced Travel Opportunities </h1>
      </div>
      <div className={`max-w-[1440px] mx-auto my-[30px] md:flex flex-wrap`}>
        {/* aagar aapko only index value chahiye to  _,index (data,index) only one parameater byDefault is array's element */}
        {
          bestDealsPage2.map((data, index) => {

            const isInSeries = isNumberInSeries(index);
  
            if ( isInSeries ) {
              if ( screenSize > 430 ) {
                return <Layout_1 data={data} key={data.id} />;
              } else {
                return `You are in mobile device: ${screenSize}`;
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


