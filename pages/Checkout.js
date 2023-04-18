import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

const Checkout = () => {
  const router = useRouter();
  const { title, time, seats, image } = router.query;

  const seatList = seats ? seats.split(',') : [];
  const pricePerSeat = 10.50;
  const tax = pricePerSeat * 1.07;
  const totalPrice = seatList.length * pricePerSeat + tax;

  return (
    <div>
      <Head>
        <title>Checkout: {title}</title>
      </Head>
      <h2>Checkout</h2>
      <p>Movie: {title}</p>
      <Image src={image} width={350} height={350} alt="Movie Poster" />
      <p>Time: {time}</p>
      <p>Seat(s): {seatList.join(', ')}</p>
      <p>Total Price ( with tax ): ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Checkout;

{/*

import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Checkout = ({movie}) => {
  const router = useRouter();
  const { title, time, seats, image} = router.query;

  const seatList = seats ? seats.split(',') : [];
  const pricePerSeat = 10.50;
  const tax = pricePerSeat * 1.07;
  const totalPrice = seatList.length * pricePerSeat + tax;

  return (
    <div>
      <h2>Checkout</h2>
      <p>Movie: {title}</p>
      <Image src={image} width={350} height={350} alt="image not working" />

      <p>Time: {time}</p>
      <p>Seats: {seatList.join(', ')}</p>
      <p>Total Price ( with tax ): ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Checkout;

*/}