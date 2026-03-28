import React, {useEffect} from "react";
import {getProductList, isListLoadingSelector, productListSelector} from "../../store/List";
import {useDispatch, useSelector} from "react-redux";
import { CircularProgress  } from '@mui/material'
import './styles.css';
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../routes/routes";
import {ProductCard} from "./ProductCard";

export const MainPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const isListLoading = useSelector(isListLoadingSelector);
    const productList = useSelector(productListSelector);

    useEffect(() => {
        if (productList.length === 0) {
            dispatch(getProductList())
        }
    }, [dispatch, productList]);

    const handleProductClick = (id) => {
        navigate(ROUTES.details.replace(':id', String(id)));
    }

    const renderProductCards = () => {
        return productList.map((product) => {
            return (
                <ProductCard product={product} onClick={handleProductClick} />
            )
        })
    }

    return (
        <div className='main-page-container'>
            {isListLoading ?
                (<CircularProgress/>) : (
                    <div className="list-container">
                        {renderProductCards()}
                    </div>
            )}
        </div>
    )
}