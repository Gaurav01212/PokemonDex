import { useState } from "react"
import Pokedex from "./components/Pokedex/Pokedex"
import CustomRoutes from './routes/CustomRoutes.jsx'
import './App.css'


function App() {

const[isDisplay,setIsDisplay]=useState(true);

const changeDisplayProp=()=>{
  setIsDisplay(false);
}

setTimeout(changeDisplayProp,7000);



 

    
  

 
  return (
    <>
    {(isDisplay)?<div className="alert">Note : <span>Venusaur</span> , 
     <span>Ivysuar</span>  Is Not Avaialble In The Database.Sorry for your inconveniance Caused...! </div>:""}
    <CustomRoutes/>
    </>
    
  )
}

export default App
