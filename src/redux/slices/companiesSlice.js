import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const COMPANIES_URL = 'https://api.npoint.io/a1b1c28b32d9785bb26c'

export const fetchCompanies = createAsyncThunk(
    'companies/fetchCompaniesStatus',
    async () => {
        const { data } = await axios.get(COMPANIES_URL)
        return data
    }
)

const initialState = {
    companies: [],
    status: 'loading',
}

export const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        setCompanies(state, action) {
            state.companies = action.payload
        },
    },
    extraReducers: {
        [fetchCompanies.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchCompanies.fulfilled]: (state, action) => {
            state.status = 'success'
            state.companies = action.payload
            console.log('success bitch')
        },
        [fetchCompanies.rejected]: (state) => {
            state.status = 'error'
        },
    },
})

export const { setCompanies } = companiesSlice.actions

export default companiesSlice.reducer
