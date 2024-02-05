import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import Table from '../component/table'
import Card from '../component/card'
import SearchBar from '../component/register/element/inputForm'

export default function Home() {
  const [userInfo, setUserInfo] = useState([]);
  const [searching, setSearching] = useState('');

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

  const handleSearch = (e:any) => {
    setSearching(e.target.value);
  };

  // console.log('=======', searching)

  return (
    <div className=' bg-blue-50'>
      <div className='flex'>
        <div className='bg-blue-600 p-4 w-1/6 text-5xl text-center'>
            sidebar
        </div>

        <div className=' w-5/6'>
          <header className='bg-white h-12'>
              header
          </header>

          <div className='mx-10'>
            {/* content */}
            <div className='flex justify-between py-10'>
              {/* content-header */}
              <div className='text-4xl font-semibold'>
                Information
              </div>

              <a href="/form" className='bg-blue-600 text-white py-2 px-5 rounded-xl'>
                CREATE NEW
              </a>
            </div>

            <div className='flex bg-white rounded-xl h-28 shadow-xl shadow-blue-100/100'>
              {/* content-search menu */}
              <div className='w-3/6 flex flex-col p-4 item-center justify-between'>
                <p className='text-lg font-semibold'>
                  What are you looking for?
                </p>
                <SearchBar
                  icon={faMagnifyingGlass}
                  onChangehandler={handleSearch}
                  inputName={'Search for category, name, address, etc'}
                  customInput={'bg-blue-50 w-full h-full rounded-xl pl-10'}
                  customDiv={'flex relative items-center justify-center w-full h-10 rounded-xl'}
                />
              </div>

              <div className='w-2/6 '>
                In Progress...
              </div>

              <div className='w-2/6'>
                In Progress...
              </div>
            </div>

            {/* content-table */}
            <div className='my-10'>
              <Card
              dataInfo={userInfo}
              handleDelete={handleDelete}
              searchingResult={searching}
              />

              <Table 
              dataInfo={userInfo}
              handleDelete={handleDelete}
              searchingResult={searching}
              />
            </div>
          
          </div>
          
        </div>
      </div>

      <footer>
            footer
      </footer>
    </div>
  )
}
