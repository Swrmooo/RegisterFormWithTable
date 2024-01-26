import React from 'react'

interface Props {
    className?:any;
    // onChangehandler:(e:any)=>void;
}


const multipleChoice:React.FC<Props> = ({className}) => {

    const cssTailwind = 'flex flex-col  w-full h-4/6 border-2 border-green-500';

  return (
    <div className={'border-2 w-full h-full flex items-center justify-center'}>
        <div className={cssTailwind}>
            <input type="checkbox" name="cb1" id="cb1" />
            <input type="checkbox" name="cb2" id="cb2" />
        </div>
        <div className={cssTailwind}>
            <input type="checkbox" name="cb3" id="cb3" />
            <input type="checkbox" name="cb4" id="cb4" />
        </div>
        <div className={cssTailwind}>
            <input type="checkbox" name="cb5" id="cb5" />
            <input type="checkbox" name="cb6" id="cb6" />
        </div>
    </div>
  )
}
export default multipleChoice