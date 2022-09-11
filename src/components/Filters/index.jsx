import styles from './Filters.module.scss'
import { useSelector } from 'react-redux'

const Filters = ({ type, title }) => {
    let values = null
    const companies = useSelector((state) => state.filter.companies)
    const transits = useSelector((state) => state.filter.transits)

    type === 'checkbox'
        ? (values = transits)
        : (values = [{ id: 0, logo: '', name: 'Все' }, ...companies])

    const filtersToDisplay = values.map((value) => {
        return (
            <div className={styles.filterControls} key={value.id}>
                <input
                    id={type + value.id}
                    className={'custom-' + type}
                    type={type}
                    name={'transits ' + type}
                ></input>
                <label htmlFor={type + value.id}>{value.name}</label>
            </div>
        )
    })

    return (
        <div className={`${styles.filters} ${type}`}>
            <div className={styles.filterTitle}>{title}</div>
            <div>{filtersToDisplay}</div>
        </div>
    )
}

export default Filters
