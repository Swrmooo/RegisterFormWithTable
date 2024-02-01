
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    onChangehandler:(e:any)=>void;
    className?:any;
    selected?:any;
    value:any;
}

const InputCheckBox:React.FC<Props> = ({className,onChangehandler,value,selected}) => {

  return (
    <div className={className}>
        <input className='mr-1' type="checkbox" name="cb1" id="cb1" value={value}
        onChange={onChangehandler} checked={selected.includes(value)}
        />
        <label className='text-sm' htmlFor="cb1">{value}</label>
    </div>
  )
}
export default InputCheckBox