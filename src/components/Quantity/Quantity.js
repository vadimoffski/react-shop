import { Button, TextField } from '@mui/material'
import React from 'react'

const Quantity = ({ count, onDecrementClick, onIncrementClick, minCount }) => {
    return (
        <>
            <div className="product-quantity">
                <Button
                    variant="contained"
                    onClick={() => onDecrementClick()}
                    disabled={count <= minCount}
                >
                    -
                </Button>
                <TextField variant="outlined" size="small" value={count} />
                <Button
                    variant="contained"
                    onClick={() => onIncrementClick()}
                    disabled={count >= 10}
                >
                    +
                </Button>
            </div>
        </>
    )
}

export default Quantity
