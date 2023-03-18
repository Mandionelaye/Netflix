import { useState } from "react";

export default function Addmovie({onAddMovie}) {
    
    function handletitre(e){
        setTitre(e.target.value);
      }
      function handleDesc(e){
        setDesc(e.target.value);
      }  
    
      function handleImg(e){
        if (e.target.files) {
         setPosterURL(URL.createObjectURL(e.target.files[0]));
        }
      }
      function handleRating(e){
         setRating(e.target.value);
      }
     
  
    

 
  return (
    
  )
}
