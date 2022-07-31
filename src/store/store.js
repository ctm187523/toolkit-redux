

import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter';

export const store = configureStore({

  //utilizamos el reducer creado en store/slices/counter/counterSlice.js
  reducer: {
    counter: counterSlice.reducer,
  },
});