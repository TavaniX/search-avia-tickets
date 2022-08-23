import styles from './Button.module.scss'
import { useDispatch } from 'react-redux'
import { setPages } from '../../redux/slices/filterSlice'

const Button = ({ value, pages }) => {
    const dispatch = useDispatch()

    const handleButtonClick = () => {
        dispatch(setPages(pages + 5))
    }

    return (
        <div className={styles.button} onClick={handleButtonClick}>
            {value}
        </div>
    )
}

export default Button
