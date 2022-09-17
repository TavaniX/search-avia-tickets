import React from 'react'

import Ticket from '../Ticket'
import Skeleton from '../Ticket/Skeleton'
import Button from '../Button'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTickets } from '../../redux/slices/ticketsSlice'

import styles from '../Ticket/Skeleton.module.scss'

const Content = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchTickets())
    }, [])

    const { tickets, status } = useSelector((state) => state.tickets)
    const pages = useSelector((state) => state.filter.pages)

    return (
        <>
            <div className='test'>
                {status === 'loading'
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
