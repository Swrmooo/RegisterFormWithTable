import React, { useState } from 'react';
import axios from 'axios';

import Form from '../../component/register'

interface Props {
    info?:any;
}

// export default function Register() {
const Register:React.FC<Props> = ({info}) => {
        // console.log('===============',info)

    return (
      <main style={{height:'100vh'}} className='bg-blue-50'>

        <div className='flex justify-center text-4xl pb-10'>
          Register Form
        </div>
          
        <div className=' h-3/6 flex justify-center'>

          <Form data={info} onSubmit={'edit'}/>
          
        </div>

      </main>
  )
}

export async function getServerSideProps({ query } : { query:any }) {
    const profile = query.editform
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
  export default Register;