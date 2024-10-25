import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'
import Product from '../Pages/Product'
import Contact from '../Pages/Contact'
import DetailPage from '../Pages/DetailPage'
import CategoryDetail from '../Pages/CategoryDetail'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<Home />} />
                <Route path='/Product' element={<Product />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/ProdDetail/:id' element={<DetailPage />} />
                <Route path='/CategoryDetail/:id' element={<CategoryDetail />} />
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter