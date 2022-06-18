import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import auth from 'api/auth'
import { mailAPI } from 'services/mail'
import { contentAPI } from 'services/content'

const store = configureStore({
    reducer: {
        [mailAPI.reducerPath]: mailAPI.reducer,
        [contentAPI.reducerPath]: contentAPI.reducer,
        auth: auth,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mailAPI.middleware)
})

setupListeners(store.dispatch)

export default store;