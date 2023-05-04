import React, { useState } from 'react';
import Link from 'next/link';
import SeatSelector from './SeatSelector';
import Image from 'next/image';
import Calander from './Calander';
const MovieTimes = ({ movie }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeClick = (time) => {
    console.log(`Selected movie: ${movie.title}, time: ${time}`);
    setSelectedTime(time);
  };
  const contentStyle = {
    position: 'relative',
    zIndex: 1,
  };
  return (
    <div style={contentStyle} className='h-screen' >

      <div className='p-3'>
      <h1 className='pb-4 text-3xl text-center text-teal-500'>{movie.title}</h1>
      
        <div className='flex clear-both'>
        
        <Image className='rounded-3xl shadow-2xl ' src={movie.image} width={200} height={350} alt="Movie Poster" />
        
        <ul className=''>
<div className='ml-3'><Calander /></div>
      
        {movie.times.map((time, index) => (
          <li className='hover:text-teal-400 pb-3 ml-5 text-gray-400 text-3xl pt-5' key={index}>
            <Link href={`/seat?title=${encodeURIComponent(movie.title)}&time=${encodeURIComponent(time)}&image=${encodeURIComponent(movie.image)}`}>
              <span onClick={() => handleTimeClick(time)}>{time}</span>
            </Link>
          </li>
        ))}
      </ul>
      </div>
      <div className=' pt-3 text-sm text-gray-400 flex text-center justify-center'>
         <div className='pr-10'>
          <h1 className='text-2xl'>Duration</h1>
          <p className='text-teal-400'> {movie.duration} </p>
         </div>
         <div>
          <h1 className='text-2xl'>Rating</h1>
          <p className='text-teal-400'> {movie.rating} </p>
          </div>
        </div>
        <div className=' pt-3 text-sm'>
          <h1 className='text-2xl'>Description:</h1>
          <p className='text-gray-400'>{movie.description}</p>
        </div>

      </div>
      
      {selectedTime && <SeatSelector title={movie.title} time={selectedTime} />}
    
    </div>
  );
};

export default MovieTimes;