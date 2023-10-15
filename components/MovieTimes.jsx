import React, { useState } from 'react';
import Link from 'next/link';
import SeatSelector from './SeatSelector';
import Image from 'next/image';
import Footer from './Footer'


const MovieTimes = ({ movie }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeClick = (time) => {
    console.log(`Selected movie: ${movie.title}, time: ${time}`);
    setSelectedTime(time);
  };
  
  return (
    <div  className=''>

      <div className='p-3'>

      <h1 className='pb-4 text-3xl text-center text-amber-300 lg:text-5xl lg:p-5'>{movie.title}</h1>
      
        <div className=' flex justify-center lg:flex-col lg:pt-5'>
        
        <Image className='rounded-3xl shadow-2xl lg:w-80 lg:mx-auto' src={movie.image} width={200} height={350} alt="Movie Poster" />
        
        <ul className='lg:flex lg:justify-center lg:p-5'>
        
        {movie.times.map((time, index) => (
          <li className='hover:text-amber-300 p-1 ml-5 text-gray-400 text-3xl pt-5 cursor-pointer' key={index}>
            <Link href={`/seat?title=${encodeURIComponent(movie.title)}&time=${encodeURIComponent(time)}&image=${encodeURIComponent(movie.image)}`}>
              <span onClick={() => handleTimeClick(time)}>{time}</span>
            </Link>
          </li>
        ))}
      </ul>

      </div>
      <div className=' pt-3 text-sm text-gray-400 flex text-center justify-center'>
         <div className='pr-10'>
          <h1 className='text-2xl lg:text-3xl'>Duration</h1>
          <p className='text-amber-300 lg:text-2xl'> {movie.duration} </p>
         </div>
         <div>
          <h1 className='text-2xl lg:text-3xl'>Rating</h1>
          <p className='text-amber-300 lg:text-2xl'> {movie.rating} </p>
          </div>
        </div>
        <div className=' pt-3 text-sm max-w-screen-md mx-auto'>
          <h1 className='text-2xl'>Description:</h1>
          <p className='text-gray-400 lg:text-xl lg:leading-9 '>{movie.description}</p>
        </div>

      </div>

      {selectedTime && <SeatSelector title={movie.title} time={selectedTime} />}
    
    </div>
  );
};

export default MovieTimes;