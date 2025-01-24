const contactList = (heading,value,key)=> {
    return (
            <div className={`flex gap-x-[30px] m-[20px_0px]`} key={key}>
                <i className={`${value[2]} h-[40px] aspect-square flex items-center justify-center bg-slate-800 rounded-[50%] p-[10px] text-[18px] text-green-800`}></i> 
                <div>
                    <h6 className={`text-slate-400 flex items-center gap-x-[20px] font-semibold`}> { heading[1] } </h6>
                    <h5 className={`text-slate-300 font-medium`}
                        dangerouslySetInnerHTML={{ __html: value[1] }} />
                </div>
            </div>
    )
} ;

export default contactList;

/*  dangerouslySetInnerHTML={{ __html: value }}: Yeh prop ko use karte waqt, 
aapke value ko HTML ke roop mein render karenge. 
Isse <br/> tag ya koi bhi HTML content jo value mein hai, wo render hoga.

eske use se aap aapne string me </br> tag likh kar line break kar sakte hai 
*/

