import React from 'react'
import styles from './Filters.module.scss'

const Filters = ({ filterValues }) => {
    const { title, values, type } = filterValues
    return (
        <div className={`filters ${type}`}>
            <div className={styles.filterTitle}>{title}</div>
            {values.map((value, index) => {
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
            })}
        </div>
    )
}

export default Filters
