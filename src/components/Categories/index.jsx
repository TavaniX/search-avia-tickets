import React from 'react'
import styles from './Categories.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId } from '../../redux/slices/filterSlice'

const Categories = () => {
    const dispatch = useDispatch()
    const categoryId = useSelector((state) => state.filter.categoryId)

    const types = [
        { id: 0, value: 'самый дешевый' },
        { id: 1, value: 'самый быстрый' },
        { id: 2, value: 'оптимальный' },
    ]

    return (
        <div className={styles.categories_wrapper}>
            {types.map((type) => {
                const { id, value } = type
                return (
                    <div
                        key={id}
                        onClick={() => dispatch(setCategoryId(id))}
                        className={
                            categoryId === id ? styles.active : styles.category
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
