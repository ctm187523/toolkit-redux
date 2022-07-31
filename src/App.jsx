
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counter';

function App() {

  //vamos a utilizar el store creado en store.js utilizando Redux
  //importamos de react-redux useSelector para poder seleccionar lo que necesitemos
 // le decimos que del state use el counter(el nombre que pusimos en el initialState) ver store.js y counterSlice.js
  const { counter } = useSelector ( state => state.counter )
  //usamos el dispatch  de react-redux que se encargara de realizar las acciones creadas en counterSlice.js
  const dispatch = useDispatch();

  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>count is: { counter }</p>
      <p>
        {/* usamos la accion increment del dispatch(ver linea 14) */}
        <button type="button" onClick={ () =>  dispatch( increment() )}>
          Increment
        </button>
        <button type="button" onClick={ () =>  dispatch( decrement() )}>
          Decrement
        </button>
        <button type="button" onClick={ () =>  dispatch( incrementBy(2) )}>
          Increment by 2
        </button>
      </p>
      
    </header>
  </div>
  )
}

export default App
