import styles from './Button.module.scss'

const Button = ({ value, pages, setPages }) => {
    return (
        <div className={styles.button} onClick={() => setPages(pages + 5)}>
            {value}
        </div>
    )
}

export default Button
