import airportInfo from '../../utils/airPortInfo'

const SuggestionBox = (props) => {
    const {
        position,
        amIvisible,
        setAmIvisible,
        setInputval
    } = props
    return <div className={`text-black h-[360px] w-[350px] bg-slate-100 absolute top-[2.5rem] ${position} ${amIvisible ? "block" : "hidden"} z-[2] overflow-y-scroll`} 
         onClick={(e) => { setAmIvisible(!amIvisible) }}>
        {
            airportInfo.map( ( item ) => {
                return (
                    <div className={`airportCity flex justify-between mt-[20px] hover:bg-slate-200 px-[20px] py-[8px]`} 
                    data-city = {item.location.city}>
                        <div className={`flex items-start gap-x-[20px]`}>
                            <i className="fa-solid fa-plane-departure pt-[10px]"></i>
                            <div>
                            <h2 className={`font-semibold`}>{item.location.city}</h2>
                            <p className={`text-[0.8rem]`}>{item.airportInfo.name}</p>
                            </div>
                        </div>
                        <p className={`font-semibold`}>{item.airportInfo.iataCode} </p>
                    </div>
                )
            })
        }
    </div>
}

export default SuggestionBox;