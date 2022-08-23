import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import tickets from './slices/ticketsSlice'
import isLoading from './slices/isLoadingSlice'

export const store = configureStore({
    reducer: {
        filter,
        tickets,
        isLoading,
    },
})
