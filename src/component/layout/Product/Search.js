import React, { Fragment } from 'react'
import { useState } from 'react'
import './Search.css'
import { useNavigate } from 'react-router-dom'

function Search () {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const searchSubmitHandler = e => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/products?keyword=${keyword}`)
    } else {
      navigate('/products')
    }
  }

  return (
    <Fragment>
      <form className='searchBox' onSubmit={searchSubmitHandler}>
        <input
          type='text'
          onChange={e => setKeyword(e.target.value)}
          placeholder='Search items here...'
        />
        <input type='submit' value='search' />
      </form>
    </Fragment>
  )
}

export default Search
