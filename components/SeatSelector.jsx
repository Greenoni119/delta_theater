import React, { useState } from 'react';
import Link from 'next/link';
import SeatInformation from './SeatInformation';


const SeatSelector = ({ title, time , image}) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    const price = 10.5; 
    const seatObj = { seat, price };
    
    
    if (selectedSeats.length >= 10) {
      if (selectedSeats.some((s) => s.seat === seat)) {
        setSelectedSeats(selectedSeats.filter((s) => s.seat !== seat));
      }
    } else {
      if (selectedSeats.some((s) => s.seat === seat)) {
        setSelectedSeats(selectedSeats.filter((s) => s.seat !== seat));
      } else {
        setSelectedSeats([...selectedSeats, seatObj]);
      }
    }
  };

  const totalPrice = selectedSeats.reduce((acc, s) => acc + s.price, 0);
  const checkoutLink = `/Checkout?title=${encodeURIComponent(title)}&time=${encodeURIComponent(time)}&seats=${encodeURIComponent(selectedSeats.map((s) => s.seat).join(','))}&totalPrice=${encodeURIComponent(totalPrice.toFixed(2))}&image=${encodeURIComponent(image)}`;

  return (
    <div className='max-w-screen-sm ml-3 mr-3'>
<div className="w-full bg-red-400 rounded-t-full mt-5 mb-2 p-0.5 max-w-screen-md mx-auto">
  </div>
  <h2 className="text-red-400 font-bold text-center">Screen</h2>

<div className='text-center justify-center≠≠≠'>
<div className=" justify-center m-2 max-w-screen-sm min-w-screen-sm">
<div className="">
  
  <div className="">
  {Array.from({ length: 13 }, (_, row) => (
    Array.from({ length:11 }, (_, col) => (
      <button
        key={`${row}-${col}`}
        onClick={() => handleSeatClick(`${String.fromCharCode(65 + row)}${col + 11}`)}
        className={`seat h-3 w-4 rounded-t text-xs m-1 sm:h-6 sm:w-8 ${selectedSeats.some((s) => s.seat === `${String.fromCharCode(65 + row)}${col + 11}`) ? 'bg-teal-300' : 'bg-gray-400'}`}
        disabled={selectedSeats.length >= 10 && !selectedSeats.some((s) => s.seat === `${String.fromCharCode(65 + row)}${col + 11}`)}
      >
      </button>
    ))
  ))}
  </div>
</div>
</div>

<SeatInformation/>

      {selectedSeats.length > 0 && (
        <div className='w-full'>
        <div className=' bg-zinc-600 flex justify-center gap-10 pt-3 rounded-xl m-3 pb-3' >
          <div className='ml-3'>
            <h1 className='text-red-400'>Seats:</h1>
          <p className='text-teal-400 text-sm'> {selectedSeats.map((s) => s.seat).join(', ')}</p>
          <h1 className='text-red-400'>Price:</h1>
          <p className='text-teal-400 text-sm'> ${totalPrice.toFixed(2)}</p>
          </div>
    
       <div className='py-5 mr-3'>
        <Link href={checkoutLink}>
            <button className="  text-teal-400 font-bold py-2 px-4 rounded border border-red-400 hover:shadow-xl shadow-red-400">
              Go To <br/> Checkout
            </button>
          </Link>
       </div>

 </div>

</div>

      )}
</div>

    </div>
  );
};




export default SeatSelector;







