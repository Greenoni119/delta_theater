import Head from 'next/head'
import React from 'react';
//import MovieList from '../components/MovieList';
import Movie from './movie';
import Link from 'next/link';//use this for later use

export default function Home() {
  return (
    <>
      <Head>
        <title>Delta Movie Theater</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
      <h2 className='text-5xl'>welcome to delta theater</h2>
      <Movie />
    </div>
    </>
  )
}
