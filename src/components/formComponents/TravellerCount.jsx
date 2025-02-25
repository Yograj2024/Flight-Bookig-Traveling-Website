import { useState } from "react";

const TravellerCount_Class = () => {

    const [travellerCount, setTravellCount] = useState('1');
  
    return  <div className={`bg-slate-200 bg-opacity-25 rounded-[15px] px-[10px] py-[15px] flex-auto`}>
      <label htmlFor="travellerCount">Travells & Class <span className={`ml-[5px]`}><i className="fa-solid fa-chevron-down"></i></span></label> <br/>
      <div className={`flex items-end my-[10px] ml-[5px] w-[80%] text-[1.2rem]`}>
        <input type='number' id='travellerCount' value={travellerCount} className={`h-[40px] outline-none text-[1.8rem] font-semibold bg-transparent`} style={{ width:`${travellerCount == 0 ? '2ch' : travellerCount.length}ch`}} onChange={(e) => setTravellCount(String(e.target.value)) } />
        <span className={`text-[1.4rem] ml-[10px] font-semibold`}>Traveller</span>
      </div>
      <p>Economy</p>
    </div>
}

export default TravellerCount_Class;