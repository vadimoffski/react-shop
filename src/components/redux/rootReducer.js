import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import productsLikeReducer from './productsLikeReducer'
import productsReducer from './productsReducer'

const rootReducer = combineReducers({
    productsLikeState: productsLikeReducer,
    productsInCart: cartReducer,
    products: productsReducer,
})

export default rootReducer
