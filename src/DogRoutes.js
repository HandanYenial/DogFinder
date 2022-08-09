import React from "react";
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";


function DogRoutes({dogs}){
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/dogs">
                <DogList dogs={dogs}/>
            </Route>

            <Route path = "/dogs/:name">
                <DogDetails dogs = {dogs}/>
            </Route>

            <Route path="/"element={<Navigate to="/" replace />}/>
        
            </Routes>
        </BrowserRouter>
           
    );
}

export default DogRoutes;