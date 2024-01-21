import './Pokedex.css'

import Pokemons from '../Pokemons/Pokemons';

function Pokedex(){


    return(

        <>
         <div className='pokedex-container'>
            <h1>Pokedex</h1>
        <input type="text" placeholder="Enter Pokemon name...."/>
    
        </div>

        <div className="pokemons-wrapper">
        <Pokemons/>
        </div>

        
        </>

       
        
    )
}



export default Pokedex;