import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FormTable from '../component/table'

export default function Home() {
  const [userInfo, setUserInfo] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.pulsednsth.com/devtest/get/all').then((response) => {
        // console.log(response)
        setUserInfo(response.data)
    });
  }, [userInfo]);

  const handleDelete = (index: any) => {
    axios.post(`https://api.pulsednsth.com/devtest/delete/${index}`).then((response) => {
      setUserInfo((prevData) => [
        ...prevData.slice(0, index),
        ...prevData.slice(index + 1),
      ]);
    });
  };

  return (
    <main className='flex bg-blue-50'>
      <div className='bg-blue-600 p-4 w-1/6'>
        <p className='text-blue-800 text-5xl text-center'>
          sidebar
        </p>
      </div>

      <div className='w-5/6'>
        <div className='bg-white h-12'>
            header
        </div>
        {/* content*/}
        <div className='mx-10'>
          <div className='flex justify-between item-center'>
            {/* title*/}
            <div className=' text-5xl'>
              Information
            </div>

            <div className='my-5'>
              <a href="/form" className='bg-blue-600 text-white py-2 px-5 rounded-xl'>
              CREATE NEW
              </a>
            </div>
          </div>

          <div className='my-10'>
            <FormTable 
            dataInfo={userInfo}
            handleDelete={handleDelete}
            // handleEdit={handleEdit}
            // statusSubmit={statusSubmit}
            />
          </div>

        </div>
      </div>
    </main>
  )
}
