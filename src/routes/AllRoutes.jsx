import { Route, Routes } from "react-router-dom";
import { MovieDetails, MovieList,Search , PageNotFound } from "../pages/index";


export  function AllRoutes({inputsearch, setinputsearch}) {
  return (
    <>
     <Routes >
        <Route path="/"  element={<MovieList apipath="movie/now_playing" title="home" />} />
        <Route path="/movie/:id" element={<MovieDetails /> } />
        <Route path="/movies/top" element={<MovieList apipath="movie/top_rated" title="Top Rated"  /> } />
        <Route path="/movies/top/movie/:id" element={<MovieDetails  /> } />

        <Route path="/movies/popular" element={<MovieList apipath="movie/popular" title="Popular" /> } />
        <Route path="/movies/popular/movie/:id" element={<MovieDetails /> } />

        <Route path="/movies/upcoming" element={<MovieList  apipath="movie/upcoming" title="Upcoming" />  } />
        <Route path="/movies/upcoming/movie/:id" element={<MovieDetails />  } />

        <Route path="/movies/search" element={<Search apipath="search/movie"  />  } />
        <Route path="/movies/search/movie/:id" element={<MovieDetails />  } />
        <Route path="*" element={<PageNotFound />  } />


     </Routes>
    </>
  )
}
