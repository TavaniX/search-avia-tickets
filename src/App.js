import React from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import Categories from './components/Categories'
import Content from './components/Content'
// import { useSelector, useDispatch } from 'react-redux'

import './scss/app.scss'
import axios from 'axios'

const transits = [
    { id: 1, name: '1 пересадка' },
    { id: 2, name: '2 пересадки' },
    { id: 3, name: '3 пересадки' },
]

const COMPANIES_URL = 'https://api.npoint.io/a1b1c28b32d9785bb26c'
const CHECKBOX = 'checkbox'
const RADIO = 'radio'

const App = () => {
    const [companies, setCompanies] = React.useState(null)

    React.useEffect(() => {
        try {
            axios.get(COMPANIES_URL).then((response) => {
                setCompanies(response.data)
            })
        } catch (error) {
            console.log('error getting companies: ', error)
        }
    }, [])

    if (!companies) return null

    return (
        <div className='wrapper'>
            <Header />
            <div className='content'>
                <aside>
                    <Filters
                        filterValues={transits}
                        type={CHECKBOX}
                        title='количество пересадок'
                    />
                    <Filters
                        filterValues={companies}
                        type={RADIO}
                        title='компании'
                    />
                </aside>
                <main>
                    <Categories />
                    <Content />
                </main>
            </div>
        </div>
    )
}

export default App
