import React from 'react'

import styles from './Filters.module.scss'

const Filters = ({ transits }) => {
    const { title, values, type } = transits
    return (
        <div className='filters'>
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
