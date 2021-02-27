import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                {/* <img src={props.product.img} alt=""/> */}
                <img src={img} alt=""/>
            </div>
            <div className="product-info">
                {/* <h3>{props.product.name}</h3> */}
                <h3 className="product-title">{name}</h3>
                <p><small>by: {seller}</small></p>
                <p> ${price}</p>
                <p>Only {stock} left in stock </p>
                <button onClick={() => props.handleAddProduct(props.product)} className="button"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;