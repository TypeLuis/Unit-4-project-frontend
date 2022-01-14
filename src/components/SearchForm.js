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
                    <select id='store' onChange={(e) => { setStore(e.target.value)}}>
                        <option disabled selected hidden>Chose your store</option>

                        <option value='newegg'>Newegg</option>
                        <option value='ebay'>Ebay</option>

                    </select>
                </div>

                <div>
                    {store === 'newegg' && <label id='newegg-label' htmlFor='search'></label>}

                    {store === 'ebay' && <label id='ebay-label' htmlFor='search'></label>}

                    {store === '' && <label htmlFor='search'></label>}
                    
                    <input id='search-field' placeholder='Search for Product' value={search} onChange={(e) => { setSearch(e.target.value);  }} />
                </div>

                <div className='submit-div'>
                    <input id='search-submit' type="submit" value="Search Now!!" />
                </div>

            </form>

        </div>
    )
}

export default SearchForm
