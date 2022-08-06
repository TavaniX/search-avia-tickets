import React from 'react'
import styles from './Ticket.module.scss'
import IconS7 from '../../assets/S7 Logo.svg'
import IconXiamen from '../../assets/XiamenAir Logo.svg'

const Ticket = ({ tickets }) => {
    return (
        <>
            {tickets.map((ticket) => {
                const { id, logo, price, duration } = ticket
                const { route, time } = ticket.destination
                const { relevance, details } = ticket.transits
                return (
                    <div className={styles.wrapper} key={id}>
                        <div className={styles.header}>
                            <div className={styles.price}>{price}</div>
                            <img
                                className={styles.logo}
                                src={logo === 'S7' ? IconS7 : IconXiamen}
                                alt='logo'
                            />
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.destination}>
                                <div className={styles.titles}>{route}</div>
                                <div className={styles.values}>{time}</div>
                            </div>
                            <div>
                                <div className={styles.titles}>В ПУТИ</div>
                                <div className={styles.values}>{duration}</div>
                            </div>
                            <div>
                                <div className={styles.titles}>
                                    {relevance
                                        ? '2 пересадки'
                                        : 'без пересадок'}
                                </div>
                                <div className={styles.values}>
                                    {relevance && details}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Ticket
