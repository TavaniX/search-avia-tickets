import { configureStore } from '@reduxjs/toolkit'
import companySlice from './slices/companySlice'

export const store = configureStore({
    reducer: {
        companySlice,
    },
})
