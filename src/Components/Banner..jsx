import axios from "axios";
import { useEffect, useState } from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects-18";
export default function Banner(){
    let [movieObj,setMovieObj]=useState({});

    useEffect(()=>{
        //fetching data from API
        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=ef18ee10d1abf9cc39599d8923db0394")
        .then((response)=>{
            //console.log(response.data.results);
            let movies=response.data.results;
            let randomMovie=movies[Math.floor(20*Math.random())];
            //console.log(randomMovie);
            setMovieObj(randomMovie);
    
        });
    },[]);

    if(movieObj.poster_path==undefined){
        return(
            <ShimmerSimpleGallery card imageHeight={300} caption />        )
    }
    
   
    

    return(
        <div className="h-[90vh] bg-cover bg-center hover:bg-contain hover:bg-no-repeat duration-1000  flex items-end " style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})`}}>
            <div className="text-white bg-stone-600/50 w-full text-center p-4 text-1xl ">
                {movieObj.title}
            </div>
        </div>
    )
}