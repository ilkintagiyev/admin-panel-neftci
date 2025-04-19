import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ABOUT_PATH, PARTNERS_PATH } from './utils/routes'
import About from './pages/About/About'
import Layout from './layout/Layout/Layout'
import Partners from './pages/Partners/Partners'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path={ABOUT_PATH} element={<About />} />
                    <Route path={PARTNERS_PATH} element={<Partners />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing