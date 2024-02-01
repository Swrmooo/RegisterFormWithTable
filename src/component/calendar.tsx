import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCakeCandles} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

interface Props {
    handleDateChange:(e:any)=>void;
    selectedDate:any;
    icon:any;
    className:any;
    value?:any;
}

const InputBirthDay:React.FC<Props>
 = ({handleDateChange,selectedDate,icon,className,value}) => {
    let placeholderText = '';
    if(value != ''){
        placeholderText = moment(value).format('DD/MM/yyyy')
    } else {
        placeholderText = value ;
    }

    return (
        <div className={className}>
            <FontAwesomeIcon icon={icon} style={{zIndex:'1', position:'absolute', top:'12px', left:'20px', color:'grey', fontSize:'15px'}}/>
                <DatePicker 
                  className='text-center rounded-3xl h-10 '
                  selected={selectedDate}
                  value={placeholderText}
                  dateFormat={"dd/MM/yyyy"}
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