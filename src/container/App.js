import React, { useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './Header/Header'
import Main from './Main/Main'
import { useDispatch } from 'react-redux'
import fetchProducts from '../components/redux/products.action'

const App = () => {
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    const dispatch = useDispatch()
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
        </>
    )
}

export default App
