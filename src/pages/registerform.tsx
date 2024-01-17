import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const router = useRouter();
    const handleClick = (way:any) => {
        switch(way) {
            case "cancel": {
                router.push('/');
            }
            case "submit": {
                router.push('/');
            }
            default: { 
                break; 
             }
        }
        
    };

    return (
        <main className=''>
            <div className='border-2'>
                <div>
                    
                </div>
                <p className='flex justify-center text-5xl mb-4'>
                    Register
                </p>
                <div className='flex flex-col  w-2/6 h-5/6'>       
                    <input type="text" value="" 
                    className='border-2'
                    />
                    <input type="text" value="" 
                    className='border-2'
                    />
                    <input type="tel" value="" 
                    className='border-2'
                    />
                    <input type="email" value="" 
                    className='border-2'
                    />

                </div>
                <div className='flex justify-center'>
                    <button type="button"
                    onClick={handleClick.bind(null, "submit")}
                    className='bg-green-400 p-8 m-4 rounded-xl text-xl'  
                    >submit
                    </button>

                    <button type="button"
                    onClick={handleClick.bind(null, "submit")}
                    className='bg-red-500 p-8 m-4 rounded-xl text-xl'  
                    >cancel
                    </button>
                    
                </div>
            </div> 
        </main>
  )
}