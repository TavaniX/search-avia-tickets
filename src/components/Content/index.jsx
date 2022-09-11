import Ticket from '../Ticket'
import Skeleton from '../Ticket/Skeleton'
import Button from '../Button'
import { useSelector } from 'react-redux'

import styles from '../Ticket/Skeleton.module.scss'

const Content = () => {
    const isLoading = useSelector((state) => state.isLoading.isLoading)
    const tickets = useSelector((state) => state.tickets.tickets)
    const pages = useSelector((state) => state.filter.pages)

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
