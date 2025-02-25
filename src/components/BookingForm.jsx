import React, { useState } from 'react';
import { swapIcon } from '../utils/links';
import RadioInput from './formComponents/RadioInput'
import DateInput from './formComponents/DateInput'
import PlaceInput from './formComponents/PlaceInput'
import TravellerCount_Class from './formComponents/TravellerCount'
import SuggestionBox from './formComponents/SuggestionBox';

const BookingForm = () => {

  const radioBtn = [
      {value:'oneway', id:'oneway', text:'one Way'},
      {value:'return', id:'return', text:'Round Trip'}
  ];

  const [originVal, setOriginVal] = useState('Delhi');
  const [departureVal, setDepartureval] = useState('Mumbai');
  const [amIvisibleOrigin, setAmIvisibleOrigin] = useState(false)
  const [amIvisibleDeparture, setAmIvisibleDeparture] = useState(false)
  const [startDate, setStartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState();

  return (
  <div className={`lg:bg-slate-100 lg:bg-opacity-15 lg:px-[30px] rounded-[25px] py-[25px]`}>
    <form action="">
        <ul className='flex gap-x-[25px] '>
            { radioBtn.map( trip => <RadioInput attributes={{type:'radio', name:'tripType', value:trip.value, id:trip.id}} 
              label={trip.id} innerText={trip.text}/> ) }
        </ul>
        <div className={`flex flex-wrap lg:flex-nowrap lg:flex-row gap-y-[10px] gap-x-[10px] mt-[20px]`}>
          <div className={`relative flex flex-col lg:max-w-[50%] flex-auto lg:flex-none lg:flex-row lg:items-center px-[20px] py-[10px] rounded-[15px] bg-slate-200 bg-opacity-25`}>
            <PlaceInput 
              amIvisible={amIvisibleOrigin}  
              setAmIvisible={setAmIvisibleOrigin}
              setInputVal={setOriginVal}
              attributes={{type:'text', id:'departure', value:originVal }}
              labelFor={'departure'} 
              labeInnerText={'From'} 
              airPort={'Indira Gandhi international Airport...'}/>
            <SuggestionBox 
              position={'left-[0rem]'}
              amIvisible={amIvisibleOrigin} 
              setAmIvisible={setAmIvisibleOrigin}/>
            <div className={`h-[60px] flex justify-end  lg:h-[50px] mr-[25px] ml-[10px]`}>
              <img src={swapIcon} alt="Swap locations icon" 
              className={`h-full aspect-square lg:w-full rotate-90 lg:rotate-0 object-cover`} />
            </div>
            <PlaceInput 
              amIvisible={amIvisibleDeparture}  
              setAmIvisible={setAmIvisibleDeparture}
              setInputVal={setDepartureval}
              attributes={{type:'text', id:'destination', value:departureVal}}
              labelFor={'destination'} 
              labeInnerText={'To'} 
              airPort={'Indira Gandhi international Airport...'}/>
            <SuggestionBox 
              position={'right-[0rem]'}
              amIvisible={amIvisibleDeparture} 
              setAmIvisible={setAmIvisibleDeparture}/>
          </div>
          <DateInput 
            attributes={{type:'date', id:'departureDate'}} 
            labelFor={'departureDate'} 
            labeInnerText={'Departure'}/>
          <DateInput
           attributes={{type:'date', id:'returnDate'}} 
           labelFor={'returnDate'} 
           labeInnerText={'Return'}/>
          <TravellerCount_Class/>
        </div>
    </form>  
  </div>
)};
export default BookingForm;