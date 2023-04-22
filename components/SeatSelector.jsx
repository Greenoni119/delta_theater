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
    <div className='max-w-screen-sm mx-auto'>
<div className="w-full bg-red-500 rounded-t-full mt-5 mb-2 p-1 max-w-screen-md mx-auto">
  </div>
  <h2 className="text-white font-bold text-center">Screen</h2>


<div className="flex justify-center m-2 mx-auto max-w-screen-sm min-w-screen-sm">




<div className="">
  
  <div className="">
  {Array.from({ length: 13 }, (_, row) => (
    Array.from({ length:11 }, (_, col) => (
      <button
        key={`${row}-${col}`}
        onClick={() => handleSeatClick(`${String.fromCharCode(65 + row)}${col + 11}`)}
        className={`seat h-3 w-4 rounded-t text-xs m-1 sm:h-6 sm:w-8 ${selectedSeats.some((s) => s.seat === `${String.fromCharCode(65 + row)}${col + 11}`) ? 'bg-red-500' : 'bg-gray-300'}`}
        disabled={selectedSeats.length >= 10 && !selectedSeats.some((s) => s.seat === `${String.fromCharCode(65 + row)}${col + 11}`)}
      >
        {/* {String.fromCharCode(65 + row)}{col + 11}*/}
      </button>
    ))
  ))}
  </div>
</div>



</div>
<SeatInformation/>
      {selectedSeats.length > 0 && (
        <div className='pt-6' >
          <p>Selected seats: {selectedSeats.map((s) => s.seat).join(', ')}</p>
          <p>Total price: ${totalPrice.toFixed(2)}</p>
          <Link href={checkoutLink}>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Checkout
            </button>
          </Link>
        </div>
      )}


    </div>
  );
};




export default SeatSelector;







