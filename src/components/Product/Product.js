

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import React from 'react';
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    

    // console.log(props);
    const { name, img,price,stock,seller,star} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"> {name}</h4>
            <p><small>by:{seller}</small></p>
                <p>Price:${price}</p>
                <p><small>only {stock} left in stock-order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color">
                </Rating><br />
                <button onClick={() => props.handleAddToCart(props.product)} className="regular-btn"> <FontAwesomeIcon icon={faShoppingCart} />add to cart </button>
                
            </div>
        </div>
    );
};

export default Product;