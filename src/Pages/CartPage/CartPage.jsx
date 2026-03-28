import React, {useMemo} from "react";
import './styles.css';
import {addedProductsInfoSelector} from "../../store/Cart";
import {useSelector} from "react-redux";
import {AddedProduct} from "./AddedProduct";

export const CartPage = () => {
    const addedProductsInfo = useSelector(addedProductsInfoSelector);

    const renderAddedProductsList = useMemo(() => addedProductsInfo.map(product => {
        return (
            <AddedProduct product={product}/>
        )
    }), [addedProductsInfo])

    return (
        <div className='card-page-container'>
            {addedProductsInfo.length === 0 ? (<div>Корзина пуста</div>) : (
                <div className="list-container">
                    {renderAddedProductsList}
                </div>
            )}
        </div>
    )
}