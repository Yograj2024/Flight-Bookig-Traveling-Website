const RadioInput = ({attributes, label, innerText}) => {
    return <li className={`bg-slate-200 bg-opacity-25 flex items-center justify-center gap-x-[10px] rounded-[20px] px-[10px] py-[5px]`}>
        <input {...attributes} className={`h-[18px] aspect-square`}/>
        <label htmlFor={label} className="font-semibold text-[0.9rem]"> {innerText} </label>
    </li>
}

export default RadioInput;