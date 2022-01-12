import axios from 'axios'
import env from 'react-dotenv'

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


productFunctions.showProducts = (store, response, Link) => {
    try {

        switch (store) {

            case 'newegg':
                // console.log(response)
                return (
                    <div>
                        {response.map((item, i) => {
                            console.log(item.short_link)
                            return (
                                <div>
                                    <img src={item.image} />
                                    <Link to={`/product/newegg/${item.short_link}`}><p>{item.name}</p></Link>
                                    <p>${item.price}</p>

                                </div>

                            )
                        })}
                    </div>
                )

            case 'ebay':

                return (
                    <div>
                        {response.map((item, i) => {
                            console.log(item)
                            return (
                                <div>

                                    <span>
                                        <img src={item.image} />
                                        <p>{item.title}</p>
                                        <p>
                                            <span> {item.condition}</span>

                                            <span>{item.buying_format}</span>
                                        </p>
                                        <p>
                                            <span>${item.price}</span>

                                            <span>{item.shipping}</span>
                                        </p>

                                    </span>

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


export default productFunctions