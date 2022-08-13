import React from 'react'
import { DatePicker, Input } from 'antd'
import 'antd/dist/antd.css'
import { RiCalendarEventFill } from 'react-icons/ri'

const calendarIcon = <RiCalendarEventFill className='dataIcon' />

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
            <div className='switcher'>
                <svg
                    width='13'
                    height='6'
                    viewBox='0 0 13 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M10 2.5H10.5V2V1.20711L12.2929 3L10.5 4.79289V4V3.5H10L0.5 3.5V2.5L10 2.5Z'
                        stroke='#2196F3'
                    />
                </svg>
                <svg
                    width='13'
                    height='6'
                    viewBox='0 0 13 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M3 3.5H2.5V4V4.79289L0.707107 3L2.5 1.20711V2V2.5H3H12.5V3.5H3Z'
                        stroke='#2196F3'
                    />
                </svg>
            </div>
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
                suffixIcon={calendarIcon}
            />
            <DatePicker
                placeholder='Обратно'
                className='input-search'
                onChange={onChange}
                placement='topRight'
                format='DD.MM.YYYY'
                suffixIcon={calendarIcon}
            />
        </div>
    )
}

export default SearchBar
