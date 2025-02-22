import React from 'react';

const NewCalander = () => {
  return (
    <>
      <div className={`bg-red-300 h-[30rem] w-[70%] mx-auto mt-[5rem]`}>
            <input type="text" className={`h-[3rem] w-[15rem] mt-[2rem] mx-auto`} />

            <div className={`h-[70%] w-[70%] bg-yellow-300 mx-auto`}>
                <div className={`grid grid-cols-7 place-items-center`}>
                    <span>MON</span> <span>TUE</span> <span>WED</span> <span>THU</span> <span>FRI</span> <span>STA</span> <span>SUN</span>
                </div>
            </div>
      </div>
    </>
  );
};

export default NewCalander;