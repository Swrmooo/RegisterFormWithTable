import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMobileScreen, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const inter = Inter({ subsets: ['latin'] })

export default function RegisterForm() {
    const router = useRouter();
    const [formRegister, setFormRegister] = useState({
        fname: '',
        lname: '',
        tel: '',
        email: '',
        date: '',
      });

      const handleInput = (e:any, inputType:any) => {
        const { name, value } = e.target;
        // /^[A-Za-zก-๏]+$/u ไทยและอังกิด /^[A-Za-z]+$/ อังกิดอย่างเดียว
        // /^\d+$/ ตัวเลข
        // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/. เมล
        switch (inputType) {
          case 'text' : if (/^[A-Za-zก-๏]+$/u.test(value) || value === '') {
            setFormRegister((prevData) => ({
              ...prevData,
              [name]: value,
            }));
          }
          case 'tel' : if (/^\d+$/.test(value) || value === '') {
            setFormRegister((prevData) => ({
              ...prevData,
              [name]: value,
            }));
          }
          case 'email' : setFormRegister((prevData) => ({...prevData, [name]: value,}));
          default:
        }
       
      };
      // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.
      const handleEmailInput = (e:any) => {
        const { name, value } = e.target;
        setFormRegister((prevData) => ({
          ...prevData,
          [name]: value,
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

    return (
        <main className='bg-blue-50 h-screen'>
          <div className='flex justify-center text-5xl p-10'>
            Register Form
          </div>
          <form className='bg-white shadow-xl shadow-blue-300/100 w-2/6 h-3/4 rounded-xl mx-auto'> 
            <div className='flex flex-wrap justify-evenly h-full w-full mx-auto px-10'>
              <div className='font-semibold text-lg pt-10'>
                Hello! Welcome
              </div>

              <div className='flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-10 rounded-3xl'>
                <FontAwesomeIcon icon={faUser} style={{position:'absolute', left:'20px', color:'grey', fontSize:'15px'}}/>
                <input type="text" id="fname" name="fname" 
                  className='w-full h-full rounded-3xl pl-10'
                  // onChange={handleTextInput}
                  onChange={(e) => handleInput(e, 'text')}
                  placeholder='Firstname'
                  maxLength={20}
                  value={formRegister.fname}
                  title="Please enter only letters"
                  required
              />
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
              </div>

              <div className='flex relative items-center justify-center shadow-xl shadow-blue-300/30 w-full h-10 rounded-3xl'>
                <FontAwesomeIcon icon={faEnvelope} style={{position:'absolute', left:'20px', color:'grey', fontSize:'15px'}}/>
                <input type="text" id="email" name="email" 
                  className='w-full h-full rounded-3xl pl-10'
                  onChange={(e) => handleInput(e, 'email')}
                  maxLength={30}
                  placeholder='E-Mail'
                  value={formRegister.email}
                  required
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

                {/* <div>
                  <button type="button"
                    onClick={() => router.push('/')}
                    className='bg-red-500  rounded-xl text-lg'  
                    >cancel
                  </button>  
                </div>     */}
              </div>
            </div> 
          </form>
        </main>
  )
}