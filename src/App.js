import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Banner from './Components/Banner.';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import Watchlist from './Components/Watchlist';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
          <Banner/>
          <Movies />
          </>
        }></Route>
        <Route path="/watchlist" element={
          <Watchlist/>
        }>

        </Route>
      </Routes>
    </BrowserRouter>
    // <>
    // <Navbar />
    // <Banner />
    // <Movies />
    // <Watchlist />
    // </>
  );
}

export default App;
