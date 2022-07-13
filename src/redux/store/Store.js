import rootreducer from "../reducer/RootReducer";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {createStore} from "redux";

const persistConfig={
    key:'persist-store',
    storage
};

const persistedReducer=persistReducer(persistConfig,rootreducer);
const store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store);
export default store;