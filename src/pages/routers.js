import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {Pokemons} from './home';
import { Pokemon } from "./pokemon";

export const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Pokemons />} />
                <Route exact path="/pokemon/:id" element={<Pokemon />} />
            </Routes>        
        </BrowserRouter>
    );
}