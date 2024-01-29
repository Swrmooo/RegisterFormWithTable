import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMobileScreen, faEnvelope, faCakeCandles, faLocationDot, faMarsAndVenus, faHeart} from '@fortawesome/free-solid-svg-icons';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import axios from 'axios';

import InputForm from './element/inputForm';
import InputBirthDay from '../calendar'
import ButtonFunc from '../button'
import Select from '../select'
import InputCheckBox from '../inputcheckbox';
import InputFile from '../inputfile'

export default function RegisterForm() {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState([]);
    const [preview, setPreview] = useState<string | null>(null)
    // const [userInfo, setUserInfo] = useState([]);
    const [startDate, setStartDate] = useState<Date>();
    const [formRegister, setFormRegister] = useState({
        fname: '',
        lname: '',
        address: '',
        email: '',
        date: '',
        avatar:'',
        sex:'',
        interest:[] as any[],
      });

      const [formErrors, setFormErrors] = useState({
        fname: '',
        lname: '',
        address: '',
        email: '',
        date: '',
        avatar:'',
        sex:'',
        interest:[] as any[],
      });

      const onImageChange = (e:any) => {
        if (e.target.files && e.target.files[0]) {
          setPreview(URL.createObjectURL(e.target.files[0]));
        }
       }

      const handleCheckBoxChange = (e:any) => {
        const { checked, value } = e.target;
        setFormRegister((prevData) => {
          if (checked) {
            return {
              ...prevData,
              interest: [...prevData.interest, value],
            };
          } else {
            return {
              ...prevData,
              interest: prevData.interest.filter((interest) => interest !== value),
            };
          }
        });
        
      };
      

      // const handleCheckBoxChange = (interest:any) => {
      //   setFormRegister((prevFormRegister) => ({
      //     ...prevFormRegister,
      //     selectedOptions: [...prevFormRegister.interest, interest],
      //   }));

      //   console.log('interest-----',formRegister.interest)
      // };

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
          default: break;
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
        // const formatTime = moment(date).format('D-MMM-YYYY')
        const formatTime = moment(date).format('YYYY-MM-D')
        setStartDate(date);
        setFormRegister((prevData) => ({
          ...prevData,
          date: formatTime,
        }));
      };
    
      const 
      handleSubmit = (e:any) => {
        e.preventDefault();
        const formData = new FormData();
        // formData.append('id',''); 
        // formData.append('fisrstName', formRegister.fname);
        // formData.append('lastName', formRegister.lname);
        // formData.append('email', formRegister.email);
        // formData.append('address', formRegister.address);
        // formData.append('birthDate', formRegister.date);
        // formData.append('iFileAvatar', 'https://api.pulsednsth.com/_devtest/49c67591-6311-4b1d-9b57-b6681b8954ab.png');


        axios.post('https://api.pulsednsth.com/devtest/create', formData).then((response) => {
          if (response.status === 201) {
            console.log('created successfully:', response.data);
          } else {
            console.error('Failed to create :', response.status, response.data);
          }

        }).catch((error) => {
          console.error('An error occurred:', error);
        });;
        
        console.log('----',formData)
      };

      // console.log('interest-----',formRegister.interest)
      console.log('form' ,formRegister)

  return (
        <form style={{width:'500px', height:'600px'}} className='bg-white shadow-xl shadow-blue-300/100 rounded-3xl'> 
            <div className='flex flex-col items-center justify-between h-full w-full px-16'> 
                <div className='font-semibold text-xl'>
                    Hello! Welcome
                </div>

                <input type="file" onChange={onImageChange} className="filetype" />
                <img alt="preview image" src={preview}/>

                {/* <InputFile
                onChangehandler={onImageChange}
                image={preview}
                /> */}
                  
                <div className='flex'>
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
                </div>

                <InputForm 
                    value={formRegister.email} 
                    formErrors={formErrors.email}
                    onChangehandler={(e) => handleInput(e, 'email')} 
                    icon={faEnvelope} 
                    formType={'email'}
                    className={'flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-10 rounded-3xl'}
                />
                
                <div className='w-full flex justify-between'>
                  <InputBirthDay
                      handleDateChange={handleDateChange}
                      selectedDate={startDate}
                      icon={faCakeCandles}
                      className={'relative flex justify-center items-center shadow-xl shadow-blue-300/30 rounded-3xl w-5/12'}
                  />

                  <Select
                    icon={faMarsAndVenus}
                    onChangehandler={(e) => handleInput(e, 'sex')} 
                    value={formRegister.sex}
                    inputName={'Sex'}
                    className={'flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-5/12 h-10 rounded-3xl'}
                  />
                </div>
                
                <InputForm 
                    value={formRegister.address} 
                    formErrors={formErrors.address}
                    onChangehandler={(e) => handleInput(e, 'address')} 
                    icon={faLocationDot} 
                    formType={'address'}
                    className={'flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-10 rounded-3xl'}
                />
              
              <div className='relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-20 rounded-3xl'>
                <div className='w-full pl-5 text-slate-400'>
                  <FontAwesomeIcon icon={faHeart} style={{marginRight:'5px',color:'grey',fontSize:'13px'}}/>
                  Interesting
                </div>
                <div className='flex justify-around'>
                  <div>
                    <InputCheckBox
                      onChangehandler={handleCheckBoxChange}
                      value={'Sport'} 
                    />
                    <InputCheckBox
                      onChangehandler={handleCheckBoxChange}
                      value={'Health'}
                  />
                  </div>
                  <div>
                    <InputCheckBox
                      onChangehandler={handleCheckBoxChange}
                      value={'Investment'}
                    />
                    <InputCheckBox
                      onChangehandler={handleCheckBoxChange}
                      value={'Pet'}
                    />
                  </div>
                  <div>
                    <InputCheckBox
                      onChangehandler={handleCheckBoxChange}
                      value={'Food'}
                    />
                    <InputCheckBox
                      onChangehandler={handleCheckBoxChange}
                      value={'Fashion'}
                    />
                  </div>
                </div>
              </div>

              {/* button */}
              <div className='w-full flex flex-col items-center'>
                <ButtonFunc
                    text={'submit'}
                    onClick={handleSubmit}
                    buttonType={'text'}
                    cssDiv={'flex justify-center w-3/4 text-white'}
                    cssButton={'bg-gradient-to-r shadow-xl shadow-blue-300/30 from-cyan-200 to-blue-500 h-10 font-semibold w-3/6 rounded-xl text-lg hover:bg-gradient-to-l duration-800 ease-linear'}
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
