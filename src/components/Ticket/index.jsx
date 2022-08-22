import styles from './Ticket.module.scss'
import IconS7 from '../../assets/S7 Logo.svg'
import IconXiamen from '../../assets/XiamenAir Logo.svg'
import flyDuration from '../../utils/flyDuration'
import flyIntervals from '../../utils/flyIntervals'

const Ticket = ({ ticket }) => {
    const { id, companyId, price } = ticket
    const { origin, destination, dateStart, dateEnd, duration, stops } =
        ticket.info

    return (
        <>
            <div className={styles.wrapper} key={id}>
                <div className={styles.header}>
                    <div className={styles.price}>
                        {price.toLocaleString('ru-RU', {
                            style: 'currency',
                            currency: 'RUB',
                            minimumFractionDigits: 0,
                        })}
                    </div>
                    <img
                        className={styles.logo}
                        src={
                            companyId === 'cddfa038-823b-43b1-b18d-395731881077'
                                ? IconS7
                                : IconXiamen
                        }
                        alt='logo'
                    />
                </div>
                <div className={styles.footer}>
                    <div className={styles.destination}>
                        <div className={styles.titles}>
                            {origin + ' - ' + destination}
                        </div>
                        <div className={styles.values}>
                            {flyIntervals(dateStart, dateEnd)}
                        </div>
                    </div>
                    <div>
                        <div className={styles.titles}>В ПУТИ</div>
                        <div className={styles.values}>
                            {flyDuration(duration)}
                        </div>
                    </div>
                    <div>
                        <div className={styles.titles}>
                            {stops.length >= 2
                                ? stops.length + ' пересадки'
                                : 'без пересадок'}
                        </div>
                        <div className={styles.values}>
                            {stops.length >= 2 &&
                                stops
                                    .map((item) => {
                                        return item
                                    })
                                    .join(', ')}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ticket
