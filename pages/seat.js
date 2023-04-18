
import { useRouter } from 'next/router';
import Link from 'next/link';
import SeatSelector from '../components/SeatSelector';
import Image from 'next/image';
import Head from 'next/head';
const Seat = () => {
  const router = useRouter();
  const { title, time, image } = router.query;

  return (
    <div>
      <Head>
        <title>Seat Selection: {title}</title>
      </Head>
      <div className='flex items-center justify-center gap-3'>
        <h2 className=''>Select a seat for {title} - {time}</h2>
      <Image src={image} width={50} height={50} alt="Movie Poster" className='rounded-full' />
      </div>
      
      <SeatSelector title={title} time={time} image={image}/>
      <br />
      <Link href="/">
        <span>Back to movie selection</span>
      </Link>
    </div>
  );
};

export default Seat;

