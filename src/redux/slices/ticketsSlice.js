import { createSlice } from '@reduxjs/toolkit'

const initialState = { tickets: [] }

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        setTickets(state, action) {
            state.tickets = action.payload
        },
    },
})

export const { setTickets } = ticketsSlice.actions

export default ticketsSlice.reducer
