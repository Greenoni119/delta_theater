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
    <div className="flex justify-center items-center">
    <div className='max-w-screen-sm ml-3 mr-3 mx-auto'>
<div className="w-full bg-amber-300 rounded-t-full mt-5 mb-2 p-0.5 max-w-screen-lg mx-auto">
  </div>
  <h2 className="text-white font-bold text-center">Screen</h2>

<div className='text-center justify-center'>
<div className=" justify-center m-2 max-w-screen-sm min-w-screen-sm">
<div className="">
  
  <div className="">
  {Array.from({ length: 13 }, (_, row) => (
    Array.from({ length:11 }, (_, col) => (
      <button
        key={`${row}-${col}`}
        onClick={() => handleSeatClick(`${String.fromCharCode(65 + row)}${col + 11}`)}
        className={`seat h-3 w-4 rounded-t text-xs m-1 sm:h-8 sm:w-8 ${selectedSeats.some((s) => s.seat === `${String.fromCharCode(65 + row)}${col + 11}`) ? 'bg-amber-300' : 'bg-white'}`}
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
        <div className='  flex  gap-10 pt-3 rounded-xl m-3 pb-3' >

          <div className='ml-3'>
            
            <h1 className='text-white text-left text-2xl lg:text-3xl'>Seats:</h1>
          <p className='text-amber-300 text-left text-sm lg:text-3xl'> {selectedSeats.map((s) => s.seat).join(', ')}</p>
          
          <h1 className='text-white text-left text-2xl lg:text-3xl'>Price:</h1>
          <p className='text-amber-300 text-left text-sm lg:text-3xl'> ${totalPrice.toFixed(2)}</p>

          </div>
    
 </div>
 
 <div className='py-5 mr-3'>
        <Link href={checkoutLink}>
            <button className="  text-white font-bold py-2 px-4 rounded border border-amber-300 hover:shadow-xl shadow-red-400">
               Checkout
            </button>
          </Link>
       </div>

</div>

      )}
</div>

    </div>
    </div>
  );
};




export default SeatSelector;







