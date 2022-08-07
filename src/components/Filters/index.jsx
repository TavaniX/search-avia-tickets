import React from 'react'
import styles from './Filters.module.scss'
import FiltersType from './FiltersType'

const Filters = ({ filterValues }) => {
    const { title, values, type } = filterValues
    return (
        <div className={`filters ${type}`}>
            <div className={styles.filterTitle}>{title}</div>
            <FiltersType type={type} values={values} />
        </div>
    )
}

export default Filters
