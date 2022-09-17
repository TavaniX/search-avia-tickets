import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import tickets from './slices/ticketsSlice'
import companies from './slices/companiesSlice'
import searchParams from './slices/searchParamsSlice'

export const store = configureStore({
    reducer: {
        filter,
        tickets,
        companies,
        searchParams,
    },
})
