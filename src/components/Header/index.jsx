import React from 'react'
import logoSvg from '../../assets/Logo.svg'
import SearchBar from '../SearchBar'

const Header = () => {
    return (
        <header>
            <img src={logoSvg} alt='logo' />
            <SearchBar />
            <hr className='line' />
        </header>
    )
}

export default Header
