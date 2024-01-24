import './Pokedex.css'

import Pokemons from '../Pokemons/Pokemons';
import { useState } from 'react';
import SearchPokemon from '../SearchPokemon/SearchPokemon';

function Pokedex(){

    
    const[searchVal,setSearchVal]=useState("");
    const[isLoading,setIsLoading]=useState(true);

    const setSearch=(value)=>{

        setSearchVal(value.toLowerCase());
        console.log(value)

    }


    return(

        <>
         <div className='pokedex-container'>
            <h1>Pokedex</h1>
        <input type="text" value={searchVal} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Enter Pokemon name...."/>
    
        </div>


{ (searchVal)?<SearchPokemon name1={searchVal}/>:<div className="pokemons-wrapper">
        <Pokemons/>
        </div>
 }
 

        
        
        </>

       
        
    )
}



export default Pokedex;