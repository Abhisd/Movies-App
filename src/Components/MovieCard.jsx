export default function MovieCard(props){


    return(
        <div className="hover:scale-105 duration-300 h-[40vh] w-[200px] rounded-2xl overflow-hidden bg-contain bg-center flex items-end "
        style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${props.poster_path})`}}>
        <div className="text-white bg-stone-700/50 w-full text-center p-4 text-1xl ">
                {props.title}
        </div>
        </div>
    )
}