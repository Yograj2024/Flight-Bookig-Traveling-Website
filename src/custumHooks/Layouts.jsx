import getCountryData from "./getCountryData";

export const Layout_1 = ( { data } ) => {

    const { id, country_name, title, description, 
            img1, img2, img3, img4, rating, 
            city1, city2, city3, city4, price,
            hoverImg, totalDays, from, to, type, guide,
          } = getCountryData (data)
    return (
      <div className={`group h-[650px] grid grid-rows-2 gap-y-[5px] w-[95%] md:w-[48%] my-[30px] m-auto rounded-[20px] before:content-[""] relative before:absolute before:w-full before:bg-opacity- before:rounded-[25px] before:animate-down-out hover:before:animate-up-in before:bottom-0`}>
        <div className={`px-[30px] pt-[30px] pb-[20px] hidden absolute w-full rounded-[25px] group-hover:flex flex-col justify-between group-hover:animate-up-in bottom-0 bg-opaciy-50 bg-center bg-cover`} style = { { backgroundImage : `url(${ hoverImg} )`} }>
          <div className={`flex justify-between text-[2rem] text-yellow-500`}>
              <span> { totalDays } Days </span>
              <span>
                <i className="fa-solid fa-star text-[3rem] text-yellow-500"></i>
                { rating } 
              </span>
          </div>
          <div className={`bg-slate-300 bg-opacity-50 text-white rounded-[30px] pl-[30px] py-[10px] font-semibold text-[2rem]`}>
            <span className={` text-[1.2rem] `}> { `${from.toUpperCase()} - ${to.toUpperCase()}` } </span>
            <h2 className={``}> { country_name } <span> ${ price }/per </span> </h2>
          </div>
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

 export const Layout_2 = ( { data } ) => {

    const { id, country_name, title, description, type, guide,
      img1, img2, img3, img4, city1, city2, city3, city4,
      hoverImg, totalDays,from,to, rating, price  } = getCountryData (data)
    return (
        <div className={`relative group h-[650px] grid grid-rows-2 gap-y-[5px] w-[95%] md:w-[45%] mx-auto my-[30px] rounded-[25px] before:content-[""] before:absolute before:w-full before:bg-blac before:bg-opacity-50 before:rounded-[25px] before:animate-down-out hover:before:animate-up-in before:bottom-0`} style={{gridTemplateRows:"40% 59%"}} key={id} onMouseEnter = { () => {  } } >
            <div className={`px-[30px] pt-[30px] pb-[20px] hidden absolute w-full rounded-[25px] group-hover:flex flex-col justify-between group-hover:animate-up-in bottom-0 bg-opaciy-50 bg-center bg-cover`} style = { { backgroundImage : `url(${ hoverImg} )`} }>
            <div className={`flex justify-between text-[2rem] text-yellow-500`}>
                <span> { totalDays } Days </span>
                <span>
                  <i className="fa-solid fa-star text-[3rem] text-yellow-500"></i>
                  { rating } 
                </span>
            </div>
            <div className={`bg-slate-300 bg-opacity-50 text-white rounded-[30px] pl-[30px] py-[10px] font-semibold text-[2rem]`}>
              <span className={` text-[1.2rem] `}> { `${from.toUpperCase()} - ${to.toUpperCase()}` } </span>
              <h2 className={``}> { country_name } <span> ${ price }/per </span> </h2>
            </div>
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