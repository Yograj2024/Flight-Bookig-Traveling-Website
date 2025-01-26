import React from 'react';

const Tailwind = () => {
  return (
    <>
      <div className={`h-[700px] flex items-center justify-center w-full`}>
       <div className={`flex gap-x-8`}>
        <div  className={`bg-[url("https://thumbs.dreamstime.com/z/sagrada-familia-barcelona-spain-cathedral-83163693.jpg?ct=jpeg")] h-80 w-80 bg-cover`}></div>
        <div className={`bg-[url("https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT-TAoKD2wHcNr0L9MRd4GP1afDxoJfmJw6qQp2vkftnasK_zLJt_QfYUcNOlD__Lzs2uezIRoQXoQzzOvd")] h-40 w-40 bg-cover `}></div>
       </div>
      </div>
    </>
  );
};

export default Tailwind;