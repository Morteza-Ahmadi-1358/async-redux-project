import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { recievedProducts } from '../redux/ProductsActions'

const Products = () => {
    const data = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        recievedProducts(dispatch)
    }, [])
  if (data.isLoading === true) {
    return <h2 style={{color: '#ff1749'}}>Loading ...</h2>
  }
  else{
    return (
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'stretch', flexWrap: 'wrap'}}>
            {
                data.products.map(product => {
                    return <div style={{flexBasis: '30%', border: '1px solid #ff1749', borderRadius: '7px', margin: '5px', padding: '5px', textAlign: 'justify'}}>
                                <span style={{display: 'inline-block', color: '#ff1749'}}>ID: </span> {product.id}<hr style={{border: 'none', borderBottom: '1px solid #ff1749'}} />
                                <span style={{display: 'inline-block', color: '#ff1749'}}>Title: </span> {product.title}<br />
                                <span style={{display: 'inline-block', color: '#ff1749'}}>Body: </span> {product.body}
                           </div>
                })
            }
        </div>
      )
  }
}

export default Products