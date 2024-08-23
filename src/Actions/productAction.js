import {
  CLEAR_ERRORS,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS
} from '../Constants/productConstants'
import axios from 'axios'

export const getProduct = (keyword) => {
  return async dispatch => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST })
      keyword = keyword ? keyword:"";
      const link = `/api/v1/products?keyword=${keyword}`
      const { data } = await axios.get(link)
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message
      })
    }
  }
}

export const clearErrors = async dispatch => {
  dispatch({ type: CLEAR_ERRORS })
}

//This is the function for the srlecting the single product.
export const getProductDetails = id => {
  return async dispatch => {
    try {
      dispatch({ type: PRODUCT_DETAIL_REQUEST })
      const { data } = await axios.get(`/api/v1/products/${id}`)
      // console.log(data);
      dispatch({
        type: PRODUCT_DETAIL_SUCCESS,
        payload: data.product
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAIL_FAIL,
        payload: error.response.data.message
      })
    }
  }
}
