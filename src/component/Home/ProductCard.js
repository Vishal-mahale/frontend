import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'



const Product = ({ product }) => {
  
  const options = {
    edit: false,
    color: 'rgba(20,20,20,0.1)',
    activeColor: 'tomato',
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.rating,
    isHalf: true
  }
  // const urls = "https://i.ibb.co/DRST11n/1.webp"

  return (
    <Link className='productCard' to={`/products/${product._id}`}>
      {/* <img src={product.images.url} alt={product.name} /> */}
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} id='stars' />
        <span>({product.numOfReviews} reviews)</span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  )
}

export default Product
