import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    //product to be rendered on the UI
    const [displayProduct,setDisplayProduct] = useState([]); //for show product quantity 
    
    
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProduct(data);
            });
    }, [])
    //use effect for local storage 
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storeCart = [];
        for (const key in savedCart) {
            const addedProduct = products.find(product => product.key === key);
            if (addedProduct) {
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                storeCart.push(addedProduct);
            }
            
            // console.log(key,addedProduct);
            }
            setCart(storeCart);
     }
        // console.log(savedCart);
    },[products])
    
    const handleAddToCart = (product) => {
        // console.log(product.name);
        const newCart = [...cart, product];
        setCart(newCart);
        //save to local storage(for now)
        addToDb(product.key);
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchedProduct);
        console.log(matchedProduct.length);
    }
    return (
        <element of fragment>
             <div className="search-container">
                <input type="text"
                    onChange={handleSearch}
                    placeholder="search product" />
        </div>
        <div className="shop-container">
            <div className="product-container">
                {/* <h3>Product : {products.length}</h3> */}
                {       //products.map(product=><Product/>)
                    displayProduct.map(product => <Product
                        key={product.key}
                        product={product}
                    handleAddToCart={handleAddToCart}>
                        
                        </Product>)
                }
            </div>

            <div className="cart-container">
                <Cart Cart={cart}></Cart>
                
                
            </div>
        </div>
       </element>
    );
};

export default Shop;