import React from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import Categories from './components/Categories'

import './scss/app.scss'

const transits = {
    title: 'количество пересадок',
    values: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
    type: 'checkbox',
}
const companies = {
    title: 'компания',
    values: ['Все', 'S7 Airlines', 'XiamenAir'],
    type: 'radio',
}

const App = () => {
    return (
        <div className='wrapper'>
            <Header />
            <div className='content'>
                <aside>
                    <Filters transits={transits} />
                    <Filters transits={companies} />
                </aside>
                <main>
                    <Categories />
                </main>
            </div>
        </div>
    )
}

export default App
