import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface Props {
  handleDelete:(e:any)=>void;
  dataInfo: any;
}

const Table:React.FC<Props> = ({dataInfo,handleDelete}) => {
  const [userInfo, setUserInfo] = useState([dataInfo]);

  useEffect(() => {
    setUserInfo(dataInfo);
  }, [dataInfo]);

    return (
      <div className='flex justify-center '>
        <table className='w-full shadow-xl shadow-blue-300/100 rounded-xl'>
          <thead>
            <tr>
              <th className='rounded-tl-xl'>Firstname</th>
              <th className=''>Lastname</th>
              <th className=''>Address</th>
              <th className=''>E-Mail</th>
              <th className='rounded-tr-xl'>Birthday</th>
            </tr>
          </thead>
          <tbody className='text-lg '>
            {userInfo.map((item:any,index:number) => (
            <tr key={index} className={'menuHover '}>
              <td>{item?.fisrstName}</td>
              <td>{item?.lastName}</td>
              <td>{item?.address}</td>
              <td>{item?.email}</td>
              <td className='flex justify-between pr-14 relative'>
                {item?.birthDate}
                <div className='hiding'>
                  <div className='flex justify-evenly w-24'>
                    <a href={`/table/${item.id}`} className='bg-yellow-400 px-2 text-white text-sm rounded'>
                      <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:'10px'}}/>
                    </a>
                    
                    <button type="button" onClick={() => handleDelete(item.id)}
                    className='bg-slate-400 px-2 text-white text-sm rounded'>
                      <FontAwesomeIcon icon={faTrashCan} style={{fontSize:'10px'}}/>
                    </button>

                    {/* <a href={`/register?statusSubmit=${'edit'}&id=${item.id}&fisrstName=${item.fisrstName}&lastName=${item.lastName}&address=${item.address}&email=${item.email}&birthDate=${item.birthDate}&avatar=${item.avatar}&sex=${item.sex}&interest=${JSON.stringify(item.interest)}`} */}
                    <a href={`/form/${item.id}`}
                    className='bg-blue-400 px-2 text-white text-sm rounded'>
                      <FontAwesomeIcon icon={faPen} style={{fontSize:'10px'}}/>
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>  
   )
}
export default Table;
