import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../../utils/axios';
import requests from '../../utils/requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await  axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
            ]
            )
            return request;
        }
        fetchData()
    }, []);


    return (
      <header className="banner"
      style={{
          backgroundSize: "cover",
          backgroundImage: `url(
              "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,
          backgroundPosition: "center center",
      }}>
          <div className="banner__contents">
            <h1
                className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
                </h1> 
       

        <div className="banner__buttons">
             <button className="banner__button">Play</button>
             <button className="banner__button">My List</button>

        </div>

        <h1 className="banner__description">{movie?.overview}</h1>

          </div>
      </header>
    )
}

export default Banner