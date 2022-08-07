import React from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import Categories from './components/Categories'
import Ticket from './components/Ticket'
import Button from './components/Button'

import './scss/app.scss'

const transits = {
    title: 'количество пересадок',
    values: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
}
const companies = {
    title: 'компания',
    values: ['Все', 'S7 Airlines', 'XiamenAir'],
}
const tickets = [
    {
        id: 0,
        price: '13 400 P',
        logo: 'S7',
        destination: {
            route: 'MOW-HKT',
            time: '10:45 - 08:00',
        },
        duration: '21ч 15м',
        transits: {
            relevance: false,
        },
    },
    {
        id: 1,
        price: '15 150 P',
        logo: 'XiamenAir',
        destination: {
            route: 'MOW-HKT',
            time: '10:45 - 08:00',
        },
        duration: '21ч 15м',
        transits: {
            relevance: true,
            details: 'HKG, JNB',
        },
    },
    {
        id: 2,
        price: '13 400 P',
        logo: 'S7',
        destination: {
            route: 'MOW-HKT',
            time: '10:45 - 08:00',
        },
        duration: '21ч 15м',
        transits: {
            relevance: false,
        },
    },
    {
        id: 3,
        price: '15 150 P',
        logo: 'XiamenAir',
        destination: {
            route: 'MOW-HKT',
            time: '10:45 - 08:00',
        },
        duration: '21ч 15м',
        transits: {
            relevance: true,
            details: 'HKG, JNB',
        },
    },
    {
        id: 4,
        price: '15 150 P',
        logo: 'XiamenAir',
        destination: {
            route: 'MOW-HKT',
            time: '10:45 - 08:00',
        },
        duration: '21ч 15м',
        transits: {
            relevance: true,
            details: 'HKG, JNB',
        },
    },
    {
        id: 5,
        price: '13 400 P',
        logo: 'S7',
        destination: {
            route: 'MOW-HKT',
            time: '10:45 - 08:00',
        },
        duration: '21ч 15м',
        transits: {
            relevance: false,
        },
    },
]

const App = () => {
    return (
        <div className='wrapper'>
            <Header />
            <div className='content'>
                <aside>
                    <Filters filterValues={transits} type='checkbox' />
                    <Filters filterValues={companies} type='radio' />
                </aside>
                <main>
                    <Categories />
                    <Ticket tickets={tickets} />
                    <Button value={'показать еще 5 билетов'} />
                </main>
            </div>
        </div>
    )
}

export default App
