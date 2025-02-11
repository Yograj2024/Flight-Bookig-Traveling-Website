import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Disclaimer from './Home_Page_Sections/Disclaimer';
import Navbar from "./Navbar";
import Link_Contact from './Home_Page_Sections/Link_Contact';

const Body = () => {

  const [listContainer,setListContainer]=useState(false);

  const location = useLocation();

  useEffect( () => {
    (listContainer == true ) ? (setListContainer(false)) : ("")
    window.scrollTo(0, 0); // Scroll to top
  }, [location]);

  return ( 
  <>
    <header className={`w-full relative z-[5] h-[80px] md:flex md:justify-center bg-white`}>
      <Navbar listContainer={listContainer} setListContainer={setListContainer}/>
    </header>

    <main>
      <Outlet/>
    </main>
       
    <footer className={`bg-[#4C585B]  p-[70px_0px_0px]`}>
      <Disclaimer/>
      <Link_Contact/>
    </footer>
  </> )
};

export default Body;


