import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import Disclaimer from './sections/Disclaimer';
import Link_Contact from './sections/Link_Contact';
import { updateLength } from '../store/features/localStorage/localStorageSlice';

const Body = () => {

  const [listContainer,setListContainer]=useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const length = useSelector( state => state.localStorage.length);
  
  useEffect( () => {
    length == 0 ? console.log("lenght is 0") : console.log("not empty...")
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


