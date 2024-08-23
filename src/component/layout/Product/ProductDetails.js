import React, { Fragment, useEffect } from 'react'
import './ProductDetails.css'
import Carousel from 'react-material-ui-carousel'
import { clearErrors, getProductDetails } from '../../../Actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import ReviewCard from './ReviewCard.js'
import Loader from '../Loader/Loader.js'
import { useAlert } from 'react-alert'

function Product ({ match }) {

  const { id } = useParams()
  const alert = useAlert()

  const dispatch = useDispatch()
  const { productDetails, loading, error } = useSelector(
    state => state.productDetails
  )

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProductDetails(id))
  }, [dispatch, id,alert,error])

  const options = {
    edit: false,
    color: 'rgba(20,20,20,0.1)',
    activeColor: 'tomato',
    size: window.innerWidth < 600 ? 20 : 25,
    value: productDetails.rating,
    isHalf: true
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className='productDetails'>
            <div className='productDetails-1'>
              <Carousel className='productDetails-11'>
                {productDetails.images &&
                  productDetails.images.map((item, i) => (
                    <img
                      className='carouselImage'
                      src={item.url}
                      alt={`${i} slide`}
                      key={item.url}
                    />
                  ))}
              </Carousel>
            </div>

            <div className='productDetails-2'>
              <div className='productBlock-1'>
                <h2>{productDetails.name}</h2>
                <p>product #{productDetails._id}</p>
              </div>

              <div className='productBlock-2'>
                <ReactStars {...options} />
                <span>(No. of Reviews {productDetails.numOfReviews})</span>
              </div>

              <div className='productBlock-3'>
                <h3>Product Price : ₹{productDetails.price}</h3>
                <div className='productBlock-3-1-0'>
                  <div className='productBlock-3-1-1'>
                    <button>-</button>
                    <input type='number'></input>
                    <button>+</button>
                  </div>
                  <button>Add to Cart</button>
                </div>

                <p>
                  Status :{' '}
                  <b
                    className={
                      productDetails.Stocks < 1 ? 'redColor' : 'greenColor'
                    }
                  >
                    {productDetails.Stocks ? 'Out Of Stocks' : 'InStocks'}
                  </b>
                </p>
              </div>

              <div className='productBlock-4'>
                Discription : {productDetails.description}
              </div>
              <div className='submitReview-btn'>
                <button className='submitReview'>Submit Review</button>
              </div>
            </div>
          </div>
          <h3 className='reviewHeading'>Reviews</h3>
          {productDetails.reviews && productDetails.reviews[0] ? (
            <div className='reviews'>
              {productDetails.reviews &&
                productDetails.reviews.map(review => (
                  <ReviewCard review={review}></ReviewCard>
                ))}
            </div>
          ) : (
            <p className='noReview'>No Reviws Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

export default Product
