
import { useRouter } from 'next/router';
import SeatSelector from '../components/SeatSelector';
import Image from 'next/image';
import Head from 'next/head';
import Calander from '@/components/Calander';
import Footer from '@/components/footer'
const Seat = () => {
  const router = useRouter();
  const { title, time, image } = router.query;

  const seatStyle = {
    background: '#2D2D2D',
  };
  
  return (
    <div style={seatStyle} className='bg-zinc-700'>
      <Head>
        <title>Seat Selection: {title}</title>
      </Head>
      <div className='flex items-center justify-center gap-3 '>

      <Image src={image} width={100} height={50} alt="Movie Poster" className=' mt-3 rounded-xl lg:w-40' />
    
    <div className='text-3xl lg:text-5xl text-white'> 
        
        <h2 className='ml-4 lg:text-5xl'>{title}</h2>
        
        <h2 className='ml-4 lg:text-5xl'> {time}</h2>

        <Calander  />
    </div>
        
      </div>


      <div className='mx-auto'>
      <SeatSelector title={title} time={time} image={image}/>
      <br />
      </div>


<div className=' mx-auto w-full pt-60'>
  <Footer/>
</div>


    </div>
  );
};

export default Seat;

