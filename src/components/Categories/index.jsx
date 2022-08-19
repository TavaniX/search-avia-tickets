import React from 'react'
import styles from './Categories.module.scss'

const Categories = () => {
    const [category, setCategory] = React.useState(0)

    const type = [
        { id: 0, value: 'самый дешевый' },
        { id: 1, value: 'самый быстрый' },
        { id: 2, value: 'оптимальный' },
    ]

    return (
        <div className={styles.categories_wrapper}>
            {type.map((item) => {
                const { id, value } = item
                return (
                    <div
                        key={id}
                        onClick={() => setCategory(id)}
                        className={
                            category === id ? styles.active : styles.category
                        }
                    >
                        {value}
                    </div>
                )
            })}
        </div>
    )
}

export default Categories
