import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMobileScreen, faEnvelope, faCakeCandles, faLocationDot, faMarsAndVenus, faHeart} from '@fortawesome/free-solid-svg-icons';


import { Card as CardForm, SignCard, CustomCard } from '../component/subcomponents/card'

interface Props {
    handleDelete:(e:any)=>void;
    dataInfo: any;
    searchingResult?:any;
    wordFiltered?:any;
  }
  

const Card:React.FC<Props> = ({dataInfo,handleDelete,searchingResult,wordFiltered}) => {
    const fullname = dataInfo.fisrstName + ' ' + dataInfo.lastName
    const locationDot = <FontAwesomeIcon icon={faLocationDot} style={{fontSize:'20px'}}/>;
    const cakeCandles = <FontAwesomeIcon icon={faCakeCandles} style={{fontSize:'20px'}}/>;
    const envelope = <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'20px'}}/>;
    const sex = <FontAwesomeIcon icon={faMarsAndVenus} style={{fontSize:'20px'}}/>;

    // console.log(dataInfo)

    return (
    <div className='flex flex-wrap justify-left'>
        {dataInfo?.filter((word:any) => 
            Object.entries(word).some(([key, value]) =>
            typeof value === 'string' && value.includes(searchingResult)
            )).map((item:any,index:number) => (
            <div className='w-1/4' key={index}>
                <CardForm
                title={item?.fisrstName+' '+item?.lastName}
                customtitle='flex justify-center py-4 text-2xl text-white font-semibold bg-gradient-to-r from-cyan-200 to-cyan-400 '
                customimageblock='pt-8 rounded-t-3xl flex justify-center bg-gradient-to-r from-cyan-200 to-cyan-400'
                customimage='h-40 w-40 drop-shadow-xl border-4 object-cover object-top rounded-full '
                image={item?.avatar}
                colum='min-w-96 m-5 shadow-xl shadow-blue-300/100 rounded-3xl '
                customtext='p-5 text-lg '
                infoClass={[
                    <div className='flex flex-col leading-10 '>
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
            </div>
        ))}
       
        

    </div>
  )
}
export default Card;