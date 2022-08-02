
//los Thunks son una accion asincrona que dispara otra accion cuando resuelve la peticion asincrona

import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState) => {
        //llamar al metodo startLoadingPokemons del Slice pokemonSlice.js
        dispatch( startLoadingPokemons() );

        //realizar peticion http, para realizar la peticion usaremos la librera Axios

        //primeramente la haremos con fetch, el offset seria al pagina que queremos ver, lo comentamos
        //const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10}`)
        //const data = await resp.json(); //almacenamos en la variable data el resultado en formato json
        //console.log(data);

        //usamos el archivo pokemosApi.js de la carpeta api para hacer la peticion http mediante Axios
        //en el metodo get ponemos solo el trozo de la url que es variable dependiendo de la peticion ver linea 15
        //al hacerlo con Axio no hace falta que creemos la variable data de la linea 16 lo hace esta libreria automaticamente
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10}`)
       
        //llamamos al metodo setPokemons del Slice pokemonSlice.js y le pasamos el resultado obtenido de la consulta http
        dispatch( setPokemons( { pokemons: data.results, page: page +1 }) );
    }
}