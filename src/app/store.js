import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import auth from 'api/auth'
import { mailAPI } from 'services/mail'

const store = configureStore({
    reducer: {
        [mailAPI.reducerPath]: mailAPI.reducer,
        auth: auth,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mailAPI.middleware)
})

setupListeners(store.dispatch)

export default store;