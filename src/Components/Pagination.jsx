import { useState } from "react"

export default function Pagination(prop){

    return(
        <div className="flex m-5 justify-center bg-gray-400 text-white">
                <div onClick={prop.handlePrev} className="mx-2 p-2 hover:cursor-pointer"><i className="fa-solid fa-arrow-left"></i></div>
                <div className="mx-2 p-2 cursor-default">{prop.page}</div>
                <div onClick={prop.handleNext} className="mx-2 p-2 hover:cursor-pointer"><i className="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}