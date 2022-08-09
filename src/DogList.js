import React from "react";
import { Link } from "react-router-dom";

function DogList({dogs}){
    return(
        <div>
            <h1> Dog List </h1>
            <div>
                {dogs.map(dog =>(
                    <div key = {dog.id}>
                        <img src={dog.image} alt={dog.name}/>
                        <h4><Link to = {`/dogs/${dog.name.toLowerCase()}`}> {dog.name} </Link></h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogList;

