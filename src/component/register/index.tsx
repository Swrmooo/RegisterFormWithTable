import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMobileScreen, faEnvelope, faCakeCandles} from '@fortawesome/free-solid-svg-icons';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import axios from 'axios';

import InputForm from './element/inputForm';
import InputBirthDay from '../calendar'
import ButtonFunc from '../button'

export default function RegisterForm() {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState([]);
    const [startDate, setStartDate] = useState<Date>();
    const [formRegister, setFormRegister] = useState({
        fname: '',
        lname: '',
        tel: '',
        email: '',
        date: '',
      });

      const [formErrors, setFormErrors] = useState({
        fname: '',
        lname: '',
        tel: '',
        email: '',
      });

      const handleInput = (e:any, inputType:string) => {
        const { name, value } = e.target;
        setFormRegister((prevData) => ({
          ...prevData,
          [name]: value,
        }));

        let validCheck ;
        let errorMessage = '';
        switch (inputType) {
          case 'text' : validCheck = /^[A-Za-zก-๏]+$/u, 
                      errorMessage = 'You must enter in Thai or English characters only.'; break;
          case 'tel' : validCheck = /^\d+$/, 
                      errorMessage = 'You must enter in Numbers only.'; break;
          case 'email' : validCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
                        errorMessage = 'Please fill in information.'; break;
          default: validCheck = null;
        }
        
        if ((validCheck && validCheck.test(value)) || value === '') {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
          }));
        } else {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
          }));

        }
      };

      const handleDateChange = (date:Date) => {
        const formatTime = moment(date).format('D MMM YYYY')
        setStartDate(date);
        setFormRegister((prevData) => ({
          ...prevData,
          date: formatTime,
        }));
      };
    
      const handleSubmit = (e:any) => {
        e.preventDefault();

        const dataUserInfo = {  
          fisrstName: formRegister.fname,
          lastName: formRegister.lname,
          email: formRegister.email,
          address: formRegister.tel,
          birthDate: formRegister.date,
        };

        axios.post('https://api.pulsednsth.com/devtest/create', dataUserInfo).then((response) => {
          if (response.status === 201) {
            console.log('created successfully:', response.data);
          } else {
            console.error('Failed to create :', response.status, response.data);
          }

        }).catch((error) => {
          console.error('An error occurred:', error);
        });;
      };

  return (
        <form style={{width:'500px', height:'500px'}} className='bg-white shadow-xl shadow-blue-300/100 rounded-3xl'> 
            <div className='flex flex-col items-center justify-between h-full w-full px-16'>
                <div className='font-semibold text-xl'>
                    Hello! Welcome
                </div>

                <InputForm 
                    value={formRegister.fname} 
                    formErrors={formErrors.fname}
                    onChangehandler={(e) => handleInput(e, 'text')} 
                    icon={faUser} 
                    formType={'fname'}
                    className={'flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-10 rounded-3xl'}
                />

                <InputForm 
                    value={formRegister.lname} 
                    formErrors={formErrors.lname}
                    onChangehandler={(e) => handleInput(e, 'text')} 
                    icon={faUser} 
                    formType={'lname'}
                    className={'flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-10 rounded-3xl'}
                />

                <InputForm 
                    value={formRegister.tel} 
                    formErrors={formErrors.tel}
                    onChangehandler={(e) => handleInput(e, 'tel')} 
                    icon={faMobileScreen} 
                    formType={'tel'}
                    className={'flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-10 rounded-3xl'}
                />

                <InputForm 
                    value={formRegister.email} 
                    formErrors={formErrors.email}
                    onChangehandler={(e) => handleInput(e, 'email')} 
                    icon={faEnvelope} 
                    formType={'email'}
                    className={'flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-10 rounded-3xl'}
                />

                <InputBirthDay
                    handleDateChange={handleDateChange}
                    selectedDate={startDate}
                    icon={faCakeCandles}
                    className={'relative flex justify-center items-center shadow-xl shadow-blue-300/30 rounded-3xl'}
                />
              
              {/* button */}
              <div className='w-full flex flex-col items-center'>
                <ButtonFunc
                    text={'submit'}
                    onClick={handleSubmit}
                    buttonType={'text'}
                    cssDiv={'flex justify-center w-3/4 text-white'}
                    cssButton={'bg-gradient-to-r shadow-xl shadow-blue-300/30 from-cyan-200 to-blue-500 h-10 font-semibold w-3/6 rounded-xl text-lg hover:bg-gradient-to-l duration-800 ease-linear'}
                    // icon={}
                />

                <p className='text-blue-500 text-xs font-semibold cursor-pointer py-5 hover:text-gray-800'
                onClick={() => router.push('/')}
                >
                    Already Have Account ?
                </p>
              </div>
            </div> 
          </form>
  )
}
