import styles from './Categories.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId } from '../../redux/slices/filterSlice'

const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.filter.categories)
    const categoryId = useSelector((state) => state.filter.categoryId)

    const handleCategoryClick = (id) => {
        dispatch(setCategoryId(id))
    }

    return (
        <div className={styles.categories_wrapper}>
            {categories.map((category) => {
                const { id, value } = category
                return (
                    <div
                        key={id}
                        onClick={() => handleCategoryClick(id)}
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
