import React, { useState } from 'react';
import "./movieCard.css";
import { MdStar } from 'react-icons/md';
export default function MovieCard({title, description, posterURL, rating}) {
  const [affDesc,SetAffDesc]= useState(false);

  const afficher=()=>SetAffDesc(true);
  const cache=()=>SetAffDesc(false);
  const grande ={height: "822px", maxWidth: "370px" ,margin:0,transition: "0.8s",boxShadow: "15px -15px 6px rgba(89, 87, 87, 0.527)"};
  const grandimg ={maxWidth: "370px", height: "600px",transition: "0.8s",boxShadow: "-15px -15px 6px rgba(89, 87, 87, 0.527)"};
  const text = {maxWidth: "370px",transition: "0.8s"}
  return (
    <>
     <div className="film m-3" style={affDesc?grande:null}  onMouseOver={afficher} onMouseOut={cache}>
       <img className='img' style={affDesc?grandimg:null} src={posterURL} alt="img"  />
       <div className='text' style={affDesc?text:null}>
       <h6 className='titre'>{title}</h6>
       {affDesc?
       <p>{description}</p>:null
       }
       <samp>{rating===1?<MdStar size={20} color='#FFD700'/>:
                   rating===2?<><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/></>:
                   rating===3?<><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/></>:
                   rating===4?<><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/></>:
                   rating===5?<><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/></>:null
       }
       note:{rating}</samp>
       </div>
       </div>
   </> 
  )
}
