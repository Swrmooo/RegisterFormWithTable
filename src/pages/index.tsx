import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import axios from 'axios';

import FormTable from '../component/table'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState([]);
  const [indexToEdit, setIndexToEdit] = useState([]);
  const [isEdited, setIsEdited] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [editForm, setEditForm] = useState({
    fname: '',
    lname: '',
    tel: '',
    email: '',
    date: '',
  });

  useEffect(() => {
    // const storedData = JSON.parse(localStorage.getItem('Info') || '[]');
    // setUserInfo(storedData);

    axios.get('https://api.pulsednsth.com/devtest/get/all').then((response) => {
        // console.log(response)
        setUserInfo(response.data)
        // setTimeout(() => {
        //   setData(response.data)
        //   console.log(data)
        // }, );
    });

  }, []);

  const handleSaveEdit = () => {
    if (editForm && typeof indexToEdit === 'number') {
      const storedData = JSON.parse(localStorage.getItem('Info') || '[]');
      storedData[indexToEdit] = editForm;
  
      localStorage.setItem('Info', JSON.stringify(storedData));
  
      setUserInfo(storedData);
      setIsEdited(false);
    }
  };

  return (
    <main className='flex bg-blue-50'>
      <div className='bg-blue-600 p-4 w-1/6 h-screen'>
        <p className='text-blue-800 text-5xl text-center'>
          sidebar
        </p>
      </div>

      <div className='w-5/6 h-screen'>
        <div className='bg-white h-14'>
            header
        </div>
        {/* content*/}
        <div className='mx-20'>
          <div className='flex justify-between '>
            {/* title*/}
            <div className=' text-5xl my-5'>
              Information
            </div>

            <div className='my-5'>
              <a href="/register">
                <button type="button"
                  // onClick={() => router.push('/registerform')}
                  className='bg-blue-600 text-white py-2 px-5 rounded-xl'  
                  >CREATE NEW
                </button>
              </a>
            </div>
          </div>

          <div>
            <FormTable dataInfo={userInfo}/>
          </div>
          
          {/* edit form */}
          {/* {isEdited === true &&(
            <div className='flex justify-between mb-5'>
              <input type="text" id="fname" name="fname" 
              value={editForm.fname}
              onChange={(e) => setEditForm({ ...editForm, fname: e.target.value})}
              />
              <input type="text" id="lname" name="lname"
              value={editForm.lname}
              onChange={(e) => setEditForm({ ...editForm, lname: e.target.value})}
              />
              <input type="tel" id="tel" name="tel"
              value={editForm.tel}
              onChange={(e) => setEditForm({ ...editForm, tel: e.target.value})}
              />
              <input type="email" id="email" name="email"
              value={editForm.email}
              onChange={(e) => setEditForm({ ...editForm, email: e.target.value})}
              />

              <button type="button"
               onClick={handleSaveEdit}
               className='bg-yellow-400 px-2 text-white text-sm rounded'  
              >
                <FontAwesomeIcon icon={faPen} style={{fontSize:'10px'}}/>
              </button>
            </div>
          )} */}
        
          
          
        </div>
      </div>
    </main>
  )
}
