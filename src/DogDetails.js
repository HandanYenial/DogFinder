import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {Route} from "react-router-dom";

function DogDetails({dog}){
    if(!dog){
        return <Route path="/"element={<Navigate to="/" replace />}/>

    }
    return(
        <div>
            <h1> {dog.name} </h1>
            <img src={dog.image} alt={dog.name}/>
            <p> {dog.name} is {dog.age} years old.</p>
            <ul>
                {dog.facts.map((fact, index) =>(
                    <li key = { index }> { fact } </li>
                ))}
            </ul>
            <Link to="/dogs"> Back to List </Link>
        </div>
    );
}

export default DogDetails;
