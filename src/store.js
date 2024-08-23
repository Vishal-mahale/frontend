import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productReducer,productDetailReducer } from './Reducers/productReducer'

const reducer = combineReducers({
  product: productReducer,
  productDetails:productDetailReducer

})

const initialState = {}

const middleWare = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare)),
)
export default store