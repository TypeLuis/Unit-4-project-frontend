import axios from 'axios'
import env from 'react-dotenv'
import cartFunctions from './CartResponse'

const productFunctions = {}

productFunctions.getProducts = async (store, product, page, setResponse, setResponseStatus, setPageLimit) => {
    try {

        const extention = page <= 1 ? `${store}/${product}` : `${store}/${product}?page=${page}`

        const url = `${process.env.REACT_APP_BACKEND_URL}/${extention}`

        const response = await axios.get(url)

        console.log(response)

        setResponse(response.data.products)
        setResponseStatus(response.status)
        setPageLimit(response.data.pages)


    }
    catch (error) {
        console.log(error)
    }
}


productFunctions.showProducts = (store, response, Link, modal, setModal) => {
    try {

        switch (store) {

            case 'newegg':
                // console.log(response)
                return (
                    <div>
                        {modal && cartFunctions.showModal(modal, setModal)}
                        {response.map((item, i) => {
                            console.log(item.short_link)
                            return (
                                <div>
                                    <img style={{ maxHeight: '300px' }} src={item.image} />
                                    <Link to={`/product/newegg/${item.short_link}`}><p>{item.name}</p></Link>
                                    <p>${item.price}</p>

                                    <button onClick={() => { cartFunctions.addToCart(item.name, item.price, item.link, item.image, setModal) }} >Add to Cart 🛒</button>

                                </div>

                            )
                        })}
                    </div>
                )

            case 'ebay':


                return (
                    <div>
                        {modal && cartFunctions.showModal(modal, setModal)}
                        {response.map((item, i) => {
                            // console.log(item)

                            return (
                                <div>

                                    <span>
                                        <img src={item.image} />
                                        <Link to={`/product/ebay/${item.short_link}`}><p>{item.title}</p></Link>

                                        <p>
                                            <span> {item.condition}</span>

                                            <span>{item.buying_format}</span>
                                        </p>
                                        <p>
                                            <span>${item.price}</span>

                                            <span>{item.shipping}</span>
                                        </p>

                                    </span>


                                    <button onClick={() => { cartFunctions.addToCart(item.title, item.price, item.link, item.image, setModal) }} >Add to Cart 🛒</button>

                                </div>

                            )
                        })}
                    </div>
                )

        }

    }

    catch (error) {
        console.log(error)
    }
}





productFunctions.getProductPage = async (store, productId,
    setResponse, setResponseStatus) => {

    try {
        const url = `${process.env.REACT_APP_BACKEND_URL}/${store}/page/${productId}`

        const response = await axios.get(url)

        console.log(response)

        setResponse(response.data.page_info)
        setResponseStatus(response.status)
    } catch (error) {
        console.log(error)
    }
}

productFunctions.showProductPage = (store, productId, response) => {
    try {
        switch (store) {

            case 'ebay':
                return (
                    <div>
                        <h1>{response.title}</h1>
                        <p>${response.price}</p>
                        <img src={response.image} />
                        <p>{response.description_page}</p>
                    </div>
                )

            case 'newegg':
                return (


                    <div>



                        <div className="slider">

                            {response.images.map((item, i) => {
                                return (

                                    <a href={`#slide-${String(i + 1)}`}>{String(i + 1)}</a>
                                )
                            })}

                            <div className="slides">
                                {response.images.map((item, i) => {
                                    return (

                                        <div id={`slide-${String(i + 1)}`}><img className='slide-images' src={item.image} /></div>
                                    )
                                })}
                            </div>
                        </div>

                        <div>
                            <ul>
                                {response.product_list.map((item, i) => {
                                    return (
                                        <li>{item.bullet_point}</li>

                                    )
                                })}
                            </ul>
                        </div>

                        <div className='tables-container'>
                            {response.specs.map((item, i) => {
                                return (

                                    <table className='content-table'>
                                        {item.caption && <caption>{item.caption}</caption>}

                                        <tbody>
                                            <tr>
                                                <th>
                                                    {item.header}
                                                </th>

                                                <td>
                                                    {item.data}
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                )


                            })}

                        </div>
                    </div>

                )

        }
    } catch (error) {
        console.log(error)
    }
}













export default productFunctions