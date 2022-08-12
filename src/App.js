import React from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import Categories from './components/Categories'
import Ticket from './components/Ticket'
import Button from './components/Button'

import './scss/app.scss'
import axios from 'axios'

const transits = [
    { id: 1, name: '1 пересадка' },
    { id: 2, name: '2 пересадки' },
    { id: 3, name: '3 пересадки' },
]

const companiesURL = 'https://api.npoint.io/a1b1c28b32d9785bb26c'
const ticketsURL = 'https://api.npoint.io/163b5e66df9f2741243e'

const App = () => {
    const [companies, setCompanies] = React.useState(null)
    const [tickets, setTickets] = React.useState(null)

    React.useEffect(() => {
        axios.get(companiesURL).then((response) => {
            setCompanies(response.data)
        })
    }, [])

    React.useEffect(() => {
        axios.get(ticketsURL).then((response) => {
            setTickets(response.data)
        })
    }, [])

    if (!companies) return null
    if (!tickets) return null

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
