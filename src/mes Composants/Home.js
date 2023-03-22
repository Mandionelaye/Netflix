import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import Filter from './Filter';
import {MdCloudUpload} from "react-icons/md";
import MovieListe from './MovieListe';
import React, {useState } from 'react';
import logo from "../logo.png";
import { mesFilms } from '../bd/bd';

export default function Home({monFilms}) {
    const [films, setFilms]= useState(mesFilms);
    const [filterFilms, setFilterFilms]= useState(mesFilms);
    const [id,setId]= useState(0);
      const [titre, setTitre] = useState('');
      const [desc,setDesc] = useState('');
      const [poseterURL, setPosterURL] = useState('');
      const [urlV, setUrlV] = useState('');
      const [rating, setRating] = useState(0);
    const [show,setShow]= useState(false);
     const chargementsAjout =(film)=>{
      setFilms([...films, film]);
      setFilterFilms([...films, film]);
      monFilms([...films, film]);
     };
     const chargements =()=>{
      setId(films.length + 1);
    const movie = {id:id,title:titre,description:desc,posterURL:poseterURL,urlV:urlV,rating:rating};
    chargementsAjout(movie);
    setTitre('');
    setId(0);
    setDesc('');
    setUrlV('');
    setPosterURL('');
    setRating(0);
  };
     const chargementsFiltre=(filter)=>{
      switch(filter){
        case 'titre':
          setFilterFilms([...films].sort((a,b)=> a.title.localeCompare(b.title)));
          break;
          case "cros":
            setFilterFilms([...films].sort((a,b)=> b.rating - a.rating));
            break;
              case "3":
                setFilterFilms([...films].filter(elm=>elm.rating.toString()==="3"));
                break;
                case "4":
                  setFilterFilms([...films].filter(elm=>elm.rating.toString()==="4"));
                  break;
                  case "5":
                    setFilterFilms([...films].filter(elm=>elm.rating.toString()==="5"));
                    break;
          default:
            setFilterFilms(films);  
      } 
     }
     const change=()=>setShow(!show);
  return (
        <>
            <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
             <img src={logo} alt="lg" className="net" />
              
            
              <Filter addfiltre={chargementsFiltre} />
              <div className="d-flex">
              
                <button  className='x' type='submit' onClick={change}>{show===false?"ajouter":"Films"}</button>
              </div>
            </div>

          </nav>
         
      
       { show?
       <div className='from justify-content-center d-flex m-0 p-0'>    
         <div className='p-3'>
          <div className="input-group mb-3">
         <label htmlFor="tilte"className="input-group-text border border-danger text-danger bg-transparent">Titre</label>
         <input type="text"  value={titre} placeholder='titre du film' className="form-control text-danger bg-transparent border border-danger" onChange={(e)=>{
        setTitre(e.target.value);
      }}/></div>
       
         <div class="mb-3 frm border border-danger from " onClick={()=>document.querySelector("#loge").click()}>
          <input type="file"  id="loge" accept='image/*' hidden placeholder='image du film' onChange={(e)=>{
        if (e.target.files) {
         setPosterURL(URL.createObjectURL(e.target.files[0]));
        }
      }}/>
      {
        poseterURL?
        <img src={poseterURL} className='mt-3' width={100} height={130} alt="" />
        :
        <div className='mt-5'>
         <MdCloudUpload color='#ff4848' size={80}/>
         <p className='text-danger'>ajout une image</p>
         </div>
      }
      
      </div>
      <div className="input-group mb-3">
         <label htmlFor="tilte"className="input-group-text border border-danger text-danger bg-transparent">Bande Annonce</label>
         <input type="text"  value={urlV} placeholder='ajoute url de la bande annonce' className="form-control text-danger bg-transparent border border-danger" onChange={(e)=>{
        setUrlV(e.target.value);
      }}/></div>
       <div class="input-group mb-3">
          <label htmlFor="rating"className="input-group-text border border-danger text-danger bg-transparent">Rating</label>
          <select className='form-select bg-transparent text-danger border border-danger' onChange={(e)=>{setRating(e.target.value);}}>
            <option value=""selected></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select></div>
          <div class="input-group mb-3">
         <label htmlFor="description"className="input-group-text border border-danger text-danger bg-transparent">description</label>
         <textarea value={desc}  className="form-control bg-transparent text-danger border border-danger" placeholder='description du film' aria-label="With textarea" onChange={(e)=>{
        setDesc(e.target.value);
      }  }/></div>
          <div className='justify-content-center d-flex'>
          <button type='submit' className='btn btn-outline-danger' onClick={chargements}>ajoute Film</button>
          </div>
       </div>
       </div>
    :
       <div className='container-fluid'>
        <MovieListe movies={filterFilms} ></MovieListe>
        </div>
     }

        </>
  )
}
