import { useEffect, useState } from "react";
import genreids from "../Utility/genere";

export default function Watchlist(props){
    let {handleRemoveFromWatchList,watchList,setWatchList}=props;
    let [genreList,setGenreList]=useState(["All Genres"]);
    let [currGenre,setCurrGenre]=useState("All Genres");
    let [search,setSearch]=useState("");

    useEffect(()=>{
        let temp=watchList.map((movie)=>{
            return genreids[movie.genre_ids[0]];
        })
        temp=new Set(temp);
        setGenreList(["All Genres",...temp]);
    },[watchList]);

    let sortIncreasing=()=>{
        let sorted=watchList.sort((movieA,movieB)=>{
            return movieA.vote_average - movieB.vote_average;
        })
        //console.log(sorted);
        setWatchList([...sorted]);
    }

    let sortDecreasing=()=>{
        let sorted=watchList.sort((movieA,movieB)=>{
            return movieB.vote_average - movieA.vote_average;
        })

        setWatchList([...sorted]);
    }

    let handleFilter=(genere)=>{
        setCurrGenre(genere);
    }

    let handleSearch=(e)=>{
        setSearch(e.target.value);
    }
    return (
        <>
        <div className="flex justify-center  my-4 flex-wrap">
            {genreList.map((genre)=>{
                return <div onClick={()=>handleFilter(genre)} className={currGenre==genre?"m-4 h-[3rem] w-[15rem] bg-blue-400 rounded-xl text-white flex justify-center items-center font-bold cursor-default":
                "m-4 h-[3rem] w-[15rem] bg-gray-300 rounded-xl text-white flex justify-center items-center font-bold hover:cursor-pointer"}>{genre}</div>
            })}
            
        </div>
        <div className="flex justify-center my-4">
            <input onChange={handleSearch} value={search} className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 text-lg"
            type="text" placeholder="Search Movie" />
        </div>
        <div className="m-7 overflow-hidden border rounded-lg shadow-md">
            <table className="w-full text-center p-4 ">
                <thead className=" h-[3rem] bg-gray-100 border-b-2">
                    <tr>
                        <th>Name</th>
                        <th className="flex items-center justify-evenly">
                            <div onClick={sortIncreasing} className="p-2 cursor-pointer"><i className="fa-solid fa-arrow-up"></i></div>
                            <div className="p-2">Ratings</div>
                            <div onClick={sortDecreasing} className="p-2 cursor-pointer"><i className="fa-solid fa-arrow-down"></i></div>
                        </th>
                        <th>Popularity</th>
                        <th>Genre</th>
                        <th className="text-red-500">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {watchList.filter((movieObj)=>{
                        if(currGenre=="All Genres"){
                            return true;
                        }
                        return genreids[movieObj.genre_ids[0]]==currGenre;
                    })
                    .filter((movieObj)=>{
                        return movieObj.title.toLowerCase().includes(search.toLowerCase());
                    })
                    .map((moviesObj) => {
                        return (
                            <tr className="border-b-2">
                                <td className="flex items-center mx-4 py-4"><img className="h-[6rem] w-[10rem]" src={"https://image.tmdb.org/t/p/original/" + moviesObj.poster_path} alt="" />
                                    <div className="mx-5">{moviesObj.title}</div>
                                </td>
                                <td>{moviesObj.vote_average}</td>
                                <td>{moviesObj.popularity}</td>
                                <td>{genreids[moviesObj.genre_ids[0]]}</td>
                                <td className="text-red-500"><i onClick={()=>handleRemoveFromWatchList(moviesObj)} className="fa-solid fa-trash cursor-pointer" ></i></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
        
    )
}