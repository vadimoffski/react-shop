import React from 'react'
import CartTotal from './CartTotal'
import CartProductList from './CartProductList'
import { connect } from 'react-redux'

const CartHeader = ({ productsInCart }) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart,
})

export default connect(mapStateToProps)(CartHeader)
