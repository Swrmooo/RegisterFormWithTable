import React from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMobileScreen, faEnvelope, faCakeCandles, faLocationDot, faMarsAndVenus, faHeart} from '@fortawesome/free-solid-svg-icons';

import { Card, SignCard, CustomCard } from '../component/subcomponents/card';
import { iColor } from '@/Enum/enum';
import ButtonFunc from '../component/button';

type Props = {

}

const Profile:React.FC<Props> = ({info}:any) => {
  // console.log('======',info)
  const fullname = info.fisrstName + ' ' + info.lastName
  const locationDot = <FontAwesomeIcon icon={faLocationDot} style={{fontSize:'20px'}}/>;
  const cakeCandles = <FontAwesomeIcon icon={faCakeCandles} style={{fontSize:'20px'}}/>;
  const envelope = <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'20px'}}/>;
  const sex = <FontAwesomeIcon icon={faMarsAndVenus} style={{fontSize:'20px'}}/>;

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center '>
      
        <Card
            title={fullname} 
            // custom='shadow-xl shadow-blue-300/100 rounded-3xl'
            customtitle='flex justify-center py-4 text-2xl text-white font-semibold bg-gradient-to-r from-cyan-200 to-cyan-400'
            image={info.avatar}
            customimageblock='pt-8 rounded-t-3xl flex justify-center bg-gradient-to-r from-cyan-200 to-cyan-400'
            customimage='h-40 w-40 drop-shadow-xl border-4 object-cover object-top rounded-full '
            colum='w-2/12 h-3/12 shadow-xl shadow-blue-300/100 rounded-3xl'
            // customtextborder='h-auto'
            customtext=' p-5 text-xl'
            infoClass={[
              <div className='flex flex-col leading-10'>
                <div>
                  {envelope} Email : {info.email}
                </div>
                <div>
                  {cakeCandles} Birthday : {info.birthDate}
                </div>
                <div>
                  {locationDot} Address : {info.address}
                </div>
                <div>
                  {sex} Sex : {info.sex}
                </div>
              </div>
            ]}
          />
          <a href="/">
            <ButtonFunc
            text='Back'
            onClick={''}
            buttonType={'text'}
            cusDiv={'flex justify-center w-40 text-white pt-5'}
            cusButton={' bg-gradient-to-r shadow-xl shadow-blue-300/30 from-cyan-200 to-blue-500 h-10 font-semibold w-3/6 rounded-xl text-lg hover:bg-gradient-to-l duration-800 ease-linear'}
          />
          </a>
        
    </div>
  )
}
export default Profile;

export async function getServerSideProps({ query } : { query:any }) {
  const profile = query.profile
  try {
    const res = await axios.get(`https://api.pulsednsth.com/devtest/get/${profile}`);
    const data = res.data;
    return {
      props: { info: data }
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true
    };
  }
}
