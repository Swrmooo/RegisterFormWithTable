import React, { useState } from 'react';

interface Props {
  text:string;
  // onClick:(e:any)=>void;
   onClick:any;
  buttonType:any;
  cusDiv?:any;
  cusButton?:any;
  // icon:any;
}

const buttonFunc:React.FC<Props> = ({cusButton,cusDiv,buttonType,onClick,text}) => {

  return (
    // <div className='flex justify-center w-3/4 text-white'>
    <div className={cusDiv}>
      <button type={buttonType}
        onClick={onClick}
        className={cusButton}
        >
          {text}
      </button>          
    </div> 
        
  )
}
export default buttonFunc;

{/* <div className='flex justify-center w-3/4 text-white'>
                  <button type="button"
                  onClick={handleSubmit}
                  className='bg-gradient-to-r shadow-xl shadow-blue-300/30 from-cyan-200 to-blue-500 h-10 
                  font-semibold w-3/6 rounded-xl text-lg hover:bg-gradient-to-l duration-800 ease-linear'  
                  >submit
                  </button>
                  
                </div> */}
