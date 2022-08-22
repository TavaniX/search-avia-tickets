import React from 'react'
import Ticket from '../Ticket'
import Skeleton from '../Ticket/Skeleton'
import axios from 'axios'
import styles from '../Ticket/Skeleton.module.scss'
import Button from '../Button'

const TICKETS_URL = 'https://api.npoint.io/163b5e66df9f2741243e'

const Content = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [tickets, setTickets] = React.useState(null)
    const [pages, setPages] = React.useState(5)

    React.useEffect(() => {
        try {
            axios.get(TICKETS_URL).then((response) => {
                setTickets(response.data)
                setIsLoading(false)
            })
        } catch (error) {
            throw new error (`error getting tickets: ${error}`)
        }
    }, [pages])

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
            <Button
                value={'Показать еще 5 билетов'}
                pages={pages}
                setPages={setPages}
            />
        </>
    )
}

export default Content
