import React, { Fragment } from 'react'
import './Home.css'
// import { CgMouse } from 'react-icons'
import Product from './ProductCard.js'
import Loader from '../layout/Loader/Loader.js'
import MetaData from '../layout/MetaData.js'
import { clearErrors, getProduct } from '../../Actions/productAction.js'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useAlert } from 'react-alert'

// const product = {
//   name: 'Blue Shirt',
//   images: [{ url: 'https://i.ibb.co/DRST11n/1.webp' }],
//   price: '₹30000',
//   _id: 123123
// }

const Home = () => {
  const alert = useAlert()
  const dispatch = useDispatch()
  const { loading, error, product } = useSelector(
    state => state.product
  )

  // This will fetch the product from the database  every time page get refreshed.
  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProduct())
  }, [dispatch, error, alert])

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title='Home Page' />
          <div className='banner'>
            <p>Welcome to ECommerce</p>
            <h1>Find amazing product below</h1>
            <a className='container' href='#container'>
              <button>Scroll</button>
            </a>
          </div>
          <h2 className='homeHeading'>Featured Product</h2>
          <div className='container' id='container'>
            {product &&
              product.map(pro => <Product product={pro} key={pro._id} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Home
