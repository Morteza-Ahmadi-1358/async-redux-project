import { applyMiddleware, createStore } from "redux";
import ProductsReducer from "./ProductsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const Store = createStore(ProductsReducer, composeWithDevTools(applyMiddleware(thunk, logger)))

export default Store