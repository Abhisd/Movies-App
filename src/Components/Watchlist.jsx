
export default function Watchlist(){
let movies=[  
{adult: false,
backdrop_path: "/dWvDlTkt9VEGCDww6IzNRgm8fRQ.jpg",
id: 457332,
title: "Hidden Strike",
original_language: "en",
original_title: "Hidden Strike",
overview: "Two elite soldiers must escort civilians through a gauntlet of gunfire and explosions in this film starring Jackie Chan and John Cena.",
poster_path: "/zsbolOkw8RhTU4DKOrpf4M7KCmi.jpg",
media_type: "movie",
genre_ids: [
28,
12,
53
],
popularity: 149.715,
release_date: "2023-07-06",
video: false,
vote_average: 6.6,
vote_count: 11
},
{
adult: false,
backdrop_path: "/znUYFf0Sez5lUmxPr3Cby7TVJ6c.jpg",
id: 447277,
title: "The Little Mermaid",
original_language: "en",
original_title: "The Little Mermaid",
overview: "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
poster_path: "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
media_type: "movie",
genre_ids: [
12,
10751,
14,
10749
],
popularity: 4073.346,
release_date: "2023-05-18",
video: false,
vote_average: 6.393,
vote_count: 1118
},
{
adult: false,
backdrop_path: "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
id: 346698,
title: "Barbie",
original_language: "en",
original_title: "Barbie",
overview: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
media_type: "movie",
genre_ids: [
35,
12,
14
],
popularity: 4988.622,
release_date: "2023-07-19",
video: false,
vote_average: 7.572,
vote_count: 1443
},
{
adult: false,
backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
id: 872585,
title: "Oppenheimer",
original_language: "en",
original_title: "Oppenheimer",
overview: "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
media_type: "movie",
genre_ids: [
18,
36
],
popularity: 1219.274,
release_date: "2023-07-19",
video: false,
vote_average: 8.386,
vote_count: 863
},
{
adult: false,
backdrop_path: "/df8ya9FKghk0U45G2nJru6ZOuUK.jpg",
id: 1140066,
title: "Paradise",
original_language: "de",
original_title: "Paradise",
overview: "A man sees the dark side of the time-manipulating biotech company he works for when a crushing debt forces his wife to give up 40 years of her own life.",
poster_path: "/yGz88hNPcHUJkUx7MPm0Ue6GZt7.jpg",
media_type: "movie",
genre_ids: [
53,
878
],
popularity: 11.533,
release_date: "2023-06-24",
video: false,
vote_average: 7.4,
vote_count: 13
},
{
adult: false,
backdrop_path: "/5iXZJyEY2sDQMs7dHo9gH3qijmL.jpg",
id: 881209,
title: "Happiness for Beginners",
original_language: "en",
original_title: "Happiness for Beginners",
overview: "At a crossroads after her divorce, a schoolteacher ventures toward a fresh start in life — and love — when she signs up for a grueling group hiking trip.",
poster_path: "/rK4jb2t3J98IXjY9O3nc8bX9yqt.jpg",
media_type: "movie",
genre_ids: [
10749,
12,
35
],
popularity: 49.661,
release_date: "2023-07-27",
video: false,
vote_average: 6.577,
vote_count: 26
}
]
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
                            <div className="p-2 cursor-pointer"><i class="fa-solid fa-arrow-up"></i></div>
                            <div className="p-2">Ratings</div>
                            <div className="p-2 cursor-pointer"><i class="fa-solid fa-arrow-down"></i></div>
                        </th>
                        <th>Popularity</th>
                        <th>Genre</th>
                        <th className="text-red-500">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((moviesObj) => {
                        return (
                            <tr className="border-b-2">
                                <td className="flex items-center mx-4 py-4"><img className="h-[6rem] w-[10rem]" src={"https://image.tmdb.org/t/p/original/" + moviesObj.poster_path} alt="" />
                                    <div className="mx-5">{moviesObj.original_title}</div>
                                </td>
                                <td>{moviesObj.vote_average}</td>
                                <td>{moviesObj.popularity}</td>
                                <td>Action</td>
                                <td className="text-red-500"><i class="fa-solid fa-trash cursor-pointer" ></i></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
        
    )
}