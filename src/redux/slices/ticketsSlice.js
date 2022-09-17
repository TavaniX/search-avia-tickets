import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const TICKETS_URL = 'https://api.npoint.io/163b5e66df9f2741243e'

export const fetchTickets = createAsyncThunk(
    'tickets/fetchTicketsStatus',
    async () => {
        const { data } = await axios.get(TICKETS_URL)
        return data
    }
)

const initialState = {
    tickets: [],
    status: 'loading',
}

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        setTickets(state, action) {
            state.tickets = action.payload
        },
    },
    extraReducers: {
        [fetchTickets.pending]: (state) => {
            state.status = 'loading'
            state.tickets = []
        },
        [fetchTickets.fulfilled]: (state, action) => {
            state.status = 'success'
            state.tickets = action.payload
        },
        [fetchTickets.rejected]: (state) => {
            state.status = 'error'
            state.tickets = []
        },
    },
})

export const { setTickets } = ticketsSlice.actions

export default ticketsSlice.reducer
