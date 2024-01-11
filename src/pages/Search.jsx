import { useSearchParams } from 'react-router-dom';
import { MovieCard } from '../components'
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';


export  function Search({apipath , inputsearch}) {
const [searchParams] = useSearchParams();
const queryterm= searchParams.get("q");
  const {data : movies}= useFetch(apipath, queryterm);
  useEffect(() =>{
    document.title=`Results For ${queryterm}`
  })
  return (
    <main>
      <p className='text-3xl text=gray-700 dark:text-white'>
        {movies.length === 0 ? "No Result Found" : `Result for ${queryterm}`} 
      </p>
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
