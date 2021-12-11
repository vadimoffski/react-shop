import React from 'react'
import Container from '@mui/material/Container'
import ProductsList from '../../components/Products/ProductsList'
import { Route, Switch } from 'react-router'
import CartPage from '../../pages/CartPage/CartPage'
import PaymentPage from '../../pages/PaymentPage/PaymentPage'
import ShippingPage from '../../pages/ShippingPage/ShippingPage'
import CheckoutPage from '../../pages/CheckoutPage/CheckoutPage'

const Main = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Switch>
                    <Route path="/" exact>
                        <ProductsList />
                    </Route>

                    <Route path="/payment" exact>
                        <PaymentPage />
                    </Route>
                    <Route path="/shipping" exact>
                        <ShippingPage />
                    </Route>
                    <Route path="/cart" exact>
                        <CartPage />
                    </Route>
                    <Route path="/checkout" exact>
                        <CheckoutPage />
                    </Route>
                </Switch>
            </Container>
        </>
    )
}

export default Main
