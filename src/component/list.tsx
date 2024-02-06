import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

type Props = {
    handleDelete:(e:any)=>void;
    dataInfo: any;
    searchingResult?:any;
    wordFiltered?:any;
}

const List:React.FC<Props> = ({dataInfo,handleDelete,searchingResult,wordFiltered}) => {
  return (
    <div>
        {/* <div className='flex justify-around border-b-4 border-slate-600'>
            <div className='w-2/6 text-xl font-semibold text-slate-400 border-b-2 border-slate-400'>
                User
            </div>
            <div className='w-1/6 text-xl font-semibold text-slate-400 border-b-2 border-slate-400'>
                Birthdate
            </div>
            <div className='w-1/6 text-xl font-semibold text-slate-400 border-b-2 border-slate-400'>
                E-Mail
            </div>
            <div className='w-1/6 text-xl font-semibold text-slate-400 border-b-2 border-slate-400'>
            Address
            </div>
        </div> */}

        {dataInfo?.filter((word:any) => 
        Object.entries(word).some(([key, value]) =>
        typeof value === 'string' && value.includes(searchingResult)
        )).map((item:any,index:number) => (
            <ul key={index} className='menuHover relative h-32 text-xl bg-white p-4 my-4 rounded-xl flex justify-between items-center hover:bg-slate-50'>
                <div className='flex w-2/6'>
                    <img src={item?.avatar} alt={item?.avatar}
                    className='w-24 h-24 rounded-xl'
                    />
                    <div className='pl-10 w-10/12 truncate'>
                        <a href={`/table/${item.id}`}>
                            <li className='text-3xl font-semibold text-blue-500 cursor-pointer'>
                                {item?.fisrstName+' '+item?.lastName}
                            </li>
                        </a>
                        <li>{item?.sex}</li>
                    </div>
                </div>
                
                <li className='w-1/6 flex justify-center'>
                    {item?.birthDate}
                </li>

                <li className='w-1/6 flex justify-left'>
                    {item?.email}
                </li>
                
                <li className='w-1/6 flex justify-left'>
                    {item?.address}
                </li>
                
                <div className='flex justify-around hiding right-10'>
                    <div className='flex justify-evenly w-24 '>
                        <a href={`/table/${item.id}`} className='bg-yellow-400 px-2 text-white text-sm rounded'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:'10px'}}/>
                        </a>
                            
                        <button type="button" onClick={() => handleDelete(item.id)}
                        className='bg-slate-400 px-2 text-white text-sm rounded'>
                        <FontAwesomeIcon icon={faTrashCan} style={{fontSize:'10px'}}/>
                        </button>

                        <a href={`/form/${item.id}`}
                        className='bg-blue-400 px-2 text-white text-sm rounded'>
                        <FontAwesomeIcon icon={faPen} style={{fontSize:'10px'}}/>
                        </a>       
                    </div>
                </div>
            </ul>
        ))}
    </div>
  )
}

export default List