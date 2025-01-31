import React from 'react';
import {useState} from "react"

const Slider = () => {
  const [ move, setMove ] = useState ( 0 );

  /*
    function next () {
      setMove( prevMove => prevMove == 1350 ? 0 : prevMove + 450 );
    }

    function pre () {
      setMove( prevMove => prevMove != 0 ? prevMove - 450 : 0 );
    }
  */

  function updateSlide ( isNext ) {
    setMove ( prevMove => isNext ? prevMove == 3000 ? 0 : prevMove + 150 : prevMove != 0 ? prevMove - 150 : 0  )
  }

  const slides = [ 
    { id:1},
    { id:2},
    { id:3},
    { id:4},
    { id:5},
    { id:6},
    { id:7},
    { id:8},
    { id:9},
    { id:10},
    { id:11},
    { id:12},
    { id:13},
    { id:14},
    { id:15},
    { id:16},
    { id:17},
    { id:18},
    { id:19},
    { id:20},
    { id:21},
    { id:22},
    { id:23},
    { id:24},
    { id:25},
  ]

  return (
    <>
      <div className={`h-[300px] flex items-center w-[95%] m-auto overflow-hidden relative bg-slate-200`}>
        {
          slides.map( (item, index) => {

            return <div className={`h-[200px] w-[315px] flex-shrink-0 bg-red-500 m-[80px] transition-all ease duration-[1500ms] flex items-center justify-center text-[3rem] font-bold  `} key = { item.id + index} style={{transform:`translateX(-${move}%)`}} > { item.id } </div>   
          })
        }
        <button className={`absolute bg-yellow-200 p-[12px] rounded-[20px] right-0`} onClick = { () => updateSlide ( true )  } > aage </button>
        <button className={`absolute bg-yellow-200 p-[12px] rounded-[20px] `} onClick = { () => updateSlide ( false ) }> pichhe </button>
      </div>
    </>
  );
};

export default Slider;