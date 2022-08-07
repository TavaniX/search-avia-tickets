import React from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import Categories from './components/Categories'
import Ticket from './components/Ticket'
import Button from './components/Button'

import './scss/app.scss'
import axios from 'axios'

const transits = [
    // { id: 0, name: 'Без пересадок' },
    { id: 1, name: '1 пересадка' },
    { id: 2, name: '2 пересадки' },
    { id: 3, name: '3 пересадки' },
]

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

const companiesURL = 'https://api.npoint.io/a1b1c28b32d9785bb26c'

const App = () => {
    const [companies, setCompanies] = React.useState(null)

    React.useEffect(() => {
        axios.get(companiesURL).then((response) => {
            setCompanies(response.data)
        })
    }, [])

    if (!companies) return null

    return (
        <div className='wrapper'>
            <Header />
            <div className='content'>
                <aside>
                    <Filters
                        filterValues={transits}
                        type='checkbox'
                        title='количество пересадок'
                    />
                    <Filters
                        filterValues={companies}
                        type='radio'
                        title='компании'
                    />
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
