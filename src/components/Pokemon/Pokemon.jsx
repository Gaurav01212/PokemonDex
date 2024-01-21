import { useEffect, useState } from "react";
import './Pokemon.css'



function Pokemon({url}){


const [pokemonDetail,setPokemonDetail]=useState({});
    
 const getPokemonDetails=async ()=>{
    const details=await fetch(url);

    const jsonDetails=await details.json();
    setPokemonDetail(jsonDetails);
    
 }
    
    useEffect(()=>{

        getPokemonDetails();

    },[url])


   return (
           <div className="pokemon-wrapper">
            <p className="name">{pokemonDetail.name}</p>
            {pokemonDetail.sprites && <img src={pokemonDetail.sprites.front_default} alt="Pokemon Image" id="img"/>
            }
              
           </div>
    )

}

export default Pokemon;