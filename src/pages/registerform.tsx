import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function RegisterForm() {
    const router = useRouter();
    const [formRegister, setFormRegister] = useState({
        fname: '',
        lname: '',
        tel: '',
        email: '',
      });

    //   var regForm = {
    //     fname: prompt,
    //     lname: prompt,
    //     tel: prompt,
    //     email: prompt,
    //   }

      const handleInput = (e:any) => {
        const { name, value } = e.target;
        setFormRegister((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    //   const saveToLocalStorage = () => {
    //     // const Info = JSON.stringify(formRegister);
    //     // localStorage.setItem('Info', Info);
    //     const Info = JSON.stringify(formRegister);
    //     localStorage.setItem('Info', Info);
    //   };
    
      const handleSubmit = (e:any) => {
        e.preventDefault();

        const storedData = JSON.parse(localStorage.getItem('Info') || '[]');
        storedData.push(formRegister);
        localStorage.setItem('Info', JSON.stringify(storedData));
        
        // saveToLocalStorage();

        router.push('/');
        // console.log("success", formRegister)
      };

    return (
        <main className=''>
            <div className='flex justify-center text-5xl mb-4 border-2'>
                Register
            </div>
            <form className='flex flex-wrap w-1/6 mx-auto'>  
                <input type="text" id="fname" name="fname" 
                className='border-2 w-full'
                onChange={handleInput}
                value={formRegister.fname}
                />
                <input type="text" id="lname" name="lname"
                className='border-2 w-full'
                onChange={handleInput}
                value={formRegister.lname}
                />
                <input type="tel" id="tel" name="tel" 
                className='border-2 w-full'
                onChange={handleInput}
                value={formRegister.tel}
                />
                <input type="email" id="email" name="email"
                className='border-2 w-full'
                onChange={handleInput}
                value={formRegister.email}
                />
            </form>
            
            <div className='flex justify-center border-2'>
                <button type="button"
                onClick={handleSubmit}
                className='bg-green-400 p-8 m-4 rounded-xl text-xl'  
                >submit
                </button>

                <button type="button"
                onClick={() => router.push('/')}
                className='bg-red-500 p-8 m-4 rounded-xl text-xl'  
                >cancel
                </button>        
            </div>
        </main>
  )
}