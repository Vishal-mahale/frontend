import {
  CLEAR_ERRORS,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS
} from '../Constants/productConstants'

export const productReducer = (state = { product: [] }, action) => {
  // We are initially passing here the empty product array.
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        loading: true, //when we are loading product loading will be true.
        product: []
      }
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload.product,
        productCount: action.payload.productCount,
        resultPerPage: action.payload.resultPerPage
      }
    case ALL_PRODUCT_FAIL:
      return {
        loading: false, //Proctus are not loading so loading false.
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null //clearing errors so null.
      }
    default:
      return state
  }
}

//This is the reducer for the fetching the single product from the database.
export const productDetailReducer = (
  state = { productDetails: {} },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return {
        loading: true,
        ...state
      }
    case PRODUCT_DETAIL_SUCCESS:
      return {
        loading: false,
        productDetails: action.payload
      }
    case PRODUCT_DETAIL_FAIL:
      return {
        loading: false, //Proctus are not loading so loading false.
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null //clearing errors so null.
      }
    default:
      return state
  }
}
