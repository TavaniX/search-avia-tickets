import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    companyId: 1,
    name: 'XiamenAir',
}

const companySlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        setCompanyId(state, action) {
            state.companyId = action.payload
        },
    },
})

export const { setCompanyId } = companySlice.actions

export default companySlice.reducer
