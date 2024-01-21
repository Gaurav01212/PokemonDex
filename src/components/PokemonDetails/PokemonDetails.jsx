
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PokemonDetails.css';


function PokemonDetails(){

    const[p,setPokemonDetail]=useState({});

    const {id}=useParams();
    console.log(id);

    const downloadDetails=async()=>{

        try{
            const details=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

            const detailsToJson=await details.json();

            setPokemonDetail(detailsToJson);

            
        }
        catch(err){
            console.log("erro occured while getting details of pokemon");
        }



       

    }


    useEffect(()=>{
        downloadDetails();
     },[])



    return (

        <div>
            <h1><span>Pokemon</span> Details</h1>

            <div className="details">
                <img src={(p.sprites)?p.sprites.front_default:""} alt=""  id='img'/>
                <ul>
                    <li> <pre>Name   : <span>{p.name}</span> </pre></li>
                    <li> <pre>Height : <span>{p.height}</span> </pre></li>
                    <li><pre>Weight : <span>{p.weight} kg</span></pre> </li>
                    <li><pre>Order  : <span>{p.order}</span></pre></li>
                </ul>
            </div>


        </div>
        


    )
}


export default PokemonDetails;