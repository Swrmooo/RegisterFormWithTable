import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPen, faTrashCan, faMagnifyingGlass, faEnvelope, faCakeCandles, faLocationDot, faMarsAndVenus, faHeart} from '@fortawesome/free-solid-svg-icons';


import { Card as CardForm, SignCard, CustomCard } from '../component/subcomponents/card'

interface Props {
    handleDelete:(e:any)=>void;
    dataInfo: any;
    searchingResult?:any;
    wordFiltered?:any;
  }
  

const Card:React.FC<Props> = ({dataInfo,handleDelete,searchingResult,wordFiltered}) => {
    const locationDot = <FontAwesomeIcon icon={faLocationDot} style={{fontSize:'20px'}}/>;
    const cakeCandles = <FontAwesomeIcon icon={faCakeCandles} style={{fontSize:'20px'}}/>;
    const envelope = <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'20px'}}/>;
    const sex = <FontAwesomeIcon icon={faMarsAndVenus} style={{fontSize:'20px'}}/>;

    return (
    <div className='flex flex-wrap justify-left'>
        {dataInfo?.filter((word:any) => 
            Object.entries(word).some(([key, value]) =>
            typeof value === 'string' && value.includes(searchingResult)
            )).map((item:any,index:number) => (
            <div key={index} className='w-1/4 menuHover relative'>
                <CardForm
                title={item?.fisrstName+' '+item?.lastName}
                customtitle='flex justify-center py-4 text-2xl text-white font-semibold bg-gradient-to-r from-pink-300 to-blue-500'
                customimageblock='pt-8 rounded-t-3xl flex justify-center bg-gradient-to-r from-pink-300 to-blue-500'
                customimage='h-40 w-40 drop-shadow-xl border-4 object-cover object-top rounded-full '
                image={item?.avatar}
                colum='min-w-96 m-5 shadow-xl shadow-blue-300/100 rounded-3xl '
                customtext='p-5 text-lg '
                infoClass={[
                    <div className='flex flex-col leading-10'>
                      <div>
                        {envelope} Email : {item?.email}
                      </div>
                      <div>
                        {cakeCandles} Birthday : {item?.birthDate}
                      </div>
                      <div>
                        {locationDot} Address : {item?.address}
                      </div>
                      {/* <div>
                        {sex} Sex : {item?.sex}
                      </div> */}
                    </div>
                  ]}
                />
            <div className='flex justify-around hiding top-10 right-10'>
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
                        
          </div>
        ))}
    </div>
  )
}
export default Card;