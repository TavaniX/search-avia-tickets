import React from 'react'
import styles from '../Filters.module.scss'

const FiltersType = ({ type, values }) => {
    return values.map((value, index) => {
        return (
            <div className={styles.filterControls} key={index}>
                <input
                    id={type + index}
                    className={'custom-' + type}
                    type={type}
                    name={'transits ' + type}
                ></input>
                <label htmlFor={type + index}>{value}</label>
            </div>
        )
    })
}

export default FiltersType
