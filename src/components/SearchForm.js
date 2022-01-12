import { React, useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import './SearchForm.css'

const SearchForm = () => {

    const [search, setSearch] = useState('')
    const [store, setStore] = useState("")

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/store/${store}/${search}/1`)
    }

    return (
        <div >

            <form className='search-form' onSubmit={handleSubmit}>
                <div>
                    <select onChange={(e) => { setStore(e.target.value); e.target.style.color = '#000000' }}>
                        <option disabled selected hidden>What store do you want to choose from</option>

                        <option value='newegg'>Newegg</option>
                        <option value='ebay'>Ebay</option>

                    </select>
                </div>

                <div>
                    <label htmlFor='search'></label>
                    <input placeholder='Search for Product' value={search} onChange={(e) => { setSearch(e.target.value); e.target.style.color = '#000000' }} />
                </div>

                <div className='submit-div'>
                    <input type="submit" value="Search Now!!" />
                </div>

            </form>

        </div>
    )
}

export default SearchForm
