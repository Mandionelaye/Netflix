import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../logo.png";
import { MdStar } from 'react-icons/md';
import ReactPlayer from 'react-player/lazy';

export default function MovieDesc({titre,description,rating,urlV}) {
  return (
    <>
         <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
             <img src={logo} alt="lg" className="net" />
              
              <div className="d-flex">
              
                <button  className='x' type='submit'><Link to="/" className='link'>back</Link></button>
              </div>
            </div>

          </nav>
          <div className='justify-content-center d-flex co'>
          <div className='container bg'>
        <ReactPlayer className="video" url={urlV}  config = {{ youtube: { playerVars: { showinfo: 1 } }}} 
         playing={true}  loop={true} controls={false} width={"100%"}  height={"60%"}/>
        <h2>{titre}</h2>
      <p>{description}</p>
      <samp>{rating.toString()==='1'?<MdStar size={20} color='#FFD700'/>:
                   rating.toString()==='2'?<><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/></>:
                   rating.toString()==='3'?<><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/></>:
                   rating.toString()==='4'?<><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/></>:
                   rating.toString()==='5'?<><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/><MdStar size={20} color='#FFD700'/></>:null
       }
       note:{rating}</samp>
       </div>
       </div>
    </>
  )
}
