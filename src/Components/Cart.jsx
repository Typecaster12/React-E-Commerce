import { MdDeleteForever } from "react-icons/md";
import { useCart } from "../Context/CartContext";
import './Cart.css';

const Cart = () => {
    //cart form context, has all the values in it;
    const { cartData, removeProductFromCart, clearCart } = useCart();

    //orderNow function;
    const handleOrderNow = () => {
        alert('Order Placed, ThankYou of ordering..');
        clearCart();
    }

    return (
        <div className="cart-main-container">
            <div className="cart-child-container">
                <h2>Cart</h2>

                <div className="cart-product-list">
                    {cartData && cartData.length !== 0 ? (
                        cartData.map((curEle) =>
                            <div className="ind-item" key={curEle.id}>
                                <img src={curEle.img} alt={curEle.name} />
                                <span className="ind-item-name">{curEle.name}</span>
                                <span className="ind-item-price">${curEle.price}</span>

                                <span className="ind-item-del-btn" onClick={() => removeProductFromCart(curEle.id)}><MdDeleteForever /></span>
                            </div>
                        )
                    ) : (
                        <p>Cart is Empty</p>
                    )}

                    {
                        cartData && cartData.length !== 0 ? (
                            <div className="button">
                                <button className="clear-all" onClick={clearCart}>Clear All Products</button>
                                <button className="Order-now" onClick={handleOrderNow}>Order Now</button>

                            </div>
                        ) : (
                            <p>no actions here</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart;