const DateInput = ({labeInnerText, labelFor, attributes}) => {
  return <div className={`flex flex-col w-[48.2%] lg:w-auto bg-slate-200 bg-opacity-25 px-[10px] rounded-[15px] py-[15px] justify-between`}>
    <label htmlFor={labelFor}>{labeInnerText} <span className={`ml-[5px]`}><i className="fa-solid fa-chevron-down"></i></span></label>
    <input {...attributes} className={`h-full bg-transparent outline-none`}/>
  </div>
}

export default DateInput;