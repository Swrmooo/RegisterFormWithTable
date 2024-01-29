import React from 'react'
import axios from 'axios';

// import Card from '../component/subcomponents/card'
import { Card, SignCard, CustomCard } from '../component/subcomponents/card';
import { iColor } from '@/Enum/enum';


type Props = {

}

const Profile:React.FC<Props> = ({info}:any) => {
  // console.log('======',info)
  const fullname = info.fisrstName + ' ' + info.lastName

  return (
    <div className='border-2 h-screen flex justify-center item-center'>
        <Card
          title={fullname}
          custom='shadow-xl shadow-blue-300/100 rounded-3xl'
          customtitle='flex justify-center py-4 text-xl font-semibold'
          image={info.avatar}
          customimageblock='h-40 w-40  mx-auto'
          customimage='h-full w-full  object-cover object-top rounded-full'
          colum='w-1/6 '
          // customtextborder='h-auto'
          customtext='flex justify-center item-center leading-8'
          infoClass={[
            // info.fisrstName,
            // info.lastName,
            info.email,
            info.birthDate,
            info.address,
            info.sex,
            // info.interest[0],
          ]}
        />
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
