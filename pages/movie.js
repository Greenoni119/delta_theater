import React, { useState } from 'react';
import Link from 'next/link';
import MovieTimes from '../components/MovieTimes';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Nav from '@/components/Nav';


const movies = [
  {
    title: 'Transformers',
    times: ['10:00 AM', '1:00 PM', '4:00 PM'],
    description: 'a science-fiction action film directed by Michael Bay, released in 2007. The movie tells the story of an epic battle between two races of robots: the heroic Autobots and the evil Decepticons, who are both searching for a powerful object known as the AllSpark. The Autobots, led by their leader Optimus Prime, come to Earth in search of the AllSpark, which has fallen into the hands of the humans. Meanwhile, the Decepticons, led by Megatron, also arrive on Earth, determined to find the AllSpark and use it to destroy the planet. The film follows a young teenager named Sam Witwicky, who unwittingly becomes embroiled in the battle between the two groups of robots, and must help the Autobots find the AllSpark before it falls into the hands of the Decepticons. With non-stop action, stunning visual effects, and a memorable cast of characters, "Transformers" is a thrilling ride that will keep you on the edge of your seat from start to finish.',
    image:"/TF1.jpg",
  },
  {
    title: 'Transformers 2',
    times: ['11:00 AM', '2:00 PM', '5:00 PM'],
    description: 'the heroic Autobots continuing to protect the planet Earth from the evil Decepticons. However, a new threat emerges in the form of the ancient Decepticon known as The Fallen, who seeks to enslave humanity and destroy the Autobots once and for all. The movie follows Sam Witwicky, who is drawn back into the conflict when he discovers that his mind contains the key to finding a powerful artifact that The Fallen needs to complete his plan. Along with the Autobots, Sam and his girlfriend Mikaela must race against time to stop The Fallen and save the world from destruction. With epic battles, stunning visual effects, and new characters like the revenge-seeking Decepticon known as Starscream, "Transformers: Revenge of the Fallen" is an action-packed thrill ride that will leave you breathless.',
    image:"/TF2.jpg",
  },
  {
    title: 'Transformers 3',
    times: ['12:00 PM', '3:00 PM', '6:00 PM'],
    description: 'When a top-secret government agency discovers that the wreckage of an alien spacecraft on the moon holds a powerful weapon, the Autobots are drawn into a new battle that takes them from the depths of the ocean to the streets of Chicago. Meanwhile, Sam Witwicky finds himself caught up in a conspiracy that involves the Decepticons and a wealthy businessman with his own agenda. As the Autobots and Decepticons clash in a final showdown for the fate of the Earth, Sam and his friends must race against time to stop a devastating plot that threatens to destroy the planet. With breathtaking action sequences, stunning visual effects, and new characters like the deadly Decepticon Shockwave, "Transformers: Dark of the Moon" is an epic adventure that will keep you on the edge of your seat until the very end.',
    image:"/TF3.jpg",
  },
  {
    title: 'John Wick',
    times: ['10:00 AM', '1:00 PM', '4:00 PM'],
    description: 'The movie follows the story of a former hitman named John Wick, who has retired from his life of violence and crime after the death of his wife. However, when his beloved dog is killed by a gangsters son, John is forced to come out of retirement to seek revenge. As John sets out on his mission, he finds himself up against some of the deadliest assassins in the criminal underworld, including his former colleague Marcus and the ruthless crime lord Viggo Tarasov. With thrilling action sequences, impressive stunt work, and a standout performance by Keanu Reeves as John Wick, the movie is a gripping tale of vengeance and redemption that will keep you on the edge of your seat from start to finish. "John Wick" has since become a fan-favorite and spawned a successful franchise, with two sequels and a fourth movie in production.',
    image:"/WICK1.jpg",
  },
  {
    title: 'john wick 2',
    times: ['11:00 AM', '2:00 PM', '5:00 PM'],
    description: 'The film picks up where the first movie left off, with legendary hitman John Wick (Keanu Reeves) forced out of retirement once again when a former associate seeks to take control of an international assassins guild. John travels to Rome to fulfill a blood oath he made to help his associate, but he soon finds himself in the crosshairs of some of the worlds deadliest killers. As John battles to survive against impossible odds, he must confront his past and come to terms with the choices that have led him to this moment. With intense action sequences, stunning visuals, and a standout performance by Reeves, "John Wick: Chapter 2" is a thrilling continuation of the story of one of the most iconic action heroes of recent years.The film picks up where the first movie left off, with legendary hitman John Wick (Keanu Reeves) forced out of retirement once again when a former associate seeks to take control of an international assassins guild. John travels to Rome to fulfill a blood oath he made to help his associate, but he soon finds himself in the crosshairs of some of the worlds deadliest killers. As John battles to survive against impossible odds, he must confront his past and come to terms with the choices that have led him to this moment. With intense action sequences, stunning visuals, and a standout performance by Reeves, "John Wick: Chapter 2" is a thrilling continuation of the story of one of the most iconic action heroes of recent years.',
    image:"/WICK2.jpg",
  },
  {
    title: 'john wick 3',
    times: ['12:00 PM', '3:00 PM', '6:00 PM'],
    description: 'The movie follows the story of the legendary hitman John Wick (Keanu Reeves), who is on the run after being declared excommunicado by the international assassins guild known as the High Table. With a $14 million bounty on his head, John is forced to fight for his life against waves of skilled assassins from around the world. Along the way, he seeks out allies, including the mysterious Bowery King (Laurence Fishburne) and the lethal Sofia (Halle Berry), as he tries to find a way to clear his name and regain his freedom. With stunning action sequences, breathtaking stunts, and a standout performance by Reeves, John Wick: Chapter 3 – Parabellum is a thrilling ride that will keep you on the edge of your seat until the very end.',
    image:"/WICK3.jpg",
  }, 
  {
    title: ' the closer',
    times: ['11:00 AM', '2:00 PM', '5:00 PM'],
    description: 'The special features Chappelle performing live in front of an audience, delivering his trademark blend of insightful social commentary and irreverent humor. In "The Closer," Chappelle addresses a wide range of topics, including cancel culture, the transgender community, and the COVID-19 pandemic. His material is often controversial and provocative, but always delivered with Chappelles signature wit and intelligence. The special received mixed reviews, with some critics praising Chappelles comedic talent and fearlessness in tackling difficult subjects, while others criticized him for being insensitive and offensive. Regardless of your perspective, The Closer is a thought-provoking and entertaining comedy special that showcases Chappelles unique voice and perspective.',
    image:"/closer.jpg",
  },
  {
    title: 'sword art online',
    times: ['12:00 PM', '3:00 PM', '6:00 PM'],
    description: 'The movie is set in the year 2026 and follows the story of Kirito and his friends, who are avid players of a virtual reality game called Ordinal Scale. The game uses an advanced augmented reality technology that enables players to experience the games world in the real world. When a new device called the Augma is released, which uses a similar technology as the Ordinal Scale, strange things begin to happen. Players start experiencing memory loss and become unable to differentiate between the game and reality. Kirito and his friends must uncover the truth behind these strange occurrences before they threaten the lives of players around the world. As Kirito and his friends delve deeper into the mystery, they encounter new challenges and enemies, including a dangerous group of players known as the Four Knights of the Apocalypse. With stunning animation, epic battle scenes, and a compelling storyline.',
    image:"/sao.jpg",
  },
  {
    title: 'conjoring 3',
    times: ['10:00 AM', '1:00 PM', '4:00 PM'],
    description: ' based on the real-life case of Arne Cheyenne Johnson, who was the first person in the United States to claim demonic possession as a defense in a murder trial. The movie follows paranormal investigators Ed and Lorraine Warren (Patrick Wilson and Vera Farmiga) as they investigate a series of demonic possession cases and confront an evil force that threatens their lives and the lives of those around them. In The Conjuring: The Devil Made Me Do It, Ed and Lorraine must unravel a mystery that begins with the possession of a young boy and leads to a sinister conspiracy that puts their own lives in danger. With chilling atmosphere, jump scares, and intense performances by the lead actors. The Conjuring: The Devil Made Me Do It is a worthy addition to the popular horror franchise that will leave audiences on the edge of their seats.',
    image:"/conjor.jpg",
  },
  {
    title: 'sherlock holmes',
    times: ['11:00 AM', '2:00 PM', '5:00 PM'],
    description: 'Sherlock Holmes is a 2009 action-adventure mystery film directed by Guy Ritchie and starring Robert Downey Jr. as the iconic detective, Sherlock Holmes. The film is based on the characters created by Sir Arthur Conan Doyle and follows Holmes and his trusted companion, Dr. John Watson (played by Jude Law), as they investigate a series of mysterious and interconnected crimes in Victorian-era London. Holmes, with his exceptional deductive skills and keen attention to detail, and Watson, with his medical expertise and practicality, make for a formidable duo as they navigate a dangerous web of deception and intrigue. Along the way, they encounter a wide range of colorful characters, including Holmes arch-nemesis, the brilliant and diabolical Professor James Moriarty (played by Jared Harris). With fast-paced action sequences, stunning visuals, and a witty script, Sherlock Holmes brings a fresh and exciting take on the beloved classic characters. Robert Downey Jr. delivers a charismatic and dynamic performance as Holmes, perfectly capturing the characters eccentricities and brilliance, while Jude Law provides an excellent foil as the more grounded and practical Watson. Overall, Sherlock Holmes is a thrilling and entertaining adventure that will delight fans of the original stories and newcomers alike.',
    image:"/holmes.jpg",
  },
  {
    title: 'the arival',
    times: ['12:00 PM', '3:00 PM', '6:00 PM'],
    description: 'The Arrival is a 2016 science fiction film directed by Denis Villeneuve and starring Amy Adams, Jeremy Renner, and Forest Whitaker. The film follows linguistics professor Louise Banks (played by Adams) who is recruited by the U.S. military to help communicate with alien beings that have landed on Earth. As Louise and a team of scientists work to decipher the alien language, tensions mount between nations as they struggle to understand the intentions of the extraterrestrial visitors. Meanwhile, Louise begins to experience vivid flashbacks that may hold the key to unlocking the mystery of the aliens arrival and their true purpose on Earth. With breathtaking cinematography and a thought-provoking script, The Arrival is a unique and cerebral take on the classic sci-fi trope of first contact with extraterrestrial life. The film explores themes of communication, perception, and the nature of time, making for an engrossing and satisfying viewing experience. Amy Adams delivers a nuanced and emotionally resonant performance as Louise, while Villeneuves masterful direction creates an atmosphere of tension and wonder that keeps viewers on the edge of their seats.',
    image:"/arrival.jpg",
  }
];

const Movie = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='bg-zinc-700 text-red-400'>
      {selectedMovie ? (
        <MovieTimes movie={selectedMovie} />
        ) : (
          <div className=''>
<div className='header-banner '>
<div className='title pb-7 text-red-400'>
<h2 className='text-4xl'>Delta Theater</h2>
<h3 className='text-2xl'>Brentwood ca</h3>
</div>
</div>
<Nav/>

        <div className='pt-5'>
            <h1 className='text-2xl'>Out Now</h1>
        <ul className=''>
          <Slider {...settings}>
          {movies.slice(0,5).map((movie, index ) => (
            <li key={index} className='text-center'>
              <button onClick={() => handleMovieClick(movie)}>
                
              <Image src={movie.image} width={150} height={50} alt="image not working" className='rounded-xl' />
              </button>
            </li>
          ))}
       </Slider> 
       </ul>
</div>

<div className='pt-10'>
  <h1 className='text-2xl'>New Releases </h1>
       <ul className=''>
  <Slider {...settings}>
  {movies.slice(0,5).map((movie, index ) => (
    <li key={index} className='text-center'>
      <button onClick={() => handleMovieClick(movie)}>
        
      <Image src={movie.image} width={150} height={50} alt="image not working" className='rounded-xl' />
      </button>
    </li>
  ))}
</Slider> 
</ul>
</div>

<div className='pt-10'>
  <h1 className='text-2xl'>Comming Soon </h1>
       <ul className=''>
  <Slider {...settings}>
  {movies.slice(0,7).map((movie, index ) => (
    <li key={index} className='text-center'>
      <button onClick={() => handleMovieClick(movie)}>
        
      <Image src={movie.image} width={150} height={50} alt="image not working" className='rounded-xl'/>
      </button>
    </li>
  ))}
</Slider> 
</ul>
</div>
        </div>

      )}
      <br />

     
 <Link href="/"><span>Back to home ()</span></Link>




    </div>
  );
};

export default Movie;