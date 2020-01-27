import { createStore, combineReducers} from 'redux';
import todoReducer from './reducers/todoReducer';
import storage from 'redux-persist/es/storage';
import {persistStore, persistReducer} from 'redux-persist'
//import thunk from "redux-thunk";

const rootReduser = combineReducers({
    todo: todoReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReduser)
export default () => {
    const store = createStore(
        persistedReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

    const persistor = persistStore(store);
    return { store, persistor };
}
//export default store;