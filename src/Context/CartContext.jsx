/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

//create the context;
const CartContext = createContext();

//cart provider;
export const CartProvider = ({ children }) => {
    //all the children can access this context;

    //array of products will store here
    //so that we can just map them in cart;
    const [cartData, setCartData] = useState([]);

    //fucntion to add product into cart;
    const addProductsToCart = (product) => {
        //we will check in the data already been add;
        setCartData((prevData) => {
            //checking for dublicate products;
            const existingProduct = prevData.find((item) => item.id === product.id);

            //if the above condition is true(product already existing);
            if (existingProduct) {
                return prevData.map((curItem) =>
                    curItem.id === product.id ? { ...curItem, price: curItem.price + product.price, quantity: curItem.quantity + product.quantity } : curItem
                )
            }
            //else add this product to the cart;
            return [...prevData, product];
        });
    };

    //function to remove product from cart;
    //w'll get the product by its id;
    const removeProductFromCart = (id) => {
        //return only those whose id is not equal to the selected product;
        setCartData((prevItem) => prevItem.filter((item) => item.id !== id));
    }

    //function to clear the array; 
    const clearCart = () => setCartData([]);

    //provider
    return (
        <CartContext.Provider value={{ cartData, addProductsToCart, removeProductFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

//helper function;
export const useCart = () => useContext(CartContext);