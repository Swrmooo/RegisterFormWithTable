import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [userInfo, setUserInfo] = useState([]);
  const router = useRouter();
  const handleAddClick = () => {
    router.push('/registerform');
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('Info') || '[]');
    setUserInfo(storedData);
  }, []);

  return (
    <main className='flex'>
      <div className='bg-blue-600 rounded-r-xl p-4 w-1/6 h-screen'>
        <p className='text-white text-5xl text-center'>
          sidebar
        </p>
      </div>

      <div className='w-5/6 h-screen'>
        <div className='bg-blue-50 h-10'>
            .
        </div>
        
        <div className='flex justify-between mx-10'>
          {/* title*/}
          <p className=' text-5xl mb-4'>
            Hello !
          </p>

          <button type="button"
            onClick={handleAddClick}
            className='bg-red-500 px-10 rounded-xl'  
            >Add
          </button>
        </div>
      
        <div className='bg-yellow-100'>
          {/* menu bar */}
          <div className='flex'>
              <button type="button"
              onClick={handleAddClick}
              className='bg-red-500 p-4 rounded-xl'  
              >Add
              </button>
              <button type="button"
              onClick={handleAddClick}
              className='bg-red-500 p-4 rounded-xl'  
              >Add
              </button>
              <button type="button"
              onClick={handleAddClick}
              className='bg-red-500 p-4 rounded-xl'  
              >Add
              </button>
              
          </div> 

          {/* table */}
          <div className='flex'>
            <table className='w-3/4 m-4'>
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>E-Mail</th>
                  <th>Telephone</th>
                </tr>
              </thead>
              <tbody>
                {userInfo.map((item:any,index:number) => (
                  <tr key={index}>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.tel}</td>
                    <td>{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </main>
  )
}
