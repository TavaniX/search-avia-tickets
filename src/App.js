import React from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import Categories from './components/Categories'
import Content from './components/Content'
import Data from './data'

import './scss/app.scss'

const CHECKBOX = 'checkbox'
const RADIO = 'radio'

const App = () => {
    return (
        <div className='wrapper'>
            <Data />
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
