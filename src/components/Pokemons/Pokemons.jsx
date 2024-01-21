import { useEffect, useState } from "react";
import Pokemon from '../Pokemon/Pokemon.jsx'
import './Pokemons.css'

function Pokemons(){

    const [pokemonsRes, setPokemonsRes] = useState([]);
    const [currUrl, setCurrUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const downLoadData = async () => {
        try {
            setIsLoading(true);

            const pokemons = await fetch(currUrl);
            const pokemonsToJson = await pokemons.json();

            setNextUrl(pokemonsToJson.next);
            setPrevUrl(pokemonsToJson.previous);
            setPokemonsRes([...pokemonsToJson.results]);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    }
    
    const changeCurrUrl = (url) => {
        setCurrUrl(url);
    }
   
    useEffect(() => {
        downLoadData();
    }, [currUrl])

    return (
        <>
            {(isLoading) ?
                <h1>Loading....</h1>
                :
                <div className="container">
                    <div className="pokemons-wrapper">
                        {pokemonsRes.map((elem, index) => <Pokemon key={index} url={elem.url} />)}
                    </div>
                    <div className="actions">
                        <button disabled={(!prevUrl)} onClick={() => setCurrUrl(prevUrl)}>Prev</button>
                        <button disabled={(!nextUrl)} onClick={() => setCurrUrl(nextUrl)}>Next</button>
                    </div>
                </div>
            }
        </>
    )
}

export default Pokemons;
