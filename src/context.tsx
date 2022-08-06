import { createContext } from "react";
import { Action } from "./models/store/reducer";
import { initialState } from "./models/store/state";

const initialContext = {
    state: initialState,
    dispatch: (action: Action) => {}
    
}
export const Context = createContext(initialContext);