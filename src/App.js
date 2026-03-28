import React from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import {ROUTES} from "./routes/routes";
import {CartPage, DetailsPage, MainPage} from "./Pages";
import {CustomBreadcrumbs} from "./Components/CustomBreadcrumbs/CustomBreadcrumbs";
import {Button} from "@mui/material"
import {addedProductsInfoSelector} from "./store/Cart";
import {useSelector} from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const addedProductsInfo = useSelector(addedProductsInfoSelector)

    const handleClickCart = () => {
        navigate(ROUTES.cart);
    }

    return (
        <div className="App-header">
            <CustomBreadcrumbs/>
            <Button variant={'contained'} onClick={handleClickCart}>
                {addedProductsInfo.length === 0 ? 'В корзину' : `В корзине ${addedProductsInfo.length}`}
            </Button>
        </div>
    )
}

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={ROUTES.main} element={<MainPage key="main" />} />
                    <Route path={ROUTES.details} element={<DetailsPage key="details" />} />
                    <Route path={ROUTES.cart} element={<CartPage key="cart" />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}