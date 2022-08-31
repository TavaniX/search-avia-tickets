import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchParamsFrom: '',
    searchParamsTo: '',
}

const searchParamsSlice = createSlice({
    name: 'searchParams',
    initialState,
    reducers: {
        setSearchParamsFrom(state, action) {
            state.searchParamsFrom = action.payload
            console.log('new state FROM:', state.searchParamsFrom)
        },
        setSearchParamsTo(state, action) {
            state.searchParamsTo = action.payload
            console.log('new state TO:', state.searchParamsTo)
        },
    },
})

export const { setSearchParamsFrom, setSearchParamsTo } =
    searchParamsSlice.actions

export default searchParamsSlice.reducer
