import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./app-reducer/app-reducer";
import {tableBetonReducer} from "./tableBeton-reducer/tableBeton-reducer";



const rootReducer = combineReducers({
    app:appReducer,
    tableBeton:tableBetonReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>
