import React from 'react'
import { keys } from 'lodash'
import { getProductsObject } from '../Products/productsArray'
import { connect } from 'react-redux'

const CartTotal = ({
    productsArray,
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <>
            <div>
                Total:{' '}
                {keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsObject[productId].price *
                            productsInCart[productId],
                    0
                )}
                $
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({ productsArray: state.products })

export default connect(mapStateToProps)(CartTotal)
