import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import { PokemonApp } from './PokemonApp'

import { store } from './store'
import { TodoApp } from './TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    {/* proporcionamos Redux a toda la aplicacion y le pasamos como parametro 
    el store(donde se almacenara la informacion) creado en store/store.js*/}
    <Provider store={store}>
      {/* <PokemonApp /> */}
      {/* <App /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
)
