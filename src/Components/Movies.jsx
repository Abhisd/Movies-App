
export default function(){
    return(
        <div className="m-3">
            <div className="text-2xl font-bold text-center m-4 ">
                Trending Movies
            </div>

            <div className="flex flex-wrap gap-3 justify-around">
                <div className="hover:scale-105 duration-300 h-[40vh] w-[200px] rounded-2xl overflow-hidden bg-contain bg-center flex items-end " style={{backgroundImage:`url(https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg)`}}>
                <div className="text-white bg-stone-700/50 w-full text-center p-4 text-1xl ">
                    John Wick
                </div>
                </div>

                {/* <div className="hover:scale-105 duration-300 h-[40vh] w-[200px] rounded-2xl overflow-hidden bg-contain bg-center flex items-end " style={{backgroundImage:`url(https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg)`}}>
                <div className="text-white bg-stone-700/50 w-full text-center p-4 text-1xl ">
                    John Wick
                </div>
                </div> */}
            </div>

            <div className="flex m-5 justify-center">
                <div className="mx-2 p-2 hover:cursor-pointer">Prev</div>
                <div className="mx-2 p-2 hover:cursor-pointer">1</div>
                <div className="mx-2 p-2 hover:cursor-pointer">Next</div>
            </div>
            
        </div>
    )
}