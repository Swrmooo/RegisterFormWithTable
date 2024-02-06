import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import Table from '../component/table'
import Card from '../component/card'
import List from '../component/list'
import Select from '../component/select'
import SearchBar from '../component/register/element/inputForm'

export default function Home() {
  const [userInfo, setUserInfo] = useState([]);
  const [searching, setSearching] = useState('');
  const [displayType, setDisplayType] = useState({
    isTable:true,
    isCard:false,
    isList:false,
  });

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

  const handleSelect = (e:any) => {
    const { value } = e.target;
    switch(value){
    case 'table': setDisplayType({isTable: true, isCard: false, isList: false,}); break;
    case 'card': setDisplayType({ isTable: false, isCard: true, isList: false,}); break;
    case 'list': setDisplayType({ isTable: false, isCard: false, isList: true,}); break;
    default: break;
    }
  };

  // console.log('=======', displayType)

  return (
    <div style={{height:'100vh'}} className='bg-blue-50'>
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
              {/* content-menu */}
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

              <div className='w-2/6 flex flex-col p-4 item-center justify-between'>
                <p className='text-lg font-semibold'>
                  Show result with...
                </p>
                <Select
                  // icon={faMagnifyingGlass}
                  onChangehandler={(e) => handleSelect(e)} 
                  // value={displayType}
                  // inputName={'Show result with...'}
                  inputAmount={['table', 'card', 'list']}
                  customDiv={'w-4/12 h-10 '}
                  customTag={'border-2 pl-2 text-slate-400 text-lg w-full h-full rounded-xl'}
                />
              </div>

              <div className='w-2/6'>
                In Progress...
              </div>
            </div>

            {/* content-displayData */}
            <div className='my-10'>
            {displayType.isCard && (
              <Card
              dataInfo={userInfo}
              handleDelete={handleDelete}
              searchingResult={searching}
              />
            )}

            {displayType.isList && (
              <List
              dataInfo={userInfo}
              handleDelete={handleDelete}
              searchingResult={searching}
              />
            )}
              
            {displayType.isTable && (
              <Table 
              dataInfo={userInfo}
              handleDelete={handleDelete}
              searchingResult={searching}
              />
            )}
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
