import React, { useState } from 'react';
import Link from 'next/link';
import SeatSelector from './SeatSelector';
import Image from 'next/image';

const MovieTimes = ({ movie }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeClick = (time) => {
    console.log(`Selected movie: ${movie.title}, time: ${time}`);
    setSelectedTime(time);
  };

  return (
    <div>
      <div className='flex'>
        <Image src={movie.image} width={350} height={350} alt="Movie Poster" />
        <div><p>{movie.description}</p></div>
      </div>
      <ul>
        {movie.times.map((time, index) => (
          <li key={index}>
            <Link href={`/seat?title=${encodeURIComponent(movie.title)}&time=${encodeURIComponent(time)}&image=${encodeURIComponent(movie.image)}`}>
              <span onClick={() => handleTimeClick(time)}>{time}</span>
            </Link>
          </li>
        ))}
      </ul>
      {selectedTime && <SeatSelector title={movie.title} time={selectedTime} />}
    </div>
  );
};

export default MovieTimes;