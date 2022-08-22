import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    companies: [],
    transits: [
        { id: 0, name: 'Без пересадок' },
        { id: 1, name: '1 пересадки' },
        { id: 2, name: '2 пересадки' },
        { id: 3, name: '3 пересадки' },
    ],
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
    },
})

export const { setCategoryId, setCompanies } = filterSlice.actions

export default filterSlice.reducer
