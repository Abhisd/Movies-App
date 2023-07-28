import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from "axios";
import { resolvePath } from "react-router-dom";
import { ShimmerSimpleGallery,ShimmerPostList } from "react-shimmer-effects-18";

export default function(){
    let [movies,setMovies]=useState(undefined);
    let [pageNo,setPageNo]=useState(1);
    let [watchList,setWatchList]=useState([]);
    
    let handleAddToWatchList=(id)=>{
        // watchList.push(id);
        // setWatchList(watchList);
        // console.log(watchList); 
        let newWatchList=[...watchList,id];
        localStorage.setItem("movies-app",JSON.stringify(newWatchList));
        setWatchList(newWatchList);
        //console.log(newWatchList);
        //same thing in one line
        //setWatchList([...watchList,id]);
    }

    let handleRemoveFromWatchList=(id)=>{
        let newWatchList=watchList.filter((moviesId)=>{
            return moviesId!=id;
        });
        localStorage.setItem("movies-app",JSON.stringify(newWatchList));
        setWatchList(newWatchList);
        //console.log(newWatchList);
    }
    let handleNext=()=>{
        setPageNo(pageNo+1);
    }

    let handlePrev=()=>{
        if(pageNo>1){
            setPageNo(pageNo-1);
        }
        
    }
    useEffect(()=>{
        let favMoviesFromLocalStorage=JSON.parse(localStorage.getItem("movies-app"));
        setWatchList(favMoviesFromLocalStorage);
        console.log(favMoviesFromLocalStorage);
    },[]);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=ef18ee10d1abf9cc39599d8923db0394&page=${pageNo}`)
        .then((response)=>{
            setMovies(response.data.results);
        })
    },[pageNo]);

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
            <div className="flex flex-wrap gap-3 justify-around my-3">
                {/*we will reuse MovieCard to show multiple movies which
                   will be having same structure */ }
                {movies.map((movieObj)=>{
                    return(<MovieCard 
                        id={movieObj.id}
                        key={movieObj.id} 
                        title={movieObj.title} 
                        poster_path={movieObj.poster_path}
                        watchList={watchList}
                        handleAddToWatchList={handleAddToWatchList}
                        handleRemoveFromWatchList={handleRemoveFromWatchList}/>
                    )
                })}
            </div> 
            <Pagination page={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>   
        </div>
    )
}