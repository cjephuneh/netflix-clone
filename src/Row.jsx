import React, { useState, useEffect } from 'react'
import axios from './axios'
function Row({title}){
    const[movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            console.log(request)
            return request
        }
        fetchData() 

    }, [fetchUrl])

    console.log(movies)


    return(
        <div>
          <h2>{title}</h2> 
          {/* container -> posters */}  
          {movie.map(movie =>(
        <img scr={movie.poster_path} alt={movie.name}
          ))}
        </div>
    )
}

export default Row