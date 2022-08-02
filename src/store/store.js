

import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';

export const store = configureStore({

  //utilizamos el reducer creado en store/slices/counter/counterSlice.js
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },
});