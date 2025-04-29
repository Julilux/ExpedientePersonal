import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { thunk } from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";

// Combinar reducers
const rootReducer = combineReducers({
  auth: loginReducer,
});

// Configurar Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Crear store
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);