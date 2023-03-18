import { useState } from "react";
import './movieCard.css';
export default function Filter({addfiltre}) {
    const [filter,setFilter] = useState("");

    const chargement=(e)=>{
        setFilter(e.target.value);
        addfiltre(e.target.value);
        console.log(e.target.value);
    };
  return (
    <div>
            <select className="danger"  id="filtre" onChange={chargement}>
            <option value=""selected>filtre</option>
            <option value="titre">titre</option>
            <option value="cros">croissant</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
  )
}
