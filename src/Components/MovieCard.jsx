export default function MovieCard(props){


    return(
        <div className="hover:scale-105 duration-300 h-[40vh]
        w-[200px] rounded-2xl overflow-hidden bg-contain bg-center
        flex items-end flex-col justify-between "
        style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${props.poster_path})`}}>
        
        {props.watchList.includes(props.id) ?
        <div onClick={()=>{props.handleRemoveFromWatchList(props.id)}}className="cursor-pointer m-3 bg-stone-800
        h-8 w-8 flex items-center justify-center rounded-lg">
        &#10060;</div>:

        <div onClick={()=>{props.handleAddToWatchList(props.id)}} 
        className="cursor-pointer m-3 bg-stone-800
        h-8 w-8 flex items-center justify-center rounded-lg">
        &#128525;</div>
        }

        

        

        <div className="text-white bg-stone-700/50 w-full text-center p-4 text-1xl ">
            {props.title}
        </div>
        </div>
    )
}