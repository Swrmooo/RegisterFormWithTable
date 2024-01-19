import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

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

  // const [onHover, setOnHover] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const handleMouseOver = (index: any) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(-1)
  };

  

  return (
    <main className='flex bg-blue-50'>
      <div className='bg-blue-600 rounded-r-xl p-4 w-1/6 h-screen'>
        <p className='text-white text-5xl text-center'>
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

            <div className='my-5 '>
              <button type="button"
                onClick={handleAddClick}
                className='bg-blue-600 text-white py-2 px-5 rounded-xl '  
                >CREATE NEW
              </button>
            </div>
          </div>
        
          <div className=''>
            {/* table */}
            <div className='flex justify-center '>
              <table className='w-full shadow-xl '>
                <thead>
                  <tr>
                    <th className='w-1/4'>Firstname</th>
                    <th className='w-1/4'>Lastname</th>
                    <th >Telephone</th>
                    <th>E-Mail</th>
                  </tr>
                </thead>
                <tbody className='text-lg'>
                  {userInfo.map((item:any,index:number) => (
                    <tr key={index} className={`hover:bg-slate-200 ease-out duration-300 ${
                      index === hoveredIndex ? 'bg-gray-300' : ''
                    }`}
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseOut={handleMouseOut}
                    >
                      <td>{item.fname}</td>
                      <td>{item.lname}</td>
                      <td>{item.tel}</td>
                      <td className='flex justify-between relative'>
                        <div className='' >{item.email}</div>
                        {index === hoveredIndex && ( 
                          <div className='flex justify-around w-1/6 absolute right-10 bottom-4'>
                            <button type="button"
                              className='bg-slate-400 px-2 text-white text-sm rounded '  
                              ><FontAwesomeIcon icon={faTrashCan} style={{fontSize:'10px'}}/>
                            
                            </button>
                            <button type="button"
                              className='bg-blue-400 px-2 text-white text-sm rounded '  
                              ><FontAwesomeIcon icon={faPen} style={{fontSize:'10px'}}/>
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
