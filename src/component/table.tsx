import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface Props {
  handleDelete:(e:any)=>void;
  dataInfo: any;
  searchingResult?:any;
}

const Table:React.FC<Props> = ({dataInfo,handleDelete,searchingResult}) => {
  const [userInfo, setUserInfo] = useState([dataInfo]);

  useEffect(() => {
    setUserInfo(dataInfo);
    // setSearch(filteredData);
  }, [dataInfo]);

  // console.log('=======', filteredData)

    return (
      <div className='flex'>
        <table className='w-full shadow-xl bg-white shadow-blue-200/100 rounded-xl'>
          <thead>
            <tr>
              <th className='rounded-tl-xl'>Fullname</th>
              {/* <th className=''>Lastname</th> */}
              <th className='rounded-tr-xl'>Birthday</th>
              <th className=''>E-Mail</th>
              <th className=''>Address</th>
            </tr>
          </thead>
          <tbody className='text-lg '>
          {/* .filter((word:any) => word.includes(searchingResult)) */}
            {/* {userInfo?.map((item:any,index:number) => ( */}
            {userInfo?.filter((word:any) => 
              Object.entries(word).some(([key, value]) =>
              typeof value === 'string' && value.includes(searchingResult)
              )).map((item:any,index:number) => (
            <tr key={index} className={'menuHover'}>
              <td>{item?.fisrstName + ' ' + item?.lastName}</td>
              {/* <td>{item?.lastName}</td> */}
              <td>{item?.birthDate}</td>
              <td>{item?.email}</td>
              <td className='flex justify-between relative'>
                {item?.address}
                <div className='hiding right-8'>
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
