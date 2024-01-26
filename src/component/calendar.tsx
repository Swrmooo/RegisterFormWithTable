import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCakeCandles} from '@fortawesome/free-solid-svg-icons';

interface Props {
    handleDateChange:(e:any)=>void;
    selectedDate:any;
    icon:any;
    className:any;
}

const InputBirthDay:React.FC<Props> = ({handleDateChange,selectedDate,icon,className}) => {

    return (
        <div className={className}>
            <FontAwesomeIcon icon={icon} style={{zIndex:'1', position:'absolute', top:'12px', left:'20px', color:'grey', fontSize:'15px'}}/>
                <DatePicker
                  className='text-center rounded-3xl h-10 '
                  selected={selectedDate}
                  closeOnScroll={true}
                  onChange={handleDateChange}
                  disabledKeyboardNavigation
                  placeholderText="Birthday"
                  withPortal
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  />
        </div>
    )
}
export default InputBirthDay;