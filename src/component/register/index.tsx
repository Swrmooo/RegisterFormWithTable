import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMobileScreen, faEnvelope, faCakeCandles, faLocationDot, faMarsAndVenus, faHeart} from '@fortawesome/free-solid-svg-icons';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import axios from 'axios';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

import InputForm from './element/inputForm';
import InputBirthDay from '../calendar'
import ButtonFunc from '../button'
import Select from '../select'
import InputCheckBox from '../inputcheckbox';
import InputFile from '../inputfile'

interface Props {
  data?:any;
  onSubmit?:any;
}

const RegisterForm:React.FC<Props> = ({data,onSubmit}) => {
// export default function RegisterForm ()  {
    const router = useRouter();
    const [statusSubmit, setStatusSubmit] = useState('create');
    const [previewImage, setPreviewImage] = useState<string>()
    const [startDate, setStartDate] = useState<Date>();
    const [formRegister, setFormRegister] = useState({
        id: '',
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
        id: '',
        fname: '',
        lname: '',
        address: '',
        email: '',
        date: '',
        avatar:'',
        sex:'',
        interest:[] as any[],
      });

      useEffect(() => {
        const { query } = router;
          if(data){
            setFormRegister({
              id: data?.id as string,
              fname: data?.fisrstName as string,
              lname: data?.lastName as string,
              address: data?.address as string,
              email: data?.email as string,
              date: moment(data?.birthDate).format('YYYY-MM-DD') as string,
              avatar: data?.avatar as string,
              sex: data?.sex as string,
              interest: data?.interest,
            });
            setPreviewImage(data?.avatar) 
            if (onSubmit) {
              setStatusSubmit(onSubmit); 
            }
          }
      }, [router.query]);
      
      const handleImageChange = (value: string) => {
        setFormRegister((prevData) => ({
          ...prevData,
          avatar: value,
        }));
      }

      const handleCheckBoxChange = (e:any) => {
        const { checked, value } = e.target;
        setFormRegister((prevData) => {
          if (checked) {
            return {
              ...prevData,
              interest: [...prevData?.interest, value],
            };
          } else {
            return {
              ...prevData,
              interest: prevData.interest.filter((interest:any) => interest !== value),
            };
          }
        });  
      };

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
        console.log(date)
        const formatTime = moment(date).format('YYYY-M-D')
        setStartDate(date);
        setFormRegister((prevData) => ({
          ...prevData,
          date: formatTime,
        }));
      };
    
      const handleSubmit = (e:any) => {
        const confirmStatus = statusSubmit;
        console.log('confirmStatus',confirmStatus)
        e.preventDefault();
        const formData = new FormData();
        formData.append('id',formRegister.id); 
        formData.append('fisrstName', formRegister.fname);
        formData.append('lastName', formRegister.lname);
        formData.append('email', formRegister.email);
        formData.append('address', formRegister.address);
        formData.append('birthDate', formRegister.date);
        formData.append('iFileAvatar', formRegister.avatar);
        formData.append('sex', formRegister.sex);
        formRegister.interest.forEach((interest, index) => {
          formData.append(`interest[${index}]`, interest);
        });

        if(confirmStatus === 'create'){
          axios.post('https://api.pulsednsth.com/devtest/create', formData).then((response) => {
            if (response.status === 200) {
              console.log('created successfully:', response.data);
              Swal.fire({
                title: "Create Successfully:!",
                icon: "success"
              }).then(() => {
                window.location.href = '/';
              });
            } else {
              console.error('Failed to create :', response.status, response.data);
              Swal.fire({
                title: "Failed to create!",
                icon: "warning"
              }).then(() => {
                window.location.href = '/';
              });;
            }

          }).catch((error) => {
            console.error('An error occurred:', error);
          });;
        } else if (confirmStatus === 'edit'){
          axios.post('https://api.pulsednsth.com/devtest/update', formData).then((response) => {
            if (response.status === 200) {
              console.log('Edited successfully:', response.data);
              Swal.fire({
                title: "Edited successfully:!",
                icon: "success"
              }).then(() => {
                window.location.href = '/';
              });;
            } else {
              console.error('Failed to edit :', response.status, response.data);
              Swal.fire({
                title: "Failed to edit!",
                icon: "warning"
              }).then(() => {
                window.location.href = '/';
              });;
            }

          }).catch((error) => {
            console.error('An error occurred:', error);
          });;
        }
      };
      console.log(formRegister)

  return (
        <form style={{width:'500px', height:'650px'}} className='bg-white shadow-xl shadow-blue-300/100 rounded-3xl'> 
            <div className='flex flex-col items-center justify-between h-full w-full px-16'> 
                <div className='font-semibold text-xl'>
                    Hello! Welcome
                </div>
                
                <InputFile
                onChangehandler={handleImageChange}
                previewImage={previewImage}
                />
                  
                <div className='flex'>
                {/* {console.log(RegisterForm)} */}
                  <InputForm 
                      value={formRegister.fname} 
                      formErrors={formErrors.fname}
                      onChangehandler={(e) => handleInput(e, 'text')} 
                      icon={faUser} 
                      formType={'fname'}
                      customInput={'w-full h-full rounded-3xl pl-10'}
                      customDiv={'flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-10 rounded-3xl'}
                  />

                  <InputForm 
                      value={formRegister.lname} 
                      formErrors={formErrors.lname}
                      onChangehandler={(e) => handleInput(e, 'text')} 
                      icon={faUser} 
                      formType={'lname'}
                      customInput={'w-full h-full rounded-3xl pl-10'}
                      customDiv={'flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-10 rounded-3xl'}
                  />
                </div>

                <InputForm 
                    value={formRegister.email} 
                    formErrors={formErrors.email}
                    onChangehandler={(e) => handleInput(e, 'email')} 
                    icon={faEnvelope} 
                    formType={'email'}
                    customInput={'w-full h-full rounded-3xl pl-10'}
                    customDiv={'flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-10 rounded-3xl'}
                />
                
                <div className='w-full flex justify-between'>
                  <InputBirthDay
                      handleDateChange={handleDateChange}
                      selectedDate={startDate}
                      icon={faCakeCandles}
                      value={formRegister.date}
                      className={'relative flex justify-center items-center shadow-xl shadow-blue-300/30 rounded-3xl w-5/12'}
                  />

                  <Select
                    icon={faMarsAndVenus}
                    onChangehandler={(e) => handleInput(e, 'sex')} 
                    value={formRegister.sex.trim()}
                    inputName={'Sex'}
                    inputAmount={['male', 'female', 'lgbtq', 'etc']}
                    customDiv={'flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-5/12 h-10 rounded-3xl'}
                    customTag={'text-center w-full h-full rounded-3xl'}
                  />
                </div>
                
                <InputForm 
                    value={formRegister.address} 
                    formErrors={formErrors.address}
                    onChangehandler={(e) => handleInput(e, 'address')} 
                    icon={faLocationDot} 
                    formType={'address'}
                    customInput={'w-full h-full rounded-3xl pl-10'}
                    customDiv={'flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-10 rounded-3xl'}
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
                      selected={formRegister.interest}
                    />
                    <InputCheckBox
                      onChangehandler={handleCheckBoxChange}
                      value={'Health'}
                      selected={formRegister.interest}
                  />
                  </div>
                  <div>
                    <InputCheckBox
                      onChangehandler={handleCheckBoxChange}
                      value={'Investment'}
                      selected={formRegister.interest}
                    />
                    <InputCheckBox
                      onChangehandler={handleCheckBoxChange}
                      value={'Pet'}
                      selected={formRegister.interest}
                    />
                  </div>
                  <div>
                    <InputCheckBox
                      onChangehandler={handleCheckBoxChange}
                      value={'Food'}
                      selected={formRegister.interest}
                    />
                    <InputCheckBox
                      onChangehandler={handleCheckBoxChange}
                      value={'Fashion'}
                      selected={formRegister.interest}
                    />
                  </div>
                </div>
              </div>

              {/* button */}
              <div className='w-full flex flex-col items-center'>
                <ButtonFunc
                    text={'submit'}
                    onClick={(e:any) => handleSubmit(e)}
                    buttonType={'text'}
                    cusDiv={'flex justify-center w-3/4 text-white'}
                    cusButton={'bg-gradient-to-r shadow-xl shadow-blue-300/30 from-cyan-200 to-blue-500 h-10 font-semibold w-3/6 rounded-xl text-lg hover:bg-gradient-to-l duration-800 ease-linear'}
                  />

                <a href="/" className='text-blue-500 text-xs font-semibold cursor-pointer py-5 hover:text-gray-800'>
                      Already Have Account ?
                </a>
                
              </div>
            </div> 
          </form>
  )
}

export default RegisterForm;
