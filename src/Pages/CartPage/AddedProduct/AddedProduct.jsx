import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getProductDetails} from "../../../store/Details";
import {deleteProduct, getAddedProductColor, getProductSize} from "../../../store/Cart";
import {CircularProgress, Button} from "@mui/material";
import './styles.css';

export const AddedProduct = ({product}) => {
    const dispatch = useDispatch()
    const [productDetails, setProductDetails] = useState(null);
    const [productSize, setProductSize] = useState(null);
    const [productColor, setProductColor] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchAllData = async () => {
            setIsLoading(true)
            if (productDetails && productSize && productColor) {
                return;
            }

            try {
                const [detailsResponse, colorResponse, sizeResponse] = await Promise.all([
                    dispatch(getProductDetails(product.productID)).unwrap(),
                    dispatch(getAddedProductColor({
                        productID: product.productID,
                        colorID: product.color
                    })).unwrap(),
                    dispatch(getProductSize(product.size)).unwrap(),
                ]);

                setProductDetails(detailsResponse);
                setProductSize(sizeResponse);
                setProductColor(colorResponse);

                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.error( error);
            }
        }

        fetchAllData();
    }, [dispatch, product, productDetails, productSize, productColor]);

    const handleDeleteProduct = () => {
        dispatch(deleteProduct(product.key))
    }

    return (
        <div className="added-product-container">
            {isLoading ? (<CircularProgress/>) : (
                <>
                    <span className='product-name'>{productDetails?.name}</span>
                    <img
                        className="product-image"
                        src={productColor?.images[0]}
                        alt={productDetails?.name}
                    />
                    <div className="product-details-block">
                        <span>{`Размер: ${productSize?.label}`}</span>
                        <span>{`Цена: ${productColor?.price}`}</span>
                        <span>{`Цвет: ${productColor?.name}`}</span>
                    </div>
                    <Button variant='contained' onClick={handleDeleteProduct}>Удалить</Button>
                </>
            )}
        </div>
    )
}