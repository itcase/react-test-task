import React from 'react';
import './styles.css';

export const ProductCard = ({product, onClick}) => {
    const handleClick = () => {
        onClick(product.id);
    }

    return (
        <div className="card-container" onClick={handleClick}>
            <span className='product-name'>{product.name}</span>
            <img
                className="product-image"
                src={product.colors[0]?.images[0]}
                alt={product.name}
            />
        </div>
    )
}