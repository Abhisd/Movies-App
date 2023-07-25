import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from "axios";
import { resolvePath } from "react-router-dom";

export default function(){
    let [movies,setMovies]=useState(undefined);
    let [pageNo,setPageNo]=useState(1);
    
    let handleNext=()=>{
        setPageNo(pageNo+1);
    }

    let handlePrev=()=>{
        if(pageNo>1){
            setPageNo(pageNo-1);
        }
        
    }

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=ef18ee10d1abf9cc39599d8923db0394&page=${pageNo}`)
        .then((response)=>{
            //console.log(response);
            setMovies(response.data.results);
        })
    },[pageNo]);

    //conditional loading
    if(movies==undefined){
        return(
            <div>
                Loading...!
            </div>
        )
    }
    //console.log(movies);
    return(
        <div className="m-3">
            <div className="text-2xl font-bold text-center m-4 ">
                Trending Movies
            </div>
            <div className="flex flex-wrap gap-3 justify-around my-3">
                {/*we will reuse MovieCard to show multiple movies which
                   will be having same structure */ }
                {movies.map((movieObj)=>{
                    return(<MovieCard key={movieObj.id} title={movieObj.title} poster_path={movieObj.poster_path}/>
                    )
                })}
            </div> 
            <Pagination page={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>   
        </div>
    )
}