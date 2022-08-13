import React from 'react'
import Ticket from '../Ticket'
import Skeleton from '../Ticket/Skeleton'
import Button from '../Button'
import axios from 'axios'

import styles from '../Ticket/Skeleton.module.scss'

const ticketsURL = 'https://api.npoint.io/163b5e66df9f2741243e'

const Content = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [tickets, setTickets] = React.useState(null)

    React.useEffect(() => {
        axios.get(ticketsURL).then((response) => {
            setTickets(response.data)
            setIsLoading(false)
            window.scrollTo(0, 0)
        })
    }, [])

    return (
        <>
            {isLoading
                ? [...new Array(5)].map((_, index) => (
                      <Skeleton className={styles.main} key={index} />
                  ))
                : tickets.map((ticket) => (
                      <Ticket ticket={ticket} key={ticket.id} />
                  ))}
            <Button value={'показать еще 5 билетов'} />
        </>
    )
}

export default Content
