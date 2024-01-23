import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCakeCandles} from '@fortawesome/free-solid-svg-icons';


const inter = Inter({ subsets: ['latin'] })

export default function RegisterForm() {
    const router = useRouter();
    const [startDate, setStartDate] = useState(null);

    // const handleDate = (selectd:any) => {
    //     const dataToSave = {
    //       date: selectd.toISOString(),
    //     };

    //     const existingData = JSON.parse(localStorage.getItem('Info') || '[]');

    //     existingData.push(dataToSave);
    //     localStorage.setItem('Info', JSON.stringify(existingData));
    //   };
      

    return (
        <div>
            <FontAwesomeIcon icon={faCakeCandles} style={{zIndex:'1', position:'absolute', top:'20px', left:'20px', color:'grey', fontSize:'15px'}}/>

            <DatePicker
            className=' text-center flex justify-center items-center'
            selected={startDate}
            closeOnScroll={true}
            onChange={(date:any) => setStartDate(date)}
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