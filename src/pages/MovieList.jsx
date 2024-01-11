// import React, { useEffect, useState } from 'react'

import '../index.css'
import { MovieCard } from '../components'
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';
export  function MovieList({apipath, inputsearch , title}) {

const {data : movies}= useFetch(apipath, inputsearch);
console.log(movies);

useEffect(() =>{
  document.title=title;
}, [title])
  return (
    <main>
      <section className='py-2.5'>
        <div className='flex justify-center flex-wrap gap-2 '>
          {movies.map((movie) =>(
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
