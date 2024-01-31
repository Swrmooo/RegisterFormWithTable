import React, { useState } from 'react';


import Form from '../../component/register'

export default function Register() {

    return (
      <main className='bg-blue-50 h-screen'>

        <div className='flex justify-center text-4xl pb-10'>
          Register Form
        </div>
          
        <div className=' h-3/6 flex justify-center'>

          <Form/>
          
        </div>

      </main>
  )
}

