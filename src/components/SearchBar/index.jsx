import React from 'react'
import 'antd/dist/antd.css'
import { DatePicker, Input } from 'antd'

const SearchBar = () => {
    const onChange = (date, dateString) => {}

    return (
        <div className='search-wrapper'>
            <Input
                className='input-search'
                placeholder='Откуда'
                maxLength={3}
                allowClear={true}
            />
            <Input
                className='input-search'
                placeholder='Куда'
                maxLength={3}
                allowClear={true}
            />
            <DatePicker
                placeholder='Когда'
                className='input-search '
                onChange={onChange}
                placement='topRight'
                format='DD.MM.YYYY'
            />
            <DatePicker
                placeholder='Обратно'
                className='input-search'
                onChange={onChange}
                placement='topRight'
                format='DD.MM.YYYY'
            />
        </div>
    )
}

export default SearchBar
