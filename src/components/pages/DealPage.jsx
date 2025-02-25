import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScreenSize } from "../../store/features/storeDevidce-width/resizeSlice";
import Lg_DealsPage from "./dealPage/Lg_DealsPage";
import Mob_DealPage from "./dealPage/Mob_DealPage";
import { useNavigate } from "react-router-dom";

const DealPage = () => {
  const screenSize = useSelector((state) => state.screenSize.screenSize);
  const dispatch = useDispatch();


  useEffect(() => {
    const handleResize = () => {
      dispatch(setScreenSize(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section>
        <div className={`relative h-[300px] md:h-[500px] flex flex-col justify-center w-full before:content-[' '] before:h-full before:w-full before:absolute before:z-[-1] before:bg-[url('https://www.visitarizona.com/imager/s3_us-west-1_amazonaws_com/aot-2020/images/Cities/kegn2tadajk36espav78_b2b0b89039603b931027eb2900b66531.jpg')] before:bg-cover md:before:bg-[0%_70%] bg-black bg-opacity-20`}>
          <h2 className={`pl-[20px] pr-[20px] leading-[3rem] lg:pr-0 mt-[50px] lg:pl-[50px] text-slate-100 text-[2.3rem] lg:text-[3.5rem]`}>  Unparalleled journey  on the horizon.</h2>
          <p className={`pl-[50px] text-[1.3rem] mt-[2rem] text-white hidden sm:block`}>
            Discover unbeatable flight prices and unlock the best travel deals with us Discover<br/> 
            the world without breaking the bank and make lasting memories with affordable options.
          </p>
        </div>
      </section>
      {
        screenSize < 1024 ? <Mob_DealPage/> : <Lg_DealsPage/>
      } 
    </>
  );
};
export default DealPage;