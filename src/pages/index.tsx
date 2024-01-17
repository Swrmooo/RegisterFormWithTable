import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const handleAddClick = () => {
    router.push('/registerform');
  };

  return (
    <main className='bg-white'>
      
      <div className='flex justify-center'>
      <div>
        <button type="button"
        onClick={handleAddClick}
        className='bg-red-500 p-8 m-4 rounded-xl'  
        >Add
        </button>
      </div>
        <table className='w-3/4 m-4'>
          <tr>
            <th>firstname</th>
            <th>lastname</th>
            <th>e-mail</th>
            <th>tel</th>
          </tr>
          <tr>
            <td>firstname</td>
            <td>firstname</td>
            <td>firstname</td>
            <td>firstname</td>
          </tr>
          <tr>
            <td>firstname</td>
            <td>firstname</td>
            <td>firstname</td>
            <td>firstname</td>
          </tr>
        </table>
      </div>
    </main>
  )
}
