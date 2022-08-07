import React from 'react'
import styles from '../Filters.module.scss'

const FiltersType = ({ type, values }) => {
    if (type === 'checkbox') {
        values = [{ id: 0, name: 'Без пересадок' }, ...values]
    } else {
        values = [{ id: 0, name: 'Все' }, ...values]
    }

    return values.map((value) => {
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
}

export default FiltersType
