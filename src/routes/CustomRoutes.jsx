import{Routes,Route} from 'react-router-dom'
import PokeDex from '../components/Pokedex/Pokedex.jsx'
import PokemonDetails from '../components/PokemonDetails/PokemonDetails.jsx'

function CustomeRoutes(){

    return(

        <Routes>
            <Route path="/" element={<PokeDex/>}></Route>
            <Route path="/pokemon/:id" element={<PokemonDetails/>}></Route>
        </Routes>
    )
}


export default CustomeRoutes;