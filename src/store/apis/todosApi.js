
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//usamos RTKQuery para hacer las peticiones http
export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        //la url sin parametros
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    //los endpoints son diferentes funciones para traer la informacion
    endpoints: (builder) => ({

        getTodos: builder.query({
            //concatenamos los parametros para la url para la peticion pedida
            query: () => '/todos'
        })
    })

})

//nos crea un customhook llamado useGetTodosQuery desde donde obtendremos la informacion de las peticiones
export const { useGetTodosQuery }= todosApi;