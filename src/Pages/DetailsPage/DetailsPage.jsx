import React, {useEffect, useState} from "react";
import './styles.css';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    getProductDetails, getProductSizes,
    isLoadingDetailsSelector, isLoadingSizesSelector,
    productDetailsSelector, productSizesSelector, resetDetailsData
} from "../../store/Details";
import {CircularProgress, Radio, Button} from "@mui/material";
import {ImageViewer} from "./ImageViewer";
import {addedProductsInfoSelector, addProduct} from "../../store/Cart";

export const DetailsPage = () => {
    const dispatch = useDispatch()
    const location = useLocation();

    const isLoadingDetails = useSelector(isLoadingDetailsSelector);
    const productDetails = useSelector(productDetailsSelector);
    const isLoadingSizes = useSelector(isLoadingSizesSelector);
    const productSizes = useSelector(productSizesSelector);
    const addedProductsInfo = useSelector(addedProductsInfoSelector);

    const [selectedColorID, setSelectedColorID] = useState(null);
    const [selectedSizeID, setSelectedSizeID] = useState(null);

    const currentID = location.pathname.split('/').pop();
    const selectedColor = productDetails?.colors.find(color => color.id === Number(selectedColorID))
    const productKey = `${productDetails?.id}${selectedColorID}${selectedSizeID}`
    const isAddedProduct = !!addedProductsInfo.find(product =>
        product.key === productKey);

    useEffect(() => {
        if (currentID) {
            dispatch(getProductDetails(currentID));
            dispatch(getProductSizes());
        }

        return () => {
            dispatch(resetDetailsData());
        }
    }, [dispatch, currentID]);

    useEffect(() => {
        if (productDetails) {
            setSelectedColorID(productDetails?.colors[0].id);
        }
    }, [productDetails])

    const handleSelectColor = (event) => {
        setSelectedColorID(Number(event.target.value));
        setSelectedSizeID(null);
    }

    const handleSelectSize = (event) => {
        setSelectedSizeID(Number(event.target.value));
    }

    const handleAddButton = () => {
        const addedProduct = {
            key: productKey,
            color: selectedColorID,
            size: selectedSizeID,
            productID: productDetails.id,
        }

        dispatch(addProduct(addedProduct));
    }

    const getProductColorsRender = () => {
        return (
            <div className='radio-buttons-container'>
                {
                    productDetails?.colors.map(color => {
                        return (
                            <div className="radio-button-block" id={color.id}>
                                <span>{color.name}</span>
                                <Radio
                                    checked={selectedColorID === color.id}
                                    onChange={handleSelectColor}
                                    value={color.id}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const getProductSizesRender = () => {
        return (
            <div className='radio-buttons-container'>
                {
                    productSizes?.map(size => {
                        return (
                            <div className="radio-button-block" id={size.id}>
                                <span>{size.label}</span>
                                <Radio
                                    disabled={!selectedColor?.sizes.includes(size.id)}
                                    checked={selectedSizeID === size.id}
                                    onChange={handleSelectSize}
                                    value={size.id}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    if (isLoadingDetails || isLoadingSizes) {
        return (
            <div className="loader-container">
                <CircularProgress/>
            </div>
        )
    }

    return (
        <div className='details-page-container'>
            {productDetails && (
                <>
                    <h1>{productDetails.name}</h1>
                    <div className='details-container'>
                        <ImageViewer imagesArr={selectedColor?.images}/>
                        <div className='details-info-container'>
                            <span>{`Описание: ${selectedColor?.description}`}</span>
                            <span>{`Цена: ${selectedColor?.price}`}</span>
                            {getProductColorsRender()}
                            {getProductSizesRender()}
                            <Button
                                variant={'contained'}
                                disabled={isAddedProduct || !selectedSizeID}
                                onClick={handleAddButton}
                            >
                                {isAddedProduct ? 'Добавлено' : 'Добавить'}
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}