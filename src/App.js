import React from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import Categories from './components/Categories'
import Content from './components/Content'

import './scss/app.scss'
import axios from 'axios'

const transits = [
    { id: 1, name: '1 пересадка' },
    { id: 2, name: '2 пересадки' },
    { id: 3, name: '3 пересадки' },
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
                    <Content />
                </main>
            </div>
        </div>
    )
}

export default App
