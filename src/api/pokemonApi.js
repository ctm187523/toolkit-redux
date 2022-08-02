
import axios from 'axios';

//usamos axios para hacer la peticion http
export const pokemonApi = axios.create({

    //usamos la url base sin las variables de la url, ver linea 15 de thunks.js
    baseURL: 'https://pokeapi.co/api/v2'
});
