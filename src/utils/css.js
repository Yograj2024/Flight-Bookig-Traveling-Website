import { contact } from "./data";

export const nav=`
flex w-full flex-col
items-center bg-white
justify-between px-[0px]
fixed top-0  transition-all
duration-900 ease-in`;

export const navList=`
hidden lg:block lg:flex lg:text-[1.3rem]
font-semibold`;

export const navLogo=`
h-[40px] w-[200px] bg-red-700`;

export const menuIconcss=`
h-[32px] w-[32px]
lg:hidden`;

export const mobileListContaner = `
w-[90%] m-auto pb-[0px]
h-0 opacity-0 visibility-hidden
overflow-hidden  transition-all
duration-900 ease-in
`;

export const mobileListContaner2 = `
w-full m-[5 px_auto] p-[0px_10px]
block  opacity-100 bg-white
visibility-visible transition-all
duration-900 ease-in
z-[5] `;

export const mobileList=`
m-[0px_0px_0px_0px] 
p-[8px_0px_8px_18px]
text-[1.1rem] font-semibold
font-mono tracking-[0.02rem]`;

/* navbar css end */

/* hero section css start */

export const heroSection=`
relative h-[700px] flex m-[0px_0px_0px]
before:content-[''] flex-col md:w-full
before:h-full before:w-full 
before:bg-[url('https://images.unsplash.com/photo-1601225612316-b4733315a717?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
before:bg-no-repeat before:bg-cover before:bg-[0%_20%]
before:absolute before:z-[-1] bg-black bg-opacity-40`;

export const heroSectionH1=`
flex items-center text-[1.5rem] md:text-[2.5rem]
justify-center mt-[18px]
text-transparent bg-clip-text 
bg-gradient-to-r from-red-500 
via-orange-500 to-pink-500 
font-bold tracking-[0.05rem] `;

export const formContainer=`
relative before:content-[' '] before:h-full
before:w-full before:absolute w-[95%] h-[75%]
before:bg-slate-400 before:bg-opacity-25
 m-[30px_auto_0px] before:rounded-[20px] 
items-center`;

export const bookingForm=`
flex flex-col relative
text-[0.9rem] w-full
gap-y-[30px] pt-[30px] `;

export const placeInput=`
flex flex-col w-[90%] m-auto
gap-[5px] text-white`;

export const formInput=`
flex flex-col w-[90%] m-auto
gap-[5px] text-white`;

export  const up_down=`
w-[80%] m-[0px_auto_10px] relative md:w-[0%]
before:content-[''] md:before:bg-white md:before:rounded-[50%]
before:bg-[url('https://cdn-icons-png.flaticon.com/512/12221/12221004.png')] 
before:bg-center before:bg-cover md:before:border-8 
md:before:border-white before:absolute md:before:p-[18px]
before:h-[35px] before:w-[35px] before:right-0 md:before:rotate-[90deg]
md:before:h-[30px] md:before:w-[30px]`;

export const inputField=`
h-[50px] W-[20px] rounded-[8px] outline-none p-2
bg-transparent border `;

export const dateContainer=`
flex w-[90%] m-auto gap-[10px]`;

export const dateInput=`
h-[40px] w-[100%] p-2 rounded-[8px]
outline-none bg-transparent border`;

export const formBtn=`
h-[2.8rem] w-[10rem]
text-black text-[1.2rem] 
bg-gradient-to-br
from-green-400
to-blue-600
hover:bg-gradient-to-bl
focus:ring-2
focus:outline-none
focus:ring-blue-200
font-medium m-auto
rounded-[30px]
flex items-center justify-center`;

/* Hero section end  */



/* experience sectino  */
export const experience=`
w-[98%] m-[50px_auto] flex relative
flex-col items-end justify-end rounded-[18px]`;

export const experienceRight=`
relative hidden md:block md:w-[43%] lg:w-[40%]
before:content-[''] before:h-full before:w-full
before:bg-[url('https://plus.unsplash.com/premium_photo-1661935781384-b27f5faa9197?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
before:bg-center before:bg-cover
before:absolute before:z-[-1]`;

/* About sectino */
export const aboutDiv=`
w-[95%] rounded-[30px] flex flex-col 
items-center justify-center md:bg-opacity-0
gap-y-[10px] bg-gray-200 md:flex-row
text-center md:text-start bg-opacity-30 md:justify-start
m-[10px_auto] p-[25px_0px_30px]
md:py-[10px]`;


export const iconCss=`
h-[60px] aspect-square m-[0px_0_20px] 
bg-gray-300 p-[15px] flex items-center 
justify-center bg-opacity-40
rounded-[50%] md:m-[0_20px_0_10px]`;

export const h6=`
text-[1.12rem] font-bold text-green-600 bg-slate-200
text-center  max-w-[300px] m-auto 
rounded-[10px] tracking-[0.05rem]`;

export const h1=`
w-[90%] m-[0_auto] text-[1.7rem] text-center
font-semibold`;

export const h1span=`
text-orange-500`;

/* package sectino */
export const packageDiv=`
h-[365px] w-[90%] lg:w-[300px] lg:h-[400px] lg:flex-shrink-0 relative m-[30px_auto_0] rounded-[20px] bg-cover
bg-center before:content-[''] before:h-full before:w-full before:absolute 
before:z-[1] before:rounded-[20px]
before:bg-black before:bg-opacity-30`;

/* Wispydeals section */
export const wispydealsCss=`
w-full relative before:content-[''] m-[30px_0]
before:absolute before:h-full before:w-full
before:bg-[url('https://images.unsplash.com/photo-1570420118092-5b96e28ff4cb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
before:bg-cover before:bg-center before:z-[-1]`;

export const packageBtn=`
text-gray-900 bg-gradient-to-r 
from-teal-200 to-lime-200 hover:bg-gradient-to-l 
hover:from-teal-200 hover:to-lime-200 focus:ring-4 
focus:outline-none focus:ring-lime-200 d
ark:focus:ring-teal-700 font-medium rounded-[18px] md:rounded-[16px]
text-sm px-[18px] md:px-[12px] py-[8px] md:py-[6px] text-center  z-[2]`;

export const destinetionBtn=`
text-white bg-gradient-to-r 
from-purple-500 to-pink-500 
hover:bg-gradient-to-l focus:ring-4 
focus:outline-none focus:ring-purple-200 
dark:focus:ring-purple-800 font-medium 
rounded-[18px] text-sm px-[18px] md:px-[14px] py-[8px]
md:py-[6px] text-center`;