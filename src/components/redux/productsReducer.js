const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'PRODUCTS_SUCCESS':
            return action.products

        default:
            return state
    }
}

export default productsReducer
