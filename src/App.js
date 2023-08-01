import { useState,useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Banner from './Components/Banner.';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import Watchlist from './Components/Watchlist';

function App() {
  let [watchList,setWatchList]=useState([]);
  let [pageNo,setPageNo]=useState(1);

  let handleAddToWatchList=(movieObj)=>{
    // watchList.push(id);
    // setWatchList(watchList);
    // console.log(watchList); 
    let newWatchList=[...watchList,movieObj];
    localStorage.setItem("movies-app",JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    //console.log(newWatchList);
    //same thing in one line
    //setWatchList([...watchList,id]);
}

let handleRemoveFromWatchList=(movieObj)=>{
    let newWatchList=watchList.filter((movie)=>{
        return movie.id!=movieObj.id;
    });
    localStorage.setItem("movies-app",JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    //console.log(newWatchList);
}
useEffect(()=>{
  let favMoviesFromLocalStorage=JSON.parse(localStorage.getItem("movies-app"));
  if(favMoviesFromLocalStorage==null){
      return ;
  }
  setWatchList(favMoviesFromLocalStorage);
  //console.log(favMoviesFromLocalStorage);
},[]);


let handleNext=()=>{
    setPageNo(pageNo+1);
}

let handlePrev=()=>{
    if(pageNo>1){
        setPageNo(pageNo-1);
    }
    
}

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
          <Banner/>
          <Movies watchList={watchList} handleAddToWatchList={handleAddToWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                  setWatchList={setWatchList}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  pageNo={pageNo}/>
          </>
        }></Route>
        <Route path="/watchlist" element={
          <Watchlist watchList={watchList}
          handleRemoveFromWatchList={handleRemoveFromWatchList}
          setWatchList={setWatchList}/>
        }>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
