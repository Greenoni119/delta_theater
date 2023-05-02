
import { useRouter } from 'next/router';
import Link from 'next/link';
import SeatSelector from '../components/SeatSelector';
import Image from 'next/image';
import Head from 'next/head';
import Calander from '@/components/Calander';
const Seat = () => {
  const router = useRouter();
  const { title, time, image } = router.query;

  return (
    <div className='bg-zinc-700 h-screen'>
      <Head>
        <title>Seat Selection: {title}</title>
      </Head>
      <div className='flex items-center justify-center gap-3 ml-4 mr-4'>
      <Image src={image} width={100} height={50} alt="Movie Poster" className=' mt-3 rounded-xl' />
    
    <div className='text-3xl text-teal-400'> 
        
        <h2 className='ml-4'>{title}</h2>
        
        <h2 className='ml-4'> {time}</h2>

        <Calander  />
    </div>
        
      </div>
      
      <SeatSelector title={title} time={time} image={image}/>
      <br />
      
    </div>
  );
};

export default Seat;

