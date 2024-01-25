import React, { useEffect, useState } from "react";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import "./SearchPokemon.css"

function SearchPokemon({ name1 }) {
  const [searchData, setSearchData] = useState(null);
  const [isLoading,setIsLoading]=useState(true);

  setTimeout(()=>{
    setIsLoading(false);
  },2000);

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

      { (!searchData)?(isLoading)?<div className="loading"></div>:<h1>Dhang se Search karo Bhai !!!</h1>:
       
       

        <PokemonDetails searchId={searchData.id}/>
     
      }

    </div>
  );
}

export default SearchPokemon;
