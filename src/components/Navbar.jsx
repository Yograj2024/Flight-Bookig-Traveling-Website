import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { mobileListContaner, mobileListContaner2 } from "../utils/css";
import { navHeading } from "../utils/data";
import { crossIcon, menuIcon, user } from "../utils/links";

const Navbar = ({listContainer,setListContainer, isLogin, setisLogin}) => {
  
   const cartItems = useSelector( state => state.cart.cartItems);
   const navigate = useNavigate();

  return ( <nav className ={`flex w-full m-auto flex-col items-center bg-[#4f9d9d] bg-opacity-50 backdrop-blur-sm justify-between px-[0px] fixed top-0  transition-all duration-900 ease-in shadow-lg ${(listContainer) ? ("h-350px") : ("h-[80px]")}`}>
    <div className={`flex h-[80px] w-full items-center justify-between max-w-[1440px] px-[10px]`}>
        <div className ={` h-[80px] w-[230px] bg-red-70`} >
            <img src="../../images/logo-10.png" alt=""  className={`h-full w-full object-cover`}/>
        </div>

        <ul className ={`hidden lg:flex lg:flex-wrap lg:items-center lg:text-[1.3rem] font-semibold`} >
            {
                navHeading.map((heading,index)=>{
                    const formattedUrl = heading.toLowerCase().replace(/ /g,"-");
                    
                    return( 
                    <li key={index} className="m-[0_8px] p-[0_10px]">
                        <NavLink to={formattedUrl == "home" ? "/" : `/${formattedUrl}`} 
                                 className={ ({isActive}) =>`
                                 ${isActive ? 
                                   "text-orange-400" :
                                   "text-black" } 
                                    hover:text-orange-500 `}> {heading} </NavLink>
                    </li>)})
            }
            <NavLink to="/cart" className="cart mx-[20px] ">
                <i className="fa-solid fa-cart-shopping relative">
                    <span className={`inline-flex items-center justify-center absolute text-[10px] top-[-13px] p-[3px] bg-red-400 h-[18px] right-[-9px] aspect-square rounded-full `}>{cartItems.length}</span>
                </i>
            </NavLink>

            <div className="flex items-center rounded-[30px]" 
            onClick={ () => isLogin == "Login" ? navigate("/log-in") : " "}>
                <button className="h-full px-2 rounded-[30px] outline-none border-none text-[0.9rem] font-bold tracking-wide flex items-center transition duration-300 ease">{isLogin}</button>
                <span className="inline-block h-[40px] aspect-square rounded-[50%] ">
                    <img src={user} className="w-full h-full object-cover"/>
                </span>
            </div>
        </ul>

        <div className ={`${listContainer ? "scale-[-0.6]" : ""} h-[32px] lg:hidden`}>
            <img src={listContainer ? crossIcon : menuIcon  } 
                 className="h-full w-full object-cover" alt="menu" 
                 onClick={ () => setListContainer(!listContainer)}  />
        </div>
    </div>
    <div className ={`${listContainer ? mobileListContaner2 : mobileListContaner}`}>
        <ul> 
            { navHeading.map( (heading,index ) => {
                const formattedUrl = heading.toLowerCase().replace(/ /g,"-")
                console.log(formattedUrl)
                return (
                    <li className = {`m-[0px_0px_0px_0px]  p-[8px_0px_8px_18px] text-[1.1rem] font-semibold font-mono tracking-[0.02rem] 
                        ${(index==navHeading.length-1) ? 
                        ("border-none") : 
                        ("border-b border-b-red-400")}`} 
                        key={"mobileList"+index}>
                            <NavLink to={`/${formattedUrl == 'home' ? '' : formattedUrl}`}>{heading}</NavLink>
                    </li>
                )
            }
            )} 
        </ul>
    </div>
</nav> ) };

export default Navbar;  