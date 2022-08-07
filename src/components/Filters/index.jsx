import React from 'react'
import styles from './Filters.module.scss'
import FiltersType from './FiltersType'

const Filters = ({ filterValues, type, title }) => {
    return (
        <div className={`filters ${type}`}>
            <div className={styles.filterTitle}>{title}</div>
            <FiltersType type={type} values={filterValues} />
        </div>
    )
}

export default Filters
