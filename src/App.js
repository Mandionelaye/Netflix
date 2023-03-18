import React, {useState } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import Filter from './mes Composants/Filter';
import {MdCloudUpload} from "react-icons/md";
import MovieListe from './mes Composants/MovieListe';
import logo from "./logo.png";



function App() {
  const [mesFilms,setMesFilms]= useState( [{
    id:1,
     title : "Black Adam",
     description: " Dans l'antique Kahndaq, l'esclave Teth Adam avait reçu les super-pouvoirs des dieux. Mais il en a fait usage pour se venger et a fini en prison. Cinq millénaires plus tard, alors qu'il a été libéré, il fait régner sa conception très sombre de la justice dans le monde.",
     posterURL:"/imges/blackA.jpg",
     rating:5
  },
  {
    id:2,
    title : "Black Panther: Wakanda Forever",
    description: "De retour au Wakanda, Okoye, tenue responsable de l'enlèvement de Shuri, est déchue de son titre de générale par Ramonda. Cette dernière décide alors de se rendre auprès de Nakia, qui vit à Haïti depuis l'attaque de Thanos. Elle lui demande alors de retrouver Shuri et Riri",
    posterURL:"/imges/blackp.jpg",
    rating:5
 },
 {
  id:3,
  title : "Avatar 2",
  description: "Des humains qui veulent profiter de leur avantage technologique pour coloniser Pandora car selon eux, le projet de clonage Avatar met trop de temps à avancer. Jake Sully, un marine paraplégique, va devoir choisir son camp entre les siens et les Na'vi à travers son propre avatar",
  posterURL:"/imges/avatare2.jpg",
  rating:5
},
{
  id:4,
  title : "Avatar 1",
  description: "Jake Sully, un ancien marine paraplégique, est recruté pour se rendre sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime. Parce que l'atmosphère de Pandora est toxique, les humains ont créé des doubles d'eux-mêmes, des avatars",
  posterURL:"/imges/Avatar1.jpg",
  rating:4
},
{
  id:5,
  title : "The Woman King",
  description: "La femme roi retrace l'HISTORE EXTRUCHIDAIRE DES AGOSJIÉ, UNÉTÉ DE GUERRRIERES QUI PROTÉGÈRENT LE ROYAUME DE DAHOMEY AU XIXÈME SIÈCLE EN AFRIQUE DE L'OUEST. Les aptitudes et Leur Fureur n'ont Jamais Trouvé d'Egal.",
  posterURL:"/imges/woman-king.webp",
  rating:5
},
{
  id:6,
  title : "Everything Everywhere All at Once",
  description: "Une femme sino-américaine usée par la vie est emportée dans une aventure irréelle où elle doit sauver ce qui est important pour elle en se connectant aux vies qu'elle aurait pu avoir dans d'autres univers parallèles.",
  posterURL:"/imges/Everything.webp",
  rating:4
},
{
  id:7,
  title : "Le Chat Potté 2 : la dernière quête",
  description: "Le Chat Potté découvre que sa passion pour l'aventure et son mépris du danger ont fini par lui coûter cher : il a épuisé huit de ses neuf vies, et en a perdu le compte au passage. Afin de retomber sur ses pattes notre héros velu se lance littéralement dans la quête de sa vie.",
  posterURL:"/imges/chat.jpg",
  rating:4
},
{
  id:8,
  title : "Vengeance aux poings",
  description: "Lorsqu'un tueur aux pouvoirs surnaturels traque un meurtrier à Bangkok, sa quête de vengeance se transforme en combat pour sauver le monde d'une menace ancienne",
  posterURL:"/imges/vengeance.jpg",
  rating:4
},
{
  id:9,
  title : "Troll",
  description: "Quand une explosion dans les montagnes norvégiennes réveille un troll, les autorités engagent une paléontologue intrépide pour stopper les dégâts mortels qu'il cause",
  posterURL:"/imges/troll.jfif",
  rating:5
},
{
  id:10,
  title : "Viking Wolf",
  description: "Juste après avoir emménagé dans une nouvelle ville, une adolescente assiste à un meurtre sauvage lors d'une soirée, et devient la proie de visions et de désirs étranges",
  posterURL:"/imges/viking.jpg",
  rating:4
},
{
  id:11,
  title : "Transformers : l'âge de l'extinction",
  description: "Quatre ans après les événements mouvementés de 'Transformers : La Face cachée de la Lune', un groupe de puissants scientifiques cherche à repousser, via des Transformers, les limites de la technologie.",
  posterURL:"/imges/Transformers4.jpg",
  rating:5
},
{
  id:12,
  title : "Venom : Let There Be Carnage",
  description: "Tom Hardy est de retour sous les traits de Venom, l'un des personnages les plus complexes de l'univers Marvel. En quête de son prochain scoop, le journaliste Eddie Brock décroche une interview exclusive avec le meurtrier condamné à mort Cletus Kasady (Woody Harrelson).",
  posterURL:"/imges/venom.jpg",
  rating:4
}
]);

  const [films, setFilms]= useState(mesFilms);
  const [filterFilms, setFilterFilms]= useState(mesFilms);
  const [id,setId]= useState(0);
    const [titre, setTitre] = useState('');
    const [desc,setDesc] = useState('');
    const [poseterURL, setPosterURL] = useState('');
    const [rating, setRating] = useState(0);
  const [show,setShow]= useState(false);

   const chargementsAjout =(film)=>{
    setFilms([...films, film]);
    setFilterFilms([...films, film]);
   };
   const chargements =()=>{
    setId(films.length + 1);
  const movie = {id:id,title:titre,description:desc,posterURL:poseterURL,rating:rating};
  chargementsAjout(movie);
  setTitre('');
  setId(0);
  setDesc('');
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

      console.log(films.length + 1);
      console.log(id);
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
         <div className='p-5'>
          <div className="input-group mb-3">
         <label htmlFor="tilte"className="input-group-text border border-danger text-danger bg-transparent">Titre</label>
         <input type="text"  value={titre} placeholder='titre du film' className="form-control text-danger bg-transparent border border-danger" onChange={(e)=>{
        setTitre(e.target.value);
      }}/></div>
       
         <label htmlFor="posterURL"className="mb-3 input-group-text text-center border border-danger text-danger bg-transparent">Ajoute l'affiche du film</label>
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
  );
}

export default App;
