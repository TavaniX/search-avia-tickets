import React from 'react'
import styles from './Categories.module.scss'

const Categories = () => {
    const [category, setCategory] = React.useState('самый дешевый')
    const type = ['самый дешевый', 'самый быстрый', 'оптимальный']

    return (
        <div className={styles.categories_wrapper}>
            {type.map((item, index) => {
                return (
                    <div
                        key={item}
                        onClick={() => setCategory(type[index])}
                        className={
                            category === item ? styles.active : styles.category
                        }
                    >
                        {type[index]}
                    </div>
                )
            })}
        </div>
    )
}

export default Categories
