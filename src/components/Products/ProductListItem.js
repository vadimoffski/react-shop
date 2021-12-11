import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button, CardActions } from '@mui/material'
import './ProductListItem.css'
import PropTypes from 'prop-types'
import Quantity from '../Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { connect } from 'react-redux'

const ProductListItem = ({
    id,
    name,
    description,
    type,
    capacity,
    price,
    image,
    addProductToCart,
    isLiked = false,
    addLike,
    removeLike,
}) => {
    const [count, setCount] = useState(1)

    const onIncrementClick = () => {
        setCount(count + 1)
    }
    const onDecrementClick = () => {
        setCount(count - 1)
    }

    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <Button
                    variant="outlined"
                    onClick={() => (isLiked ? removeLike(id) : addLike(id))}
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>

                <h4>{name}</h4>
                <p>{description}</p>
                <div>Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <div className="product-price">{price}</div>
                <Quantity
                    count={count}
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                    minCount={1}
                />
            </CardContent>
            <CardActions className="wrap-btn-add-to-cart">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    )
}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}
ProductListItem.defaultProps = {
    description: 'No description...',
}

const mapStateToProps = (state, { id }) => ({
    isLiked: state.productsLikeState[id],
})

const mapDispatchToProps = (dispatch) => ({
    addProductToCart: (id, count) =>
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            id,
            count,
        }),
    addLike: (id) => dispatch({ type: 'LIKE', id }),
    removeLike: (id) => dispatch({ type: 'DISLIKE', id }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem)
