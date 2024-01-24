import { useEffect, useState } from "react";
import Pokemon from '../Pokemon/Pokemon.jsx'
import './Pokemons.css'

function Pokemons() {
    const [stateList, setStateList] = useState({
        pokemonsRes: [],
        currUrl: 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0',
        nextUrl: '',
        prevUrl: '',
        isLoading: true
    });

    const downLoadData = async () => {
        try {

            const newObj={...stateList,isLoading:true}
            setStateList(newObj);

            const pokemons = await fetch(stateList.currUrl);
            const pokemonsToJson = await pokemons.json();


            const updates={...setStateList,nextUrl:pokemonsToJson.next,prevUrl:pokemonsToJson.previous,pokemonsRes: pokemonsToJson}

            setStateList(updates);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setStateList(prevState => ({ ...prevState, isLoading: false }));
        }
    }

    const changeCurrUrl = (url) => {
        setStateList(prevState => ({ ...prevState, currUrl: url }));
    }

    useEffect(() => {
        downLoadData();
    }, [stateList.currUrl])

    return (
        <>
            {(stateList.isLoading) ?
                <h1>Loading....</h1>
                :
                <div className="container">
                    <div className="pokemons-wrapper">
                        {(stateList.pokemonsRes.results) ? stateList.pokemonsRes.results.map((elem, index) => <Pokemon key={index} url={elem.url} />) : ""}
                    </div>
                    <div className="actions">
                        <button disabled={!stateList.prevUrl} onClick={() => changeCurrUrl(stateList.prevUrl)}>Prev</button>
                        <button disabled={!stateList.nextUrl} onClick={() => changeCurrUrl(stateList.nextUrl)}>Next</button>
                    </div>
                </div>
            }
        </>
    )
}

export default Pokemons;
