import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from "axios";
import { resolvePath } from "react-router-dom";
import { ShimmerSimpleGallery,ShimmerPostList } from "react-shimmer-effects-18";

export default function(props){
    let [movies,setMovies]=useState(undefined);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=ef18ee10d1abf9cc39599d8923db0394&page=${props.pageNo}`)
        .then((response)=>{
            setMovies(response.data.results);
        })
    },[props.pageNo]);

    //conditional loading
    if(movies==undefined){
        return(
            <ShimmerSimpleGallery  card imageHeight={300} imageWidth={150} col={4} caption />
        )
    }
    //console.log(movies);
    return(
        <div className="m-3">
            <div className="text-2xl font-bold text-center m-4 ">
                Trending Movies
            </div>
            <div className="flex flex-wrap gap-3 justify-around my-3 cursor-pointer">
                {/*we will reuse MovieCard to show multiple movies which
                   will be having same structure */ }
                {movies.map((movieObj)=>{
                    return(<MovieCard 
                        movieObj={movieObj}
                        key={movieObj.id} 
                        title={movieObj.title} 
                        poster_path={movieObj.poster_path}
                        watchList={props.watchList}
                        handleAddToWatchList={props.handleAddToWatchList}
                        handleRemoveFromWatchList={props.handleRemoveFromWatchList}
                        />
                    )
                })}
            </div> 
            <Pagination page={props.pageNo} handleNext={props.handleNext} handlePrev={props.handlePrev}/>   
        </div>
    )
}