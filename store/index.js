import { createStore } from "redux";
import { redusers } from "./redusers";
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(redusers, composeWithDevTools());