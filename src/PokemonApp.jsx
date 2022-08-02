import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";


export const PokemonApp = () => {

    //samos useSelector de react-redux para extraer las propiedades del state
    const { page, isLoading, pokemons= [] } = useSelector(state => state.pokemons);

    //usamos el useDispatch() de react-redux para usar los metodos de pokemonSlice.js puede usar cualquier metodo del store
    const dispatch = useDispatch();

    //usamos el Hook useEffect para que solo se ejecute cuando el compoente es creado por primera vez y solo una vez 
    useEffect(() => {
        dispatch(getPokemons()) //llamamos al metodo del archivo thunks.js
    }, [])
    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: {isLoading ? 'True' : 'False'} </span>

            <ul>
                {
                    // podriamos tambien desestructurar pokemon y poner { name } para no usar pokemon.name y usar unicamente name
                    pokemons.map( pokemon => ( 
                        <li key={ pokemon.name }> { pokemon.name }</li>
                    ))
                   
                }
            </ul>

            {/* boton para cargar la siguente pagina, desabilitado si isLoading esta en true */}
            <button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(page))}
            >
                Next
            </button>

        </>
    )
}

