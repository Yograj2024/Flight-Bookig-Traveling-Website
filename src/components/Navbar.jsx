import { NavLink } from "react-router-dom";
import { menuIconcss, mobileList, mobileListContaner, mobileListContaner2, nav, navList, navLogo } from "../utils/css";
import { navHeading } from "../utils/data";
import { crossIcon, menuIcon } from "../utils/links";

const Navbar = ({listContainer,setListContainer}) => {

  return ( <nav className ={`${nav} ${(listContainer) ? ("h-350px") : ("h-[80px]")}`}>
    <div className={`flex h-[80px] w-full items-center justify-between max-w-[1440px] px-[10px]`}>
        <div className ={`${navLogo} `} ></div>

        <ul className ={`${navList}`} >
            {
                navHeading.map((heading,index)=>{
                    return( 
                    <li key={index} className="m-[0_8px] p-[0_10px]">
                        <NavLink to={`/${heading}`} 
                                 className={ ({isActive}) =>`
                                 ${isActive ? 
                                   "text-orange-400" :
                                   "text-black" } 
                                    hover:text-orange-500 `}> {heading} </NavLink>
                    </li>)})
            }
            <li> <NavLink to={"/tailwind"}>Tailwind</NavLink> </li>
        </ul>

        <div className ={`${menuIconcss} ${listContainer ? "scale-[-0.6]" : ""}`}>
            <img src={listContainer ? crossIcon : menuIcon  } 
                 className="h-full w-full object-cover" alt="menu" 
                 onClick={ () => setListContainer(!listContainer)}  />
        </div>
    </div>
    <div className ={`${listContainer ? mobileListContaner2 : mobileListContaner}`}>
        <ul> 
            { navHeading.map( 
                    (heading,index ) => <li className = {`${mobileList} 
                    ${(index==navHeading.length-1) ? 
                    ("border-none") : 
                    ("border-b border-b-red-400")}`} 
                    key={"mobileList"+index}><NavLink to={`/${heading}`}>{heading}</NavLink></li>
            )} 
        </ul>
    </div>
</nav> ) };

export default Navbar;

