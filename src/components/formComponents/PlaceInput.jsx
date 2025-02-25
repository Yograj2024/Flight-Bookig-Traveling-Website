const PlaceInput = (props) => {

    const {
        attributes,
        labelFor,
        labeInnerText,
        airPort,
        amIvisible,
        setAmIvisible
    } = props
    return <div className={`flex flex-col`} onClick={ () => setAmIvisible(!amIvisible)}>
        <label htmlFor={labelFor}>{labeInnerText}</label>
        <input {...attributes} className={`h-[45px] w-[180px] text-[1.5rem] outline-none bg-transparent`}/>
        <p>{airPort}</p>
    </div>
};

export default PlaceInput;