import logoSvg from '../../assets/Logo.svg'
import SearchBar from '../SearchBar'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header>
            <img src={logoSvg} alt='logo' />
            <SearchBar />
            <hr className={styles.line} />
        </header>
    )
}

export default Header
