import genreids from "../Utility/genere";

export default function Watchlist(props){
    let {handleRemoveFromWatchList,watchList}=props;
    return (
        <>
        <div className="flex justify-center  my-4">
            <div className="h-[3rem] w-[15rem] bg-blue-400 rounded-xl
            text-white flex justify-center items-center font-bold">All Genres</div>
        </div>
        <div className="flex justify-center my-4">
            <input className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 text-lg"
            type="text" placeholder="Search Movie" />
        </div>
        <div className="m-7 overflow-hidden border rounded-lg shadow-md">
            <table className="w-full text-center p-4 ">
                <thead className=" h-[3rem] bg-gray-100 border-b-2">
                    <tr>
                        <th>Name</th>
                        <th className="flex items-center justify-evenly">
                            <div className="p-2 cursor-pointer"><i className="fa-solid fa-arrow-up"></i></div>
                            <div className="p-2">Ratings</div>
                            <div className="p-2 cursor-pointer"><i className="fa-solid fa-arrow-down"></i></div>
                        </th>
                        <th>Popularity</th>
                        <th>Genre</th>
                        <th className="text-red-500">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {watchList.map((moviesObj) => {
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