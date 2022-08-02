
import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    //estado inicial
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        //metodos
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemons: ( state,action ) => {
            state.isLoading = false;
            //configuramos el payload del action
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;

