
//RTK Query es como fetch o Axios para hacer peticiones html
//optimiza las peticiones http

import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi"


export const TodoApp = () => {

    //usamos el Hook de React useState
    const [todoId, setTodoId] = useState(1);


    //importamos el customHook creado en el archivo todosApi.js
    //desestructuramos lo que nos interese de la peticion html, podemos
    //recibir el isLoadin sin tener que creearlo
    //con la variable algo vemos lo que contiene la peticion, lo comentamos

    //const algo = useGetTodosQuery();
    //console.log(algo)

    //renombramos la variable datas a todos y decimos que es un arreglo vacio, comentamos para usar el 
    //otro customHook creado del archivo todosApi.js
    // const { data: todos = [], isLoading } = useGetTodosQuery();

    //llamaos al custom Hook useGetTodoQuery() creado en todosApi.js
    const { data: todo, isLoading } = useGetTodoQuery(todoId);
    //console.log(todo);

    //funcion para modificar el setToroId del useState
    const nextTodo = () => {
        setTodoId(todoId + 1)
    }

    //funcion para modificar el setToroId del useState
    const previousTodo = () => {
        if (todo === 1) return;
        setTodoId(todoId - 1)
    }



    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />

            <h4>isLoading: {isLoading ? 'True' : 'False'} </h4>

            <pre> {JSON.stringify(todo)}</pre>

            <button onClick={previousTodo}>
                Previous todo
            </button>
            <button onClick={nextTodo}>
                Next todo
            </button>

            {/* comentamos para usar la otra peticion */}

            {/* <ul>
                {
                    todos.map(todos => (
                        <li key={todos.id}>
                            <strong>{todos.completed ? 'Done ' : 'Pending '}</strong>
                            { todos.title}
                        </li>
                    ))
                }
            </ul> */}

            {/* <button>
                Next Todo
            </button> */}
        </>
    )
}
