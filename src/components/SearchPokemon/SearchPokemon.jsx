import React, { useEffect, useState } from "react";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import "./SearchPokemon.css"

function SearchPokemon({ name1 }) {
  const [searchData, setSearchData] = useState(null);

  const downLoadData = async () => {
    console.log(name1);

    try {
      const getData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name1}`);
      const dataToJson = await getData.json();
      setSearchData(dataToJson);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    downLoadData();
  }, [name1]);

   
  useEffect(()=>{
    console.log("name changed!");
    console.log(searchData)
  },[])


  return (
    <div>

      { (!searchData)?<div className="loading"></div>:
       
       

        <PokemonDetails searchId={searchData.id}/>
     
      }

    </div>
  );
}

export default SearchPokemon;
