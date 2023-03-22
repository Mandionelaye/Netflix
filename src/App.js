import './App.css';
import {Routes, Route} from "react-router-dom";
import Desc from './mes Composants/route';
import Home from './mes Composants/Home';
import { useState } from 'react';
import { mesFilms } from './bd/bd';


function App() {
  const [monFilm,setMonfiml] = useState(mesFilms);
  function general(movie){
     setMonfiml(movie);
  }
  return (
    <>
    
             
    
    <Routes>
    <Route path="/" element={<Home monFilms={general}/>}></Route>
    <Route path="/film/:name" element={<Desc movies={monFilm}/>}></Route>
    </Routes>
    </>
  );
}

export default App;
