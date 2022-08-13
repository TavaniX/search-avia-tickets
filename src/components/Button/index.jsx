import React from 'react'

const Button = ({ value, pages, setPages }) => {
    return (
        <div className='button' onClick={() => setPages(pages + 5)}>
            {value}
        </div>
    )
}

export default Button
