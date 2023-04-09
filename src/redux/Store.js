import { configureStore } from '@reduxjs/toolkit'
import userDataSlice from '../redux/Redux'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
const persistConfig = {
    key: 'userData',
    storage
}
const reducers = combineReducers({ cricketers: userDataSlice })
const persistedReducer = persistReducer(persistConfig, reducers)
export default configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})
