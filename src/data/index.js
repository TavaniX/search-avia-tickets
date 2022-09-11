import React from 'react'
import { useDispatch } from 'react-redux'
import { setCompanies } from '../redux/slices/filterSlice'
import { setTickets } from '../redux/slices/ticketsSlice'
import { setIsLoading } from '../redux/slices/isLoadingSlice'
import axios from 'axios'

const COMPANIES_URL = 'https://api.npoint.io/a1b1c28b32d9785bb26c'
const TICKETS_URL = 'https://api.npoint.io/163b5e66df9f2741243e'

const Data = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        try {
            axios.get(TICKETS_URL).then((response) => {
                dispatch(setTickets(response.data))
                dispatch(setIsLoading(false))
            })
        } catch (error) {
            throw new error(`error getting tickets: ${error}`)
        }
    }, [dispatch])

    React.useEffect(() => {
        try {
            axios.get(COMPANIES_URL).then((response) => {
                dispatch(setCompanies(response.data))
            })
        } catch (error) {
            throw new error(`companies fetch error: ${error}`)
        }
    }, [dispatch])
}

export default Data
