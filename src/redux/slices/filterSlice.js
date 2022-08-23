import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [
        { id: 0, value: 'самый дешевый' },
        { id: 1, value: 'самый быстрый' },
        { id: 2, value: 'оптимальный' },
    ],
    categoryId: 0,
    companies: [],
    transits: [
        { id: 0, name: 'Без пересадок' },
        { id: 1, name: '1 пересадки' },
        { id: 2, name: '2 пересадки' },
        { id: 3, name: '3 пересадки' },
    ],
    pages: 5,
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        setCompanies(state, action) {
            state.companies = action.payload
        },
        setPages(state, action) {
            state.pages = action.payload
        },
    },
})

export const { setCategoryId, setCompanies, setPages } = filterSlice.actions

export default filterSlice.reducer
