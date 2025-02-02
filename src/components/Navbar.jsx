import { NavLink } from "react-router-dom";
import { mobileListContaner, mobileListContaner2 } from "../utils/css";
import { navHeading } from "../utils/data";
import { crossIcon, menuIcon } from "../utils/links";

const Navbar = ({listContainer,setListContainer}) => {

  return ( <nav className ={`flex w-full flex-col items-center bg-white justify-between px-[0px] fixed top-0  transition-all duration-900 ease-in ${(listContainer) ? ("h-350px") : ("h-[80px]")}`}>
    <div className={`flex h-[80px] w-full items-center justify-between max-w-[1440px] px-[10px]`}>
        <div className ={` h-[40px] w-[200px] bg-red-700`} ></div>

        <ul className ={`hidden lg:flex lg:text-[1.3rem] font-semibold`} >
            {
                navHeading.map((heading,index)=>{
                    return( 
                    <li key={index} className="m-[0_8px] p-[0_10px]">
                        <NavLink to={`/${heading} `} 
                                 className={ ({isActive}) =>`
                                 ${isActive ? 
                                   "text-orange-400" :
                                   "text-black" } 
                                    hover:text-orange-500 `}> {heading} </NavLink>
                    </li>)})
            }
        </ul>

        <div className ={`${listContainer ? "scale-[-0.6]" : ""} h-[32px] lg:hidden`}>
            <img src={listContainer ? crossIcon : menuIcon  } 
                 className="h-full w-full object-cover" alt="menu" 
                 onClick={ () => setListContainer(!listContainer)}  />
        </div>
    </div>
    <div className ={`${listContainer ? mobileListContaner2 : mobileListContaner}`}>
        <ul> 
            { navHeading.map( 
                    (heading,index ) => <li className = {`m-[0px_0px_0px_0px]  p-[8px_0px_8px_18px] text-[1.1rem] font-semibold font-mono tracking-[0.02rem] 
                    ${(index==navHeading.length-1) ? 
                    ("border-none") : 
                    ("border-b border-b-red-400")}`} 
                    key={"mobileList"+index}><NavLink to={`/${heading}`}>{heading}</NavLink></li>
            )} 
        </ul>
    </div>
</nav> ) };

export default Navbar;

