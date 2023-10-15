import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from 'components/Footer'

const Checkout = () => {

  const router = useRouter();
  const { title, time, seats, image } = router.query;

  const seatList = seats ? seats.split(',') : [];
  const pricePerSeat = 10.50;
  const tax = pricePerSeat * 1.07;
  const totalPrice = seatList.length * pricePerSeat + tax;

  const choutStyle = {
    background: '#2D2D2D',
  };

  return (

    <div style={choutStyle} className=''>
      <Head>
        <title>Checkout: {title}</title>
      </Head>


      <div className='pb-10'>

        <div className='pt-4'>
              <Image className='mx-auto shadow-xl rounded-2xl' src={image} width={200} height={350} alt="Movie Poster" />
        </div>

      <div className='m-5'>

      <div className='flex gap-10 justify-center'>

        <div className='text-center'>
          <h1 className='text-white text-2xl'>Time:</h1>
          <p className='text-amber-300 text-sm'>{time}</p>
          </div>
      
          <div className='text-center'>
            <h1 className='text-white text-2xl'>Seats:</h1>
          <p className='text-amber-300 text-sm'>{seatList.join(', ')}</p>
          </div>
      
          <div className='text-center'>
            <h1 className='text-white text-2xl'>Price:</h1>
          <p className='text-amber-300 text-sm'>${totalPrice.toFixed(2)}</p>
          </div>
      
      </div>

    <div className='pt-5'>
          <form className='text-center'>
          <input name="myInput" className='m-2 text-2xl p-2  bg-neutral-600 text-amber-300' placeholder='Name'/>
          <input name="myInput" className='m-2 text-2xl p-2 bg-neutral-600 text-amber-300' placeholder='Phone Number'/>
           
          </form>
    </div>

      <div className='py-10 text-center'>
        <Link href='/'>
            <button className="  text-white font-bold py-2 px-10 rounded border border-amber-300 hover:shadow-xl shadow-red-400">
              Pay
            </button>
          </Link>
       </div>

      </div>

      </div>
      
<Footer/>
      
    </div>
  );
};

export default Checkout;
