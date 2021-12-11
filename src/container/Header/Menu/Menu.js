import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    link: {
        color: 'white',
        textDecoration: 'none',
    },
})

const Menu = () => {
    const classes = useStyles()
    return (
        <>
            <Button color="inherit">
                <Link to="/" className={classes.link}>
                    Home
                </Link>
            </Button>
            <Button color="inherit">
                <Link to="/" className={classes.link}>
                    Products
                </Link>
            </Button>
            <Button color="inherit">
                <Link to="/payment" className={classes.link}>
                    Payment
                </Link>
            </Button>
            <Button color="inherit">
                <Link to="/shipping" className={classes.link}>
                    Shipping
                </Link>
            </Button>
            <Button color="inherit">
                <Link to="/cart" className={classes.link}>
                    Cart
                </Link>
            </Button>
        </>
    )
}

export default Menu
