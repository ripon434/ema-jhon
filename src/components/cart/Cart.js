import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { Cart } = props;
    let totalQuantity = 0; //local storage part
    let total = 0;
    for (const product of Cart) {
         if (!product.quantity) {
        product.quantity = 1;
    }
        total = total + product.price*product.quantity;
        //local storage part
        totalQuantity = totalQuantity + product.quantity;
}
    // const totalReducer = (previous, product) => previous + product.price;
    //     const total =Cart.reduce(totalReducer, 0);
    const shipping = total>0?15:0;
    const tex = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tex;

    return (
        <div>
            <h3>Order Item</h3>
            <h5>Items ordered : {totalQuantity}</h5>
            <br />
            <p>Total : {total.toFixed(2)}</p>
            <p>Shipping : {shipping}</p>
            <p>Tex : {tex.toFixed(2)}</p>
            <p>Grand total : { grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;