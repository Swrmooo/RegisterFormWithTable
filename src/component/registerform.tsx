import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMobileScreen, faEnvelope, faCakeCandles} from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

export default function registerform() {
    const router = useRouter();
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
          // setFormRegister((prevData) => ({
          //   ...prevData,
          //   [name]: value,
          //   // date: isoDateString,
          // }));
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
        const storedData = JSON.parse(localStorage.getItem('Info') || '[]');
        storedData.push(formRegister);
        localStorage.setItem('Info', JSON.stringify(storedData));

        router.push('/');
        console.log("success", formRegister)
      };
      // console.log(moment(startDate).format('D MMM YYYY'))

  return (
        <form style={{width:'500px'}} className='bg-white shadow-xl shadow-blue-300/100 rounded-3xl'> 
            <div className='flex flex-col items-center justify-between h-full w-full px-16'>
              <div className='font-semibold text-xl'>
                Hello! Welcome
              </div>

              <div className='flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-10 rounded-3xl'>
                <FontAwesomeIcon icon={faUser} style={{position:'absolute', left:'20px', color:'grey', fontSize:'15px'}}/>
                <input type="text" id="fname" name="fname" 
                  className='w-full h-full rounded-3xl pl-10'
                  onChange={(e) => handleInput(e, 'text')}
                  placeholder='Firstname'
                  maxLength={20}
                  title="Please enter only letters"
                  value={formRegister.fname}
                  required
                />
                {formErrors.fname && 
                  <p style={{top:'45px'}} className="text-red-500 absolute">
                    {formErrors.fname}
                  </p>
                }
              </div>
              
              <div className='flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-10 rounded-3xl'>
                <FontAwesomeIcon icon={faUser} style={{position:'absolute', left:'20px', color:'grey', fontSize:'15px'}}/>
                <input type="text" id="lname" name="lname" 
                  className='w-full h-full rounded-3xl pl-10'
                  onChange={(e) => handleInput(e, 'text')}
                  placeholder='Lastname'
                  maxLength={20}
                  title="Please enter only letters"
                  value={formRegister.lname}
                  required
                />
                {formErrors.lname && 
                  <p style={{top:'45px'}} className="text-red-500 absolute">
                    {formErrors.lname}
                  </p>
                }
              </div>

              <div className='flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-10 rounded-3xl'>
                <FontAwesomeIcon icon={faMobileScreen} style={{position:'absolute', left:'20px', color:'grey', fontSize:'15px'}}/>
                <input type="text" id="tel" name="tel" 
                  className='w-full h-full rounded-3xl pl-10'
                  onChange={(e) => handleInput(e, 'tel')}
                  placeholder='Telephone Number'
                  maxLength={10}
                  title="Please enter only numbers"
                  value={formRegister.tel}
                  required
                />
                {formErrors.tel && 
                  <p style={{top:'45px', left:'15px'}} className="text-red-500 absolute">
                    {formErrors.tel}
                  </p>
                }
              </div>

              <div className='flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-10 rounded-3xl'>
                <FontAwesomeIcon icon={faEnvelope} style={{position:'absolute', left:'20px', color:'grey', fontSize:'15px'}}/>
                <input type="email" id="email" name="email" 
                  className='w-full h-full rounded-3xl pl-10'
                  onChange={(e) => handleInput(e, 'email')}
                  maxLength={30}
                  placeholder='E-Mail'
                  value={formRegister.email}
                  required
                />
                {formErrors.email && 
                  <p  style={{top:'45px', left:'15px'}} className="text-red-500 absolute">
                    {formErrors.email}
                  </p>
                }
              </div>
              
              <div className='relative flex justify-center items-center shadow-xl shadow-blue-300/30 rounded-3xl'>
                <FontAwesomeIcon icon={faCakeCandles} style={{zIndex:'1', position:'absolute', top:'12px', left:'20px', color:'grey', fontSize:'15px'}}/>
                  <DatePicker
                  className='text-center rounded-3xl h-10 '
                  selected={startDate}
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
              
              {/* button */}
              <div className='w-full flex flex-col items-center'>
                <div className='flex justify-center w-3/4 text-white'>
                  <button type="button"
                  onClick={handleSubmit}
                  className='bg-gradient-to-r shadow-xl shadow-blue-300/30 from-cyan-200 to-blue-500 h-10 
                  font-semibold w-3/6 rounded-xl text-lg hover:bg-gradient-to-l duration-800 ease-linear'  
                  >submit
                  </button>
                  
                </div>
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
