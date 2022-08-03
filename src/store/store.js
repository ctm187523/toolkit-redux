

import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './apis/todosApi';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';

export const store = configureStore({

  //utilizamos el reducer creado en store/slices/counter/counterSlice.js
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,

    //colocamos en el store el archivo todosApi.js usamos RTKQuery para hacer las peticiones http
    //nos crea un customHook, creamos lo que seria una propiedad computada [todosApi]
    [todosApi.reducerPath]: todosApi.reducer,
  },

  //creamos esta linea de codigo para usar el archivo todosApi.js para usar RTKQuery
  //un middleware es una funcion que se ejecuta antes que otra
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(todosApi.middleware )
});