
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//usamos RTKQuery para hacer las peticiones http, mantiene informacion en la cache durante
//un minuto para agilizar las peticiones y no pedirla de nuevo si se mantiene en cache
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
        }),

        //este metodo es para hacer una peticion por ID
        getTodo: builder.query({
            //concatenamos los parametros para la url para la peticion pedida
            query: (todoId) => `/todos/${ todoId }`
        })
    })

})

//nos crea un customhook llamado useGetTodosQuery desde donde obtendremos la informacion de las peticiones
//usamos tambien el useGetTodoQuery para hacer la consulta por id
export const { useGetTodosQuery, useGetTodoQuery} = todosApi;