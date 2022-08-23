import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTickets } from '../../redux/slices/ticketsSlice'
import { setIsLoading } from '../../redux/slices/isLoadingSlice.js'

import Ticket from '../Ticket'
import Skeleton from '../Ticket/Skeleton'
import Button from '../Button'

import axios from 'axios'
import styles from '../Ticket/Skeleton.module.scss'

const TICKETS_URL = 'https://api.npoint.io/163b5e66df9f2741243e'

const Content = () => {
    const isLoading = useSelector((state) => state.isLoading.isLoading)
    const tickets = useSelector((state) => state.tickets.tickets)
    const pages = useSelector((state) => state.filter.pages)

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
    }, [])

    return (
        <>
            <div className='test'>
                {isLoading
                    ? [...new Array(pages)].map((_, index) => (
                          <Skeleton className={styles.main} key={index} />
                      ))
                    : tickets
                          .slice(0, pages)
                          .map((ticket) => (
                              <Ticket ticket={ticket} key={ticket.id} />
                          ))}
            </div>
            <Button value={'Показать еще 5 билетов'} pages={pages} />
        </>
    )
}

export default Content
