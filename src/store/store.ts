import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./slices/cart";
import createSagaMiddleware from 'redux-saga'
import { todosReducer } from "./reducers/todo";
import { saga } from "./saga";
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    todos : todosReducer
  },
  middleware: (getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(sagaMiddleware);
  }
});

sagaMiddleware.run(saga);