import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import Disclaimer from './sections/Disclaimer';
import Link_Contact from './sections/Link_Contact';

const Body = () => {

  const [listContainer,setListContainer]=useState(false);
  const location = useLocation();

  useEffect( () => {
    listContainer == true  ? setListContainer(false) : "";
    window.scrollTo(0,0);
  },[location]);

  return ( 
  <>
    <header className = {`w-full relative z-[5] h-[80px] md:flex md:justify-center bg-white`}>
      <Navbar listContainer = { listContainer } setListContainer = { setListContainer }/>
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


