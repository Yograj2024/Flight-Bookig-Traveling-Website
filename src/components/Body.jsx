import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import Disclaimer from './sections/Disclaimer';
import Link_Contact from './sections/Link_Contact';
import Calender from './Calandar';
import ApiFetchData from './ApiFetchData';

const Body = () => {
  const [listContainer,setListContainer]=useState(false);
  const [isLogin,setisLogin]=useState("Login");
  const location = useLocation();
  const length = useSelector( state => state.localStorage.length);

  useEffect( () => {
    length == 0 ? setisLogin("Login") : setisLogin("")
    listContainer == true  ? setListContainer(false) : "";

    if (location.hash) {
      const section = document.getElementById(location.hash.substring(1)); // Remove the '#' to get the section ID
      if (section) {
       section.scrollIntoView(0, 50)
      }
    } else {
      window.scrollTo(0, 0);
    }
  },[location]);

  return ( 
  <>
    <header className = {`w-full relative z-[5] h-[80px] md:flex md:justify-center bg-white`}>
      <Navbar 
      listContainer = { listContainer } 
      setListContainer = { setListContainer }
      isLogin = { isLogin } 
      setisLogin = { setisLogin } />
    </header>

    <main>
      <Outlet/>
    </main>
       
    <footer className={`bg-[#4C585B]  p-[70px_0px_0px]`}>
      <Disclaimer/>
      <Link_Contact/>
    </footer>

    <ApiFetchData/>
  </> )
};

export default Body;


