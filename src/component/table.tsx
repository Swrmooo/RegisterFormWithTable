import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function Table({ dataInfo }: { dataInfo: any }) {
    const [userInfo, setUserInfo] = useState([dataInfo]);
    const [indexToEdit, setIndexToEdit] = useState([]);
    const [isEdited, setIsEdited] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const [editForm, setEditForm] = useState({
      fisrstName: '',
      lastName: '',
      address: '',
      email: '',
      birthDate: '',
    });

  useEffect(() => {
    setUserInfo(dataInfo);
  }, [dataInfo]);

  const handleDelete = (indexed: any) => {
    const storedData = JSON.parse(localStorage.getItem('Info') || '[]');
    const DeletedData = storedData.filter((item:any, index:any) => index !== indexed);
    localStorage.setItem('Info', JSON.stringify(DeletedData));
    setUserInfo(DeletedData);
  };
  
  const handleEdit = (index: any) => {
    setIndexToEdit(index);
    const storedData = JSON.parse(localStorage.getItem('Info') || '[]');
    const itemToEdit = storedData[index];
  
    setEditForm(itemToEdit);
    setIsEdited(true);
  };

    // const handleMouseOver = (index: number) => {
    //   setHoveredIndex(index);
    // };
  
    // const handleMouseOut = () => {
    //   setHoveredIndex(-1)
    // };

    return (
        <div className='flex justify-center '>
            <table className='w-full shadow-xl '>
                <thead>
                  <tr>
                    <th className=''>Firstname</th>
                    <th className=''>Lastname</th>
                    <th className=''>Address</th>
                    <th className=''>E-Mail</th>
                    <th className=''>Birthday</th>
                  </tr>
                </thead>
                <tbody className='text-lg'>
                  {userInfo.map((item:any,index:number) => (
                    <tr key={index} className={`hover:bg-slate-200 ease-out duration-300 relative ${
                      index === hoveredIndex ? 'bg-gray-300' : ''
                    }`}
                      // onMouseOver={() => handleMouseOver(index)}
                      // onMouseOut={handleMouseOut}
                    >
                      <td>{item?.fisrstName}</td>
                      <td>{item?.lastName}</td>
                      <td>{item?.address}</td>
                      <td>{item?.email}</td>
                      <td className='flex justify-between relative'>
                        {item?.birthDate}
                        <div className='flex justify-around w-1/6 '>
                            <button type="button"
                              onClick={() => handleDelete(index)}
                              className='bg-slate-400 px-2 text-white text-sm rounded '  
                              ><FontAwesomeIcon icon={faTrashCan} style={{fontSize:'10px'}}/>
                            </button>
                            <button type="button"
                            onClick={() => handleEdit(index)}
                              className='bg-blue-400 px-2 text-white text-sm rounded '  
                              ><FontAwesomeIcon icon={faPen} style={{fontSize:'10px'}}/>
                            </button>
                        </div>
                        {/* {index === hoveredIndex && (  */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
        </div>  
  )
}
