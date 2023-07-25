import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="flex  items-center border-y pb-2 drop-shadow-md">
            <img className="h-12 mx-6" src="https://cdn-icons-png.flaticon.com/128/4221/4221484.png"></img>
            <Link className="text-2xl font-bold underline mx-3 text-blue-500" to={"/"}>Movies</Link>
            <Link className="text-2xl font-bold underline mx-3 text-blue-500" to={"/watchlist"}>Watchlist</Link>
        </div>
    )
}