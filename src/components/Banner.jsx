
import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import requests from '../api/request'
import {ReactComponent as PlayIcon}  from '../assests/play.svg'
import {ReactComponent as ListIcon}  from '../assests/list.svg'


import './Banner.css'

function Banner() {
    const [movie , setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            )
            if(setMovie.length===0){
                fetchData();
            }
            return request;
        }

        fetchData();
    }, [])


    function truncate(string , n) {
        return string?.length > n ? string.substr(0,n-1) + '........' : string ;
    }

  return (
    <div className='banner' style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    }}>

        <div className="banner__contents">
            <h1 className="banner__title">
                {movie.name}
            </h1>
            <div className="banner__button">
                <button className='banner__Btn play_Btn'><PlayIcon/>Play</button>
                <button className='banner__Btn play_Btn'><ListIcon/>My List</button>
            </div>
            <h1 className='banner__description'>
                { truncate(`${movie.overview}`,120)}
            </h1>
        </div>

        {/* <div className="banner__fadeBottom" /> */}
    </div>
  )
}

export default Banner