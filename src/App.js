import React from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import Categories from './components/Categories'
import Content from './components/Content'
import { useDispatch } from 'react-redux'
import { setCompanies } from './redux/slices/filterSlice'
import axios from 'axios'

import './scss/app.scss'

const COMPANIES_URL = 'https://api.npoint.io/a1b1c28b32d9785bb26c'
const CHECKBOX = 'checkbox'
const RADIO = 'radio'

const App = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        try {
            axios.get(COMPANIES_URL).then((response) => {
                dispatch(setCompanies(response.data))
            })
        } catch (error) {
            throw new error(`companies fetch error: ${error}`)
        }
    })

    return (
        <div className='wrapper'>
            <Header />
            <div className='content'>
                <aside>
                    <Filters type={CHECKBOX} title='количество пересадок' />
                    <Filters type={RADIO} title='компании' />
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
