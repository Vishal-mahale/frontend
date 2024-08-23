import React, { Fragment, useEffect, useState } from 'react'
import './Product.css'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../../../Actions/productAction'
import { useAlert } from 'react-alert'
import { clearErrors } from '../../../Actions/productAction'
import Loader from '../Loader/Loader'
import ProductCard from '../../Home/ProductCard'
import { useSearchParams } from 'react-router-dom'
import Pagination from 'react-js-pagination'

function Product () {
  const alert = useAlert()
  const [currentPage, setCurrentPage] = useState(1)
  const setCurrentPageNo = e => {
    setCurrentPage(e+1)
  }
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams() //to access the parameter from the url
  const keyword = searchParams.get('keyword')
  const { loading, error, product, productCount, resultPerPage } = useSelector(
    state => state.product
  )

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProduct(keyword))
  }, [dispatch, error, alert, keyword])

  console.log(productCount + ' ' + resultPerPage)

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className='productsHeading'>Products</h2>
          <div className='products'>
            {product &&
              product.map(pro => (
                <ProductCard product={pro} key={pro._id}></ProductCard>
              ))}
          </div>

          <div className='pagination'>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemCount={productCount}
              onChange={setCurrentPageNo}
              pageRangeDisplayed={4}
              prevPageText='prev'
              firstPageText='1'
              // nextPageText='next'
              lastPageText='last'
              // itemClass='page-item'
              // linkClass='page-link'
              // activeClass='pageItemActive'
              // pageItemLinkClass='pageLinkActive'
              // hideFirstLastPages="true"
            ></Pagination>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Product
