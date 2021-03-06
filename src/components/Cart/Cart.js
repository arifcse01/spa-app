import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = (totalPrice + product.price);        
    }
    let shipping = 0;
    if(totalPrice > 15){
        shipping = 4.99;
    }
    else if(totalPrice > 35){
        shipping = 0;
    }
    else if(totalPrice > 0){
        shipping = 12.99;
    }

    const tax = totalPrice * 0.1;
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: ${totalPrice}</p>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p>Tax: {tax}</p>
            <p>Total Price: {totalPrice + shipping + tax}</p>
        </div>
    );
};

export default Cart;